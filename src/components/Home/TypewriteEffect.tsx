'use client'

import { Typewriter } from "react-simple-typewriter";

type TypewriterProps = {
    words: string[]
}

const TypewriteEffect = ({ words }: TypewriterProps) => {
    return (
        <h2 className={` text-xl lg:text-3xl text-[#fc5a03]  font-Roboto font-semibold`}>
            <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={40}
                loop={0}
                typeSpeed={100}
                words={words}
            />
        </h2>
    )
}

export default TypewriteEffect