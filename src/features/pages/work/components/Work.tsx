/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ToggleReverseBtn from '../../../Button/toggleReverseBtn/components/ToggleReverseBtn';
import Header from '../../../Header/components/Header';

// import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

type User = {
  id: number;
  name: string;
  age: string;
};

const Work: React.FC<{ user: User | null }> = ({ user }) => {
  const [iuser, setUser] = useState([]);
  const searchUser = async () => {
    // jsonフォルダ内のuser.jsonを取得
    const res = await fetch('src/json/user.json');
    const data = await res.json();
    setUser(data);
  };

  function isUser(arg: any): arg is User {
    return (
      arg !== null &&
      typeof arg.name === 'string' &&
      typeof arg.age === 'number'
    );
  }

  if (isUser(user)) {
    return (
      <div>
        <Header />
        <h1>Work</h1>
        <ToggleReverseBtn />

        {/* 非同期でユーザー検索 */}
        <div>
          <button type="button" onClick={() => searchUser()}>
            ユーザー検索
          </button>
          <div>
            {iuser.map((item: User) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.age}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No user data</p>;
  }
};

export default Work;
