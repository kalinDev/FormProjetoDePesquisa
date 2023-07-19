import { SubmitHandler, useForm } from "react-hook-form";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { QuestionsMock } from "./QuestionsMock";
import { RadioButtonGroup } from "../../components/radioButtonGroup/RadioButtonGroup";
import { FormFooterContainer } from "../../components/formFooterContainer/FormFooterContainer";

type HadsProps = {
    onSubmit: SubmitHandler<any>;
    onNext: () => void;
    onPrev: () => void;
    defaultValues?: any;
    previousData:any
  };


export function Hads({ onSubmit, onPrev, onNext, defaultValues }: HadsProps) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues});

    function onSubmitt(data: any) {
        onSubmit(data)
        onNext()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitt)}>

                <SectionHeader
                    content={[]}
                    title=" Escala Razões para Fumar da Universidade de São Paulo (ERF-USP)"
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