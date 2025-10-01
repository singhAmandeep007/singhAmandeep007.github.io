// TypeScript type for a dev.to article
export type TDevToArticle = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  language: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    github_username: string | null;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
};

export async function getDevPosts(): Promise<TDevToArticle[]> {
  const response = await fetch(`https://dev.to/api/articles?username=${import.meta.env.VITE_DEV_TO_USERNAME}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // The response is a plain array
  return (await response.json()) as TDevToArticle[];
}
