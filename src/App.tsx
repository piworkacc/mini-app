import { useState } from "react";
import MathField from "./components/MathField";

export default function App() {
    const [value, setValue] = useState<string>("");

    return (

            <MathField
                latex={value}
                autoOpenKeyboard
                hasKeyboardButton={false}
                placeholder="\text{Формула...}"
                onInput={(e) => {
                    setValue(e);
                }}
            />

    );
}