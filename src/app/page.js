"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiUrl, auth_token, sortOptions } from "@/const";
import Card from "./components/Card";
import useDebounce from "./hooks/useDebounce";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [responseArray, setResponseArray] = useState([]);
  const debouncedText = useDebounce(inputText, 1000);

  const handleSort = (e) => {
    const sortType = e.target.value;

    if (sortType === "") {
        return;
    }

    const sortedArray = [...responseArray].sort((a, b) => {
        if (a[sortType] === undefined || b[sortType] === undefined) {
            return 0;
        }

        if (typeof a[sortType] === 'string') {
            return a[sortType].localeCompare(b[sortType]);
        } else if (typeof a[sortType] === 'number') {
            return b[sortType] - a[sortType];
        } else {
            return 0;
        }
    });

    setResponseArray(sortedArray);
  };

  useEffect(() => {
    if (debouncedText) {
      fetch(apiUrl + `?q=${debouncedText}`, {
        headers: {
          Authorization: auth_token,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setResponseArray(result.items);
        });
    }
  }, [debouncedText]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-10">
      <h2 className="text-2xl underline text-blue-950">Dice Assignment</h2>
      <div className="flex justify-between w-full">
        <div className="w-1/3">
          <label or="search" className="">
            Search Topic:
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="border border-solid w-3/4 border-black px-4 py-2 h-12 ml-4"
            value={inputText}
            placeholder="Search for a Topic...."
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="w-1/3 h-12">
          <label htmlFor="sortOptions">Sort by:</label>
          <select
            id="sortOptions"
            className="w-5/6 h-12 ml-4 border border-black cursor-pointer pl-4"
            onChange={handleSort}
          >
            {sortOptions.map((option) => (
              <option value={option.name} key={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        {responseArray?.map((resArray) => {
          return (
            <Card
              key={resArray.id}
              avatar={resArray.owner.avatar_url}
              repoName={resArray.name}
              stars={resArray.stargazers_count}
              description={resArray.description}
              language={resArray.language}
              topics={resArray.topics}
              updatedAt={resArray.updated_at}
              watchersCount={resArray.watchers_count}
            />
          );
        })}
      </div>
    </main>
  );
}
