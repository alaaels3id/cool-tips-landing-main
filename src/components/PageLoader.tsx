import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Start animation on route change
        setIsVisible(true);
        setProgress(0);

        // Simulate progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(timer);
                    return 90;
                }
                const diff = Math.random() * 20;
                return Math.min(prev + diff, 90);
            });
        }, 200);

        // Complete progress after a short delay
        const completeTimer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsVisible(false);
            }, 300);
        }, 500);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [location.pathname]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] pointer-events-none">
            <div
                className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-all duration-300 ease-out"
                style={{
                    width: `${progress}%`,
                    boxShadow: "0 0 10px var(--primary), 0 0 5px var(--primary)"
                }}
            />
        </div>
    );
};

export default PageLoader;
