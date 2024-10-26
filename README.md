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
│   │   ├── /(admin)                    // Admin dashboard and pages
│   │   │   └── /admin
│   │   │     ├── layout.tsx            // Admin layout, applied to all admin pages
│   │   │     ├── page.tsx              // Admin dashboard main page (e.g., /admin)
│   │   │     ├── /user-management
│   │   │     │   └── page.tsx          // User management (e.g., /admin/user-management)
│   │   │     ├── /product-management
│   │   │     │   └── page.tsx          // Product management (e.g., /admin/product-management)
│   │   │     └── /order-management
│   │   │       └── page.tsx            // Order management (e.g., /admin/order-management)
│   │   │
│   │   ├── /cart
│   │   │   └── page.tsx                // Cart page
│   │   ├── /checkout
│   │   │   └── page.tsx                // Checkout page
│   │   ├── /orders
│   │   │   └── page.tsx                // Order History page
│   │   ├── /product
│   │   │   ├── page.tsx                // Products listing page
│   │   │   └── /[id]
│   │   │       └── page.tsx            // Product Details page with dynamic route
│   │   │
│   │   ├── /contact
│   │   │   └── page.tsx                // Contact page
│   │   ├── /layout.tsx                 // Root layout for common components (Header/Footer)
│   │   ├── /global-error.tsx           // Global error handling
│   │   └── /page.tsx                   // Home page
│   │
│   ├── /components                     // Reusable components
│   │   ├── /admin                      // Admin-specific reusable components
│   │   │   ├── AdminSidebar.tsx        // Admin Sidebar component
│   │   └── /common                     // General reusable components (buttons, form elements)
│   │       ├── Header.tsx              // Header component with navigation links
│   │       ├── Footer.tsx              // Footer component with links
│   │       └── ProductCard.tsx         // Product card component for listings
│   │
│   ├── /hooks
│   │   ├── useAuth.ts                  // Hook for managing authentication and roles
│   │   ├── useRedux.ts                 // Redux helper hook
│   │   └── useSSR.ts                   // Hook for SSR/CSR logic management
│   │
│   ├── /layouts
│   │   ├── AdminLayout.tsx             // Layout for admin dashboard
│   │   ├── MainLayout.tsx              // Main layout for non-admin pages
│   │   └── ProductLayout.tsx           // Layout for product detail page
│   │
│   ├── /redux
│   │   ├── /slices
│   │   │   ├── authSlice.ts            // Auth slice (login/logout, session management)
│   │   │   ├── userSlice.ts            // User state management slice
│   │   │   ├── productSlice.ts         // Product data management
│   │   │   ├── cartSlice.ts            // Cart state management
│   │   │   └── orderSlice.ts           // Order management slice
│   │   ├── store.ts                    // Redux store configuration
│   │   └── /types
│   │       └── reduxTypes.ts           // Redux-related TypeScript types
│   │
│   ├── /styles
│   │   ├── /admin
│   │   │   └── dashboard.module.css    // Admin-specific CSS modules
│   │   ├── /user
│   │   │   └── profile.module.css      // User-specific CSS modules
│   │   └── globals.css                 // Global styles (including NextUI overrides)
│   │
│   └── /types
│       ├── authTypes.ts                // Authentication-related TypeScript types
│       └── layoutTypes.ts              // Layout-related TypeScript types
│
├── next.config.mjs                     // Next.js configuration
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```
