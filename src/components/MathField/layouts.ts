import { VirtualKeyboardKeycap } from "mathlive";

export const mobileLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  [
    "[undo]",
    "[redo]",
    { label: "[separator]", width: 0.5 },
    { label: "[separator]", width: 2 },
    "[backspace]",
  ],
  ["[hr]"],
  [{ label: "[separator]", width: 2 }, "7", "8", "9", "÷"],
  ["\\frac{#@}{#?}", "#@\\frac{#?}{#?}", "4", "5", "6", "\\times"],
  ["\\sqrt{#0}", "#@^{#?}", "1", "2", "3", "-"],
  ["(", ")", "0", ",", "=", "+"],
];
