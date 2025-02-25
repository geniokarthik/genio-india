import DownArrowImg from "src/assets/images/uparrow.png";
import "../globals.css";
import Image from "next/image";
const ScrollTop = () => {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
    return (
        <a href="#top" className="pagetop" onClick={handleScrollToTop}>
            <Image
                src={DownArrowImg}
                alt="PageTop"
                priority 
            />
        </a>
    )
}
export default ScrollTop;
