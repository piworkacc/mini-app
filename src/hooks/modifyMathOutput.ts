export const replaceFraction = (input: string): string => {
  const regex = /\\frac(\d)(\d)/g;

  return input.replace(regex, '\\frac{$1}{$2}');
};

export const replaceSquare = (input: string): string => {
  const regex = /\\sqrt(\d)/g;

  return input.replace(regex, '\\sqrt{$1}');
};

export const modifyMathOutput = (input: string): string => replaceSquare(replaceFraction(input));
