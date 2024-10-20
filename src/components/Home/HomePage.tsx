import fileService from "@/appwrite/file";
import Image from "next/image";
import TypewriteEffect from "./TypewriteEffect";
import AnimatedButton from "@/components/AnimatedButton";
import Container from "@/components/Container";

const HomePage: React.FC<{ info: infoProps }> = ({ info }) => {
    return (
        <Container>
            <div className=" h-full flex max-md:flex-col  md:justify-between items-start gap-12 md:gap-20 lg:pt-8 max-md:pb-10">
                <div className=" w-full max-w-3xl order-2 md:order-1 flex flex-col  space-y-3">
                    <div>
                        <p className="text-sm lg:text-base font-[500]  font-Lora text-yellow-600">
                            Hello, I&apos;m 👋
                        </p>
                        <h1 className={` text-5xl lg:text-7xl  font-serif font-semibold text-[#915eff] violet-text-gradient`}>
                            {info.name || "Suresh Pal"}
                        </h1>
                        <TypewriteEffect words={info?.homeSubtitles?.split(",")} />
                    </div>
                    <p className="text-sm sm:text-lg font-Lora tracking-wider opacity-75 text-justify">
                        {info.homeDescription}
                    </p>
                    <AnimatedButton resumeLink={info?.resume} />
                </div>
                <div className="  w-full max-w-md mx-auto order-1 md:order-2 ">
                    <Image
                        src={info
                            ? String(fileService.getFilePreview(info.homeImg as string))
                            : ""
                        }
                        alt="astronut"
                        width={500}
                        height={500}
                        className=" max-w-[22rem] mx-auto animate-pingpong"
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
