"use client";

import Comparison from "@/app/_components/_commons/_blog/Comparison";
import { Blog, BlogBody, BlogBodyType } from "@/app/_models/Blog.type";
import ComparisonProps from "@/app/_components/_commons/_blog/Comparison/index.type";
import data from "@/app/_data/_blogs/better-software-programmer-note-1.json";
import Image from "next/image";
import React from "react";
import Icon, { IconState } from "@/components/utils/Icon";
import Link from "next/link";
import { getPublicLocalMedia } from "@/utils/file";

export default function Home() {
  const blog: Blog = data as Blog;

  const handleRedirect = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61563675035436&mibextid=kFxxJD",
      "_blank"
    );
  };

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
          value.map((v, index) => (
            <React.Fragment key={index}>
              {getBlogBody(v.type, v.value)}
            </React.Fragment>
          ))
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
          <h2 className="h2Text font-walone flex justify-center ">
            {getBlogBodyHelper(type, value)}
          </h2>
        )}

        {type === "h4" && (
          <h4 className="h4Text font-walone py-2 mt-6">
            {getBlogBodyHelper(type, value)}
          </h4>
        )}

        {type === "p" && (
          <div className="text-md py-2 text-justify font-walone">
            {getBlogBodyHelper(type, value)}
          </div>
        )}

        {type === "span" && (
          <span className="font-walone text-md">
            {getBlogBodyHelper(type, value)}
          </span>
        )}

        {type === "b" && (
          <b className="font-walone">{getBlogBodyHelper(type, value)}</b>
        )}

        {type === "i" && (
          <i className="font-walone">{getBlogBodyHelper(type, value)}</i>
        )}

        {type === "u" && (
          <u className="font-walone text-sm">
            {getBlogBodyHelper(type, value)}
          </u>
        )}

        {type === "comparison" && (
          <div className="bg-tertiaryColor font-walone shadow-md mb-5">
            {getBlogBodyHelper(type, value)}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex sticky top-0 items-center  -mt-20 justify-between bg-tertiaryColor h-20 p-5 w-full shadow-md md:pl-20 min-w-[24rem] font-archivo z-50">
        <div>
          <Image
            src={getPublicLocalMedia("logo.png")}
            alt={""}
            width={167}
            height={35}
          />
        </div>

        <div className="flex text-primaryTextColor pr-[10px] sm:pr-20 h-20 pt-6">
          <Link href={"#"} className="font-archivo">
            Blogs
          </Link>
        </div>
      </div>
      <main className="flex flex-col px-[10px] md:px-[130px] min-w-[24rem] pt-[120px] bg-tertiaryColor min-h-screen gap-[30px]">
        <div>
          <p className="font-archivo text-md flex justify-start text-secondaryTextColor">
            {` Blogs / Detail / ${blog.headTitle}`}
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
          <div className="mb-5 w-full min-w-[24rem] px-[10px]  self-center">
            <Image
              src={getPublicLocalMedia(blog.coverPhoto)}
              alt={"name"}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
              priority
              className=" object-cover rounded-[20px] "
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 justify-between px-4 w-full">
          <div className="flex gap-1 font-archivo heroText text-secondaryTextColor opacity-70">
            <p className="">{blog.createdDate}</p>
            <span>•</span>
            <p>{blog.readTime} minutes read</p>
          </div>
          <p className="font-archivo heroText text-secondaryTextColor opacity-70">
            Authored By Archivo DevSpace
          </p>
        </div>

        <div className="px-4 pb-4 border-b-2 leading-6">
          {blog.body.map(({ type, value }, index) => (
            <React.Fragment key={index}>
              {getBlogBody(type, value)}
            </React.Fragment>
          ))}
        </div>
      </main>
      <div className="flex justify-center min-w-[24rem] max-sm:px-[20px] items-center py-10 bg-primaryColor text-tertiaryColor font-archivo">
        <div className="flex flex-col gap-[50px] w-[90%] items-center">
          <h1 className="text-xl  text-center">Subscribe to our Newsletter</h1>
          <p className="text-sm md:text-justify text-center font-walone">
            ဒီ website ရဲ့ ရည်ရွယ်ချက်ကတော့ Web Technology နဲ့ ပတ်သတ်ပြီး
            စာတွေ့ရော ၊ လက်တွေ့ရော မျှဝေပေးဖို့ဖြစ်ပါတယ်။ မျှဝေတဲ့အခါ
            စာတွေ့ချည်း မဟုတ်ဘဲ လက်တွေ့လုပ်ငန်းခွင်မှာ ကြုံတွေ့ရနိုင်တဲ့ ၊
            ကြုံတွေ့ရလေ့ရှိတဲ့ အခက်အခဲ အတွေ့အကြုံများကို အဓိကထား
            မျှဝေပေးသွားမှာပါ။ ကောင်းမွန်ပြီး
            အရည်အသွေးပြည့်ဝတဲ့ဝန်ဆောင်မှုများပေးနိုင်ဖို့ကိုလဲ ကျွန်တော်တို့
            ARCHIVO DevSpace မှကြိုးစားပြင်ဆင်ထားပါတယ်ဗျ။ ခေတ်အမြင်လဲမနှေး ၊
            သစ်လွင်တဲ့အတွေးတွေ နဲ့ ကျွန်တော်တို့ရဲ့ Archivo DevSpace လာပါပြီဗျာ။
          </p>
          <div className="flex sm:gap-[50px] gap-[30px]">
            <Icon
              name={IconState.FaceBook}
              style={"cursor-pointer"}
              onClick={handleRedirect}
            />
            <Icon name={IconState.Twitter} style={"opacity-70 "} />
            <Icon name={IconState.Instagram} style={"opacity-70 "} />
            <Icon name={IconState.LinkIn} style={"opacity-70 "} />
            <Icon name={IconState.YouTube} style={"opacity-70 "} />
          </div>
        </div>
      </div>
    </>
  );
}
