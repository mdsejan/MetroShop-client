# MetroShop

### Live URL: &nbsp; &nbsp; [metroshop.vercel.app](https://metroshop.vercel.app/)

### Server Repo: &nbsp; &nbsp; [MetroShop Server Repo](https://github.com/mdsejan/MetroShop-server)

## Description:

MetroShop is a full-stack e-commerce platform built to provide a seamless shopping experience for users while offering robust administrative functionalities.

## 👨‍💻 Technologies Used:

- Next.js (v14) for server-side rendering, static site generation, and powerful routing.
- TypeScript for type-safe development.
- Redux for state management.
- NextUI for beautiful and responsive UI components.

## 🛠️ Key Features:

## 🚀 Project Folder Structure:

This project follows an industry-standard folder structure designed for scalability, maintainability, and ease of collaboration.

```
/my-nextjs-app
├── /public
├── /src
│   ├── /app
│   │   ├── /admin
│   │   │   ├── page.tsx               // Admin dashboard page
│   │   │   ├── layout.tsx             // Admin layout (sidebars, headers, etc.)
│   │   │   └── settings.tsx           // Admin settings page
│   │   ├── /user
│   │   │   ├── page.tsx               // User dashboard page
│   │   │   ├── layout.tsx             // User layout (navigation, footers, etc.)
│   │   │   └── profile.tsx            // User profile page
│   │   ├── layout.tsx                 // Root layout for common components (Header/Footer)
│   │   ├── global-error.tsx           // Global error handling
│   │   └── page.tsx                   // Root index page
│   ├── /components
│   │   ├── /admin                     // Admin-specific reusable components
│   │   │   ├── DashboardNav.tsx       // Admin navigation component
│   │   └── /user                      // User-specific reusable components
│   │       ├── ProfileCard.tsx        // User profile card component
│   ├── /hooks
│   │   ├── useAuth.ts                 // Hook for managing authentication and roles
│   │   ├── useRedux.ts                // Redux helper hook
│   │   └── useSSR.ts                  // Hook for SSR/CSR logic management
│   ├── /layouts
│   │   ├── AdminLayout.tsx            // Layout for admin dashboard
│   │   └── UserLayout.tsx             // Layout for user dashboard
│   ├── /redux
│   │   ├── /slices
│   │   │   ├── authSlice.ts           // Auth slice (login/logout, session management)
│   │   │   ├── userSlice.ts           // User state management slice
│   │   │   └── adminSlice.ts          // Admin state management slice
│   │   ├── store.ts                   // Redux store configuration
│   │   └── /types
│   │       └── reduxTypes.ts          // Redux-related TypeScript types
│   ├── /styles
│   │   ├── /admin
│   │   │   └── dashboard.module.css   // Admin-specific CSS modules
│   │   ├── /user
│   │   │   └── profile.module.css     // User-specific CSS modules
│   │   └── globals.css                // Global styles (including NextUI overrides)
│   └── /types
│       ├── authTypes.ts               // Authentication-related TypeScript types
│       └── layoutTypes.ts             // Layout-related TypeScript types
├── next.config.mjs                    // Next.js configuration
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```
