import * as S from "./styles";
import Input from "../Input";

interface Props {
    value: string;
    onClear: () => void;
}

const Visor:React.FC<Props> = ({value}) => {

    return (
        <S.Container>
            <Input>{value}</Input>
        </S.Container>
    );
};

export default Visor;