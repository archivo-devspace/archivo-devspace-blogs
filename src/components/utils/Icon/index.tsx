/* eslint-disable */
"use client";
import { getPublicLocalMedia } from "@/utils/file";
import Image from "next/image";
import React from "react";

type IconProps = {
  name: IconState | string;
  onClick?: () => void;
  style?: any;
  link?: string;
};

export enum IconState {
  FaceBook = "face-book",
  Instagram = "instagram",
  LinkIn = "link-in",
  Twitter = "twitter",
  YouTube = "youtube",
}

const Icon = ({ name, onClick, style }: IconProps) => {
  switch (name) {
    case IconState.FaceBook:
      return (
        <Image
          onClick={onClick}
          width={24}
          height={24}
          alt={name}
          className={style}
          src={getPublicLocalMedia("Facebook.svg")}
        />
      );
    case IconState.Instagram:
      return (
        <Image
          onClick={onClick}
          width={24}
          height={24}
          alt={name}
          className={style}
          src={getPublicLocalMedia("Instagram.svg")}
        />
      );
    case IconState.LinkIn:
      return (
        <Image
          onClick={onClick}
          width={24}
          height={24}
          alt={name}
          className={style}
          src={getPublicLocalMedia("Linkin.svg")}
        />
      );
    case IconState.Twitter:
      return (
        <Image
          onClick={onClick}
          width={24}
          height={24}
          alt={name}
          className={style}
          src={getPublicLocalMedia("Twitter.svg")}
        />
      );
    case IconState.YouTube:
      return (
        <Image
          onClick={onClick}
          width={24}
          height={24}
          alt={name}
          className={style}
          src={getPublicLocalMedia("YouTube.svg")}
        />
      );
  }
};

export default Icon;
