# Church Management System (ERP)

## 🌐 Language Options / Opções de Idioma

- 🇺🇸 [English](README_EN.md) (this file)
- 🇧🇷 [Portuguese (Brazil) - Português do Brasil](README.md)

---

A comprehensive church management system built with Next.js, specifically designed for evangelical churches to manage all their operations efficiently.

## 🕍 About the Project

This Church Management System (ERP) is a complete solution for evangelical churches to manage members, events, finances, ministries, and more. The system offers an intuitive interface with all the essential tools needed to streamline church administration.

### Key Features:
- Member database management
- Event planning and attendance tracking
- Financial management (tithes, offerings, expenses)
- Ministries and small groups organization
- Media and content management
- Volunteer coordination
- Prayer request handling
- Campaign management
- Inventory control
- Compliance management
- Detailed reporting
- User access control
- Event calendar
- Donation tracking
- Customizable settings

## 🛠️ Technologies Used

- [Next.js 15](https://nextjs.org/) - React Framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable Component Library
- [Lucide React](https://lucide.dev/) - Beautiful Icons
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Recharts](https://recharts.org/) - Charting Library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme Switching

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JhonasMartins/churchERP.git
cd churchERP
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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

### 2. Member Management
- Member database with contact information
- Status control (active, inactive)
- Member profiles and history
- Detailed member information with attendance and financial records

### 3. Groups and Small Groups
- Small group management
- Member assignment to groups
- Group leaders and coordinators
- Meeting times and locations

### 4. Event Calendar
- Event scheduling and management
- Event details and descriptions
- Participant registration
- Calendar view with monthly planning

### 5. Attendance Tracking
- Attendance records for events
- Member participation control
- Visitor registration
- Attendance reports

### 6. Financial Management
- Revenue control (tithes, offerings, donations)
- Expense management
- Financial reports and summaries
- Donation and contribution control

### 7. Ministries
- Ministry organization and management
- Ministry leaders and members
- Ministry activities and events
- Department coordination

### 8. Media Library
- Media file storage and organization
- Video, audio, and document management
- Sermon archive
- Content sharing

### 9. User Management
- System user accounts
- Role-based access control
- User permission management
- Admin settings

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
- Submission and management of prayer requests
- Request fulfillment tracking
- Prayer ministry coordination
- Prayer chain communication

### 13. Testimonials
- Member testimonials and stories
- Testimonial approval flow
- Public sharing options
- Inspiration gallery

### 14. Classes and Courses
- Educational program management
- Class scheduling
- Student enrollment
- Curriculum control

### 15. Inventory
- Church asset control
- Equipment management
- Stock levels and reorder alerts
- Asset maintenance

### 16. Vendors
- Vendor database
- Service provider management
- Contract control
- Vendor evaluation

### 17. Assets
- Church property management
- Asset valuation
- Depreciation control
- Facility management

### 18. Planning
- Strategic planning tools
- Project management
- Goal tracking
- Schedule visualization

### 19. Compliance
- Legal requirement control
- Document management
- Renewal reminders
- Regulatory compliance

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
- Donation control
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
├── app/                 # Next.js router pages
│   ├── members/         # Member management
│   │   ├── [id]/        # Member profile pages
│   │   │   └── profile/ # Detailed member profile
│   │   └── page.tsx     # Member list
│   ├── groups/          # Small groups
│   │   └── page.tsx     # Group management
│   ├── events/          # Event calendar
│   │   └── page.tsx     # Event management
│   ├── attendance/      # Attendance tracking
│   ├── finance/         # Financial management
│   ├── donations/       # Donation management
│   │   └── page.tsx     # Donation control
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
│   ├── assets/          # Asset control
│   ├── planning/        # Strategic planning
│   ├── compliance/      # Legal compliance
│   ├── reports/         # Reporting system
│   │   └── dashboard/   # Reports dashboard
│   ├── calendar/        # Calendar management
│   │   └── page.tsx     # Calendar view
│   ├── settings/        # System settings
│   │   └── page.tsx     # Preference configuration
│   └── page.tsx         # Main dashboard
├── components/          # Reusable UI components
│   ├── layout/          # Layout components
│   ├── dashboard/       # Dashboard components
│   ├── ui/              # shadcn/ui components
│   └── theme-provider.tsx # Theme provider
├── db/                  # PostgreSQL database APIs
│   ├── index.ts         # Export of all APIs
│   ├── config.ts        # Database configuration
│   ├── types.ts         # Database entity types
│   ├── members.ts       # Member management API
│   ├── groups.ts        # Group management API
│   ├── events.ts        # Event management API
│   ├── attendance.ts    # Attendance tracking API
│   ├── donations.ts     # Donation management API
│   ├── ministries.ts    # Ministry management API
│   ├── users.ts         # User management API
│   ├── campaigns.ts     # Campaign management API
│   ├── financial.ts     # Financial management API
│   └── volunteers.ts    # Volunteer coordination API
└── lib/                 # Utility functions
    └── utils.ts         # Helper functions
```

## 🗄️ Database Layer

The system includes a complete layer of APIs for accessing the PostgreSQL database, designed to manage all system entities:

### Database Entities
- **Members**: Complete information about church members
- **Groups**: Small group and cell management
- **Events**: Event calendar and scheduling
- **Attendance**: Event attendance records
- **Donations**: Tithe, offering, and donation control
- **Ministries**: Church ministry organization
- **Users**: System account and permission management
- **Campaigns**: Campaign and fundraising tracking
- **Financial**: Revenue and expense management
- **Volunteers**: Volunteer coordination and skills

### Implementation Features
- Async APIs for all CRUD operations
- Static typing with TypeScript for safety
- Modular structure with separate files per entity
- Mock data for development and testing
- Ready for connection to real PostgreSQL database

### Database Configuration
To connect the system to a real PostgreSQL database, configure the environment variables:
```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=database_name
DB_PASSWORD=your_password
DB_PORT=5432
```

Then uncomment the connection lines in the `src/db/config.ts` file.

## 🎨 UI/UX Features

### Enhanced Dashboard
- Interactive statistics cards with trend indicators
- Real-time activity feed
- Financial performance charts
- Campaign progress tracking
- Member status visualization

### Modern Design System
- Light/dark theme support
- Responsive layout for all devices
- Consistent component design
- Smooth animations and transitions
- Accessible color scheme

### Advanced Components
- Interactive calendar with event management
- Detailed member profiles with tab navigation
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

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

## 👨‍💻 Developed by

**Codnodo Studio**