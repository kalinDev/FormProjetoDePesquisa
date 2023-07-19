import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { SliderInput } from "../../components/sliderInput/SliderInput";

export function Marijuana() {
    return (
        <>
            <SectionHeader
                title="Marijuana Craving Questionniere"
                content={[
                    "Indique quão fortemente você concorda ou discorda das seguintes afirmações, selecionando um dos números de 1 à 7 que indicam a força da sua concordância ou discordância.",
                    "Quanto mais baixo o número que você selecionar, maior sua concordância com a afirmação feita e, quanto maior o número selecionado, maior a discordância. Se você não concorda nem discorda, selecione o 4, que é o número do meio.",
                    "Estamos interessados em saber como você está pensando ou sentindo-se agora, no momento em que preenche este questionário."
            ]}
            />
            <SliderInput/>
        </>
    )
}