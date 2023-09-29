import { ChangeEvent } from 'react';

type Props = {
  title: string;
  setTitle: (title: string) => void;
};

const ContactInput = (props: Props) => {
  const { title, setTitle } = props;

  const changeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={(e) => changeTitleInput(e)} value={title} />
    </>
  );
};

export default ContactInput;
