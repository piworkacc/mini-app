import { Telegram } from "@twa-dev/types";
import { MathfieldElement } from 'mathlive';

declare global {
    namespace React.JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
        }
    }
}

declare global {
    interface Window {
        Telegram: Telegram;
    }
}
