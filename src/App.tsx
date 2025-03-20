import { useCallback, useEffect, useState } from "react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import {
  useSignal,
  useLaunchParams,
  miniApp,
  mainButton,
  offMainButtonClick,
  sendData,
} from "@telegram-apps/sdk-react";

import MathField from "./components/MathField";

import "./App.css";
export default function App() {
  const [value, setValue] = useState<string>("");
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const isMounted = useSignal(mainButton.isMounted);

  const handleOnMainButtonClick = useCallback(() => {
    sendData(JSON.stringify({ message: value }));
  }, [value]);

  if (offMainButtonClick.isAvailable()) {
    offMainButtonClick(() => {
      handleOnMainButtonClick();
    });
  }

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
      });
    }
  }, [isMounted]);

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
