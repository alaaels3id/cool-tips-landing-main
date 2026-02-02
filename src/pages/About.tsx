import { Link } from "react-router-dom";
import { ArrowLeft, Users, Video, Target } from "lucide-react";
import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b-4 border-foreground">
                <div className="container px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="Cool Tips" className="w-10 h-10 rounded-none border-2 border-foreground" />
                            <span className="font-bold text-lg font-mono tracking-tighter uppercase">
                                <span className="text-primary">Cool</span> Tips
                            </span>
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                {/* Mission Hero */}
                <section className="py-24 border-b-4 border-foreground relative overflow-hidden bg-secondary/30">
                    <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[10px] whitespace-pre p-8 overflow-hidden select-none">
                        {`class Mission {
  constructor() {
    this.goal = "Learn more and more";
    this.status = "Active";
  }
}`}
                    </div>
                    <div className="container px-4 relative z-10 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 font-mono tracking-tighter uppercase">
                            Our <span className="text-primary">Mission</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed border-l-4 border-primary pl-6 text-left">
                            "We are friends who love programming and we want to help make it popular with our tutorials and tips. Join us on this coding journey!"
                        </p>
                    </div>
                </section>

                {/* Values/Story */}
                <section className="py-24 container px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="border-4 border-foreground p-8 relative shadow-tactile">
                        <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary border-4 border-foreground" />
                        <div className="flex items-center gap-4 mb-6">
                            <Users className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-bold font-mono uppercase tracking-tighter">Who We Are</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Built by developers, for developers. Cool Tips started as a passion project between friends who wanted to simplify complex concepts in PHP, Laravel, and beyond.
                        </p>
                    </div>

                    <div className="border-4 border-foreground p-8 relative shadow-tactile">
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary border-4 border-foreground" />
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-bold font-mono uppercase tracking-tighter">What We Do</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            We deliver high-quality, practical tutorials that focus on real-world application. From custom stub files to API mastery, our content is designed to be "Cool" and functional.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-24 bg-foreground text-background">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="border-4 border-background p-8 flex flex-col items-center gap-2">
                                <Users className="w-12 h-12" />
                                <span className="text-5xl font-bold font-mono">218+</span>
                                <span className="uppercase tracking-widest text-sm font-bold">Subscribers</span>
                            </div>
                            <div className="border-4 border-background p-8 flex flex-col items-center gap-2">
                                <Video className="w-12 h-12" />
                                <span className="text-5xl font-bold font-mono">64+</span>
                                <span className="uppercase tracking-widest text-sm font-bold">Videos</span>
                            </div>
                            <div className="border-4 border-background p-8 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 border-4 border-background flex items-center justify-center font-bold text-xl">∞</div>
                                <span className="text-5xl font-bold font-mono">Daily</span>
                                <span className="uppercase tracking-widest text-sm font-bold">Tips</span>
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
