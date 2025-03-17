/**
 * Component which controls the Main Button visibility.
 */
import { useEffect } from "react";
import { mainButton, miniApp, useSignal } from "@telegram-apps/sdk-react";

export function useMainButton(value: string) {
  const isMounted = useSignal(mainButton.isMounted);

  mainButton.offClick(() => {
    mainButton.setParams({
      text: value,
    });
    miniApp.close();
  });

  useEffect(() => {
    mainButton.mount();

    if (isMounted) {
      mainButton.setParams({
        isVisible: true,
        text: "Отправить",
        isEnabled: true,
      });
    }

    return () => {
      mainButton.unmount();
    };
  }, [isMounted]);

  return null;
}
