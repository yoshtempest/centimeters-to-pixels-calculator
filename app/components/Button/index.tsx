import * as S from "./styles"

interface Props{
    value: string;
    onClick: () => void;
    onButtonClick: (value: string) => void;
    onClear: () => void;
}

const NumberButton:React.FC<Props> = ({
    value, onClick, onButtonClick, onClear
}) => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return(
        <S.Container>
            {numbers.map(number => (
                <S.Button
                key={number}
                value={String(number)}
                onClick={() => onButtonClick(String(number))} />
            ))}

            <S.Button value="del" onClick={onClear} />
            <S.Button value="enter" onClick={onClick}/>
            <S.Button onClick={onClick}>{value}</S.Button>

        </S.Container>
    )
}

export default NumberButton;