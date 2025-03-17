/**
 * Component which controls the Main Button visibility.
 */
import { useEffect } from "react";
import {
  mainButton,
  miniApp,
  sendData,
  useSignal,
} from "@telegram-apps/sdk-react";

export function useMainButton(value: string) {
  const isMounted = useSignal(mainButton.isMounted);

  useEffect(() => {
    mainButton.mount();

    if (isMounted) {
      mainButton.setParams({
        isVisible: true,
        text: "Отправить",
        isEnabled: value.length > 0,
      });

      mainButton.offClick(() => {
        sendData(value);
        miniApp.close();
      });
    }

    return () => {
      mainButton.unmount();
    };
  }, [isMounted, value, value.length]);

  return null;
}
