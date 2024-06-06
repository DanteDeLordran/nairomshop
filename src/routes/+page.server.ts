import type { Actions } from "./$types";

export const actions: Actions = {
    logout: async ({ cookies }) => {
        cookies.delete('user', {path: '/'});
        return {
            status: 303,
            headers: {
                location: '/'
            }
        };
    }
};