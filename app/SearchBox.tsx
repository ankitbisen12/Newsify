"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!searchInput) {
            return;
        }
        router.push(`/search?term=${searchInput}`);
    }

    return (
        <>
            <form className="max-w-6xl mx-auto flex justify-between items-center px-5" onSubmit={handleSubmit}>
                <input type="text" className="flex-1 w-full h-14 rounded-sm outline-none placeholder-gray-500 text-gray-500 bg-transparent dark:text-nav-100" placeholder="Search news here" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button type="submit" disabled={!searchInput} className="bg-nav-100 rounded-sm p-2 text-white cursor-pointer disabled:bg-nav-200 disabled:cursor-not-allowed">Search</button>
            </form>
        </>);
}

export default SearchBox;