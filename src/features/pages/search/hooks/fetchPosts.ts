import { Post } from '../../../../types/PostTypes';

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );
  return res;
};
