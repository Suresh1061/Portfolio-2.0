import { ZoomInOut } from '@/utils/Animation';
import Link from 'next/link';

type Props = {
    resumeLink: string
}

const AnimatedButton = ({ resumeLink }: Props) => {
    return (
        <div>
            <div className=" w-full flex justify-center md:justify-start items-center gap-8 mt-5">
                <ZoomInOut className=" w-32 py-2 flex justify-center items-center rounded-full bg-[#5e03fc] text-white shadow-xl text-lg font-Space_Grotesk tracking-wide">
                    <Link href={resumeLink}>Resume</Link>
                </ZoomInOut>
                <ZoomInOut className="w-32 py-2  flex justify-center items-center rounded-full border-2 border-[#5e03fc] text-white shadow-xl text-lg font-Space_Grotesk tracking-wide">
                    <Link href="/contact">Contact</Link>
                </ZoomInOut>
            </div>
        </div>
    )
}

export default AnimatedButton