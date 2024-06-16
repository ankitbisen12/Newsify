type Pagination = {
    limit: Number,
    offset: Number,
    count: Number,
    total: Number
}

type NewsData = {
    author: string,
    title: string,
    description: string,
    url: string,
    source: string,
    image: string | null,
    category: string,
    language: string,
    country: string,
    published_at: string
}

type NewsResponse = {
    pagination: Pagination
    data: NewsData[]
}

type NewsCardProps = {
    data : NewsData
}

type Category =
    | "general"
    | "business"
    | "entertainment"
    | "health"
    | "science"
    | "sports"
    | "technology"


type NewListProps = {
    news: NewsResponse
}

type NewsDescriptionProps ={
    searchParams?: NewsData
}

type SearchProps = {
    searchParams?:{term:string};
}

// Sample news data
// {
//     "pagination": {
//         "limit": 25,
//         "offset": 0,
//         "count": 25,
//         "total": 2505
//     },
//     "data": [
//         {
//             "author": "Daniel Kaplan",
//             "title": "USA Cricket arrived on the international stage, will it be noticed at home?",
//             "description": "When the U.S. Olympic men’s hockey team famously beat the Soviet Union in the 1980 “Miracle on Ice” game, the broadcast was tape-delayed for hours. There were no tape delays in another monumental U.S. international upset on home soil, but watching the USA cricket team beat Pakistan at this month’s T20 World Cup was also Read more...The post USA Cricket arrived on the international stage, will it be noticed at home? appeared first on Awful Announcing.",
//             "url": "https://awfulannouncing.com/orig/usa-cricket-pakistan-world-cup-willow.html",
//             "source": "awfulannouncing",
//             "image": null,
//             "category": "general",
//             "language": "en",
//             "country": "us",
//             "published_at": "2024-06-14T13:20:08+00:00"
//         }]