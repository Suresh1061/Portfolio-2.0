import conf from "./conf";
import { Client, Databases, Storage, Query } from "appwrite";

export class AppwriteServices {
    client = new Client();
    databases: Databases;
    bucket: Storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getAllInfo() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteMyInfoCollectionId,
            )
        } catch (error) {
            console.log("Info Service : : getAllInfo : : error : ", error);
            throw error;
        }
    }

    async getAllEducation() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteEducationCollectionId,
            )
        } catch (error) {
            console.log("Education Service : : getAllEducation : : error : ", error);
            throw error;
        }
    }

    async getAllSkills() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteSkillsCollectionId,
                [Query.limit(100)]
            );
        } catch (error) {
            console.log("Skills Service : : getAllSkills : : error : ", error);
            throw error;
        }
    }

    async getAllProject() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,
            )
        } catch (error) {
            console.log("Project Service : : getAllProject : : error : ", error);
            throw error;
        }
    }

    async getAllAchievements() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteAchievementId
            );
        } catch (error) {
            console.log("Education Service : : getAllEducation : : error : ", error);
            throw error;
        }
    }

    async getAllExperience() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteExperienceId,
            )
        } catch (error) {
            console.log("Education Service : : getAllEducation : : error : ", error);
            throw error;
        }
    }

    async getAllReviews() {
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteReviewId,
            )
        } catch (error) {
            console.log("error : ", error);
            throw error;
        }
    }
}

const appwriteServices = new AppwriteServices();
export default appwriteServices;