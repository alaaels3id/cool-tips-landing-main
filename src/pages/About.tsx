import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Video, Target } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Mission Hero */}
                <section className="py-24 relative overflow-hidden bg-secondary/30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="container px-4 relative z-10 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            Our <span className="text-gradient">Mission</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed border-l-4 border-primary pl-6 text-left text-muted-foreground">
                            "We are friends who love programming and we want to help make it popular with our tutorials and tips. Join us on this coding journey!"
                        </p>
                    </div>
                </section>

                {/* Values/Story */}
                <section className="py-24 container px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">Who We Are</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Built by developers, for developers. Cool Tips started as a passion project between friends who wanted to simplify complex concepts in PHP, Laravel, and beyond.
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">What We Do</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            We deliver high-quality, practical tutorials that focus on real-world application. From custom stub files to API mastery, our content is designed to be accessible and functional.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-24 bg-card border-y border-border">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-1">218+</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Subscribers</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Video className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-1">64+</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Videos</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <div className="text-2xl font-bold text-primary">∞</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-1">Daily</div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Tips</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
