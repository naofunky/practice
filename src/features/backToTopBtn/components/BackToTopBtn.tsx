import { Link } from 'react-router-dom';

const BackToTopBtn = () => {
  return (
    <>
      <Link to="/">
        <button>ホームに戻る</button>
      </Link>
    </>
  );
};

export default BackToTopBtn;
