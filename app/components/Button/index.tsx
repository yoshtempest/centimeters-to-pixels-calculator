import * as S from "./styles"

interface Props{
    value: string;
    onClick: () => void;
}

const NumberButton:React.FC<Props> = ({
    value, onClick
}) => {
    return(
        <S.Container>
            <S.button onClick={onClick}>{value}</S.button>
        </S.Container>
        
    )
}

export default NumberButton;