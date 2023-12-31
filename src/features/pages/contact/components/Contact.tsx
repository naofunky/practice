import { useState } from 'react';
import { Post } from '../../../../types/PostTypes';
import Header from '../../../Header/components/Header';
import useSWR from 'swr';
import ContactInput from '../../../Input/components/ContactInput';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Contact = () => {
  // inoutに記述内容
  const [title, setTitle] = useState('');
  // 単語フィルタリンングしたタイトルを配列で格納
  const [searchTitle, setSearchTitle] = useState([]);

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  const contactSearchTitle = () => {
    const datas = data.filter((item: Post) => item.title.includes(title));
    setSearchTitle(datas);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div>
      <Header />
      <div className="contactContainer">
        <div className="contactInputCOntainer">
          <ContactInput title={title} setTitle={setTitle} />
          <button
            className="contactButton"
            onClick={() => contactSearchTitle()}
          >
            検索
          </button>
        </div>
        {searchTitle.map((item: Post) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Contact;
