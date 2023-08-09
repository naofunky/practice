import { useState } from 'react';
import ModalTop from '../../../Modal/modalTop/components/ModalTop';

const ToggleReverseBtn = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const toggle = () => setIsopen((prev) => !prev);
  return (
    <>
      <button onClick={() => toggle()} className="toggleBtn">
        {isOpen ? '閉じる' : 'ホームに戻るボタンを表示'}
      </button>
      {isOpen && <ModalTop />}
    </>
  );
};

export default ToggleReverseBtn;
