# Church Management System (ERP)

A comprehensive Church Management System built with Next.js, designed specifically for evangelical churches to manage all aspects of their operations efficiently.

## 🕍 About The Project

This Church Management System (ERP) is a complete solution for evangelical churches to manage members, events, finances, ministries, and more. The system provides an intuitive interface with all the essential tools needed to streamline church administration.

### Key Features:
- Member database management
- Event planning and attendance tracking
- Financial management (tithes, offerings, expenses)
- Ministry and small group organization
- Media and content management
- Volunteer coordination
- Prayer request handling
- Campaign management
- Inventory tracking
- Compliance management
- Detailed reporting
- User access control
- Calendar management
- Donations tracking
- Settings configuration

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Recharts](https://recharts.org/) - Charting library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/church-management-system.git
cd church-management-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📋 System Modules

### 1. Dashboard
Overview of all church activities with key metrics and recent updates.

### 2. Members Management
- Member database with contact information
- Status tracking (active, inactive)
- Member profiles and history
- Detailed member information with attendance and financial records

### 3. Groups & Small Groups
- Small group management
- Member assignment to groups
- Group leaders and coordinators
- Meeting schedules and locations

### 4. Events Calendar
- Event scheduling and management
- Event details and descriptions
- Participant registration
- Calendar view with monthly planning

### 5. Attendance Tracking
- Attendance records for events
- Member participation tracking
- Visitor registration
- Frequency reports

### 6. Financial Management
- Income tracking (tithes, offerings, donations)
- Expense management
- Financial reports and summaries
- Donation tracking and management

### 7. Ministries
- Ministry organization and management
- Ministry leaders and members
- Ministry activities and events
- Department coordination

### 8. Media Library
- Storage and organization of media files
- Video, audio, and document management
- Sermon archives
- Content sharing

### 9. User Management
- System user accounts
- Role-based access control
- User permissions management
- Administrator settings

### 10. Campaigns
- Fundraising campaigns
- Special collections
- Progress tracking
- Goal management

### 11. Volunteers
- Volunteer database
- Skill tracking
- Availability management
- Volunteer scheduling

### 12. Prayer Requests
- Prayer request submission and management
- Request tracking and fulfillment
- Prayer ministry coordination
- Prayer chain communication

### 13. Testimonials
- Member testimonials and stories
- Testimonial approval workflow
- Public sharing options
- Inspiration gallery

### 14. Classes & Courses
- Educational program management
- Class scheduling
- Student enrollment
- Curriculum tracking

### 15. Inventory
- Church asset tracking
- Equipment management
- Stock levels and reorder alerts
- Asset maintenance

### 16. Vendors
- Supplier database
- Service provider management
- Contract tracking
- Vendor evaluation

### 17. Assets
- Church property management
- Asset valuation
- Depreciation tracking
- Facility management

### 18. Planning
- Strategic planning tools
- Project management
- Goal tracking
- Timeline visualization

### 19. Compliance
- Legal requirement tracking
- Document management
- Renewal reminders
- Regulation adherence

### 20. Reports
- Financial reports
- Membership analytics
- Attendance summaries
- Custom report generation
- Data visualization with charts

### 21. Settings
- Church information configuration
- System preferences
- Notification settings
- Theme customization
- Security configuration

### 22. Donations
- Tithe and offering management
- Donation tracking
- Payment method support
- Receipt generation

### 23. Calendar
- Monthly event calendar
- Event scheduling
- Date navigation
- Event categorization

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── members/         # Members management
│   │   ├── [id]/        # Member profile pages
│   │   │   └── profile/ # Detailed member profile
│   │   └── page.tsx     # Members list
│   ├── groups/          # Small groups
│   │   └── page.tsx     # Groups management
│   ├── events/          # Events calendar
│   │   └── page.tsx     # Events management
│   ├── attendance/      # Attendance tracking
│   ├── finance/         # Financial management
│   ├── donations/       # Donations management
│   │   └── page.tsx     # Donations tracking
│   ├── ministries/      # Ministry management
│   ├── media/           # Media library
│   ├── users/           # User management
│   ├── campaigns/       # Campaign management
│   ├── volunteers/      # Volunteer coordination
│   ├── prayer-requests/ # Prayer requests
│   ├── testimonials/    # Member testimonials
│   ├── classes/         # Classes and courses
│   ├── inventory/       # Inventory management
│   ├── vendors/         # Vendor management
│   ├── assets/          # Asset tracking
│   ├── planning/        # Strategic planning
│   ├── compliance/      # Legal compliance
│   ├── reports/         # Reporting system
│   │   └── dashboard/   # Reports dashboard
│   ├── calendar/        # Calendar management
│   │   └── page.tsx     # Calendar view
│   ├── settings/        # System settings
│   │   └── page.tsx     # Settings configuration
│   └── page.tsx         # Main dashboard
├── components/          # Reusable UI components
│   ├── layout/          # Layout components
│   ├── dashboard/       # Dashboard components
│   ├── ui/              # shadcn/ui components
│   └── theme-provider.tsx # Theme provider
└── lib/                 # Utility functions
    └── utils.ts         # Helper functions
```

## 🎨 UI/UX Features

### Enhanced Dashboard
- Interactive statistics cards with trend indicators
- Real-time activity feed
- Financial performance charts
- Campaign progress tracking
- Member status visualization

### Modern Design System
- Dark/light theme support
- Responsive layout for all devices
- Consistent component design
- Smooth animations and transitions
- Accessible color scheme

### Advanced Components
- Interactive calendar with event management
- Detailed member profiles with tabbed navigation
- Comprehensive reporting dashboard
- Filterable and searchable data tables
- Custom form components

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

## 👨‍💻 Developed by

**Codnodo Studio**