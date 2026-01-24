import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

export type Skill = {
  name: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  description?: string;
} & MicroCMSListContent;

// 自己紹介
export type Profile = {
  name: string;
  title: string;
  bio: string;
  email?: string;
  github?: string;
  linkedin?: string;
  avatar?: MicroCMSImage;
};

export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  publishedAt: string;
  tags?: string[];
} & MicroCMSListContent;

export type Certification = {
  name: string;
  issuer: string;
  issuedDate: string;
  description?: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Member>({
    endpoint: 'members',
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: 'news',
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });

  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });

  return detailData;
};

export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: 'news',
  });

  return listData;
};

export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: 'categories',
  });

  return listData;
};

// 資格一覧を取得
export const getSkillsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Skill>({
    endpoint: 'skills',
    queries,
  });
  return listData;
};

// 全ての資格を取得
export const getAllSkillsList = async () => {
  const listData = await client.getAllContents<Skill>({
    endpoint: 'skills',
  });

  return listData;
};

// 資格の詳細を取得
export const getSkillDetail = async (contentId: string) => {
  const skillData = await client.get<Skill>({
    endpoint: 'skills',
    contentId,
  });
  return skillData;
};

// 自己紹介を取得
export const getProfile = async () => {
  const profileData = await client.get<Profile>({
    endpoint: 'profile',
    contentId: 'k6f3ceqfhxjg',
  });
  return profileData;
};

export const getBlogsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });
  return listData;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });

  return detailData;
};

export const getAllBlogsList = async () => {
  const listData = await client.getAllContents<Blog>({
    endpoint: 'blogs',
  });

  return listData;
};

export const getCertificationsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Certification>({
    endpoint: 'certifications',
    queries,
  });
  return listData;
};

export const getAllCertificationsList = async () => {
  const listData = await client.getAllContents<Certification>({
    endpoint: 'certifications',
  });

  return listData;
};