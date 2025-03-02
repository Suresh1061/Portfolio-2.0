"use server"

import appwriteServices from "@/appwrite/services";
import { unstable_cache } from "next/cache";

export const getMyInfo = unstable_cache(async () => {
    const res = await appwriteServices.getAllInfo();
    return res;
},
    ["my-info"],
    {
        revalidate: 5 * 60,
        tags: ["my-info"]
    }
)

export const getEducationDetails = unstable_cache(async () => {
    const res = await appwriteServices.getAllEducation();
    return res;
},
    ["education"],
    {
        revalidate: 3600,
        tags: ['education']
    }
)

export const getAchievements = unstable_cache(async () => {
    const res = await appwriteServices.getAllAchievements()
    return res;
},
    ["achievements"],
    {
        revalidate: 3600,
        tags: ['achievements']
    }
)

export const getExperiences = unstable_cache(async () => {
    const res = await appwriteServices.getAllExperience();
    return res;
},
    ["experiences"],
    {
        revalidate: 3600,
        tags: ['experiences']
    }
)


export const getProjects = unstable_cache(async () => {
    const res = await appwriteServices.getAllProject();
    return res;
},
    ["projects"],
    {
        revalidate: 5 * 60,
        tags: ['projects']
    }
)

export const getSkills = unstable_cache(async () => {
    const res = await appwriteServices.getAllSkills();
    return res;
},
    ["skills"],
    {
        revalidate: 5 * 60,
        tags: ['skills']
    }
)

export const getReviews = unstable_cache(async () => {
    const res = await appwriteServices.getAllReviews();
    return res;
},
    ["reviews"],
    {
        revalidate: 5 * 60,
        tags: ['reviews']
    }
)
