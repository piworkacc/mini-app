import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { MathfieldElement } from 'mathlive';
import { useResize } from '../../../src/hooks/useResize';

import { desktopLayout, mobileLayout } from './layouts';
import { ControlledProps } from './interfaces';

type Props = ControlledProps;

const MathField: FC<Props> = ({
                                onInput,
                                latex,
                                placeholder = '\\text{Введите ответ...}',
                                hasKeyboardButton = true,
                                autoOpenKeyboard = true,
                              }) => {
  const { isMobileView } = useResize();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mf = useMemo(() => {
    const mathField = new MathfieldElement();
    mathField.setAttribute('placeholder', placeholder ?? '');

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
    window.mathVirtualKeyboard.layouts = [{ rows: isMobileView ? mobileLayout : desktopLayout }];
    mf.menuItems = [];
  }, [isMobileView, mf]);

  useEffect(() => {
    mf.addEventListener('input', onInputCallback);

    return () => mf.removeEventListener('input', onInputCallback);
  }, [mf, onInputCallback]);

  useEffect(() => {
    mf.addEventListener('mount', onMountCallback);

    return () => mf.removeEventListener('mount', onMountCallback);
  }, [mf, onMountCallback]);

  useEffect(() => {
    if (autoOpenKeyboard) mf.addEventListener('focus', onFocusCallback);

    return () => mf.removeEventListener('focus', onFocusCallback);
  }, [autoOpenKeyboard, mf, onFocusCallback]);

  mf.style.setProperty('min-width', '100%');
  mf.style.setProperty('width', '100%');

  // Установка стиля placeholder через JavaScript
  mf.style.setProperty('--placeholder-color', '#888'); // Цвет
  mf.style.setProperty('--placeholder-italic', 'italic');

  useEffect(() => {
    if (mf && containerRef.current) {
      containerRef.current.appendChild(mf);
    }

    window.MathfieldElement.soundsDirectory = null;
    window.MathfieldElement.fontsDirectory = null;

    return () => {
      window.mathVirtualKeyboard.hide();
    };
  }, [mf]);

  mf.value = latex || '';

  return <div className={`math-field ${hasKeyboardButton ? '' : 'withoutKeyboard'}`} ref={containerRef} />;
};

export default MathField;
