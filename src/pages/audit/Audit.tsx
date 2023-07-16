import { useForm } from "react-hook-form";
import { RadioInput } from "../../components/radioInput/RadioInput";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";

type InputType = 'radio'

interface Radio {
    label: string;
    value: string | 'number';
}

interface QuestionItem {
    id: number;
    type: InputType;
    placeholder?: string;
    label: string;
    radios?: Radio[];
}

const questions : QuestionItem[] = [
    {
        id: 1,
        type: "radio",
        label: "Com que freqüência (quantas vezes por semana) você consome bebidas alcoólicas? ",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Uma vez por mês ou menos',
                value: 'Uma vez por mês ou menos'
            },
            {
                label: '2-4 vezes por mês',
                value: '2-4 vezes por mês'
            },
            {
                label: '2-3 vezes por semana',
                value: '2-3 vezes por semana'
            },
            {
                label: '4 ou mais vezes por semana',
                value: '4 ou mais vezes por semana'
            }
        ]
    },
    {
        id: 2,
        type: "radio",
        label: "Quantas doses de álcool você consome num dia normal? ",
        radios: [
            {
                label: '0 ou 1',
                value: '0 ou 1'
            },
            {
                label: '2 ou 3',
                value: '2 ou 3'
            },
            {
                label: '4 ou 5',
                value: '4 ou 5'
            },
            {
                label: '6 ou 7',
                value: '6 ou 7'
            },
            {
                label: '8 ou mais',
                value: '8 ou mais'
            }
        ]
    },
]

export function Audit() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any){
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <SectionHeader
                    content={[
                        "O uso de álcool pode afetar sua saúde e pode interferir com algumas medicações e tratamentos. Por isso é importante que você responda sobre o seu uso de álcool",
                        "Por favor, responda todas as questões com sinceridade; suas respostas serão mantidas em sigilo."
                    ]}
                    title="AUDIT – TESTE PARA IDENTIFICAÇÃO DE PROBLEMAS RELACIONADOS AO USO DE ÁLCOOL"
                />
                {questions.map((question) => {

                    return (
                        <RadioInput
                            label={question.label}
                            key={`question${question.id}`}
                            id={`question${question.id}`}
                            questionNumber={question.id.toString()}
                            radios={question.radios ?? []}
                            register={register}
                            registerOptions={{
                                required: 'Esse campo é obrigatório',
                            }}
                            error={errors[`question${question.id}`]}
                        />
                    )
                }
                )}
                <footer>
                    <button
                    >
                        Continuar
                    </button>
                </footer>
            </form>
        </div>
    )
}