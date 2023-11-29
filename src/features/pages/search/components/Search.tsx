import { useQuery } from '@tanstack/react-query';
import Header from '../../../Header/components/Header';
import { useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Search = () => {
  // 取得したデータを格納
  const [postData, setPostData] = useState<Post[]>([]);

  // データ取得
  const { data, error, isLoading } = useQuery({
    queryKey: ['search'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
  });

  const clickPostData = async () => {
    setPostData(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div>
      <Header />
      <button onClick={() => clickPostData()}>記事を取得</button>
      <h1>search</h1>
      {postData.map((item: Post) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </li>
      ))}
    </div>
  );
};
