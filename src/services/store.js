import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from './article';

export const store = configureStore({
    reducer: {
        [articleApi.reducePath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
});