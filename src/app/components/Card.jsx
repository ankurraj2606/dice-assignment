import React from "react";
import Image from "next/image";
import { CiStar, CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const Card = ({
  avatar,
  repoName,
  stars,
  description,
  language,
  topics,
  updatedAt,
  watchersCount,
}) => {
  const lastUpdateDate = new Date(updatedAt);
  const currentDate = new Date();
  const differenceInMs = currentDate - lastUpdateDate;
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  return (
    <div className="flex justify-between w-full py-3 px-6 rounded border border-gray-200 ">
      <div className="flex flex-col">
        <div className="flex gap-3">
          <div className="w-5 rounded-full flex items-center">
            <Image
              src={avatar}
              width={20}
              height={20}
              alt="Picture of the author"
              className="rounded-full object-cover align-middle "
            />
          </div>

          <h2 className="text-md text-blue-800">{repoName}</h2>
        </div>
        <p className="text-sm pt-1">{description}</p>
        <div className="flex gap-2 pt-1.5 flex-wrap">
          {topics.slice(0, 8).map((t, idx) => (
            <p
              key={idx}
              className="bg-blue-200 py-0.5 px-2 rounded-md text-blue-800 text-xs"
            >
              {t}
            </p>
          ))}
        </div>
        <div className="flex gap-4 pt-2 items-center">
          <div className="flex items-center gap-1">
            <GoDotFill />
            <div className="text-xs">{language}</div>
          </div>
          <div className="flex items-center gap-1">
            <CiStar />
            <p className="text-xs">
              {stars > 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}
            </p>{" "}
          </div>
          <div className="flex items-center gap-1">
            <FaRegEye />
            <p className="text-xs">
              {watchersCount > 1000
                ? `${(watchersCount / 1000).toFixed(1)}k`
                : stars}{" "}
            </p>
          </div>
          <p className="text-xs">
            {differenceInDays === 0
              ? "Last updated today"
              : differenceInDays < 3
              ? `Updated ${differenceInDays} days ago`
              : `Updated on ${lastUpdateDate.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}`}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="text-xs bg-gray-200 py-1 px-2 rounded h-fit flex gap-1 items-center">
          <CiStar /> Star
        </div>
        <div className="text-xs bg-gray-200 py-1 px-2 rounded h-fit flex gap-1 items-center">
          {" "}
          <CiHeart /> Sponsors
        </div>
      </div>
    </div>
  );
};

export default Card;
