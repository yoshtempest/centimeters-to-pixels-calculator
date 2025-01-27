import * as S from "./styles"
import Keyboard from "../../components/Keyboard"
import Visor from "../../components/Visor"

const CalculatorPage = () => {

    return (
        <S.container>
            <Visor></Visor>
            <Keyboard></Keyboard>
        </S.container>
    )
};


export default CalculatorPage;