import { fetchNews } from '@/app/lib/data';
import { categories } from './lib/utils';
import NewsList from './NewsList';

export default async function Home() {
  //fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  // console.log("news", news);

  return (
    <div>
      {/* NewsList */}
      <NewsList news={news}/>
    </div>
  );
}
