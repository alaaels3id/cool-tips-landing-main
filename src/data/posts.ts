export interface BlogPost {
    id: string;
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
        title: "Mastering Laravel Service Containers",
        category: "Laravel",
        published_at: "2024-03-15",
        owner_name: "John Doe",
        views: 1250,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        short_description: "Learn how to use dependency injection and service containers effectively in Laravel.",
        content: "Laravel's service container is a powerful tool for managing class dependencies and performing dependency injection. Dependency injection is a fancy phrase that essentially means this: class dependencies are 'injected' into the class via the constructor or, in some cases, 'setter' methods.\n\nIn this post, we'll dive deep into how the container works, how to bind interfaces to implementations, and how to use it to create cleaner, more testable code.",
    },
    {
        id: "2",
        title: "Clean Code with PHP 8.3 Features",
        category: "PHP",
        published_at: "2024-03-20",
        owner_name: "Jane Smith",
        views: 890,
        image: "https://images.unsplash.com/photo-1599507593499-a3f7f7d9a2cc?q=80&w=2070&auto=format&fit=crop",
        short_description: "Exploring the new features in PHP 8.3 that help you write better code.",
        content: "PHP 8.3 is here and it brings several exciting features that can help you write cleaner and more efficient code. From typed class constants to the new JSON validation function, there's a lot to explore.\n\nWe will look at how these features can be applied in real-world scenarios to improve your development workflow.",
    },
    {
        id: "3",
        title: "Advanced Tailwind CSS Techniques",
        category: "Design",
        published_at: "2024-03-25",
        owner_name: "Mike Wilson",
        views: 2100,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
        short_description: "Take your styling to the next level with advanced Tailwind CSS patterns.",
        content: "Tailwind CSS has changed the way we build user interfaces. But are you using it to its full potential? In this article, we'll explore advanced techniques like group modifiers, peer-to-peer styling, and custom plugin development.\n\nMastering these techniques will allow you to build complex, interactive UI components with ease.",
    },
    {
        id: "4",
        title: "Building Real-time Apps with Laravel Reverb",
        category: "Laravel",
        published_at: "2024-04-01",
        owner_name: "Sarah Parker",
        views: 1540,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        short_description: "A first look at Laravel's new official WebSocket server.",
        content: "Laravel Reverb is a first-party, high-performance WebSocket server for Laravel applications. It integrates seamlessly with Laravel's broadcasting features, making it incredibly easy to add real-time functionality to your apps.\n\nWe'll walk through setting up Reverb and building a simple real-time notification system.",
    }
];
