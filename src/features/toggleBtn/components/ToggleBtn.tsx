import { useReducer } from 'react';
import ModalTop from '../../modalTop/components/ModalTop';

const ToggleBtn = () => {
  const [isOpen, toggle] = useReducer((state) => !state, false);
  return (
    <>
      <button onClick={() => toggle()} className="toggleBtn">
        {isOpen ? '閉じる' : 'ホームに戻るボタンを表示'}
      </button>
      {isOpen && <ModalTop />}
    </>
  );
};

export default ToggleBtn;
