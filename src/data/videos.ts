import { Video } from "@/types";

export const allVideos: Video[] = [
  {
    id: "v6JeRg8wDEM",
    slug: "laravel-isdirty-isclean-waschanged",
    title: "Laravel - isDirty, isClean and wasChanged Explained",
    description: "Deep dive into model attribute state tracking in Laravel Eloquent. Learn when and how to properly use isDirty(), isClean(), and wasChanged() during lifecycle events and database updates with real-world scenarios.",
    thumbnailUrl: "https://img.youtube.com/vi/v6JeRg8wDEM/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=v6JeRg8wDEM",
    youtubeVideoId: "v6JeRg8wDEM",
    category: "Laravel",
    tags: ["Laravel", "Eloquent", "PHP", "ORM", "Model"],
    publishedAt: "2024-03-15",
    duration: "08:12",
    views: "2.1K",
    featured: true,
    resources: [
      {
        title: "Model State Code Example",
        url: "https://github.com/coooltips",
        type: "github"
      },
      {
        title: "Laravel Eloquent Docs",
        url: "https://laravel.com/docs/eloquent",
        type: "docs"
      }
    ]
  },
  {
    id: "qkRTqCwF5gw",
    slug: "create-custom-laravel-stub-file",
    title: "How to Create Custom Laravel Stub Files for Rapid Development",
    description: "Tired of rewriting the same boilerplate in your generated controllers, models, and migrations? Learn how to customize Laravel's internal stubs using artisan stub:publish to streamline your team's workflow.",
    thumbnailUrl: "https://img.youtube.com/vi/qkRTqCwF5gw/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=qkRTqCwF5gw",
    youtubeVideoId: "qkRTqCwF5gw",
    category: "Developer Tools",
    tags: ["Laravel", "Artisan", "Stubs", "Productivity", "CLI"],
    publishedAt: "2024-02-28",
    duration: "17:38",
    views: "1.8K",
    featured: true,
    resources: [
      {
        title: "Custom Stubs Repository",
        url: "https://github.com/coooltips",
        type: "github"
      }
    ]
  },
  {
    id: "UWP0jLEjbus",
    slug: "laravel-route-domain-hacks",
    title: "Laravel Route Domain HACKS: Multi-tenant & Subdomain Routing",
    description: "Master multi-domain and subdomain routing in Laravel without complex packages. Learn route grouping by domain, dynamic tenant parameter binding, and cross-domain URL generation techniques.",
    thumbnailUrl: "https://img.youtube.com/vi/UWP0jLEjbus/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=UWP0jLEjbus",
    youtubeVideoId: "UWP0jLEjbus",
    category: "Laravel",
    tags: ["Laravel", "Routing", "Subdomains", "Multi-tenant", "Architecture"],
    publishedAt: "2024-02-10",
    duration: "15:20",
    views: "3.4K",
    featured: true,
    resources: [
      {
        title: "Domain Routing Snippet",
        url: "https://github.com/coooltips",
        type: "github"
      }
    ]
  },
  {
    id: "Syw7nR-rr58",
    slug: "avoid-xss-nl2br-laravel-vulnerability",
    title: "Laravel Security: Avoid XSS Vulnerabilities When Rendering User Text",
    description: "Essential web security tip: why combining nl2br() with unescaped Blade tags causes severe Cross-Site Scripting (XSS) vulnerabilities, and how to safely render line breaks using modern Blade directives.",
    thumbnailUrl: "https://img.youtube.com/vi/Syw7nR-rr58/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Syw7nR-rr58",
    youtubeVideoId: "Syw7nR-rr58",
    category: "Backend Development",
    tags: ["Security", "XSS", "Laravel", "Blade", "PHP"],
    publishedAt: "2024-01-22",
    duration: "10:30",
    views: "1.2K",
    featured: false,
    resources: [
      {
        title: "OWASP XSS Prevention Cheat Sheet",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
        type: "cheatsheet"
      }
    ]
  },
  {
    id: "Syw7nR-rr58",
    slug: "laravel-observers-and-global-scopes-new-way",
    title: "Laravel Observers and Global Scopes: The Modern Clean Pattern",
    description: "Discover cleaner, more maintainable ways to use model observers, anonymous global scopes, and scoped attributes without polluting your service providers or creating hard-to-debug side effects.",
    thumbnailUrl: "https://img.youtube.com/vi/Syw7nR-rr58/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Syw7nR-rr58",
    youtubeVideoId: "Syw7nR-rr58",
    category: "Laravel",
    tags: ["Laravel", "Eloquent", "Scopes", "Observers", "Architecture"],
    publishedAt: "2024-01-08",
    duration: "14:15",
    views: "2.5K",
    featured: true,
    resources: [
      {
        title: "Scoped Query Examples",
        url: "https://github.com/coooltips",
        type: "github"
      }
    ]
  },
  {
    id: "m53qrRviA00",
    slug: "why-enable-laravel-model-strict-mode",
    title: "Why You Must Enable Strict Mode in Laravel Eloquent Models",
    description: "Model::shouldBeStrict() prevents lazy loading N+1 performance bugs, prevents unfillable attribute assignments silently failing, and stops accessing nonexistent attributes. Here is how to configure it properly.",
    thumbnailUrl: "https://img.youtube.com/vi/m53qrRviA00/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=m53qrRviA00",
    youtubeVideoId: "m53qrRviA00",
    category: "Programming Tips",
    tags: ["Laravel", "Performance", "Debugging", "Strict Mode", "Best Practices"],
    publishedAt: "2023-12-18",
    duration: "12:38",
    views: "1.9K",
    featured: false,
  },
  {
    id: "MqXGcl39uyU",
    slug: "safely-drop-database-tables-with-migrations",
    title: "Dropping Database Tables Safely with Laravel Migrations",
    description: "Learn zero-downtime techniques when dropping tables or columns in production. Understand foreign key constraints, Schema::disableForeignKeyConstraints, and rollback strategies.",
    thumbnailUrl: "https://img.youtube.com/vi/MqXGcl39uyU/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=MqXGcl39uyU",
    youtubeVideoId: "MqXGcl39uyU",
    category: "MySQL",
    tags: ["MySQL", "Database", "Migrations", "DevOps", "Laravel"],
    publishedAt: "2023-12-02",
    duration: "09:06",
    views: "1.4K",
    featured: false,
  },
  {
    id: "4TCUvKw-1fs",
    slug: "the-directory-helper-class-in-laravel",
    title: "The Powerful Directory & File Helper Classes in Laravel",
    description: "Explore hidden gems in the Illuminate\\Support\\Facades\\File and Storage facades. Cleanly scan recursive directories, safely move temporary uploads, and manage filesystem trees.",
    thumbnailUrl: "https://img.youtube.com/vi/4TCUvKw-1fs/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=4TCUvKw-1fs",
    youtubeVideoId: "4TCUvKw-1fs",
    category: "Developer Tools",
    tags: ["Filesystem", "Helpers", "Laravel", "Storage", "PHP"],
    publishedAt: "2023-11-15",
    duration: "18:32",
    views: "2.2K",
    featured: false,
  },
  {
    id: "7cVQi_I_9aw",
    slug: "laravel-pipeline-facade-design-pattern",
    title: "How to Implement Pipeline Facade with Design Pattern in Laravel",
    description: "Deep dive into the Pipeline design pattern in Laravel. Discover how requests, payments, and multi-stage operations can be orchestrated cleanly using reusable pipe classes.",
    thumbnailUrl: "https://img.youtube.com/vi/7cVQi_I_9aw/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=7cVQi_I_9aw",
    youtubeVideoId: "7cVQi_I_9aw",
    category: "Architecture",
    tags: ["Design Patterns", "Pipelines", "Architecture", "Laravel", "Backend"],
    publishedAt: "2023-11-01",
    duration: "25:47",
    views: "3.1K",
    featured: true,
  },
  {
    id: "UJSC_gVioBM",
    slug: "php-builtin-functions-hidden-source",
    title: "PHP array_sum, count and is_bool Functions Hidden Source Code",
    description: "Explore how native C code in Zend Engine executes everyday PHP array functions. Understand algorithmic complexities and internal memory layouts under the hood.",
    thumbnailUrl: "https://img.youtube.com/vi/UJSC_gVioBM/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=UJSC_gVioBM",
    youtubeVideoId: "UJSC_gVioBM",
    category: "PHP",
    tags: ["PHP", "C Source", "Zend Engine", "Internals", "Optimization"],
    publishedAt: "2023-10-18",
    duration: "09:34",
    views: "1.8K",
    featured: false,
  },
  {
    id: "gTZh2-kt2yM",
    slug: "laravel-avoid-vss-vulnerability",
    title: "Laravel: Avoid the VSS Vulnerability - Don't Use nl2br Function",
    description: "Critical security tip on XSS vulnerabilities when outputting user input with nl2br in Blade templates. Learn the secure alternative to render newlines safely.",
    thumbnailUrl: "https://img.youtube.com/vi/gTZh2-kt2yM/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=gTZh2-kt2yM",
    youtubeVideoId: "gTZh2-kt2yM",
    category: "Security",
    tags: ["Security", "Vulnerability", "Laravel", "Blade", "XSS"],
    publishedAt: "2023-10-02",
    duration: "06:30",
    views: "2.8K",
    featured: false,
  },
  {
    id: "BfFryz6aPFs",
    slug: "laravel-files-unlink-helper-class",
    title: "Laravel Files Unlink Helper Class & Safe File Deletion",
    description: "Prevent runtime exceptions and file lock errors when removing cached assets or user uploads. Build a resilient file unlink helper in your Laravel toolkit.",
    thumbnailUrl: "https://img.youtube.com/vi/BfFryz6aPFs/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=BfFryz6aPFs",
    youtubeVideoId: "BfFryz6aPFs",
    category: "Developer Tools",
    tags: ["Filesystem", "Helpers", "Storage", "Laravel", "PHP"],
    publishedAt: "2023-09-14",
    duration: "12:04",
    views: "1.6K",
    featured: false,
  },
];

export const featuredVideos = allVideos.filter((v) => v.featured);
export const latestVideos = allVideos.slice(0, 6);
