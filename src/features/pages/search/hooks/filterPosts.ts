import { Post } from '../../../../types/PostTypes';

export const filterPosts = (
  post: Post[],
  searchTerm: string,
  userId: number
) => {
  return post.filter((post) => {
    post.title.includes(searchTerm) && post.userId === userId;
  });
};
