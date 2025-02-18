import ScrollToTopBtn from "./ScrollToTopBtn";
import SocialMedia from "./SocialMedia";

type FooterProps = {
    info: infoProps
}

const Footer = ({ info }: FooterProps) => {
    const year = new Date().getFullYear();
    return (
        <div className=" h-16 w-full  bg-footer bg-center bg-cover mt-10 border-t border-slate-500 relative z-0">
            <div className="max-w-screen-xl w-full h-full mx-auto px-4 flex justify-center sm:justify-between max-sm:flex-col items-center">
                <div className=" flex gap-1.5 items-center max-sm:order-2 max-sm:py-1">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 sm:w-7 text-white"
                    >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                    </svg>
                    <p className=" text-xs sm:text-sm font-Lora tracking-wider text-secondary">Copyright ©{year}</p>
                </div>
                <h1 className="text-base sm:text-lg opacity-85 font-Lora tracking-wider flex max-sm:order-1 max-sm:pt-2">Made with ❤️ by {info.name || "Suresh Pal"}</h1>
                <SocialMedia className="max-sm:hidden" info={info} />
            </div>
            <ScrollToTopBtn />
        </div>
    );
};

export default Footer;
