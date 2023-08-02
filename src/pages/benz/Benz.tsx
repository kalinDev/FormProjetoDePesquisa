import { SubmitHandler, useForm } from "react-hook-form";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { QuestionsMock } from "./QuestionsMock";
import { RadioButtonGroup } from "../../components/radioButtonGroup/RadioButtonGroup";
import { FormFooterContainer } from "../../components/formFooterContainer/FormFooterContainer";
import { useEffect } from "react";

type HadsProps = {
    onSubmit: SubmitHandler<any>;
    onNext: () => void;
    onPrev: () => void;
    defaultValues?: any;
};


export function Benz({ onSubmit, onPrev, onNext, defaultValues }: HadsProps) {
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues });

    var isToShowPart2 = watch("questionFiltro") == "sim";

    useEffect(() => {
        if (!isToShowPart2) {
            setValue('question15', undefined);
            setValue('question16', undefined);
            setValue('question17', undefined);
            setValue('question18', undefined);
            setValue('question19', undefined);
        }
    }, [isToShowPart2, setValue]);


    console.log(isToShowPart2)

    function onSubmitHandler(data: any) {
        onSubmit(data)
        onNext()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <SectionHeader
                    content={["Instruções: As afirmações abaixo são exclusivamente sobre os comprimidos de hipnóticos (remédios para dormir) ou tranquilizantes (calmantes) que são indicados (prescritos) para você. Por favor, responda às afirmações da forma com que se aplicam a você ao longo dos últimos seis meses e circule a resposta apropriada."]}
                    title="QUESTIONÁRIO DE AUTORRELATO DE DEPENDÊNCIA DE BENZODIAZEPÍNICOS"
                />
                {QuestionsMock.map((question) => {
                    if (question.id > 14) return
                    return (
                        <div key={`question${question.id}`}>

                            <p>
                                <strong>{`${question.id}.`}</strong>
                                {`${question.label}`}
                            </p>
                            <RadioButtonGroup
                                control={control}
                                name={`question${question.id}`}
                                options={question.radios ?? []}
                                error={errors[`question${question.id}`]}
                                registerOptions={{
                                    required: 'Esse campo é obrigatório'
                                }}
                            />
                        </div>
                    )
                }
                )}
                <p>
                <strong>{`Filtro. `}</strong>
                    {`${"Você já tentou usar menos ou parar sua medicação?"}`}
                </p>
                <RadioButtonGroup
                    control={control}
                    name={`questionFiltro`}
                    options={[{ label: "Sim", value: "sim" }, { label: "Não", value: "não" }]}
                    error={errors[`questionFiltro`]}
                    registerOptions={{
                        required: 'Esse campo é obrigatório'
                    }}
                />

                {
                    isToShowPart2 ? QuestionsMock.map((question) => {
                        if (question.id <= 14) return
                        return (
                            <div key={`question${question.id}`}>

                                <p>
                                    <strong>{`${question.id}.`}</strong>
                                    {`${question.label}`}
                                </p>
                                <RadioButtonGroup
                                    control={control}
                                    name={`question${question.id}`}
                                    options={question.radios ?? []}
                                    error={errors[`question${question.id}`]}
                                    registerOptions={{
                                        required: 'Esse campo é obrigatório'
                                    }}
                                />
                            </div>
                        )
                    }
                    )
                        : ""
                }
                <FormFooterContainer
                    onPrev={onPrev}
                />
            </form>
        </div>
    )
}