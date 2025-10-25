# TicketFlow - React Implementation

A complete ticket management web application built with React, featuring authentication, dashboard analytics, and full CRUD operations for ticket management.

---
## 🔐 Test Credentials

Use these credentials to test the login functionality:

*Login:*
- Email: admin@ticket.com
- Password: password123

*Or create a new account* using the Signup page (any email/password will work).

---
## 🚀 Features

### ✅ Landing Page
- Hero section with wavy SVG background
- Decorative circular gradient elements
- Feature showcase cards with shadows
- Responsive design (mobile, tablet, desktop)
- Max-width 1440px centered layout
- Call-to-action buttons

### ✅ Authentication System
- *Login Page* with form validation
- *Signup Page* with account creation
- Session management using localStorage with key: ticketapp_session
- Protected routes (Dashboard & Tickets require authentication)
- Toast notifications for success/error feedback
- Automatic redirection based on auth state

### ✅ Dashboard
- Summary statistics:
  - Total Tickets
  - Open Tickets
  - In Progress Tickets
  - Closed Tickets
- Color-coded stat cards
- Navigation to Ticket Management
- Logout functionality
- Welcome message with user name

### ✅ Ticket Management (Full CRUD)
- *Create*: Add new tickets with validation
- *Read*: View all tickets in card layout
- *Update*: Edit existing tickets
- *Delete*: Remove tickets with confirmation
- Real-time form validation
- Status badges with color coding:
  - open → Green (#10b981)
  - in_progress → Amber (#f59e0b)
  - closed → Gray (#6b7280)
- Toast notifications for all actions

---

## 🛠 Tech Stack

- *Framework*: React 18
- *State Management*: React Context API + useState
- *Styling*: Inline CSS with responsive design
- *Authentication*: localStorage simulation
- *Routing*: Manual page state management
- *Notifications*: Custom Toast component

---

## 📂 Project Structure


ticketflow-react/
├── public/
│   └── index.html
├── src/
│   ├── App.js           # Main application component
│   ├── index.js         # React entry point
│   └── index.css        # Global styles
├── package.json
└── README.md


### Component Breakdown

*App.js includes:*
1. AuthProvider & AuthContext - Authentication state management
2. RequireAuth - restriction for unauthorized users attempting to access resticted routes
3. Toast - Notification component
4. LandingPage - Marketing homepage
5. LoginPage - User authentication
6. SignupPage - Account creation
7. Dashboard - Analytics overview
8. TicketManagement - Full CRUD operations
9. StatCard - Dashboard statistics cards
10. Footer - Consistent footer across pages

---

## 🎨 Design Specifications

### Layout
- *Max Width*: 1440px (centered on large screens)
- *Hero Section*: Wavy SVG background at bottom
- *Decorative Elements*: 
  - Gradient blur circles (300px × 300px, 200px × 200px)
  - Positioned absolutely with blur filters
- *Cards*: Box shadows, rounded corners (12px), semi-transparent backgrounds

### Colors
- *Background*: linear-gradient(180deg, #0f172a 0%, #1e293b 100%)
- *Primary Button*: linear-gradient(135deg, #3b82f6, #2563eb)
- *Status Colors*:
  - Open: #10b981 (Green)
  - In Progress: #f59e0b (Amber)
  - Closed: #6b7280 (Gray)
- *Text*: 
  - Primary: #ffffff
  - Secondary: #94a3b8
  - Muted: #cbd5e1

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🔒 Security & Session Management

### Authentication Flow
1. User logs in with credentials
2. Session object stored in localStorage with key ticketapp_session
3. Session includes: { email, name, id, password }
4. Protected pages check for session on mount
5. Logout clears session and redirects to landing page

### Session Structure
javascript
{
  email: "admin@ticket.com",
  name: "Admin User",
  id: 1
}


### Protected Routes
- /dashboard - Requires valid session
- /tickets - Requires valid session
- Unauthorized access redirects to login

---

## ✅ Validation Rules

### Ticket Form
- *title* (required): Cannot be empty
- *status* (required): Must be one of: "open", "in_progress", "closed"
- *description* (required): Cannot be empty
- *priority* (optional): No validation

### Login Form
- *email* (required): Must not be empty
- *password* (required): Must not be empty

### Signup Form
- *name* (required): Full name is required
- *email* (required): Email is required
- *password* (required): Password is required

---

## 🎯 Error Handling

### Types of Errors Handled
1. *Form Validation Errors*: Inline error messages below fields
2. *Authentication Errors*: Toast notifications
3. *Empty States*: User-friendly messages

### Error Messages
- "Email is required"
- "Password is required"
- "Invalid credentials"
- "Title is required"
- "Invalid status"

---

## 📝 License

MIT License - Feel free to use this for your projects!

---

## 👨‍💻 Author

Created for Frontend Stage 2 Task - Multi-Framework Ticket Web App

---

## 📞 Support

For issues or questions, please check the code comments or reach out to the development team.

---

*Credentials:*
- Email: admin@ticket.com
- Password: password123

*Session Storage Key:* ticketapp_session

*Status Values:* open, in_progress, closed

---
