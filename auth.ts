import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

// Initialize the simple File Based Database 
const db = new Database("./auth.db");

export const auth = betterAuth({
    database: db,
    // Configure our social provider 
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    // We are not using email/password for this MVP 
    emailAndPassword: {
        enabled: false,
    }
});
