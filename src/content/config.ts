import { defineCollection, z } from "astro:content";
const apiKey = import.meta.env.NEWS_API_KEY;

const news = defineCollection({
    loader: async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        
        return data.articles.map((article: any) => ({
            id: article.url,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            content: article.content || '', 
        }));
    },
    schema: z.object({
        title: z.string(),
        description: z.any().optional(),
        url: z.string().url(),
        urlToImage: z.any().optional(),
        publishedAt: z.string(),
        content: z.string(),
    }),
});

export const collections = { news };
