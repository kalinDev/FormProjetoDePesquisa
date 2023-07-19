import { Input } from '../../components/input/Input.tsx';
import { SubmitHandler, useForm } from 'react-hook-form'
import { QuestionsMock } from './QuestionsMock.tsx'
import { RadioButtonGroup } from '../../components/radioButtonGroup/RadioButtonGroup.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';
import { useEffect } from 'react';
import { FormFooterContainer } from '../../components/formFooterContainer/FormFooterContainer.tsx';

  type ScreeningProps = {
    onSubmit: SubmitHandler<any>;
    onNext: () => void;
    defaultValues?: any;
  };

export function Screening({ onSubmit, onNext, defaultValues }: ScreeningProps) {

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm({defaultValues});


    const question1Value = Number(watch('question1'));
    const question2Value = Number(watch('question2'));
    const question3Value = Number(watch('question3'));
    const question4Value = Number(watch('question4'));

    const isToShowBlockOfQuestions =
        question1Value > 0 ||
        question2Value > 0 ||
        question3Value > 0;


    const isToShowSecondBlockOfQuestions = question4Value > 0

    useEffect(() => {
        if (!isToShowBlockOfQuestions) {
            setValue('question6', undefined);
            setValue('question7', undefined);
            setValue('question8', undefined);
            setValue('question9', undefined);
            setValue('question10', undefined);
        }
    }, [isToShowBlockOfQuestions, setValue]);


    useEffect(() => {
        if (!isToShowBlockOfQuestions) {
            setValue('question11', undefined);
            setValue('question12', undefined);
            setValue('question13', undefined);
            setValue('question14', undefined);
            setValue('question15', undefined);
            setValue('question16', undefined);
        }
    }, [isToShowSecondBlockOfQuestions, setValue]);

    const onSubmitt = (data: any) => {
        onSubmit(data)
        onNext()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitt)}>
                <SectionHeader
                    title='Questionário de Triagem CRAFFT+N 2.1'
                    content={["Por favor, responda todas as questões com sinceridade; suas respostas serão mantidas em sigilo."]}
                    subTitle='Nos últimos 12 MESES, quantos dias você:'
                />

                {QuestionsMock.map((question) => {

                    if (question.type === 'number') {
                        return (
                            <div key={`question${question.id}`}>
                                <p>
                                    <strong>{`${question.id}.`}</strong>
                                    {`${question.label}`}
                                </p>

                                <Input
                                    id={`question${question.id}`}
                                    type='number'
                                    register={register}
                                    placeholder='№ dias'
                                    registerOptions={{
                                        required: 'Esse campo é obrigatório',
                                        min: { value: 0, message: 'O número de dias mínimo é 0' },
                                    }}
                                    error={errors[`question${question.id}`]}
                                />
                            </div>

                        )
                    }
                    else if (question.type === 'radio') {

                        if (question.id > 5  && question.id <= 10 && !isToShowBlockOfQuestions) return;

                        if( question.id > 10 && !isToShowSecondBlockOfQuestions) return

                        return (
                            <div
                                key={`question${question.id}`}
                            >
                                <p>
                                    <strong>{`${question.id}.`}</strong>
                                    {`${question.label}`}</p>

                                <RadioButtonGroup
                                    control={control}
                                    name={`question${question.id}`}
                                    options={question.radios ?? []}
                                    registerOptions={{
                                        required: 'Esse campo é obrigatório'
                                    }}
                                    error={errors[`question${question.id}`]}
                                />
                            </div>
                        )
                    }
                })}
                <FormFooterContainer
                    isFirstPage
                />
            </form>
        </div>
    )
}