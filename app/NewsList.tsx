import NewsCard from "./NewsCard";

const NewsList = ({ news }: NewListProps) => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
            {news.data.map(data => <NewsCard key={data.title} data={data} />)}
        </main>);
}

export default NewsList;