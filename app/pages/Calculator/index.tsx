import React, { useState } from "react";
import * as S from "./styles"
import Keyboard from "../../components/Keyboard"
import Visor from "../../components/Visor"


const CalculatorPage = () => {

    const [currentValue, setCurrentValue] = useState<string>("");

    return (
        <S.container>
            <Visor value={currentValue} />
            <Keyboard onButtonClick={(value: string) => setCurrentValue(value)} />
        </S.container>
    )
};


export default CalculatorPage;