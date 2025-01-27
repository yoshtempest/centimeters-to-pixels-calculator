import * as S from "./styles"
import NumberButton from "../Button";


const Keyboard = () => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "del", "enter"];

    return (
        <S.Container>
            {numbers.map(number => (
                <NumberButton key={number} value={String(number)} />
            ))}
        
        </S.Container>
    );
};


export default Keyboard;