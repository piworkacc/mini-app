import { useCallback, useEffect, useState } from "react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import {
  useSignal,
  useLaunchParams,
  miniApp,
  mainButton,
  onMainButtonClick,
  sendData,
} from "@telegram-apps/sdk-react";

import MathField from "./components/MathField";

import "./App.css";
export default function App() {
  const [value, setValue] = useState<string>("");
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const isMounted = useSignal(mainButton.isMounted);
  const isVisible = useSignal(mainButton.isVisible);

  const handleOnMainButtonClick = useCallback(() => {
    sendData(JSON.stringify({ message: value }));
  }, [value]);

  if (onMainButtonClick.isAvailable()) {
    const off = onMainButtonClick(() => {
      handleOnMainButtonClick();
      off();
    });
  }

  // Включаем кнопку 1 раз
  useEffect(() => {
    mainButton.mount();
  }, [value]);

  useEffect(() => {
    if (isMounted && isVisible) {
      mainButton.setParams({
        isVisible: true,
        text: "Отправить",
        isEnabled: value.length > 0,
      });
    }

    return () => {
      mainButton.unmount();
    };
  }, [isMounted, isVisible, value.length]);

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
        onInput={(val) => setValue(val)}
      />
    </AppRoot>
  );
}
