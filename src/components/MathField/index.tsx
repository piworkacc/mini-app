import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { MathfieldElement } from 'mathlive';

import { alphabeticLayout, numericLayout, trigonometryLayout } from './layouts';
import { ControlledProps } from './interfaces';

type Props = ControlledProps;

const MathField: FC<Props> = ({
  onInput,
  latex,
  placeholder = '\text{Введите формулу...}',
  hasKeyboardButton = true,
  autoOpenKeyboard = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mf = useMemo(() => {
    const mathField = new MathfieldElement({virtualKeyboardTargetOrigin: "*", mathVirtualKeyboardPolicy: "manual"});
    mathField.setAttribute('placeholder', placeholder);

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

  const onBlurCallback = useCallback(() => {
    requestAnimationFrame(() => {
      mf.focus();
    });
  }, [mf]);

  const onMountCallback = useCallback(() => {
    window.mathVirtualKeyboard.layouts = [
      { rows: numericLayout, label: '123', labelClass: 'MLK__tex-math' },
      // { rows: functionsLayout, label: 'f(x)', labelClass: 'MLK__tex-math' },
      { rows: trigonometryLayout, label: 'sin', labelClass: 'MLK__tex-math' },
      { rows: alphabeticLayout, label: 'abc', labelClass: 'MLK__tex-math' },
    ];
    mf.menuItems = [];
  }, [mf]);

  useEffect(() => {
    mf.addEventListener('input', onInputCallback);

    return () => mf.removeEventListener('input', onInputCallback);
  }, [mf, onInputCallback]);

  useEffect(() => {
    mf.addEventListener('mount', onMountCallback);

    return () => mf.removeEventListener('mount', onMountCallback);
  }, [mf, onMountCallback]);

  useEffect(() => {
    if (autoOpenKeyboard) {
      mf.addEventListener('focusin', onFocusCallback);
      mf.addEventListener('focusout', onBlurCallback);
    }

    return () => {
      mf.removeEventListener('focusout', onFocusCallback);
      mf.removeEventListener('focusout', onBlurCallback);
    };
  }, [autoOpenKeyboard, mf, onBlurCallback, onFocusCallback]);

  mf.style.setProperty('min-width', '100%');
  mf.style.setProperty('width', '100%');

  useEffect(() => {
    window.mathVirtualKeyboard.targetOrigin="*";
    window.mathVirtualKeyboard.show();

    if (mf && containerRef.current) {
      containerRef.current.appendChild(mf);
      mf.focus();
    }

    return () => {
      window.mathVirtualKeyboard.hide();
    };
  }, [mf, containerRef]);

  mf.value = latex || '';

  return <div className={`math-field ${hasKeyboardButton ? '' : 'withoutKeyboard'}`} ref={containerRef} />;
};

export default MathField;
