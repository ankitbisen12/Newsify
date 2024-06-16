import { sortNewsByImages } from "./utils";

export async function fetchNews(category?: Category | string, keyword?: string, isDynamic?: boolean) {
    //fetch function with Next.js 1 caching
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY}&sources=${category}`, {
        cache: isDynamic ? "no-cache" : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 60 }
    });
    const newsResponse = await response.json();

    //sort function by images vs non-images present
    const news = sortNewsByImages(newsResponse);

    //return result.
    return news;
}

export async function fetchNewsByKeyword( keyword?: string, isDynamic?: boolean){
    //fetch function with Next.js 1 caching
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.API_KEY}&keywords=${keyword}`, {
        cache: isDynamic ? "no-cache" : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 60 }
    });
    const newsResponse = await response.json();

    //sort function by images vs non-images present
    const news = sortNewsByImages(newsResponse);

    //return result.
    return news;
}



