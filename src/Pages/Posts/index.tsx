import { useEffect, useState } from "react";

import { SectionContainer, SectionTitle, Wrapper } from "@/Components/CommonElements";

import { FaRegCommentDots } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

import {
  Icon,
  PostCard,
  PostContent,
  PostDescription,
  PostImage,
  PostMeta,
  PostTags,
  PostTitle,
  PostsGrid,
  Tag,
} from "./PostsElements";

import { getDevPosts } from "./services";

type DevPost = {
  id: number;
  title: string;
  description: string;
  published_timestamp: string;
  social_image: string;
  url: string;
  public_reactions_count: number;
  comments_count: number;
  tag_list: string[];
  reading_time_minutes: number;
};

export const PostsPage = () => {
  const [posts, setPosts] = useState<DevPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getDevPosts();
      // Filter out reposts (reading_time_minutes === 1)
      setPosts(data.filter((p: DevPost) => p.reading_time_minutes > 1));
      setLoading(false);
    }
    fetchPosts().catch(() => setLoading(false));
  }, []);

  return (
    <SectionContainer>
      <Wrapper>
        <SectionTitle>My Posts</SectionTitle>

        {loading ? null : (
          <PostsGrid>
            {posts.map((post) => (
              <PostCard
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                title={post.title}
              >
                <PostImage
                  src={post.social_image}
                  alt={post.title}
                />
                <PostContent>
                  <PostTitle>{post.title}</PostTitle>
                  <PostDescription>{post.description}</PostDescription>
                  <PostTags>
                    {post.tag_list.map((tag) => (
                      <Tag key={tag}>#{tag}</Tag>
                    ))}
                  </PostTags>
                  <PostMeta>
                    <Icon>
                      <FaCalendarDays size="20" /> {new Date(post.published_timestamp).toLocaleDateString()}
                    </Icon>
                    <Icon>
                      <FaRegCommentDots size="20" /> {post.comments_count}
                    </Icon>
                    <Icon>
                      <FcLike size="20" /> {post.public_reactions_count}
                    </Icon>
                  </PostMeta>
                </PostContent>
              </PostCard>
            ))}
          </PostsGrid>
        )}
      </Wrapper>
    </SectionContainer>
  );
};
