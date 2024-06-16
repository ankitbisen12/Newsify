export const categories: Category[] = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
];

export const sortNewsByImages = (news:NewsResponse)=> {
        const newsWithImage = news.data.filter(el=>el.image!==null);

        const newsWithoutImage = news.data.filter(el=>el.image===null);

        const sortedNews = {
            pagination:news.pagination,
            data: [...newsWithImage,...newsWithoutImage]
        }

        return sortedNews;
}

