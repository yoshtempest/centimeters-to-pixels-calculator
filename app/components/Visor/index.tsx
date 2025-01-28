import * as S from "./styles";
import Input from "../Input";

interface Props {
    value: string;
}

const Visor:React.FC<Props> = ({value}) => {

    return (
        <S.Container>
            <S.Display>{value}</S.Display>
            <Input />
        </S.Container>
    );
};

export default Visor;