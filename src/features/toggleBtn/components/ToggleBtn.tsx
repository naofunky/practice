import { useReducer } from 'react';

const ToggleBtn = () => {
  const [isOpen, toggle] = useReducer((state) => !state, false);
  return (
    <>
      <button onClick={() => toggle()} className="toggleBtn">
        {isOpen ? '開く' : '閉じる'}
      </button>
    </>
  );
};

export default ToggleBtn;
