import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
    // we use local dev , so empty for now 

})

export const { signIn , signOut , useSession } = authClient;