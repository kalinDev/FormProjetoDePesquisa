import { useState } from 'react';
import { Screening } from '../../pages/screening/Screening';
import { Audit } from '../../pages/audit/Audit';
import { Smoking } from '../../pages/smoking/Smoking';
import { Hads } from '../../pages/hads/Hads';

const FormContainer = () => {
    const [formValues, setFormValues] = useState([{}]);
    const [currentPage, setCurrentPage] = useState(0);

    const handleFormSubmit = (data: any) => {
        const updatedFormValues = [...formValues];
        updatedFormValues[currentPage] = data;
        setFormValues(updatedFormValues);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 0:
                return (
                    <Screening
                        onSubmit={handleFormSubmit}
                        onNext={handleNextPage}
                        defaultValues={formValues[currentPage]}
                    />
                );
            case 1:
                return (
                    <Audit
                        onSubmit={handleFormSubmit}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        previousData={formValues[currentPage - 1]}
                        defaultValues={formValues[currentPage]}
                    />
                );
            case 2:
                return (
                    <Smoking
                        onSubmit={handleFormSubmit}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        previousData={formValues[currentPage - 1]}
                        defaultValues={formValues[currentPage]}
                    />
                );
            case 3:
                return (
                    <Hads
                        onSubmit={handleFormSubmit}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                        previousData={formValues[currentPage - 1]}
                        defaultValues={formValues[currentPage]}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderCurrentPage()}
            <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
    );
};

export default FormContainer;
