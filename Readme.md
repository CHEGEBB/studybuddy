# StudyBuddy - High School Learning Platform with Zustand State Management

## Project Overview

StudyBuddy is a subscription-based online learning platform specifically designed for high school students. The platform provides comprehensive learning materials and resources for all high school subjects, with each subject having its dedicated page and learning materials. Students gain access to content only after subscribing, ensuring quality education delivery.

**NEW**: This project integrates **Zustand** for modern, lightweight state management across the entire application!

## The Core Problem We're Solving

### Current High School Learning Issues:
- **Scattered Resources**: Students struggle to find quality materials for all subjects in one place
- **Expensive Tutoring**: Individual subject tutoring is costly and time-consuming
- **Lack of Structure**: No organized learning path for high school curriculum
- **Teacher Accessibility**: Limited one-on-one time with teachers
- **Subject-Specific Gaps**: Weak performance in specific subjects due to lack of targeted resources

### Our Solution: Unified High School Learning Hub
**Subscribe → Access All Subjects → Excel in School**

## How StudyBuddy Works

```
1. Student Visits Platform (Multi-page website - Public Pages)
   ├── Homepage (Hero, Features, Subject Overview)
   ├── About Us (Mission, Team, Success Stories)
   ├── Contact (Support, Inquiries)
   ├── Individual Subject Pages (10 subjects with overviews)
   └── Pricing (Subscription plans)
   ↓
2. Student Registration & Authentication
   ↓
3. Subscription & Payment (M-Pesa/Flutterwave)
   ↓
4. Dashboard Access (Actual Learning Content)
   ├── Student Dashboard (Progress tracking, Subject access)
   ├── Teacher Dashboard (Content management)
   └── Admin Dashboard (User management)
```

## Tech Stack

### Frontend
- **Next.js 15** with **Pages Router** (Traditional folder/page.tsx structure)
- **TypeScript (.tsx files)**
- **Tailwind CSS** (Inline utility classes)
- **Sass** (For complex animations only)
- **Framer Motion** (Minimal usage, strategic animations)
- **🆕 Zustand** (Modern state management - Learning as we build!)

### Backend (Separate API)
- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose ODM**
- **JWT** for authentication
- **Bcrypt** for password hashing

### Payment Integration
- **M-Pesa STK Push** (Primary for Kenya)
- **Flutterwave** (Cards + Mobile Money)
- **Webhook handlers** for instant subscription activation

### Media & Storage
- **Appwrite** (File storage, document uploads)
- **Cloudinary** (Image optimization)

### Real-Time Features
- **Socket.io** (Live notifications)
- **Zoom SDK** (Live tutoring sessions)

## 🎯 Zustand State Management Integration

### Why Zustand for StudyBuddy?

Zustand is perfect for this project because:
- **Lightweight**: No boilerplate, simple API
- **TypeScript-friendly**: Excellent TS support
- **Learning-oriented**: Easy to understand while building
- **Flexible**: Works great with Next.js Pages Router
- **Scalable**: Grows with our application

### Zustand Store Architecture

```typescript
// Learning Zustand progressively across development phases
store/
├── index.ts              // Export all stores
├── userStore.ts          // Week 1 - Authentication & User Data
├── subscriptionStore.ts  // Week 2 - Subscription Management
├── subjectStore.ts       // Week 3 - Subject Content & Progress
├── uiStore.ts           // Week 4 - UI States & Modals
├── dashboardStore.ts    // Week 5 - Dashboard-specific data
└── notificationStore.ts  // Week 6 - Real-time notifications
```


## Project Structure (Next.js Pages Router + Zustand)

```
studybuddy/
├── frontend/ (Next.js 15 with Pages Router + Zustand)
│   ├── app/
│   │   ├──Layout.tsx
│   │   ├── page.tsx (Homepage/LandingPage - Hero, Overview, CTA)
│   │   ├── about/
│   │   │   └── page.tsx (Mission, Team, Success Stories)
│   │   ├── contact/
│   │   │   └── page.tsx (Support, Contact Form, FAQ)
│   │   ├── subjects/
│   │   │   ├── page.tsx (All subjects overview)
│   │   │   ├── mathematics/
│   │   │   │   └── page.tsx (Math overview, what we offer)
│   │   │   ├── physics/
│   │   │   │   └── page.tsx (Physics overview, differentiators)
│   │   │   ├── chemistry/
│   │   │   │   └── page.tsx (Chemistry overview, approach)
│   │   │   ├── biology/
│   │   │   │   └── page.tsx (Biology overview, methodology)
│   │   │   ├── english/
│   │   │   │   └── page.tsx (English overview, curriculum)
│   │   │   ├── history/
│   │   │   │   └── page.tsx (History overview, resources)
│   │   │   ├── geography/
│   │   │   │   └── page.tsx (Geography overview, tools)
│   │   │   ├── economics/
│   │   │   │   └── page.tsx (Economics overview, methods)
│   │   │   ├── literature/
│   │   │   │   └── page.tsx (Literature overview, analysis)
│   │   │   └── computer-science/
│   │   │       └── page.tsx (CS overview, practical approach)
│   │   ├── pricing/
│   │   │   └── page.tsx (Subscription plans, comparison)
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx (Login with Zustand integration)
│   │   │   └── register/
│   │   │       └── page.tsx (Registration with Zustand)
│   │   ├── dashboard/ (🔐 ACTUAL LEARNING CONTENT AFTER SUBSCRIPTION)
│   │   │   ├── student/
│   │   │   │   ├── page.tsx (Main dashboard - Zustand powered)
│   │   │   │   ├── subjects/
│   │   │   │   │   └── [subject]/
│   │   │   │   │       ├── page.tsx (Subject lessons)
│   │   │   │   │       ├── lessons/
│   │   │   │   │       └── quizzes/
│   │   │   │   ├── progress/
│   │   │   │   │   └── page.tsx (Progress tracking)
│   │   │   │   └── profile/
│   │   │   │       └── page.tsx (Profile management)
│   │   │   ├── teacher/
│   │   │   │   ├── page.tsx (Teacher dashboard)
│   │   │   │   ├── classes/
│   │   │   │   ├── students/
│   │   │   │   └── content/
│   │   │   └── admin/
│   │   │       ├── page.tsx (Admin dashboard)
│   │   │       ├── users/
│   │   │       ├── subscriptions/
│   │   │       └── analytics/
│   │   └── api/ (Next.js API routes)
│   │       ├── auth/
│   │       ├── subscriptions/
│   │       └── payments/
│   │
│   ├── components/
│   │   ├── ui/ (Reusable components)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx (Uses Zustand for user state)
│   │   │   ├── Footer.tsx
│   │   │   └── DashboardLayout.tsx
│   │   ├── subject-cards/
│   │   │   ├── SubjectCard.tsx
│   │   │   ├── SubjectGrid.tsx
│   │   │   └── SubjectPreview.tsx
│   │   ├── dashboard/
│   │   │   ├── ProgressChart.tsx (Uses Zustand)
│   │   │   ├── SubjectProgress.tsx
│   │   │   └── RecentActivity.tsx
│   │   └── forms/
│   │       ├── LoginForm.tsx (Zustand integration)
│   │       ├── RegisterForm.tsx
│   │       └── ContactForm.tsx
│   │
│   ├── store/ (🎯 ZUSTAND STORES - Learning Progressive Implementation)
│   │   ├── index.ts (Export all stores)
│   │   ├── userStore.ts (Week 1 - Authentication, Profile)
│   │   ├── subscriptionStore.ts (Week 2 - Payment, Access Control)
│   │   ├── subjectStore.ts (Week 3 - Subject Content, Progress)
│   │   ├── uiStore.ts (Week 4 - Modals, Loading States)
│   │   ├── dashboardStore.ts (Week 5 - Dashboard Data)
│   │   └── notificationStore.ts (Week 6 - Notifications)
│   │
│   ├── lib/
│   │   ├── api.ts (API client with Zustand integration)
│   │   ├── auth.ts (Auth helpers)
│   │   ├── utils.ts (Utilities)
│   │   └── zustand-middleware.ts (Custom Zustand middleware)
│   │
│   ├── hooks/ (Custom hooks using Zustand)
│   │   ├── useAuth.ts
│   │   ├── useSubscription.ts
│   │   └── useSubjects.ts
│   │
│   ├── types/
│   │   ├── index.ts (Global types)
│   │   ├── user.ts
│   │   ├── subscription.ts
│   │   └── subject.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.scss
│   │
│   └── package.json (Including Zustand dependencies)
│
├── backend/ (Node.js + Express - Same as original)
│   └── [Same structure as before]
```

## High School Subjects Covered (Public Overview Pages)

Each subject gets its own public page showcasing what we offer and how we're different:

### Core Academic Subjects
1. **Mathematics** (`/subjects/mathematics`) - Algebra, Geometry, Calculus, Statistics
2. **Physics** (`/subjects/physics`) - Mechanics, Thermodynamics, Electricity, Optics  
3. **Chemistry** (`/subjects/chemistry`) - Organic, Inorganic, Physical Chemistry
4. **Biology** (`/subjects/biology`) - Cell Biology, Genetics, Ecology, Human Biology
5. **English** (`/subjects/english`) - Grammar, Literature, Writing, Comprehension

### Social Sciences  
6. **History** (`/subjects/history`) - World History, Local History, Historical Analysis
7. **Geography** (`/subjects/geography`) - Physical, Human, Environmental Geography
8. **Economics** (`/subjects/economics`) - Microeconomics, Macroeconomics, Business Studies

### Additional Subjects
9. **Literature** (`/subjects/literature`) - Poetry, Novels, Drama Analysis
10. **Computer Science** (`/subjects/computer-science`) - Programming, Web Development

## Core Pages & Features with Zustand Integration

### 🌐 PUBLIC PAGES (Marketing & Information)

#### 1. Homepage (`/pages/index.tsx`)
```tsx
// Hero section with platform overview
import { useUserStore } from '@/store/userStore'
import { useSubscriptionStore } from '@/store/subscriptionStore'

export default function HomePage() {
  const { isLoggedIn } = useUserStore()
  const { hasAccess } = useSubscriptionStore()
  
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to StudyBuddy
          </h1>
          <p className="text-xl mb-8">
            Your Complete High School Learning Companion
          </p>
          <p className="text-lg mb-8">
            Master all 10 subjects. Excel in your studies. Achieve your dreams.
          </p>
          
          {/* Dynamic CTA based on user state (Zustand) */}
          {!isLoggedIn ? (
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
              Start Learning Today
            </button>
          ) : hasAccess() ? (
            <Link href="/dashboard/student" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
              Go to Dashboard
            </Link>
          ) : (
            <Link href="/pricing" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
              Subscribe Now
            </Link>
          )}
        </div>
      </section>
      
      <FeaturesSection />
      <SubjectsOverview />
      <TestimonialsSection />
    </main>
  )
}
```

#### 2. About Page (`/pages/about/page.tsx`)
```tsx
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About StudyBuddy</h1>
        <p className="text-xl text-gray-600">
          Empowering Kenyan high school students to excel in every subject
        </p>
      </header>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              We believe every Kenyan student deserves access to quality education. 
              StudyBuddy was created to bridge the gap between expensive private tutoring 
              and the need for comprehensive subject mastery.
            </p>
            <p className="text-lg text-gray-700">
              Our platform brings together expert teachers, modern technology, and 
              affordable pricing to create the ultimate high school learning experience.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Why We're Different</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✅ All 10 subjects in one platform</li>
              <li>✅ Kenyan curriculum aligned</li>
              <li>✅ Expert local teachers</li>
              <li>✅ Affordable for all families</li>
              <li>✅ Progress tracking & analytics</li>
            </ul>
          </div>
        </div>
      </section>
      
      <TeachersSection />
      <SuccessStoriesSection />
    </div>
  )
}
```

#### 3. Contact Page (`/pages/contact/page.tsx`)
```tsx
import { useState } from 'react'
import { useUserStore } from '@/store/userStore'

export default function ContactPage() {
  const { user } = useUserStore()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    subject: '',
    message: ''
  })
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We're here to help you succeed in your studies
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm formData={formData} setFormData={setFormData} />
        <ContactInfo />
      </div>
      
      <FAQSection />
    </div>
  )
}
```

#### 4. Individual Subject Pages (Example: Mathematics)
```tsx
// /pages/subjects/mathematics/page.tsx
export default function MathematicsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mathematics</h1>
        <p className="text-lg text-gray-600">
          Master algebra, geometry, calculus, and statistics with our comprehensive approach
        </p>
      </header>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">What We Cover</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TopicCard 
            title="Algebra" 
            icon="📐" 
            description="Linear equations, quadratics, polynomials"
          />
          <TopicCard 
            title="Geometry" 
            icon="📊" 
            description="Shapes, angles, proofs, trigonometry"
          />
          <TopicCard 
            title="Calculus" 
            icon="∫" 
            description="Limits, derivatives, integrals"
          />
          <TopicCard 
            title="Statistics" 
            icon="📈" 
            description="Data analysis, probability, distributions"
          />
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">How We're Different</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <DifferentiatorCard 
            title="Visual Learning"
            description="Interactive graphs, diagrams, and visual explanations make complex concepts clear"
            icon="👁️"
          />
          <DifferentiatorCard 
            title="Step-by-Step Solutions"
            description="Every problem broken down into clear, logical steps you can follow"
            icon="🔢"
          />
          <DifferentiatorCard 
            title="Real-World Applications"
            description="See how math applies to engineering, finance, science, and daily life"
            icon="🌍"
          />
        </div>
      </section>
      
      <SubscriptionPrompt 
        subject="Mathematics" 
        benefits={[
          "500+ practice problems with solutions",
          "Video lessons for every topic",
          "Interactive calculators and tools",
          "Past exam papers and marking schemes"
        ]}
      />
    </div>
  )
}
```

#### 5. Pricing Page (`/pages/pricing/page.tsx`)
```tsx
import { useUserStore } from '@/store/userStore'
import { useSubscriptionStore } from '@/store/subscriptionStore'

export default function PricingPage() {
  const { isLoggedIn } = useUserStore()
  const { subscription } = useSubscriptionStore()
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600">
          Affordable access to all 10 high school subjects
        </p>
      </header>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <PricingCard 
          plan="monthly"
          price="KES 1,500"
          period="per month"
          features={[
            "Access to all 10 subjects",
            "Video lessons & notes",
            "Practice exercises",
            "Email support"
          ]}
          current={subscription?.plan === 'monthly'}
        />
        
        <PricingCard 
          plan="quarterly"
          price="KES 4,000"
          originalPrice="KES 4,500"
          period="per quarter"
          popular={true}
          features={[
            "Everything in Monthly",
            "Live Q&A sessions",
            "Priority support",
            "Progress analytics",
            "Save KES 500!"
          ]}
          current={subscription?.plan === 'quarterly'}
        />
        
        <PricingCard 
          plan="annual"
          price="KES 15,000"
          originalPrice="KES 18,000"
          period="per year"
          features={[
            "Everything in Quarterly",
            "1-on-1 tutoring sessions",
            "Exam preparation",
            "Certificates",
            "Save KES 3,000!"
          ]}
          current={subscription?.plan === 'annual'}
        />
      </div>
      
      <PaymentMethodsSection />
    </div>
  )
}
```

### 🔐 DASHBOARD PAGES (Actual Learning Content - Post-Subscription)

#### 6. Student Dashboard (`/pages/dashboard/student/page.tsx`)
```tsx
// Using multiple Zustand stores together - This is where learning happens!
import { useUserStore } from '@/store/userStore'
import { useSubscriptionStore } from '@/store/subscriptionStore'
import { useSubjectStore } from '@/store/subjectStore'
import { useDashboardStore } from '@/store/dashboardStore'

export default function StudentDashboard() {
  const { user } = useUserStore()
  const { subscription, daysRemaining } = useSubscriptionStore()
  const { subjects, totalProgress, recentActivity } = useSubjectStore()
  const { stats, updateStats } = useDashboardStore()
  
  useEffect(() => {
    updateStats() // Load dashboard stats
  }, [])
  
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader user={user} daysRemaining={daysRemaining} />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Subjects Enrolled" value="10" />
            <StatsCard title="Lessons Completed" value={stats.completedLessons} />
            <StatsCard title="Overall Progress" value={`${Math.round(totalProgress)}%`} />
            <StatsCard title="Study Streak" value={`${stats.studyStreak} days`} />
          </div>
          
          {/* Subject Progress */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">My Subjects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {subjects.map(subject => (
                <SubjectProgressCard 
                  key={subject.id} 
                  subject={subject}
                  progress={subject.progress}
                />
              ))}
            </div>
          </section>
          
          {/* Recent Activity & Recommendations */}
          <div className="grid md:grid-cols-2 gap-8">
            <RecentActivityCard activities={recentActivity} />
            <RecommendationsCard />
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
```

### User Model
```javascript
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['student', 'teacher', 'admin'], 
    default: 'student' 
  },
  subscription: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Subscription' 
  },
  grade: { 
    type: Number, 
    min: 9, 
    max: 12 
  },
  createdAt: { type: Date, default: Date.now }
});
```

### Subscription Model
```javascript
const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { 
    type: String, 
    enum: ['monthly', 'quarterly', 'annual'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['active', 'inactive', 'expired'], 
    default: 'inactive' 
  },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  paymentMethod: { type: String },
  transactionId: { type: String }
});
```

### Subject & Progress Models
```javascript
const SubjectSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    enum: [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
      'History', 'Geography', 'Economics', 'Literature', 'Computer Science'
    ]
  },
  description: { type: String, required: true },
  topics: [{
    title: String,
    description: String,
    lessons: [{
      title: String,
      content: String,
      videoUrl: String,
      documents: [String],
      order: Number
    }]
  }],
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  }
});

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  completedLessons: [{ 
    lessonId: String,
    completedAt: Date,
    score: Number // Optional quiz/test score
  }],
  overallProgress: { type: Number, default: 0 }, // Percentage
  lastAccessed: { type: Date, default: Date.now }
});
```

## Package.json Dependencies (Frontend)

```json
{
  "name": "studybuddy-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    
    "🎯 ZUSTAND - State Management": "",
    "zustand": "^4.4.0",
    
    "tailwindcss": "^3.3.0",
    "sass": "^1.60.0",
    "framer-motion": "^10.0.0",
    "axios": "^1.4.0",
    "socket.io-client": "^4.6.0",
    "react-hook-form": "^7.43.0",
    "react-hot-toast": "^2.4.0",
    "date-fns": "^2.29.0",
    "clsx": "^1.2.0"
  },
  "devDependencies": {
    "eslint": "^8.40.0",
    "eslint-config-next": "^15.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.23"
  }
}
```

## Complete Zustand Store Implementation

### Central Store Export (`store/index.ts`)
```typescript
// Export all stores for easy importing
export { useUserStore } from './userStore'
export { useSubscriptionStore } from './subscriptionStore' 
export { useSubjectStore } from './subjectStore'
export { useUIStore } from './uiStore'
export { useDashboardStore } from './dashboardStore'
export { useNotificationStore } from './notificationStore'

// Convenience hook for multiple stores
export const useAppStores = () => ({
  user: useUserStore(),
  subscription: useSubscriptionStore(),
  subjects: useSubjectStore(),
  ui: useUIStore(),
  dashboard: useDashboardStore(),
  notifications: useNotificationStore()
})
```

### Complete Subject Store (`store/subjectStore.ts`)
```typescript
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Lesson {
  id: string
  title: string
  content: string
  videoUrl?: string
  documents: string[]
  completed: boolean
  score?: number
  completedAt?: Date
}

interface Topic {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  progress: number
}

interface Subject {
  id: string
  name: string
  description: string
  icon: string
  color: string
  topics: Topic[]
  progress: number
  totalLessons: number
  completedLessons: number
  lastAccessed?: Date
}

interface SubjectState {
  subjects: Subject[]
  currentSubject: Subject | null
  currentLesson: Lesson | null
  loading: boolean
  error: string | null
  
  // Computed values
  totalProgress: number
  recentActivity: Array<{
    id: string
    type: 'lesson_completed' | 'quiz_passed' | 'subject_started'
    subjectName: string
    lessonTitle?: string
    timestamp: Date
    score?: number
  }>
  
  // Actions
  loadSubjects: () => Promise<void>
  selectSubject: (subjectId: string) => void
  selectLesson: (lessonId: string) => void
  completeLesson: (lessonId: string, score?: number) => void
  updateProgress: (subjectId: string, topicId: string) => void
  addToRecentActivity: (activity: any) => void
  resetCurrentLesson: () => void
}

export const useSubjectStore = create<SubjectState>()(
  devtools(
    (set, get) => ({
      subjects: [],
      currentSubject: null,
      currentLesson: null,
      loading: false,
      error: null,
      totalProgress: 0,
      recentActivity: [],
      
      loadSubjects: async () => {
        set({ loading: true, error: null })
        try {
          const response = await fetch('/api/subjects')
          const subjects = await response.json()
          
          // Calculate progress for each subject
          const subjectsWithProgress = subjects.map(subject => ({
            ...subject,
            progress: calculateSubjectProgress(subject),
            totalLessons: countTotalLessons(subject),
            completedLessons: countCompletedLessons(subject)
          }))
          
          const totalProgress = subjectsWithProgress.reduce((sum, subject) => sum + subject.progress, 0) / subjects.length
          
          set({ 
            subjects: subjectsWithProgress,
            totalProgress,
            loading: false 
          })
        } catch (error) {
          set({ 
            error: 'Failed to load subjects',
            loading: false 
          })
        }
      },
      
      selectSubject: (subjectId) => {
        const subject = get().subjects.find(s => s.id === subjectId)
        if (subject) {
          set({ 
            currentSubject: { 
              ...subject, 
              lastAccessed: new Date() 
            },
            currentLesson: null 
          })
        }
      },
      
      selectLesson: (lessonId) => {
        const { currentSubject } = get()
        if (currentSubject) {
          const lesson = currentSubject.topics
            .flatMap(topic => topic.lessons)
            .find(lesson => lesson.id === lessonId)
          
          if (lesson) {
            set({ currentLesson: lesson })
          }
        }
      },
      
      completeLesson: (lessonId, score = 100) => {
        const { subjects, currentSubject, addToRecentActivity } = get()
        
        if (currentSubject) {
          const updatedSubjects = subjects.map(subject => {
            if (subject.id === currentSubject.id) {
              const updatedTopics = subject.topics.map(topic => ({
                ...topic,
                lessons: topic.lessons.map(lesson => 
                  lesson.id === lessonId 
                    ? { 
                        ...lesson, 
                        completed: true, 
                        score, 
                        completedAt: new Date() 
                      }
                    : lesson
                )
              }))
              
              return {
                ...subject,
                topics: updatedTopics,
                progress: calculateSubjectProgress({ ...subject, topics: updatedTopics }),
                completedLessons: subject.completedLessons + 1
              }
            }
            return subject
          })
          
          // Add to recent activity
          const completedLesson = currentSubject.topics
            .flatMap(topic => topic.lessons)
            .find(lesson => lesson.id === lessonId)
          
          if (completedLesson) {
            addToRecentActivity({
              id: Date.now().toString(),
              type: 'lesson_completed',
              subjectName: currentSubject.name,
              lessonTitle: completedLesson.title,
              timestamp: new Date(),
              score
            })
          }
          
          set({ 
            subjects: updatedSubjects,
            currentSubject: updatedSubjects.find(s => s.id === currentSubject.id),
            totalProgress: updatedSubjects.reduce((sum, s) => sum + s.progress, 0) / updatedSubjects.length
          })
        }
      },
      
      updateProgress: (subjectId, topicId) => {
        const { subjects } = get()
        const updatedSubjects = subjects.map(subject => {
          if (subject.id === subjectId) {
            const updatedTopics = subject.topics.map(topic => {
              if (topic.id === topicId) {
                const completedLessons = topic.lessons.filter(lesson => lesson.completed).length
                const progress = (completedLessons / topic.lessons.length) * 100
                return { ...topic, progress }
              }
              return topic
            })
            
            return {
              ...subject,
              topics: updatedTopics,
              progress: calculateSubjectProgress({ ...subject, topics: updatedTopics })
            }
          }
          return subject
        })
        
        set({ 
          subjects: updatedSubjects,
          totalProgress: updatedSubjects.reduce((sum, s) => sum + s.progress, 0) / updatedSubjects.length
        })
      },
      
      addToRecentActivity: (activity) => {
        set((state) => ({
          recentActivity: [activity, ...state.recentActivity].slice(0, 10) // Keep last 10 activities
        }))
      },
      
      resetCurrentLesson: () => {
        set({ currentLesson: null })
      }
    }),
    {
      name: 'subject-store'
    }
  )
)

// Helper functions
function calculateSubjectProgress(subject: Subject): number {
  const totalLessons = subject.topics.reduce((sum, topic) => sum + topic.lessons.length, 0)
  const completedLessons = subject.topics.reduce((sum, topic) => 
    sum + topic.lessons.filter(lesson => lesson.completed).length, 0
  )
  return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
}

function countTotalLessons(subject: Subject): number {
  return subject.topics.reduce((sum, topic) => sum + topic.lessons.length, 0)
}

function countCompletedLessons(subject: Subject): number {
  return subject.topics.reduce((sum, topic) => 
    sum + topic.lessons.filter(lesson => lesson.completed).length, 0
  )
}
```

### UI Store for Global UI State (`store/uiStore.ts`)
```typescript
import { create } from 'zustand'

interface Modal {
  id: string
  type: 'subscription' | 'profile' | 'confirmation' | 'lesson' | 'quiz'
  title: string
  data?: any
}

interface UIState {
  // Loading states
  isLoading: boolean
  loadingMessage: string
  
  // Modals
  modals: Modal[]
  
  // Sidebar
  sidebarOpen: boolean
  
  // Notifications/Toasts
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'warning' | 'info'
    message: string
    duration?: number
  }>
  
  // Theme
  theme: 'light' | 'dark'
  
  // Mobile responsiveness
  isMobile: boolean
  
  // Actions
  setLoading: (loading: boolean, message?: string) => void
  openModal: (modal: Omit<Modal, 'id'>) => void
  closeModal: (modalId: string) => void
  closeAllModals: () => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  addNotification: (notification: Omit<UIState['notifications'][0], 'id'>) => void
  removeNotification: (id: string) => void
  setTheme: (theme: 'light' | 'dark') => void
  setIsMobile: (isMobile: boolean) => void
}

export const useUIStore = create<UIState>((set, get) => ({
  isLoading: false,
  loadingMessage: '',
  modals: [],
  sidebarOpen: false,
  notifications: [],
  theme: 'light',
  isMobile: false,
  
  setLoading: (loading, message = '') => set({ 
    isLoading: loading, 
    loadingMessage: message 
  }),
  
  openModal: (modal) => {
    const newModal = { ...modal, id: Date.now().toString() }
    set((state) => ({ modals: [...state.modals, newModal] }))
  },
  
  closeModal: (modalId) => set((state) => ({
    modals: state.modals.filter(modal => modal.id !== modalId)
  })),
  
  closeAllModals: () => set({ modals: [] }),
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  
  addNotification: (notification) => {
    const newNotification = { 
      ...notification, 
      id: Date.now().toString() 
    }
    set((state) => ({ 
      notifications: [...state.notifications, newNotification] 
    }))
    
    // Auto-remove after duration
    const duration = notification.duration || 5000
    setTimeout(() => {
      get().removeNotification(newNotification.id)
    }, duration)
  },
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(notif => notif.id !== id)
  })),
  
  setTheme: (theme) => set({ theme }),
  
  setIsMobile: (isMobile) => set({ isMobile })
}))
```

### Dashboard Store (`store/dashboardStore.ts`)
```typescript
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface DashboardStats {
  totalStudyTime: number // minutes
  completedLessons: number
  averageScore: number
  studyStreak: number // days
  subjectsStarted: number
  certificatesEarned: number
  weeklyProgress: Array<{
    week: string
    lessonsCompleted: number
    studyTime: number
  }>
  subjectPerformance: Array<{
    subjectId: string
    subjectName: string
    progress: number
    averageScore: number
    timeSpent: number
  }>
}

interface StudySession {
  id: string
  subjectId: string
  subjectName: string
  lessonId: string
  lessonTitle: string
  startTime: Date
  endTime?: Date
  duration?: number // minutes
  completed: boolean
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earnedAt: Date
  type: 'milestone' | 'streak' | 'performance' | 'completion'
}

interface DashboardState {
  stats: DashboardStats
  currentStudySession: StudySession | null
  achievements: Achievement[]
  weeklyGoal: number // lessons per week
  weeklyProgress: number // current week progress
  
  // Loading states
  loadingStats: boolean
  loadingAchievements: boolean
  
  // Actions
  updateStats: () => Promise<void>
  startStudySession: (subjectId: string, subjectName: string, lessonId: string, lessonTitle: string) => void
  endStudySession: () => void
  loadAchievements: () => Promise<void>
  setWeeklyGoal: (goal: number) => void
  calculateWeeklyProgress: () => void
  
  // Computed getters
  getStudyTimeToday: () => number
  getStudyStreakStatus: () => boolean
  getWeeklyGoalProgress: () => number
}

export const useDashboardStore = create<DashboardState>()(
  devtools(
    (set, get) => ({
      stats: {
        totalStudyTime: 0,
        completedLessons: 0,
        averageScore: 0,
        studyStreak: 0,
        subjectsStarted: 0,
        certificatesEarned: 0,
        weeklyProgress: [],
        subjectPerformance: []
      },
      currentStudySession: null,
      achievements: [],
      weeklyGoal: 10,
      weeklyProgress: 0,
      loadingStats: false,
      loadingAchievements: false,
      
      updateStats: async () => {
        set({ loadingStats: true })
        try {
          const response = await fetch('/api/dashboard/stats')
          const stats = await response.json()
          set({ stats, loadingStats: false })
          
          // Update weekly progress after stats load
          get().calculateWeeklyProgress()
        } catch (error) {
          console.error('Failed to load dashboard stats:', error)
          set({ loadingStats: false })
        }
      },
      
      startStudySession: (subjectId, subjectName, lessonId, lessonTitle) => {
        const session: StudySession = {
          id: Date.now().toString(),
          subjectId,
          subjectName,
          lessonId,
          lessonTitle,
          startTime: new Date(),
          completed: false
        }
        set({ currentStudySession: session })
      },
      
      endStudySession: () => {
        const { currentStudySession } = get()
        if (currentStudySession) {
          const endTime = new Date()
          const duration = Math.round(
            (endTime.getTime() - currentStudySession.startTime.getTime()) / (1000 * 60)
          )
          
          const completedSession = {
            ...currentStudySession,
            endTime,
            duration,
            completed: true
          }
          
          // Update total study time
          set((state) => ({
            currentStudySession: null,
            stats: {
              ...state.stats,
              totalStudyTime: state.stats.totalStudyTime + duration
            }
          }))
          
          // Save session to backend
          fetch('/api/dashboard/study-sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(completedSession)
          })
        }
      },
      
      loadAchievements: async () => {
        set({ loadingAchievements: true })
        try {
          const response = await fetch('/api/dashboard/achievements')
          const achievements = await response.json()
          set({ achievements, loadingAchievements: false })
        } catch (error) {
          console.error('Failed to load achievements:', error)
          set({ loadingAchievements: false })
        }
      },
      
      setWeeklyGoal: (goal) => {
        set({ weeklyGoal: goal })
        get().calculateWeeklyProgress()
      },
      
      calculateWeeklyProgress: () => {
        const { stats, weeklyGoal } = get()
        const currentWeekStats = stats.weeklyProgress[stats.weeklyProgress.length - 1]
        const weeklyProgress = currentWeekStats 
          ? (currentWeekStats.lessonsCompleted / weeklyGoal) * 100
          : 0
        set({ weeklyProgress })
      },
      
      getStudyTimeToday: () => {
        const { currentStudySession } = get()
        if (currentStudySession && !currentStudySession.endTime) {
          const now = new Date()
          const currentSessionTime = Math.round(
            (now.getTime() - currentStudySession.startTime.getTime()) / (1000 * 60)
          )
          return currentSessionTime
        }
        return 0
      },
      
      getStudyStreakStatus: () => {
        const { stats } = get()
        return stats.studyStreak > 0
      },
      
      getWeeklyGoalProgress: () => {
        const { weeklyProgress } = get()
        return Math.min(weeklyProgress, 100)
      }
    }),
    {
      name: 'dashboard-store'
    }
  )
)
```

## Sample Component Using Multiple Zustand Stores

### Student Dashboard Component (`components/dashboard/StudentOverview.tsx`)
```typescript
import React, { useEffect } from 'react'
import { useUserStore, useSubscriptionStore, useSubjectStore, useDashboardStore, useUIStore } from '@/store'

export default function StudentOverview() {
  // Using multiple Zustand stores - This is the power of Zustand!
  const { user } = useUserStore()
  const { subscription, daysRemaining, hasAccess } = useSubscriptionStore()
  const { subjects, totalProgress } = useSubjectStore()
  const { stats, updateStats, loadingStats } = useDashboardStore()
  const { setLoading, addNotification } = useUIStore()
  
  useEffect(() => {
    if (hasAccess()) {
      updateStats()
    } else {
      addNotification({
        type: 'warning',
        message: 'Please subscribe to access your dashboard'
      })
    }
  }, [hasAccess, updateStats, addNotification])
  
  if (!hasAccess()) {
    return <SubscriptionRequired />
  }
  
  if (loadingStats) {
    return <DashboardSkeleton />
  }
  
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-blue-100">
          {daysRemaining > 0 
            ? `${daysRemaining} days remaining in your subscription` 
            : 'Your subscription has expired'
          }
        </p>
      </div>
      
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Overall Progress" 
          value={`${Math.round(totalProgress)}%`}
          icon="📊"
          color="bg-blue-500"
        />
        <StatCard
          title="Study Streak" 
          value={`${stats.studyStreak} days`}
          icon="🔥"
          color="bg-orange-500"
        />
        <StatCard
          title="Lessons Completed" 
          value={stats.completedLessons}
          icon="✅"
          color="bg-green-500"
        />
        <StatCard
          title="Average Score" 
          value={`${Math.round(stats.averageScore)}%`}
          icon="⭐"
          color="bg-yellow-500"
        />
      </div>
      
      {/* Subject Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">My Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={() => navigateToSubject(subject.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Recent Activity & Achievements */}
      <div className="grid md:grid-cols-2 gap-8">
        <RecentActivityCard />
        <AchievementsCard />
      </div>
    </div>
  )
}

// Helper component using UI store
function StatCard({ title, value, icon, color }: {
  title: string
  value: string | number
  icon: string
  color: string
}) {
  const { theme } = useUIStore()
  
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border border-gray-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`${color} rounded-full p-3 text-white text-2xl`}>
          {icon}
        </div>
      </div>
    </div>
  )
}
```

## API Integration with Zustand

### Custom Hooks for API Calls (`hooks/useAuth.ts`)
```typescript
import { useUserStore } from '@/store/userStore'
import { useSubscriptionStore } from '@/store/subscriptionStore'
import { useUIStore } from '@/store/uiStore'

export const useAuth = () => {
  const { login: setUser, logout: clearUser, setLoading: setUserLoading } = useUserStore()
  const { setSubscription } = useSubscriptionStore()
  const { addNotification } = useUIStore()
  
  const login = async (email: string, password: string) => {
    setUserLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setUser(data.user)
        if (data.subscription) {
          setSubscription(data.subscription)
        }
        addNotification({
          type: 'success',
          message: 'Welcome back!'
        })
        return { success: true }
      } else {
        addNotification({
          type: 'error',
          message: data.message || 'Login failed'
        })
        return { success: false, error: data.message }
      }
    } catch (error) {
      addNotification({
        type: 'error',
        message: 'Network error. Please try again.'
      })
      return { success: false, error: 'Network error' }
    } finally {
      setUserLoading(false)
    }
  }
  
  const logout = () => {
    clearUser()
    setSubscription(null)
    addNotification({
      type: 'info',
      message: 'Logged out successfully'
    })
  }
  
  return { login, logout }
}
```

## Development Phases with Zustand Learning

### Phase 1: Multi-page Website + Basic Zustand (Week 1-2)
```bash
# Install Zustand
npm install zustand

# Create basic stores
- userStore.ts (authentication)
- uiStore.ts (loading, modals)

# Learn: Basic store creation, actions, state updates
# Focus: Authentication flow, basic UI state
```

### Phase 2: Subscription Management + Persistence (Week 3-4)
```bash
# Add persistence middleware
# Create subscriptionStore.ts

# Learn: Zustand middleware, persistence, computed values
# Focus: Subscription logic, payment integration
```

### Phase 3: Complex Subject Management (Week 5-6)
```bash
# Create subjectStore.ts with complex nested state
# Create dashboardStore.ts for analytics

# Learn: Complex state updates, derived state, performance
# Focus: Learning progress, dashboard metrics
```

### Phase 4: Advanced Features (Week 7-8)
```bash
# Add notificationStore.ts for real-time updates
# Integrate with WebSockets

# Learn: Real-time state updates, WebSocket integration
# Focus: Live notifications, real-time features
```

## Key Benefits of Using Zustand in StudyBuddy

### ✅ **Learning-Friendly**
- Simple API perfect for learning state management
- No complex setup or boilerplate
- Easy to understand and debug

### ✅ **TypeScript Excellence**
- Full TypeScript support out of the box
- Type-safe state and actions
- Excellent developer experience

### ✅ **Performance**
- Only re-renders components that use changed state
- No unnecessary re-renders
- Lightweight and fast

### ✅ **Flexible Architecture**
- Multiple stores for different concerns
- Easy to combine stores when needed
- Scales well with application growth

### ✅ **Great for This Project**
- Perfect for user authentication state
- Excellent for subscription management
- Ideal for learning progress tracking
- Great for UI state management

## Deployment & Production

### Environment Variables
```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=https://api.studybuddy.co.ke
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_key
NEXT_PUBLIC_SOCKET_URL=wss://socket.studybuddy.co.ke

# Backend (.env)
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_jwt_secret
MPESA_CONSUMER_KEY=your_mpesa_key
MPESA_CONSUMER_SECRET=your_mpesa_secret
FLUTTERWAVE_SECRET_KEY=your_flutterwave_secret
```

### Production Build
```bash
# Frontend
npm run build
npm start

# Backend  
npm run build
npm run start:prod
```

## Success Metrics & Analytics

### User Engagement (Tracked via Zustand)
- Average study session duration
- Daily/weekly active users
- Subject completion rates
- Learning streak maintenance

### Business Metrics
- Subscription conversion rates
- Monthly recurring revenue (MRR)
- Customer lifetime value (CLV)
- Churn rate analysis

### Educational Impact
- Student performance improvements
- Subject mastery rates
- Time-to-completion analytics
- Knowledge retention metrics

## Next Steps & Future Enhancements

### Phase 2 Features
- **Mobile App**: React Native with Zustand
- **Offline Mode**: Cached content for poor connectivity
- **AI Recommendations**: ML-powered study suggestions
- **Social Features**: Student communities and peer learning

### Advanced Zustand Features to Explore
- **Middleware**: Custom middleware for logging, analytics
- **Subscriptions**: External state synchronization
- **DevTools**: Enhanced debugging capabilities
- **Performance**: Optimizations for large datasets

---

## 🎯 Final Learning Objectives

By the end of this project, you will have mastered:

1. **Zustand Fundamentals**: Store creation, actions, state updates
2. **Advanced Patterns**: Multiple stores, derived state, persistence
3. **TypeScript Integration**: Type-safe state management
4. **Real-world Application**: Authentication, subscriptions, progress tracking
5. **Performance Optimization**: Efficient re-rendering and state updates
6. **Production Deployment**: Scalable state architecture

**StudyBuddy with Zustand - Where Learning Meets Modern State Management!** 🎓⚡️

---

*This README will be updated as we progress through each development phase, adding more Zustand examples and patterns as we learn and implement them in the StudyBuddy platform.*