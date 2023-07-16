import { useForm } from "react-hook-form";
import { RadioInput } from "../../components/radioInput/RadioInput";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { QuestionsMock } from "./QuestionsMock";

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
                {QuestionsMock.map((question) => {

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