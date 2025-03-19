/**
 * Component which controls the Main Button visibility.
 */
import { useEffect } from "react";
import { mainButton, sendData, useSignal } from "@telegram-apps/sdk-react";

export function useMainButton(value: string) {
  const isMounted = useSignal(mainButton.isMounted);

  const off = mainButton.onClick(() => {
    sendData(value);
  });

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
      off();
      mainButton.unmount();
    };
  }, [isMounted, off, value, value.length]);

  return null;
}
