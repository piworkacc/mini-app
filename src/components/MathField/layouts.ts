import {VirtualKeyboardKeycap} from "../../../node_modules/mathlive/dist/types/virtual-keyboard";

export const mobileLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  ['[hide-keyboard]', { label: '[separator]', width: 1 }, '[left]', '[right]', '[backspace]'],
  ['[hr]'],
  [{ label: '[separator]', width: 2 }, '7', '8', '9', '÷'],
  ['\\frac{#@}{#?}', '#@\\frac{#?}{#?}', '4', '5', '6', '\\times'],
  ['\\sqrt{#0}', '#@^{#?}', '1', '2', '3', '-'],
  ['(', ')', '0', ',', '=', '+'],
];