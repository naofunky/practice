import { ChangeEvent, useState } from 'react';
import Header from '../../../Header/components/Header';
import { fetchPosts } from '../hooks/fetchPosts';
import { filterPosts } from '../hooks/filterPosts';

export const Search = () => {
  // 検索単語の状態を管理する
  const [searchTerm, setSearchTerm] = useState<string>('');
  // ユーザーIDの状態を管理する
  const [userId, setUserId] = useState<number>(0);

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const changeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.valueAsNumber);
  };

  const clickSearchPosts = async () => {
    // APIからデータを取得
    const posts = await fetchPosts();

    // フィルタリングを行う
    const filteredPosts = filterPosts(posts, searchTerm, userId);
    console.log(filteredPosts);
  };
  return (
    <div>
      <Header />
      <h1>search</h1>
      <label>
        検索語:
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => changeSearch(e)}
        />
      </label>

      <label>
        ユーザID:
        <input
          type="number"
          id="userId"
          value={userId}
          onChange={(e) => changeUserId(e)}
        />
      </label>

      <button onClick={clickSearchPosts}>検索</button>

      <div id="results"></div>
    </div>
  );
};
