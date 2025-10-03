# StudyBuddy - Google Classroom Subscription Platform

## Project Overview

StudyBuddy is a subscription-based platform for Kenyan high school students. Students pay to access multiple Google Classroom classes. We handle payments and access control. Google Classroom handles all teaching and content.

## Core Concept

```
Student visits website → Registers → Pays subscription → Gets access to Google Classroom classes
```

**We build:** Marketing site + Auth + Payments + Access control  
**Google Classroom provides:** All teaching, content, assignments, grading

---

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (state management)

### Backend
- Next.js API Routes (minimal backend)
- MongoDB (user data + subscriptions only)
- Google Classroom API (for enrollment management)

### Payments
- M-Pesa STK Push
- Flutterwave

### Authentication
- NextAuth.js with Google OAuth
- JWT tokens

---

## Project Structure

```
studybuddy/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                      # Homepage
│   ├── about/page.tsx                # About us
│   ├── contact/page.tsx              # Contact
│   ├── pricing/page.tsx              # Subscription plans
│   ├── subjects/
│   │   ├── page.tsx                  # All subjects overview
│   │   ├── mathematics/page.tsx
│   │   ├── physics/page.tsx
│   │   ├── chemistry/page.tsx
│   │   ├── biology/page.tsx
│   │   ├── english/page.tsx
│   │   ├── history/page.tsx
│   │   ├── geography/page.tsx
│   │   ├── economics/page.tsx
│   │   ├── literature/page.tsx
│   │   └── computer-science/page.tsx
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/
│   │   └── page.tsx                  # Shows Google Classroom links
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── subscribe/route.ts
│       ├── verify-subscription/route.ts
│       └── classroom/
│           └── enroll/route.ts
│
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ClassroomCard.tsx
│   └── SubscriptionStatus.tsx
│
├── store/
│   ├── userStore.ts
│   ├── subscriptionStore.ts
│   └── uiStore.ts
│
├── lib/
│   ├── db.ts
│   ├── google-classroom.ts
│   └── payments.ts
│
└── types/
    └── index.ts
```

---

## Database Models (MongoDB)

### User Schema
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  googleId: string,
  role: 'student' | 'admin',
  subscriptionId: ObjectId,
  createdAt: Date
}
```

### Subscription Schema
```typescript
{
  _id: ObjectId,
  userId: ObjectId,
  plan: 'monthly' | 'quarterly' | 'annual',
  status: 'active' | 'expired' | 'cancelled',
  startDate: Date,
  endDate: Date,
  paymentMethod: 'mpesa' | 'card',
  transactionId: string,
  amount: number
}
```

### Classroom Schema
```typescript
{
  _id: ObjectId,
  subject: string,
  googleClassroomId: string,
  googleClassroomLink: string,
  description: string,
  teacherEmail: string,
  enrolledStudents: [ObjectId],
  active: boolean
}
```

---

## Google Classroom Integration

### Setup Steps

1. **Create Google Cloud Project**
   - Enable Google Classroom API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs

2. **Create Multiple Classes**
   - Mathematics class
   - Physics class
   - Chemistry class
   - Biology class
   - English class
   - History class
   - Geography class
   - Economics class
   - Literature class
   - Computer Science class

3. **Store Class Information**
   ```typescript
   const classrooms = [
     {
       subject: "Mathematics",
       googleClassroomId: "abc123",
       googleClassroomLink: "https://classroom.google.com/c/abc123",
       teacherEmail: "math@studybuddy.co.ke"
     },
     // ... more classes
   ]
   ```

### Enrollment Flow

```typescript
// lib/google-classroom.ts
import { google } from 'googleapis'

export async function enrollStudent(
  studentEmail: string, 
  classroomId: string
) {
  const classroom = google.classroom('v1')
  
  await classroom.courses.students.create({
    courseId: classroomId,
    requestBody: {
      userId: studentEmail
    }
  })
}

export async function enrollStudentInAllClasses(studentEmail: string) {
  const classrooms = await getAllActiveClassrooms()
  
  for (const classroom of classrooms) {
    await enrollStudent(studentEmail, classroom.googleClassroomId)
  }
}
```

---

## Core Features

### 1. Public Pages

All subjects have overview pages explaining what's covered. No actual content - just marketing.

### 2. Authentication

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Save user to MongoDB
      await saveUserToDB(user)
      return true
    }
  }
}
```

### 3. Subscription Flow

```typescript
// app/api/subscribe/route.ts
export async function POST(req: Request) {
  const { userId, plan } = await req.json()
  
  // Initiate payment
  const payment = await initiateMpesaPayment(userId, plan)
  
  return Response.json({ paymentUrl: payment.url })
}

// After payment webhook
export async function handlePaymentSuccess(transactionId: string) {
  const subscription = await createSubscription(transactionId)
  const user = await getUser(subscription.userId)
  
  // Enroll in all Google Classrooms
  await enrollStudentInAllClasses(user.email)
  
  // Update subscription status
  await updateSubscriptionStatus(subscription._id, 'active')
}
```

### 4. Dashboard (After Subscription)

```typescript
// app/dashboard/page.tsx
export default async function Dashboard() {
  const session = await getServerSession()
  const subscription = await getActiveSubscription(session.user.id)
  
  if (!subscription) {
    return <SubscribePrompt />
  }
  
  const classrooms = await getAllActiveClassrooms()
  
  return (
    <div>
      <h1>Your Classes</h1>
      <SubscriptionStatus subscription={subscription} />
      
      <div className="grid grid-cols-2 gap-4">
        {classrooms.map(classroom => (
          <ClassroomCard
            key={classroom._id}
            subject={classroom.subject}
            link={classroom.googleClassroomLink}
            description={classroom.description}
          />
        ))}
      </div>
    </div>
  )
}
```

---

## Payment Integration

### M-Pesa STK Push

```typescript
// lib/payments.ts
export async function initiateMpesaPayment(
  phoneNumber: string,
  amount: number,
  userId: string
) {
  const response = await fetch('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${mpesaToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: mpesaPassword,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: `${process.env.APP_URL}/api/mpesa/callback`,
      AccountReference: userId,
      TransactionDesc: 'StudyBuddy Subscription'
    })
  })
  
  return response.json()
}
```

---

## Zustand Stores

### User Store
```typescript
// store/userStore.ts
import { create } from 'zustand'

interface UserState {
  user: User | null
  isLoggedIn: boolean
  login: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false })
}))
```

### Subscription Store
```typescript
// store/subscriptionStore.ts
import { create } from 'zustand'

interface SubscriptionState {
  subscription: Subscription | null
  hasAccess: () => boolean
  daysRemaining: () => number
  setSubscription: (sub: Subscription) => void
}

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  subscription: null,
  hasAccess: () => {
    const sub = get().subscription
    return sub?.status === 'active' && new Date() < new Date(sub.endDate)
  },
  daysRemaining: () => {
    const sub = get().subscription
    if (!sub) return 0
    const diff = new Date(sub.endDate).getTime() - Date.now()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  },
  setSubscription: (sub) => set({ subscription: sub })
}))
```

---

## Environment Variables

```bash
# .env.local

# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studybuddy

# M-Pesa
MPESA_CONSUMER_KEY=your_key
MPESA_CONSUMER_SECRET=your_secret
MPESA_SHORTCODE=174379
MPESA_PASSKEY=your_passkey

# Flutterwave
FLUTTERWAVE_PUBLIC_KEY=your_public_key
FLUTTERWAVE_SECRET_KEY=your_secret_key

# App
APP_URL=http://localhost:3000
```

---

## Pricing Plans

```typescript
const plans = {
  monthly: {
    price: 1500,
    currency: 'KES',
    duration: 30,
    name: 'Monthly Plan'
  },
  quarterly: {
    price: 4000,
    currency: 'KES',
    duration: 90,
    name: 'Quarterly Plan'
  },
  annual: {
    price: 15000,
    currency: 'KES',
    duration: 365,
    name: 'Annual Plan'
  }
}
```

---

## Development Steps

### Phase 1: Public Pages (Week 1)
- Homepage
- About page
- Contact page
- All 10 subject pages
- Pricing page

### Phase 2: Auth & Database (Week 2)
- Google OAuth setup
- NextAuth integration
- MongoDB connection
- User registration flow

### Phase 3: Payments (Week 3)
- M-Pesa integration
- Payment webhooks
- Subscription creation
- Flutterwave backup

### Phase 4: Google Classroom (Week 4)
- Google Classroom API setup
- Create 10 classes
- Enrollment system
- Dashboard with class links

### Phase 5: Access Control (Week 5)
- Subscription verification
- Protected routes
- Expiry handling
- Renewal reminders

---

## Deployment

```bash
# Build
npm run build

# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard
```

---

## Key Points

1. **No complex backend** - Just Next.js API routes
2. **Google Classroom does the teaching** - We only manage access
3. **Simple database** - Users and subscriptions only
4. **Focus on payments** - That's our main job
5. **Access control** - Students see classroom links only after paying

---

This is your complete README. Copy everything above.