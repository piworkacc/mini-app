import { useCallback, useEffect, useState } from "react";
import { AppRoot, Button } from "@telegram-apps/telegram-ui";
import {
  useSignal,
  useLaunchParams,
  miniApp,
  mainButton,
  sendData,
} from "@telegram-apps/sdk-react";

import MathField from "./components/MathField";

import "./App.css";
export default function App() {
  const [latex, setValue] = useState<string>("");

  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const isMounted = useSignal(mainButton.isMounted);

  const handleOnMainButtonClick = useCallback(() => {
    sendData(JSON.stringify({ message: latex }));
    miniApp.close();
  }, [latex]);

  useEffect(() => {
    mainButton.mount();
    return () => {
      mainButton.unmount();
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      mainButton.setParams({
        isVisible: true,
        text: "Отправить",
        isEnabled: latex.length > 0,
      });
      mainButton.onClick(handleOnMainButtonClick);
    }
  }, [handleOnMainButtonClick, isMounted, latex]);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <MathField
        latex={latex}
        autoOpenKeyboard
        hasKeyboardButton={false}
        placeholder="\text{Формула...}"
        onInput={(inputLatex) => {
          setValue(inputLatex);
        }}
      />
      <Button onClick={handleOnMainButtonClick}>Нажатие на кнопку</Button>
    </AppRoot>
  );
}
