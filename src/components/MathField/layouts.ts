import { VirtualKeyboardKeycap } from 'mathlive';

const navigationRows: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  [
    { label: '123', class: 'MLK__tex-math MLK__tex-medium', command: 'switchKeyboardLayer("num")' },
    { label: 'f(x)', class: 'MLK__tex-math MLK__tex-medium', command: 'switchKeyboardLayer("func")' },
    { label: 'sin', class: 'MLK__tex-math MLK__tex-medium', command: 'switchKeyboardLayer("trigono")' },
    { label: 'abc', class: 'MLK__tex-math MLK__tex-medium', command: 'switchKeyboardLayer("aplphabet")' },
    { label: '[separator]', width: 1 },
    '[left]',
    '[right]',
    '[backspace]',
  ],
  ['[hr]'],
];

export const numericLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  ...navigationRows,
  [
    { label: '(', latex: '(', variants: ['(', '[', '\\{', ')', ']', '\\}'] },
    { label: '>', latex: '>', variants: ['>', '\\ge', '<', '\\le'] },
    { label: '7', latex: '7', variants: ['\\frac{1}{7}', '{#?}^7'] },
    { label: '8', latex: '8', variants: ['\\frac{1}{8}', '{#?}^8'] },
    { label: '9', latex: '9', variants: ['\\frac{1}{9}', '{#?}^9'] },
    { label: '÷', latex: '÷', variants: ['\\%', '\\frac{#@}{#?}', '#@\\frac{#?}{#?}'] },
  ],
  [
    { latex: '\\frac{#@}{#?}', variants: ['\\frac{#?}{#?}', '#@\\frac{#?}{#?}'] },
    { latex: '\\sqrt{#@}', variants: ['\\sqrt[3]{#?}}', '\\sqrt[#0]{#?}}'] },
    { label: '4', latex: '4', variants: ['\\frac{1}{4}', '{#?}^4'] },
    { label: '5', latex: '5', variants: ['\\frac{1}{5}', '{#?}^5'] },
    { label: '6', latex: '6', variants: ['\\frac{1}{6}', '{#?}^6'] },
    { latex: '\\times' },
  ],
  [
    { latex: '{#@}^2', variants: ['{#?}^2', '{#@}^3', '{#@}^{#?}'] },
    { latex: 'x', variants: ['x', 'y', 'z'] },
    { label: '1', latex: '1', variants: ['\\frac{1}{{#?}}', '{#?}^{-1}'] },
    { label: '2', latex: '2', variants: ['\\frac{1}{2}', '{#?}^2', '\\sqrt{2}'] },
    { label: '3', latex: '3', variants: ['\\frac{1}{3}', '{#?}^3', '\\sqrt{3}'] },
    { label: '-', latex: '-', variants: ['\\pm'] },
  ],
  [
    { latex: '\\pi', variants: ['\\frac{\\pi}{2}', '\\frac{\\pi}{3}'] },
    { latex: '\\%' },
    '[0]',
    '[,]',
    { label: '=', latex: '=', variants: ['\\ne'] },
    { latex: '+' },
  ],
];

export const trigonometryLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  ...navigationRows,
  ['{#?}\\mathrm{rad}', '\\sin(#?)', '\\cos(#?)', '\\tan(#?)', '\\operatorname{\\ctg}(#?)'],
  ['\\ang{#?}', '\\arcsin(#?)', '\\arccos(#?)', '\\arctan(#?)', '\\operatorname{\\arcctg}(#?)'],
  ["\\ang{#?}{#?}'", '\\sec(#?)', '\\csc(#?)', '\\arcsec(#?)', '\\arccsc(#?)'],
  ["\\ang{#?}{#?}'{#?}''", '\\sinh', '\\cosh', '\\tanh', '\\coth'],
];

export const functionsLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  ...navigationRows,
  [{ latex: '\\left\\lvert {#?} \\right\\rvert' }, 'f(x)', '\\log_{10}{#?}'],
  ['{#@}_{#?}', 'f(x,y)', '\\log_{2}{#?}'],
  ['e', '{#?}({#?})', '\\log_{#?}{#?}'],
  ['\\exp', '{#?}({#?},{#?})', '\\ln{#?}'],
];

export const alphabeticLayout: (Partial<VirtualKeyboardKeycap> | string)[][] = [
  ...navigationRows,
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
  ['q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  ['y', 'z', '\\alpha', '\\beta', '\\theta', '\\rho', '\\phi'],
];
