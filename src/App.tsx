import { useState } from "react";
import { AppRoot, Button } from "@telegram-apps/telegram-ui";
import {
  useSignal,
  useLaunchParams,
  miniApp,
  sendData,
} from "@telegram-apps/sdk-react";

import MathField from "./components/MathField";

import "./App.css";

export default function App() {
  const [value, setValue] = useState<string>("");
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

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
        onInput={(e) => {
          setValue(e);
        }}
      />
      <Button onClick={() => sendData(value)}>Готово</Button>
    </AppRoot>
  );
}
