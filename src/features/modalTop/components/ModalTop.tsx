import { Link } from 'react-router-dom';

const ModalTop = () => {
  return (
    <>
      <div
        aria-labelledby="dialogTitle"
        aria-describedby="dialogDesc"
        className="dialogMask"
      >
        <dialog id="dialogTitle" className="dialogTop">
          <p id="dialogDesc">初期値から反転したため、表示する</p>
          <Link to="/">ホームに戻る</Link>
        </dialog>
      </div>
    </>
  );
};

export default ModalTop;
