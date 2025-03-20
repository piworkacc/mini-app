/**
 * Component which controls the Main Button visibility.
 */
import { useEffect } from "react";
import {
  mainButton,
  sendData,
  useSignal,
  onMainButtonClick,
} from "@telegram-apps/sdk-react";

export function useMainButton(value: string) {
  const isMounted = useSignal(mainButton.isMounted);

  if (onMainButtonClick.isAvailable()) {
    const off = onMainButtonClick(() => {
      sendData(value);
      off();
    });
  }

  useEffect(() => {
    mainButton.mount();

    if (isMounted) {
      mainButton.setParams({
        isVisible: true,
        text: "Отправить",
        isEnabled: value.length > 0,
      });
    }
    return () => {
      mainButton.unmount();
    };
  }, [isMounted, value.length]);

  return null;
}
