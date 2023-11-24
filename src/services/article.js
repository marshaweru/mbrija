import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const axios = require('axios');

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: ( headers ) => {
          headers.set('X-RapidAPI-Key', 'KEY');
          headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })
});