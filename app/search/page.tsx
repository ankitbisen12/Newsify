import NewsList from "../NewsList";
import { fetchNewsByKeyword } from "../lib/data";


const Search = async ({ searchParams }: SearchProps) => {
    const news: NewsResponse = await fetchNewsByKeyword(searchParams?.term, true);

    return <div>
        <h1 className="headerTitle">Search Results: {searchParams?.term}</h1>
        <NewsList news={news} />
    </div>;
}

export default Search;