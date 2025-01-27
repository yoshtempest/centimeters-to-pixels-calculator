import * as S from "./styles"


const Input = () => {

    const placeholder = ["Value", "Click Enter"]

    return(
        <S.Container>
            {placeholder.map(response => (
                <S.Input key={response} value={String(response)} />
            ))}
        </S.Container>
    )
};


export default Input;