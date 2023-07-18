import { FormFooterContainerStyle } from "./FormFooterContainerStyle";


interface FormFooterContainerProp {
    onPrev?: () => void;
    isFirstPage?: boolean;
    isLastPage?: boolean;
}

export function FormFooterContainer({ isFirstPage, isLastPage, onPrev }: FormFooterContainerProp) {
    return (
        <footer style={FormFooterContainerStyle.container}>
            {!isFirstPage && <button type="button" onClick={onPrev}>Voltar</button>}
            <button
                style={{
                    ...(!isLastPage && FormFooterContainerStyle.rightButton),
                }}
                type="submit"
            >
                {isLastPage ? "Finalizar" : "Continuar"}
            </button>
        </footer>
    );
}
