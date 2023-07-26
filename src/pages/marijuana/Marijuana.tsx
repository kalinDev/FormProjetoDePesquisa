import { FormFooterContainer } from "../../components/formFooterContainer/FormFooterContainer";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { SliderInput } from "../../components/sliderInput/SliderInput";
import { QuestionsMock } from "./QuestionsMock";
import { SubmitHandler, useForm } from "react-hook-form";

type MarijuanaProps = {
    onSubmit: SubmitHandler<any>;
    onNext: () => void;
    onPrev: () => void;
    defaultValues?: any;
    previousData: any
};


export function Marijuana({ onSubmit, onPrev, onNext, defaultValues }: MarijuanaProps) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    function onSubmitHandler(data: any) {
        onSubmit(data)
        console.log(errors)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <SectionHeader
                    title="Marijuana Craving Questionniere"
                    content={[
                        "Indique quão fortemente você concorda ou discorda das seguintes afirmações, selecionando um dos números de 1 à 7 que indicam a força da sua concordância ou discordância.",
                        "Quanto mais baixo o número que você selecionar, maior sua concordância com a afirmação feita e, quanto maior o número selecionado, maior a discordância. Se você não concorda nem discorda, selecione o 4, que é o número do meio.",
                        "Estamos interessados em saber como você está pensando ou sentindo-se agora, no momento em que preenche este questionário."
                    ]}
                />
                {QuestionsMock.map((question) => {

                    return (
                        <div key={`question${question.id}`}>

                            <p>
                                <strong>{`${question.id}.`}</strong>
                                {`${question.label}`}
                            </p>
                            <SliderInput
                                id={`question${question.id}`}
                                register={register}
                                registerOptions={{
                                    required: 'Esse campo é obrigatório',
                                }}
                                error={errors[`question${question.id}`]}
                            />
                        </div>
                    )
                })}
                <FormFooterContainer
                    onPrev={onPrev}
                    isLastPage
                />
            </form>
        </div>

    )
}