import { useState } from 'react';
import { Screening } from '../../pages/screening/Screening';
import { Audit } from '../../pages/audit/Audit';
import { Smoking } from '../../pages/smoking/Smoking';
import { Hads } from '../../pages/hads/Hads';
import { ScrollToTop } from '../scrollToTop/ScrollToTop';
import { Sociodemographics } from '../../pages/sociodemographics/Sociodemographics';
import { Marijuana } from '../../pages/marijuana/Marijuana';
import FormPesquisa from '../../pages/formPesquisa/FormPesquisa';
import { Home } from '../../pages/home/Home';
import { Benz } from '../../pages/benz/Benz';

type HomeData = {
    termoConsentimento: string
    nome: string
    termoCCS: string
}

type BenzData = {
    question1: string
    question2: string
    question3: string
    question4: string
    question5: string
    question6: string
    question7: string
    question8: string
    question9: string
    question10: string
    question11: string
    question12: string
    question13: string
    question14: string
}

type ScreeningData = {
    question1: string
    question2: string
    question3: string
    question4: string
    question5: string
    question6: string
    question7: string
    question8: string
    question9: string
    question10: string
    question11: string
    question12: string
    question13: string
    question14: string
    question15: string
    question16: string
}

type SmokingData = {

    question1: string
    question2: string
    question3: string
    question4: string
    question5: string
    question6: string
    question7: string
    question8: string
    question9: string
    question10: string
    question11: string
    question12: string
    question13: string
    question14: string
    question15: string
    question16: string
    question17: string
    question18: string
    question19: string
    question20: string
    question21: string
}

type AuditData = {
    question1: string
    question2: string
    question3: string
    question4: string
    question5: string
    question6: string
    question7: string
    question8: string
    question9: string
    question10: string
}

type HadsData = {
    question1: string
    question2: string
    question3: string
    question4: string
    question5: string
    question6: string
    question7: string
    question8: string
    question9: string
    question10: string
    question11: string
    question12: string
    question13: string
    question14: string
}

type MarijuanaData = {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
    question9: string;
    question10: string;
    question11: string;
    question12: string;
}


type SociodemographicsData = {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
    question9: string;
    question10: string;
    question11: string;
    question12: string;
    question13: {
        "Screening": boolean;
        "Audit": boolean;
        "Benz": boolean;
        "Hads": boolean;
        "Smoking": boolean;
        "Marijuana": boolean;
    };
    question14: string;
    question15: string;
    question16: string;
};

type FormData = {
    Sociodemographics: SociodemographicsData;
    Screening?: ScreeningData;
    Audit?: AuditData;
    Smoking?: SmokingData;
    Hads?: HadsData;
    Benz?: BenzData;
    Marijuana?: MarijuanaData;
    Home?: HomeData
};

const FormContainer = () => {
    const [formValues, setFormValues] = useState<FormData>();
    const [currentPage, setCurrentPage] = useState<number>(-1);


    var updatedFormValuesNew: FormData

    const handleFormSubmit = (data: SociodemographicsData | ScreeningData | HomeData, formDataKey: keyof FormData) => {

        const updatedFormValues: FormData = {
            ...formValues!,
            [formDataKey]: data,
        };
        setFormValues(updatedFormValues);
        updatedFormValuesNew = updatedFormValues
    };

    const handleNextPage = () => {

        if (currentPage == -1) {
            setCurrentPage(0)
            return
        };

        const question13 = updatedFormValuesNew?.Sociodemographics.question13;

        if (!question13) return;
        const questionsKeys = Object.keys(question13);
        let nextPage = currentPage + 1;


        while (nextPage < 10) {
            const questionKey = questionsKeys[nextPage - 1] as keyof typeof question13;

            console.log(questionKey)

            if (question13[questionKey]) {
                setCurrentPage(nextPage);
                return;
            }
            nextPage++;
        }

        setCurrentPage(nextPage);
    };

    const handlePrevPage = () => {

        let prevPage = currentPage - 1;

        while (prevPage >= 0) {
            const question16 = formValues?.Sociodemographics.question16;
            if (!question16) return;

            const questionsKeys = Object.keys(question16);
            const questionKey = questionsKeys[prevPage - 1] as keyof typeof question16;

            if (question16[questionKey]) {
                setCurrentPage(prevPage);
                return;
            }
            prevPage--;
        }

        setCurrentPage(0);
    };


    const renderCurrentPage = () => {

        switch (currentPage) {

            case -1:
                return (
                    <Home
                        onNext={handleNextPage}
                        onSubmit={(data) => handleFormSubmit(data, 'Home')}
                    />
                )

            case 0:
                return (
                    <Sociodemographics
                        onNext={handleNextPage}
                        onSubmit={(data) => handleFormSubmit(data, 'Sociodemographics')}
                        defaultValues={formValues?.Sociodemographics}
                    />
                );
            case 1:
                return (
                    <Screening
                        onSubmit={(data) => handleFormSubmit(data, 'Screening')}
                        onNext={handleNextPage}
                        defaultValues={formValues?.Screening}
                    />
                );
            case 2:
                return (
                    <Audit
                        onSubmit={(data) => handleFormSubmit(data, 'Audit')}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        defaultValues={formValues?.Audit}
                    />
                );

            case 3:
                return (<Benz
                            onSubmit={(data) => handleFormSubmit(data, 'Benz')}
                            onPrev={handlePrevPage}
                            onNext={handleNextPage}
                            defaultValues={formValues?.Benz}
                        />)
            case 4:
                return (
                    <Smoking
                        onSubmit={(data) => handleFormSubmit(data, 'Smoking')}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        defaultValues={formValues?.Smoking}
                    />
                );
            case 5:
                return (
                    <Hads
                        onSubmit={(data) => handleFormSubmit(data, 'Hads')}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        defaultValues={formValues?.Hads}
                    />
                );
            case 6:
                return (
                    <Marijuana
                        onSubmit={(data) => handleFormSubmit(data, 'Marijuana')}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        defaultValues={formValues?.Marijuana}
                    />
                );
            default:
                return (
                    <FormPesquisa
                        formData={formValues!}
                    />
                );
        }
    };

    return (
        <div>
            <ScrollToTop />
            {renderCurrentPage()}
        </div>
    );
};

export default FormContainer;
