import styled from "styled-components";

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const PostCard = styled.a`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${({ theme }) => `var(${theme.color.font})`};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => `var(${theme.color.primary})`};

  transition:
    transform 0.22s cubic-bezier(0.4, 2, 0.6, 1),
    box-shadow 0.22s,
    background 0.22s;
  overflow: hidden;
  position: relative;
  background-clip: padding-box;
  backdrop-filter: blur(3px) saturate(180%);
  -webkit-backdrop-filter: blur(3px) saturate(180%);
  &:hover {
    transform: translateY(-8px) scale(1.03) rotate(-1deg);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #f5f5f5;
`;

export const PostContent = styled.div`
  padding: 1.2rem 1.2rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.3rem;
`;

export const PostTitle = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => `var(${theme.color.font})`};
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  margin: 0 0 0.7rem 0;
  flex: 1;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.95rem;
  margin-bottom: 0.7rem;
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
`;

export const Tag = styled.span`
  color: ${({ theme }) => `var(${theme.color.background})`};
  background: ${({ theme }) => `var(${theme.color.primary})`};
  font-size: 0.85rem;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  font-weight: 500;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
