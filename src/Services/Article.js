import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const rapidapikey = import.meta.env.VITE_RAPID_API_KEY

export const ArticleApi = createApi({
    reducerPath: "ArticalApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidapikey),
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            // console.log(`${baseUrl}`)
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummery: builder.query({
            // query: (param) => `summerize?url=${param.articleUrl}&length=3`
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
            // `${console.log(param.articleUrl)}`
        })
    })
})

export const { useLazyGetSummeryQuery } = ArticleApi;