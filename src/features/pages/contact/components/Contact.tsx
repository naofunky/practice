import { ChangeEvent, useState } from 'react';
import { Post } from '../../../../types/PostTypes';
import Header from '../../../Header/components/Header';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Contact = () => {
  // inoutに記述内容
  const [title, setTitle] = useState('');

  const changeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contactSearchTitle = () => {
    const { data, error, isLoading } = useSWR(
      'https://jsonplaceholder.typicode.com/posts',
      fetcher
    );

    console.log(data, error, isLoading);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error...</div>;
  return (
    <div>
      <Header />
      <div className="contactContainer">
        <div className="contactInputCOntainer">
          <input
            type="text"
            onChange={(e) => changeTitleInput(e)}
            value={title}
          />
          <button
            className="contactButton"
            onClick={() => contactSearchTitle()}
          >
            検索
          </button>
        </div>
        {/* {data.map((item: Post) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))} */}
      </div>
    </div>
  );
};

export default Contact;
