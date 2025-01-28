import * as S from "./styles"
import NumberButton from "../Button";


interface Props {
    onButtonClick: (value: string) => void;
}

const Keyboard:React.FC<Props> = ({onButtonClick}) => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "del", "enter"];

    return (
        <S.Container>
            {numbers.map(number => (
                <NumberButton
                key={number}
                value={String(number)}
                onClick={() => onButtonClick(String(number))} />
            ))}
        
        </S.Container>
    );
};


export default Keyboard;