import Header from '../../../Header/components/Header';
import ToggleBtn from '../../../Button/toggleBtn/components/ToggleBtn';
import { useState } from 'react';
import '../../../../App.css';

const About = () => {
  const [inputPassword, setInputPassword] = useState<string>('');

  function createPassword() {
    const material =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    const passwordLength = 16;
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * material.length);
      password += material.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    setInputPassword(password);
  }
  return (
    <div>
      <Header />
      <h1>About</h1>
      <ToggleBtn />
      <h2>パスワード自動生成</h2>
      <input type="text" className="createPassword" value={inputPassword} />
      <button onClick={() => createPassword()}>パスワード生成</button>
    </div>
  );
};

export default About;
