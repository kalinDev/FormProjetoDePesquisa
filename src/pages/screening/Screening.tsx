import { Input } from '../../components/input/Input.tsx';
import { useForm } from 'react-hook-form'
import { useEffect, useMemo } from 'react';
import { QuestionsMock } from './QuestionsMock.tsx'
import { RadioInput } from '../../components/radioInput/RadioInput.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';


export function Screening() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const question1Value = Number(watch('question1'));
    const question2Value = Number(watch('question2'));
    const question3Value = Number(watch('question3'));
    const question4Value = Number(watch('question4'));

    const isToShowBlockOfQuestions =
        question1Value > 0 ||
        question2Value > 0 ||
        question3Value > 0 ||
        question4Value > 0;

    useEffect(() => {
        if (!isToShowBlockOfQuestions) {
            reset({
                question6: undefined,
                question7: undefined,
                question8: undefined,
                question9: undefined,
                question10: undefined
            });
        }
    }, [isToShowBlockOfQuestions, reset]);

    const visibleFields = useMemo(() => {
        const fields = ['question1', 'question2', 'question3', 'question4', 'question5'];

        if (isToShowBlockOfQuestions) {
            fields.push('question6', 'question7', 'question8', 'question9', 'question10');
        }

        return fields;
    }, [isToShowBlockOfQuestions]);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const validateFields = () => {
        const visibleErrors = Object.keys(errors).filter((key) =>
            visibleFields.includes(key)
        );

        return visibleErrors.length === 0;
    };

    const isFormValid = validateFields();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SectionHeader
                    title='Questionário de Triagem CRAFFT+N 2.1'
                    content={["Por favor, responda todas as questões com sinceridade; suas respostas serão mantidas em sigilo."]}
                    subTitle='Nos últimos 12 MESES, quantos dias você:'
                />

                {QuestionsMock.map((question) => {

                    if (question.type === 'number') {
                        return (
                            <Input
                                key={`question${question.id}`}
                                id={`question${question.id}`}
                                type='number'
                                questionNumber={question.id.toString()}
                                label={question.label}
                                register={register}
                                placeholder='№ dias'
                                registerOptions={{
                                    required: 'Esse campo é obrigatório',
                                    min: { value: 0, message: 'O número de dias mínimo é 0' },
                                }}
                                error={errors[`question${question.id}`]}
                            />)
                    }
                    else if (question.type === 'radio'){

                        if(question.id > 5  && !isToShowBlockOfQuestions) return;

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
                })}
                <footer>
                    <button
                        disabled={!isFormValid}
                    >
                        Continuar
                    </button>
                </footer>
            </form>
        </div>
    )
}