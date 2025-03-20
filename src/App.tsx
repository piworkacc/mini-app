import { useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';

import MathField from './components/MathField';
import './App.css';

function App() {
  const [latex, setValue] = useState<string | null>(null);

  return (
    <>
      <MathField
        latex={latex}
        autoOpenKeyboard
        hasKeyboardButton={false}
        placeholder="\text{Формула...}"
        onInput={(inputLatex) => {
          setValue(inputLatex);
        }}
      />
      <MainButton text="Отправить" onClick={() => WebApp.close()} color="#fff" textColor="#000" hasShineEffect />
    </>
  );
}

export default App;
