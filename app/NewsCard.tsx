import LiveTimeStamp from "./LiveTimeStamp";
import ReadMoreBtn from "./ReadMoreBtn";

const NewsCard = ({ data }: NewsCardProps) => {
    return <article className="bg-slate-200 dark:bg-slate-900 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
        {data.image &&
            <img
                src={data.image}
                alt={data.title}
                className="h-56 w-full object-cover rounded-t-lg shadow-md"
            />
        }
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col p-5">
                <h2 className="font-bold font-serif">{data.title}</h2>
                <section className="mt-2 flex-1">
                    <p className="text-xs line-clamp-6">{data.description}</p>
                </section>
                <footer className="text-sm text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                    <p>{data.source}</p>
                    <p>
                        <LiveTimeStamp time={data.published_at} />
                    </p>
                </footer>
            </div>
            {/* ReadMoreBtn */}
            <ReadMoreBtn data={data} />
        </div>
    </article>
}

export default NewsCard;