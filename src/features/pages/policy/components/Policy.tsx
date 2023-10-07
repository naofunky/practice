import { useSearchParams } from 'react-router-dom';
import Header from '../../../Header/components/Header';
import { ChangeEvent } from 'react';

const Policy = () => {
  const datas = [
    'web制作',
    'webデザイン',
    'web開発',
    'webマーケティング',
    'webコンサルティング',
    'webサイト制作',
  ];

  const [searchTerm, setSearchTerm] = useSearchParams({ keys: '' });
  const keys = searchTerm.get('keys') as string;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((prev) => {
      prev.set('keys', e.target.value);
      return prev;
    });
  };

  const results = datas.filter((data) => data.includes(keys));
  return (
    <div>
      <Header />
      <input type="text" value={keys} onChange={(e) => handleSearch(e)} />
      {results.map((result) => (
        <p>{result}</p>
      ))}
    </div>
  );
};

export default Policy;
