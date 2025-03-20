import { useCallback, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';

import MathField from './components/MathField';
import './App.css';

function App() {
  const [latex, setValue] = useState<string | null>(null);

  const handleOnClick = useCallback(() => {
    WebApp.sendData(JSON.stringify(latex));
    WebApp.close();
  }, [latex]);

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
      <MainButton text="Отправить" onClick={handleOnClick} disabled={!latex} />
    </>
  );
}

export default App;
