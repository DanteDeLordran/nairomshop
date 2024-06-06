import { getUser } from "$lib/server/data/user"
import { SvelteKitAuth } from "@auth/sveltekit"
import Credentials from "@auth/sveltekit/providers/credentials"
 
export const { signIn, signOut, handle } = SvelteKitAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {

        // logic to verify if user exists
        const user = await getUser(String(credentials.email) ,String(credentials.password))
 
        if (!user) {
          throw new Error("User not found.")
        }
 
        // return json object with the user data
        return user
      },
    }),
  ],
})