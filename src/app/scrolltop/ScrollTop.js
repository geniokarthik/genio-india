import { useState, useEffect } from "react";
import DownArrowImg from "src/assets/images/uparrow.png";
import Image from "next/image";
import "../globals.css";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to check scroll position
    const handleScroll = () => {
        if (window.scrollY > 200) { // Show button after 200px scroll
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top function
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a 
            href="#top" 
            className={`pagetop ${isVisible ? "show" : "hide"}`} 
            onClick={handleScrollToTop}
        >
            <Image src={DownArrowImg} alt="PageTop" priority />
        </a>
    );
};

export default ScrollTop;
