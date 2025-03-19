import { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { MathfieldElement } from "mathlive";

import { mobileLayout } from "./layouts";
import { ControlledProps } from "./interfaces";

type Props = ControlledProps;

const MathField: FC<Props> = ({
  onInput,
  latex,
  placeholder = "\text{Формула...}",
  hasKeyboardButton = true,
  autoOpenKeyboard = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mf = useMemo(() => {
    const mathField = new MathfieldElement();
    mathField.setAttribute("placeholder", placeholder);

    return mathField;
  }, [placeholder]);

  const onInputCallback = useCallback(
    (event: Event) => {
      onInput((event.target as HTMLInputElement).value);
    },
    [onInput],
  );

  const onFocusCallback = useCallback((e: FocusEvent) => {
    e.stopPropagation();
    window.mathVirtualKeyboard.show();
  }, []);

  const onMountCallback = useCallback(() => {
    window.mathVirtualKeyboard.layouts = [{ rows: mobileLayout }];
    mf.menuItems = [];
  }, [mf]);

  useEffect(() => {
    mf.addEventListener("input", onInputCallback);

    return () => mf.removeEventListener("input", onInputCallback);
  }, [mf, onInputCallback]);

  useEffect(() => {
    mf.addEventListener("mount", onMountCallback);

    return () => mf.removeEventListener("mount", onMountCallback);
  }, [mf, onMountCallback]);

  useEffect(() => {
    if (autoOpenKeyboard) mf.addEventListener("focusin", onFocusCallback);

    return () => mf.removeEventListener("focusout", onFocusCallback);
  }, [autoOpenKeyboard, mf, onFocusCallback]);

  mf.style.setProperty("min-width", "100%");
  mf.style.setProperty("width", "100%");

  useEffect(() => {
    if (mf && containerRef.current) {
      containerRef.current.appendChild(mf);
    }

    window.MathfieldElement.soundsDirectory =
      "/node_modules/mathlive/dist/sounds";
    window.MathfieldElement.fontsDirectory =
      "/node_modules/mathlive/dist/fonts";

    return () => {
      window.mathVirtualKeyboard.hide();
    };
  }, [mf]);

  mf.value = latex || "";

  return (
    <div
      className={`math-field ${hasKeyboardButton ? "" : "withoutKeyboard"}`}
      ref={containerRef}
    />
  );
};

export default MathField;
