import React, { Suspense } from 'react';
import Link from 'next/link';
import { SlideFromLeft } from '@/utils/Animation';

const CodingProfile: React.FC<{ info: infoProps }> = ({ info }) => {
    const { codechef, codeforces, geekforgeeks, hackerrank, leetcode, codestudio } = info;

    // Dynamically importing icons based on the platforms used
    const LeetcodeIcon = leetcode ? React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiLeetcode }))) : null;
    const GFGIcon = geekforgeeks ? React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiGeeksforgeeks }))) : null;
    const CodeNinjasIcon = codestudio ? React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiCodingninjas }))) : null;
    const CodeChefIcon = codechef ? React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiCodechef }))) : null;
    const CodeForcesIcon = codeforces ? React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiCodeforces }))) : null;
    const HackerRankIcon = hackerrank ? React.lazy(() => import('react-icons/si').then(module => ({ default: module.SiHackerrank }))) : null;

    return (
        <SlideFromLeft className='mt-12 flex items-center gap-3'>
            <h3 className='text-2xl font-semibold opacity-85'>Coding Profiles :</h3>
            <div className='flex items-center gap-5'>
                {leetcode &&
                    <Link href={leetcode} className="text-secondary hover:text-violet-600">
                        <Suspense fallback={<div>Loading...</div>}>
                            {LeetcodeIcon && <LeetcodeIcon size={30} />}
                        </Suspense>
                    </Link>
                }
                {geekforgeeks &&
                    <Link href={geekforgeeks} className="text-secondary hover:text-violet-600">
                        <Suspense fallback={<div>Loading...</div>}>
                            {GFGIcon && <GFGIcon size={30} />}
                        </Suspense>
                    </Link>
                }
                {codestudio &&
                    <Link href={codestudio} className="text-secondary hover:text-violet-600">
                        <Suspense fallback={<div>Loading...</div>}>
                            {CodeNinjasIcon && <CodeNinjasIcon size={30} />}
                        </Suspense>
                    </Link>
                }
                {codechef &&
                    <Link href={codechef} className="text-secondary hover:text-violet-600">
                        <Suspense fallback={<div>Loading...</div>}>
                            {CodeChefIcon && <CodeChefIcon size={30} />}
                        </Suspense>
                    </Link>
                }
                {codeforces &&
                    <Link href={codeforces} className="text-secondary hover:text-violet-600">
                        <Suspense fallback={<div>Loading...</div>}>
                            {CodeForcesIcon && <CodeForcesIcon size={30} />}
                        </Suspense>
                    </Link>
                }
                {hackerrank &&
                    <Link href={hackerrank} className="text-secondary hover:text-violet-600">
                        <Suspense fallback={<div>Loading...</div>}>
                            {HackerRankIcon && <HackerRankIcon size={30} />}
                        </Suspense>
                    </Link>
                }
            </div>
        </SlideFromLeft>
    );
}

export default CodingProfile;
