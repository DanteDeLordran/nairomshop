import { getUser } from '$lib/server/data/user';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default : async({cookies, request}) => {
        const data = await request.formData()
        const email = data.get('email') as string
        const password = data.get('password') as string

        const user = await getUser(email,password)

        if (user) {
            cookies.set('user', JSON.stringify(user), {
                httpOnly: true, // Ensure the cookie is only accessible by the server
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/' // Available throughout the site
            });
            redirect(302 , '/products')
            return {success : true}
        } else {
            // Handle user not found case
            throw new Error("User not found");
        }
       
    }
}