type PropsPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type SearchPostDataProps = {
  postData: PropsPost[];
};

//配列で受け取っているためPropsPostをもう一度配列で定義するように
const SearchPostData = ({ postData }: SearchPostDataProps) => {
  return (
    <div>
      {postData.map((item: PropsPost) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </li>
      ))}
    </div>
  );
};

export default SearchPostData;
