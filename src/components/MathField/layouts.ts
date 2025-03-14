import { VirtualKeyboardKeycap } from 'mathlive/dist/types/virtual-keyboard';

export const mobileLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  ['[hide-keyboard]', { label: '[separator]', width: 1 }, '[left]', '[right]', '[backspace]'],
  ['[hr]'],
  [{ label: '[separator]', width: 2 }, '7', '8', '9', '÷'],
  ['\\frac{#@}{#?}', '#@\\frac{#?}{#?}', '4', '5', '6', '\\times'],
  ['\\sqrt{#0}', '#@^{#?}', '1', '2', '3', '-'],
  ['(', ')', '0', ',', '=', '+'],
];

export const desktopLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  [
    '+',
    '-',
    '\\times',
    '÷',
    '\\frac{#@}{#?}',
    '#@\\frac{#?}{#?}',
    '=',
    ',',
    '(',
    ')',
    '\\sqrt{#0}',
    '#@^{#?}',
    '[hide-keyboard]',
  ],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '[backspace]'],
];
