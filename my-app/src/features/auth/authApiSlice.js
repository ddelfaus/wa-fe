import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndPoints ({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentails => ({
                url: '/auth',
                method: 'POST',
                body : {...credentails}
            })
        }),
    })
})