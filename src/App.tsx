import {useCallback, useState} from "react";
import MathField from "./components/MathField";
import './App.css'
import {MainButton} from "@twa-dev/sdk/react";


export default function App() {
    const [value, setValue] = useState<string>("");

    const handlerSendData = useCallback(() => {
        window.Telegram.WebApp.sendData(value);
    }, [value]);

    return (
        <>
            <MathField
                latex={value}
                autoOpenKeyboard
                hasKeyboardButton={false}
                placeholder="\text{Формула...}"
                onInput={(e) => {
                    setValue(e);
                }}
            />
            <MainButton text="Готово" onClick={handlerSendData} progress={true} hasShineEffect={true} />
        </>
    );
}