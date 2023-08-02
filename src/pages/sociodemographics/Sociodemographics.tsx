import { SubmitHandler, useForm } from "react-hook-form";
import { RadioButtonGroup } from "../../components/radioButtonGroup/RadioButtonGroup";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { QuestionsMock } from "./QuestionsMock";
import { FormFooterContainer } from "../../components/formFooterContainer/FormFooterContainer";
import { Input } from "../../components/input/Input";
import { DateInput } from "../../components/dateInput/DateInput";
import CheckboxGroup from "../../components/checkboxGroup/CheckboxGroup";

type SociodemographicsProps = {
    onSubmit: SubmitHandler<any>;
    onNext: () => void;
    defaultValues?: any;
};


export function Sociodemographics({ onSubmit, onNext, defaultValues }: SociodemographicsProps) {

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    function onSubmitHandler(data: any) {
        onSubmit(data)
        onNext()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <SectionHeader
                    content={[
                    ]}
                    title="Sociodemográfico"
                />
                {QuestionsMock.map((question) => {

                    if (question.type == 'radio') {
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
                    else if (question.type == 'number') {
                        return (
                            <div key={`question${question.id}`}>
                                <p>
                                    <strong>{`${question.id}.`}</strong>
                                    {`${question.label}`}
                                </p>
                                <Input
                                    id={`question${question.id}`}
                                    type='number'
                                    placeholder='№'
                                    error={errors[`question${question.id}`]}
                                    registerOptions={{
                                        required: 'Esse campo é obrigatório'
                                    }}
                                    register={register}
                                />
                            </div>
                        )
                    }
                    else if (question.type == 'text') {
                        return (
                            <div key={`question${question.id}`}>
                                <p>
                                    <strong>{`${question.id}.`}</strong>
                                    {`${question.label}`}
                                </p>
                                <Input
                                    id={`question${question.id}`}
                                    type='text'
                                    error={errors[`question${question.id}`]}
                                    registerOptions={{
                                        required: 'Esse campo é obrigatório'
                                    }}
                                    register={register}
                                />
                            </div>

                        )
                    }
                    else if (question.type == 'date') {
                        return (
                            <div key={`question${question.id}`}>
                                <p>
                                    <strong>{`${question.id}.`}</strong>
                                    {`${question.label}`}
                                </p>

                                <DateInput
                                    id={`question${question.id}`}
                                    error={errors[`question${question.id}`]}
                                    register={control.register}
                                    registerOptions={{
                                        required: 'Esse campo é obrigatório'
                                    }}
                                />
                            </div>
                        )
                    }
                    else if (question.type === "checkBoxGroup") {
                        return (
                          <div key={`question${question.id}`}>
                            <p>
                              <strong>{`${question.id}.`}</strong>
                              {`${question.label}`}
                            </p>
                            <CheckboxGroup
                                id={`question${question.id}`}
                              options={question.checkboxes ?? []}
                              error={errors[`question${question.id}`]}
                              register={register}
                            />
                          </div>
                        );
                      }

                }
                )}

                <FormFooterContainer
                    isFirstPage
                />
            </form>
        </div>
    )
}