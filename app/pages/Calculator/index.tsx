import React, { useState } from "react";
import * as S from "./styles"
import Keyboard from "../../components/Keyboard"
import Visor from "../../components/Visor"


const CalculatorPage = () => {

    const [currentValue, setCurrentValue] = useState<string>("");

    // função que recebe um valor e adiciona ao currentValue
    const handleButtonClick = (value: string) => {
        setCurrentValue((prev) => prev + value);
    };

    // função que limpa o value
    const clearLastValue = () => {
        setCurrentValue((prev) => prev.slice(0, -1));
    };

    return (
        <S.container>
            <Visor value={currentValue} />
            <Keyboard onButtonClick= {handleButtonClick} onClear = {clearLastValue} />
        </S.container>
    )
};


export default CalculatorPage;