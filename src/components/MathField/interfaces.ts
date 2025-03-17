import type Mathlive from "mathlive";

export type BaseProps = {
  onInput: (value: string) => void;
  /**
   * The raw options of mathlive's makeMathField.
   * */
  mathFieldConfig?: Partial<Mathlive.MathfieldOptions>;
};

export type ControlledProps = BaseProps & {
  latex: string | null;
  placeholder?: string;
  hasKeyboardButton?: boolean;
  autoOpenKeyboard?: boolean;
};
