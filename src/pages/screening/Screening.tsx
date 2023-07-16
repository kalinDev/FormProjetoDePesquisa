import { Input } from '../../components/input/Input.tsx';
import { useForm } from 'react-hook-form'
import { QuestionsMock } from './QuestionsMock.tsx'
import { RadioButtonGroup } from '../../components/radioButtonGroup/RadioButtonGroup.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';
import { useEffect } from 'react';

export function Screening() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
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
            setValue('question6', undefined);
            setValue('question7', undefined);
            setValue('question8', undefined);
            setValue('question9', undefined);
            setValue('question10', undefined);
        }
    }, [isToShowBlockOfQuestions, setValue]);
    
    const onSubmit = (data: any) => {
        console.log(data);
    };

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

                        if (question.id > 5 && !isToShowBlockOfQuestions) return;

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
                <footer>
                    <button>
                        Continuar
                    </button>
                </footer>
            </form>
        </div>
    )
}