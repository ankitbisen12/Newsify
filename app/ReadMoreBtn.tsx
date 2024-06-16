'use client';
import { useRouter } from "next/navigation";

const ReadMoreBtn = ({ data }: NewsCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        const obj = Object.entries(data).map(([key,value])=>`${key}=${value}`).join("&");

        router.push(`/news?${obj}`);
    };

    return <button className="bg-nav-100 h-10 rounded-b-lg dark:text-gray-900 hover:bg-nav-200" onClick={handleClick}>Read More</button>
}

export default ReadMoreBtn;