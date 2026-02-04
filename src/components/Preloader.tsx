import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/favicon.png";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const location = useLocation();
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        setLoading(true);
        setFadeOut(false);

        // Show preloader for a bit
        const duration = isInitialLoad ? 1500 : 800;

        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
                setIsInitialLoad(false);
            }, 500); // Duration of fade-out animation
        }, duration);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="relative flex flex-col items-center gap-6">
                {/* Animated Logo Container */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    {/* Pulsing Outer Ring */}
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <div className="absolute inset-2 border-2 border-primary/40 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />

                    {/* Centered Logo */}
                    <img
                        src={logo}
                        alt="Cool Tips Logo"
                        className="w-16 h-16 md:w-20 md:h-20 object-contain animate-pulse"
                    />
                </div>

                {/* Brand Name */}
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-2xl font-bold font-mono uppercase tracking-[0.2em]">
                        <span className="text-primary">Cool</span> Tips
                    </h2>
                    <div className="w-12 h-1 bg-primary/20 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-primary animate-[loading-shimmer_1.5s_infinite]" />
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes loading-shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};

export default Preloader;
