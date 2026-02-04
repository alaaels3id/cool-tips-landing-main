export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: string;
    published_at: string;
    owner_name: string;
    views: number;
    image: string;
    short_description: string;
    content: string; // Long description is the same as content
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "mastering-laravel-service-containers",
        title: "Mastering Laravel Service Containers",
        category: "Laravel",
        published_at: "2024-03-15",
        owner_name: "John Doe",
        views: 1250,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
        short_description: "Learn how to use dependency injection and service containers effectively in Laravel.",
        content: "Laravel's service container is a powerful tool for managing class dependencies and performing dependency injection. Dependency injection is a fancy phrase that essentially means this: class dependencies are 'injected' into the class via the constructor or, in some cases, 'setter' methods.\n\nIn this post, we'll dive deep into how the container works, how to bind interfaces to implementations, and how to use it to create cleaner, more testable code.",
    },
    {
        id: "2",
        slug: "clean-code-with-php-8-3-features",
        title: "Clean Code with PHP 8.3 Features",
        category: "PHP",
        published_at: "2024-03-20",
        owner_name: "Jane Smith",
        views: 890,
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
        short_description: "Exploring the new features in PHP 8.3 that help you write better code.",
        content: "PHP 8.3 is here and it brings several exciting features that can help you write cleaner and more efficient code. From typed class constants to the new JSON validation function, there's a lot to explore.\n\nWe will look at how these features can be applied in real-world scenarios to improve your development workflow.",
    },
    {
        id: "3",
        slug: "advanced-tailwind-css-techniques",
        title: "Advanced Tailwind CSS Techniques",
        category: "Design",
        published_at: "2024-03-25",
        owner_name: "Mike Wilson",
        views: 2100,
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop",
        short_description: "Take your styling to the next level with advanced Tailwind CSS patterns.",
        content: "Tailwind CSS has changed the way we build user interfaces. But are you using it to its full potential? In this article, we'll explore advanced techniques like group modifiers, peer-to-peer styling, and custom plugin development.\n\nMastering these techniques will allow you to build complex, interactive UI components with ease.",
    },
    {
        id: "4",
        slug: "building-realtime-apps-with-laravel-reverb",
        title: "Building Real-time Apps with Laravel Reverb",
        category: "Laravel",
        published_at: "2024-04-01",
        owner_name: "Sarah Parker",
        views: 1540,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
        short_description: "A first look at Laravel's new official WebSocket server.",
        content: "Laravel Reverb is a first-party, high-performance WebSocket server for Laravel applications. It integrates seamlessly with Laravel's broadcasting features, making it incredibly easy to add real-time functionality to your apps.\n\nWe'll walk through setting up Reverb and building a simple real-time notification system.",
    },
    {
        id: "5",
        slug: "modern-php-development-practices",
        title: "Modern PHP Development Practices",
        category: "PHP",
        published_at: "2024-04-05",
        owner_name: "Alex Chen",
        views: 1820,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
        short_description: "Best practices for writing modern, maintainable PHP code.",
        content: "Modern PHP has evolved significantly. With features like strict types, union types, enums, and attributes, PHP 8+ offers a robust development experience. Learn how to structure your code using SOLID principles, leverage static analysis tools like PHPStan, and write testable code.\n\nWe'll explore real-world examples and common pitfalls to avoid in modern PHP development.",
    },
    {
        id: "6",
        slug: "docker-for-laravel-development",
        title: "Docker for Laravel Development",
        category: "DevOps",
        published_at: "2024-04-10",
        owner_name: "Mike Wilson",
        views: 2340,
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop",
        short_description: "Set up a robust Docker environment for your Laravel projects.",
        content: "Docker revolutionizes local development by providing consistent environments across teams. In this guide, we'll create a complete Docker setup for Laravel with PHP, MySQL, Redis, and Nginx.\n\nYou'll learn about Docker Compose, managing containers, and optimizing your development workflow with hot reload and debugging capabilities.",
    },
    {
        id: "7",
        slug: "ui-ux-design-principles-for-developers",
        title: "UI/UX Design Principles for Developers",
        category: "Design",
        published_at: "2024-04-15",
        owner_name: "Emma Davis",
        views: 1650,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
        short_description: "Essential design principles every developer should know.",
        content: "Great developers understand that code is only half the battle - user experience matters just as much. Learn the fundamental principles of UI/UX design including typography, color theory, spacing, and visual hierarchy.\n\nWe'll cover practical tips you can apply immediately to make your applications more intuitive and visually appealing.",
    },
    {
        id: "8",
        slug: "laravel-queue-optimization-techniques",
        title: "Laravel Queue Optimization Techniques",
        category: "Laravel",
        published_at: "2024-04-20",
        owner_name: "John Doe",
        views: 2850,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
        short_description: "Master Laravel queues for better application performance.",
        content: "Queues are essential for building scalable Laravel applications. Learn how to optimize queue performance, handle failed jobs gracefully, implement job batching, and monitor queue health.\n\nWe'll explore advanced patterns like job chaining, rate limiting, and using different queue drivers for different job types.",
    },
    {
        id: "9",
        slug: "testing-strategies-in-php",
        title: "Testing Strategies in PHP",
        category: "PHP",
        published_at: "2024-04-25",
        owner_name: "Jane Smith",
        views: 1420,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
        short_description: "Write better tests with PHPUnit and Pest.",
        content: "Testing is crucial for maintaining code quality and preventing regressions. This comprehensive guide covers unit testing, integration testing, and feature testing in PHP using PHPUnit and Pest.\n\nYou'll learn how to write meaningful tests, use test doubles effectively, and achieve good test coverage without over-testing.",
    }
];
