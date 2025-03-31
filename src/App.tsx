import { useCallback, useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { MainButton } from '@twa-dev/sdk/react';

import MathField from './components/MathField';
import './App.css';
import { modifyMathOutput } from './hooks/modifyMathOutput.ts';

function App() {
  const [latex, setValue] = useState<string | null>(null);

  const handleOnClick = useCallback(() => {
    WebApp.sendData(JSON.stringify(modifyMathOutput(latex ?? "")));
    WebApp.close();
  }, [latex]);

  useEffect(() => {
    WebApp.expand();
  }, []);

  return (
    <>
      <MathField
        latex={latex}
        autoOpenKeyboard
        hasKeyboardButton={false}
        placeholder="\text{Формула...}"
        onInput={setValue}
      />
      <MainButton text="Отправить" onClick={handleOnClick} disabled={!latex} />
    </>
  );
}

export default App;
