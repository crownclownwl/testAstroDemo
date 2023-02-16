/**
 * @Description 
 * @Author 王猛龙（王磊）
 * @Date 2023-02-14 13:10:03
 * @LastEditors 王猛龙（王磊）
 * @LastEditTime 2023-02-14 16:10:53
 * @Email xljhs1015617751@163.com
 * @Phone 166 4357 5302
 */ 
import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://github.com/crownclownwl",
  author: "王磊",
  desc: "myLog",
  title: "SDNote",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/crownclownwl",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
