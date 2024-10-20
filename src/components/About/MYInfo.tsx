import Image from 'next/image'
import { SlideFromLeft, SlideFromRight } from '@/utils/Animation'
import fileService from '@/appwrite/file'
import AnimatedButton from '@/components/AnimatedButton'

type MyInfoProps = {
    info: infoProps;
}

const MyInfo: React.FC<MyInfoProps> = ({ info }) => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3  gap-10'>
            <SlideFromLeft className='max-w-3xl max-lg:mx-auto h-full space-y-3 lg:col-span-2 order-2 lg:order-1'>
                <div>
                    <p className="text-sm md:text-lg font-[500]  font-Lora text-yellow-600">
                        Hello, I&apos;m 👋
                    </p>
                    <h1
                        className={` text-5xl xl:text-6xl font-serif font-semibold text-[#915eff] violet-text-gradient`}
                    >
                        {info?.name || "Suresh Pal"}
                    </h1>
                </div>
                <p className='opacity-75 font-Lora tracking-wider text-base sm:text-lg text-justify'>
                    {info?.aboutDescription}
                </p>
                <div>
                    <AnimatedButton resumeLink={info?.resume} />
                </div>
            </SlideFromLeft>
            <SlideFromRight className='max-w-xs  mx-auto h-full relative flex justify-center items-start order-1 lg:order-2'>
                <div className=' w-full bg-shape overflow-hidden lg:mt-6'>
                    <Image
                        src={String(fileService.getFilePreview(info?.aboutImg as string))}
                        alt='my photo'
                        width={400}
                        height={400}
                    />
                </div>
            </SlideFromRight>
        </div>
    )
}

export default MyInfo
