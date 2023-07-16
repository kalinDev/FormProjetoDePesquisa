import { useForm } from "react-hook-form";
import { RadioButtonGroup } from "../../components/radioButtonGroup/RadioButtonGroup";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { QuestionsMock } from "./QuestionsMock";

export function Audit() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <SectionHeader
                    content={[
                        "*TESTE PARA IDENTIFICAÇÃO DE PROBLEMAS RELACIONADOS AO USO DE ÁLCOOL*",
                        "O uso de álcool pode afetar sua saúde e pode interferir com algumas medicações e tratamentos. Por isso é importante que você responda sobre o seu uso de álcool",
                        "Por favor, responda todas as questões com sinceridade; suas respostas serão mantidas em sigilo."
                    ]}
                    title="AUDIT"
                />
                {QuestionsMock.map((question) => {

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
                            />
                        </div>
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