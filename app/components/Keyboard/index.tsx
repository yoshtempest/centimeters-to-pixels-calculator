import * as S from "./styles"
import NumberButton from "../NumberButton";


const Keyboard = () => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <S.Container>
            {numbers.map(number => (
                <NumberButton key={number} value={String(number)} />
            ))}
        <NumberButton value="del" />
        <NumberButton value="enter" />
        
        </S.Container>
    );
};


export default Keyboard;