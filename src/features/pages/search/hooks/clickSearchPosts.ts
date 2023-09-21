/* eslint-disable react-hooks/rules-of-hooks */
import { fetchPosts } from './fetchPosts';
import { filterPosts } from './filterPosts';

export const clickSearchPosts = async (searchTerm: string, userId: number) => {
  // APIからデータを取得
  const posts = await fetchPosts();
  console.log(posts);
  console.log(searchTerm, userId);

  // フィルタリングを行う
  const filteredPosts = filterPosts(posts, searchTerm, userId);
  console.log(searchTerm, userId, filteredPosts);
};
