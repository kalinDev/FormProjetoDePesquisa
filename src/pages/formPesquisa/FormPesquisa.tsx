import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import avatar from '../../assets/avatarBye.svg';
import styles from './FormPesquisa.module.css';

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
};

type FormData = {
  Sociodemographics: SociodemographicsData;
  Screening?: ScreeningData;
  Audit?: AuditData;
  Smoking?: SmokingData;
  Hads?: HadsData;
  Marijuana?: MarijuanaData;
};

interface FormPesquisaProps {
  formData: FormData
}

const FormPesquisa: React.FC<FormPesquisaProps> = (props) => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    try {
      const response = await axios.post('https://kalinzada.me/formPesquisa', props.formData);

      if (response.status >= 200 && response.status < 300) {
        setMessage('Obrigado'); 
        setError(false);
      } else {
        setError(true);
        setMessage('Ocorreu um erro ao enviar, tente enviar novamente.');
      }
    } catch (error) {
      setError(true);
      setMessage('Ocorreu um erro ao enviar, tente enviar novamente.');
    }
  };

  const handleRetry = () => {
    setError(false);
    setMessage('');
    callAPI();
  };

  return (
    <div className={styles.content}>
      {error ? (
        <div>
          <div>
            <h3>
              {message}
            </h3></div>
          <Button onClick={handleRetry}>Enviar novamente</Button>
        </div>
      ) :
        (
          <div>
            <div>
              <h3>{
                message ? "Muito obrigado por participar do nosso projeto de pesquisa" : "Carregando..."
              }</h3>
            </div>
          </div>
        )}
      <img src={avatar} alt="Avatar" width='100%' />

    </div>
  );
};

export default FormPesquisa;
