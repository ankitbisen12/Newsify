import { notFound } from "next/navigation";
import LiveTimeStamp from "../LiveTimeStamp";

const NewsPage = ({ searchParams }: NewsDescriptionProps) => {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }

    const news: NewsData = searchParams;
    console.log("SearchParams", news);

    return <article>
        <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
            {news.image &&
                <img
                    src={news.image}
                    alt={news.title}
                    className="h-56 w-full object-cover rounded-t-lg shadow-md"
                />
            }
            <div className="px-10">
                <h1 className="px-0 headerTitle no-underline pb-2">{news.title}</h1>
                <div className="flex divide-x-2 space-x-4">
                    <h2 className="font-bold">By:{news.author}</h2>
                    <h2 className="font-bold pl-4">By:{news.source}</h2>
                    <p className="pl-4">
                        <LiveTimeStamp time={news.published_at} />
                    </p>
                </div>
                <p className="pt-4">{news.description}</p>
            </div>
        </section>
    </article>
}

export default NewsPage;