import * as S from "./styles"

interface Props{
    value: string
}

const NumberButton:React.FC<Props> = ({
    value
}) => {
    return(
        <S.Container>
            <S.button>{value}</S.button>
        </S.Container>
        
    )
}

export default NumberButton;