export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  views: string;
}

export const allVideos: Video[] = [
  {
    id: "v6JeRg8wDEM",
    title: "Laravel - isDirty, isClean and wasChanged",
    description: "Learn the difference between isDirty, isClean, and wasChanged in Laravel models with real examples.",
    duration: "08:12",
    views: "2.1K"
  },
  {
    id: "qkRTqCwF5gw",
    title: "Laravel isDirty vs isClean vs wasChanged Explained",
    description: "Deep dive into model attribute tracking in Laravel for efficient data handling.",
    duration: "12:45",
    views: "1.8K"
  },
  {
    id: "UWP0jLEjbus",
    title: "Laravel Route Domain HACKS",
    description: "Master domain-driven routing in Laravel to build scalable and organized applications.",
    duration: "15:20",
    views: "3.4K"
  },
  {
    id: "Syw7nR-rr58",
    title: "Laravel: Avoid the VSS Vulnerability",
    description: "Essential security tips: why you shouldn't use nl2br and how to properly handle line breaks.",
    duration: "10:30",
    views: "1.2K"
  },
  {
    id: "m53qrRviA00",
    title: "Laravel Observers and Global Scopes",
    description: "Discover the new way to use observers and global scopes in your Laravel projects.",
    duration: "14:15",
    views: "2.5K"
  },
  {
    id: "70rLzN_F8_c",
    title: "Laravel Model Strict Mode",
    description: "Why you should enable strict mode in your Laravel models and how it saves your development time.",
    duration: "09:50",
    views: "1.9K"
  },
  {
    id: "H_hP9Z9Z_Xo",
    title: "Dropping Database Tables with Migrations",
    description: "Best practices for safely managing database schema changes using Laravel migrations.",
    duration: "11:20",
    views: "1.4K"
  },
  {
    id: "uKmsE3Tz4yE",
    title: "The Directory Helper Class",
    description: "How to use the powerful Directory helper class in Laravel for file management.",
    duration: "13:40",
    views: "2.2K"
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder for additional content
    title: "Laravel Advanced Authorization",
    description: "Mastering policies and gate definitions for complex application permissions.",
    duration: "22:15",
    views: "4.1K"
  },
  {
    id: "y6120QOlsfU", // Placeholder
    title: "PHP 8.3 New Features",
    description: "A quick look at the most impactful changes in PHP 8.3 for Laravel developers.",
    duration: "18:40",
    views: "5.6K"
  },
  {
    id: "97m1H2U3V4", // Placeholder
    title: "Mastering Laravel Vite",
    description: "Optimize your frontend assets and development workflow with Vite in Laravel.",
    duration: "16:25",
    views: "2.8K"
  },
  {
    id: "5L6M7N8O9P", // Placeholder
    title: "Laravel Pulse Explained",
    description: "How to monitor your application health and performance in real-time.",
    duration: "20:05",
    views: "6.2K"
  }
];

export const featuredVideos = allVideos.slice(0, 8);
