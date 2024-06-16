import NewsList from "@/app/NewsList";
import { fetchNewsByKeyword } from "@/app/lib/data";
import { categories } from "@/app/lib/utils";

type Props = {
    params: { category: Category }
}

const NewsCategoryPage = async ({ params: { category } }: Props) => {
    const news: NewsResponse = await fetchNewsByKeyword(category);

    return <div>
        <h1 className="headerTitle">{category}</h1>
        <NewsList news={news} />
    </div>;
};

export default NewsCategoryPage;


export async function generateStaticParams(){
    return categories.map(category=>({
        category:category,
    }));
}