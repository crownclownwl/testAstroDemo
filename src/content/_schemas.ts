/**
 * @Description post语法配置
 * @Author 王猛龙（王磊）
 * @Date 2023-02-14 13:10:03
 * @LastEditors 王猛龙（王磊）
 * @LastEditTime 2023-02-14 13:29:33
 * @Email xljhs1015617751@163.com
 * @Phone 166 4357 5302
 */ 
import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),      // 作者
    pubDatetime: z.date(),              // 发布日期
    title: z.string(),                  // 文章标题
    postSlug: z.string().optional(),    // 页面路径
    featured: z.boolean().optional(), 
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),  // 对应的Tag
    ogImage: z.string().optional(),
    description: z.string(),            // 描述
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
