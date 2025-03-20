import { useEffect, useState } from "react";
import { AppRoot } from "@telegram-apps/telegram-ui";
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
  const [value, setValue] = useState<string>("");

  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const isMounted = useSignal(mainButton.isMounted);

  useEffect(() => {
    mainButton.mount();
    return () => {
      mainButton.unmount();
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleOnMainButtonClick = () => {
        sendData(JSON.stringify({ message: value }));
        miniApp.close();
      };

      mainButton.setParams({
        isVisible: true,
        text: "Отправить",
      });

      mainButton.onClick(handleOnMainButtonClick);
    }
  }, [isMounted, value]);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <MathField
        latex={value}
        autoOpenKeyboard
        hasKeyboardButton={false}
        placeholder="\text{Формула...}"
        onInput={(inputLatex) => {
          setValue(inputLatex);
        }}
      />
    </AppRoot>
  );
}
