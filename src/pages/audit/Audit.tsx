import { SubmitHandler, useForm } from "react-hook-form";
import { RadioButtonGroup } from "../../components/radioButtonGroup/RadioButtonGroup";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { QuestionsMock } from "./QuestionsMock";
import { FormFooterContainer } from "../../components/formFooterContainer/FormFooterContainer";


type Audit = {
    onSubmit: SubmitHandler<any>;
    onNext: () => void;
    onPrev: () => void;
    defaultValues?: any;
    previousData:any
  };


export function Audit({ onSubmit, onPrev, onNext, defaultValues }: Audit) {

    console.log(defaultValues)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues});

    function onSubmitt(data: any) {
        onSubmit(data)
        onNext()
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitt)}>

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
                                registerOptions={{
                                    required: 'Esse campo é obrigatório'
                                }}
                            />
                        </div>
                    )
                }
                )}

                <FormFooterContainer
                    onPrev={onPrev}
                />
            </form>
        </div>
    )
}