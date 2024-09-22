import Comparison from "@/app/_components/_commons/_blog/Comparison";
import { Blog, BlogBody, BlogBodyType } from "./_models/Blog.type";
import ComparisonProps from "@/app/_components/_commons/_blog/Comparison/index.type";
import data from "@/app/_data/_blogs/better-software-programmer-note-1.json";
import Image from "next/image";
import "./globals.css";
import React from "react";

export default function Home() {
  const blog: Blog = data as Blog;

  const getComparison = (value: BlogBody[]): ComparisonProps => {
    const obj = { positive: "", negative: "" };

    value.forEach((v) => {
      if (v.type === "negative" && typeof v.value === "string") {
        obj.negative = v.value;
      } else if (v.type === "positive" && typeof v.value === "string") {
        obj.positive = v.value;
      }
    });

    return obj;
  };

  const getBlogBodyHelper = (
    type: BlogBodyType,
    value: string | BlogBody[]
  ) => {
    return Array.isArray(value) ? (
      <>
        {type === "comparison" ? (
          <Comparison {...getComparison(value)} />
        ) : (
          value.map((v) => getBlogBody(v.type, v.value))
        )}
      </>
    ) : (
      <>{value}</>
    );
  };

  const getBlogBody = (
    type: BlogBodyType,
    value: string | BlogBody[]
  ): React.ReactElement => {
    return (
      <div>
        {type === "h2" && (
          <h2 className="h2Text font-archivo flex justify-center py-4">
            {getBlogBodyHelper(type, value)}
          </h2>
        )}

        {type === "h4" && (
          <h4 className="h4Text font-archivo py-2 mt-6">
            {getBlogBodyHelper(type, value)}
          </h4>
        )}

        {type === "p" && (
          <div className="text-md py-2 text-justify">
            {getBlogBodyHelper(type, value)}
          </div>
        )}

        {type === "span" && (
          <span className="font-archivo text-md">
            {getBlogBodyHelper(type, value)}
          </span>
        )}

        {type === "b" && (
          <b className="font-archivo">{getBlogBodyHelper(type, value)}</b>
        )}

        {type === "i" && (
          <i className="font-archivo">{getBlogBodyHelper(type, value)}</i>
        )}

        {type === "u" && (
          <u className="font-archivo text-sm">
            {getBlogBodyHelper(type, value)}
          </u>
        )}

        {type === "comparison" && (
          <div className="bg-tertiaryColor shadow-md">
            {getBlogBodyHelper(type, value)}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="flex flex-col px-[10px] md:px-[130px] min-w-[24rem] pt-[120px] bg-tertiaryColor min-h-screen gap-[50px]">
      <div>
        <p className="font-archivo text-md flex justify-start">
          Blogs / Detail / Clean_Code
        </p>
      </div>
      {blog.mainTitle && (
        <div className="flex justify-center w-full">
          <h1 className=" text-lg lg:text-2xl font-archivo">
            {blog.mainTitle}
          </h1>
        </div>
      )}

      {/* {blog.subTitle && (
        <div className="mb-5">
          <h1 className="text-xl font-bold">{blog.subTitle}</h1>
        </div>
      )} */}

      {blog?.coverPhoto && (
        <div className="mb-5 w-full min-w-[24rem] px-[10px] h-[519px] self-center">
          <Image
            src={blog.coverPhoto}
            alt={"name"}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            priority
            className=" object-cover rounded-[20px] "
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 justify-between w-full">
        <div className="flex gap-1 font-archivo heroText text-secondaryTextColor opacity-70">
          <p className="">{blog.createdDate}</p>
          <span>•</span>
          <p>{blog.readTime} minutes read</p>
        </div>
        <p className="font-archivo heroText text-secondaryTextColor opacity-70">
          Authored By Archivo DevSpace
        </p>
      </div>

      <div className="p-4 border-b-2 text-justify leading-6">
        {blog.body.map(({ type, value }, index) => (
          <React.Fragment key={index}>
            {getBlogBody(type, value)}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
