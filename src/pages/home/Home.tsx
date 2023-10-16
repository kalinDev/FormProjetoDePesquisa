import styles from './Home.module.css';
import avatar from '../../assets/avatar.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/input/Input';

import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { ModalBlock } from '../../components/modalBlock/ModalBlock';


type HomeProps = {
  onSubmit: SubmitHandler<any>;
  onNext: () => void;
};


export function Home({ onSubmit, onNext }: HomeProps) {

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
  } = useForm();



  const name = watch('nome')

  const onSubmitHandler = (data: any) => {
    onSubmit(data)
    onNext()
};
  return (
    <div>
      <main>
        <img src={avatar} alt="Avatar" width='100%' />
        <div className={styles.content}>
          <div>
            <h1>Seja bem-vindo</h1>
            <h1>ao <span className={styles.title}>projeto de pesquisa</span></h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Input
              id={`nome`}
              type='text'
              label={'Digite o seu nome: '}
              register={register}
              placeholder='Nome'
              registerOptions={{
                required: 'Esse campo é obrigatório',
              }}
              error={errors[`nome`]}
            />

            {
              name &&
              <>
                <FormControlLabel
                  className={styles.chkTermos}
                  value={true}
                  control={<Checkbox />}
                  {...register('termoConsentimento', {
                    required: 'É necessário aceitar o termo para continuar'
                  })}
                  label="Aceito o termo: "
                  labelPlacement="end"
                />
                <label htmlFor="">
                  <ModalBlock
                    label='Termo de consentimento'
                    title='TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO'
                    content={[



                      'Título do projeto de pesquisa: Prevalência e Efeitos do uso de Substâncias Psicoativas por Acadêmicos de Medicina de Universidades Pública e Privada de Salvador BA',
                      
                      `Eu, ${name}, fui procurado(a) pela Profa. Maristela R. Sestelo da Escola Bahiana de Medicina e Saúde Pública e da Universidade do Estado da Bahia, médica com o registro n° 8680 no Conselho Regional de Medicina do Estado da Bahia, sobre o projeto de pesquisa com o título acima citado. Nesse estudo, coordenado pela mesma, eu, ${name}, fui convidado(a) para participar desse projeto de pesquisa.`,
                      
                      'Estou ciente de que a duração do questionário pode variar de 5 a 20 minutos, a depender do número de critérios das pesquisas aos quais eu me encaixo.',
                      
                      'Fui informado que este é um projeto que visa compreender a prevalência do uso de substâncias psicoativas (SPA), tais como tabaco, cannabis, cigarros eletrônicos e dispositivos “vape”, álcool, benzodiazepínicos e antidepressivos, bem como algumas de suas possíveis consequências de uso crônico para os estudantes de medicina da Escola Bahiana de Medicina e Saúde Pública e da Universidade do Estado da Bahia',

                      'Compreendo que não terei benefícios diretos ao participar desta pesquisa, sendo os indiretos envolvendo benefícios para a comunidade científica a partir da: Identificação da prevalência de uso dos SEAN (Sistemas Eletrônicos para Administração de Nicotina), álcool, cannabis, tabaco, benzodiazepínicos e antidepressivos entre os estudantes de Medicina, de variáveis (sexo; idade; presença de transtornos mentais; rede de apoio etc.) associadas à modificação dessa prevalência, do padrão de uso dessas substâncias.',
                      
                      'Entendo que a pesquisa envolve a exposição de temas sensíveis, tais como o uso e dependências de substâncias psicoativas. Dessa forma, caso eu me sinta constrangido, poderei interromper a pesquisa e, em caso de mobilização emocional, serei acolhido, de forma individual, em dia e hora marcados pela pesquisadora principal.',
                      
                      'Compreendo que esta é uma pesquisa com coleta de dados em ambiente virtual. Dessa forma, estou ciente dos riscos de as respostas serem compartilhadas com terceiros por algum dos pesquisadores. Como uma forma de minimizar tal cenário, os resultados de todos os dados coletados estarão armazenados em HD externo, em armário pessoal, da pesquisadora principal, fechado à chave, em seu domicílio, durante todo o período de alimentação do banco de dados. Após período de 5 anos, este HD será devidamente formatado e, então, descartado em lixo apropriado. Como forma de minimizar o vazamento de dados dos participantes após o período de coleta, a pesquisadora principal irá fazer o download dos dados coletados para um dispositivo eletrônico local, apagando todo e qualquer registro de qualquer plataforma virtual, ambiente compartilhado ou "nuvem". Entendo, ainda, que meus dados pessoais estarão assegurados pela lei 13.709 de 14/08/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).',

                      'Fui informado que não terei quaisquer despesas para a participação na coleta de dados do projeto de pesquisa e, em caso de quaisquer gastos que eu venha a ter para a participação na pesquisa, que, após a comprovação dos gastos, serei ressarcido de modo integral pelos pesquisadores.',
                      
                      'Entendo que poderei desistir da pesquisa em qualquer momento, sem a necessidade de prestar explicações acerca do abandono a qualquer um dos envolvidos no projeto. Além disso, não terei quaisquer ônus em caso de desistência. Junto a isso, em caso de danos comprovadamente causados pela pesquisa, terei o direito à indenização pelos pesquisadores.',
                      
                      'Para participar desta pesquisa, responderei a questionários de análise para cada uma das substâncias, validados para o Brasil, disponibilizados por meio de plataforma online indicada pelos realizadores da pesquisa, tendo todos os meus dados e respostas armazenados de forma anônima e mantidos em sigilo pelos realizadores da pesquisa.',
                      
                      'Para os cigarros eletrônicos e dispositivos vape, o questionário utilizado será o questionário de Triagem CRAFFT 2.1+N, composto por 10 questões, o qual ajuda a identificar usuários de substâncias psicoativas, incluindo álcool, maconha, drogas ilegais, tabaco, dispositivos de vaporização, entre outros.',
                     
                      'Em relação ao álcool, o questionário utilizado será o Alcohol Use Disorders Identification Test (AUDIT). Sua estrutura é composta por 10 questões, com pontuações variando entre 0 e 4 pontos e 4 zonas de classificação com pontuações variando entre 0 e 40 pontos de acordo com os níveis de dependência.',
                      
                      'Para o tabaco, a escala que será utilizada é a Escala de Razões Para Fumar da Universidade de São Paulo (ERF-USP). A escala é composta por 21 perguntas. Cada pergunta pode obter notas de 1 a 5 pontos.',
                      
                      'Para os benzodiazepínicos e antidepressivos, as escalas utilizadas serão BENDEP-SRQ-PV (Escala Benzodiazepine Dependence Self-Report Questionaire Portuguese Version) e HAD (Hospital Anxiety and Depression). A escala BENDEP-SRQ-PV é composta por 20 questões de múltipla escolha, cada uma com cinco itens que devem ser assinalados pelos entrevistados. A escala HAD é composta por 14 questões de múltipla escolha, sendo sete para ansiedade e sete para depressão.',
                     
                      'Para a cannabis, o questionário utilizado será Marijuana Craving Questionnaire – MCQ-SF/Versão Brasil, que procura estudar o desejo ou estado de motivação em usuários dessa substância psicoativa. O MCQ-SF possui 12 questões que possuem como base em 4 subescalas; compulsividade, emocionalidade, expectativas e intencionalidade. O questionário avalia a resposta de 1 a 7, sendo a nota mínima para “concordo fortemente” e a máxima para “discordo fortemente”.',
                      
                      'Os resultados da pesquisa serão utilizados para a realização de Trabalhos de Conclusão de Curso (TCC) e possivelmente publicados em revista médica, mas a Profa. Maristela Sestelo garantiu-me que jamais poderei ser identificado(a) como participante desta pesquisa. Ou seja, os dados serão publicados na revista médica SEM constar o meu nome (ou as iniciais do meu nome).',
                     
                      'Tendo em vista a existência desses possíveis riscos, estará disponível o Termo de Consentimento Livre e Esclarecido, e-mails e telefones dos responsáveis pela pesquisa para contato: mariaburgos21.2@bahiana.edu.br, telefone (71) 984869603; richardcorcelli@hotmail.com, telefone: (62) 981529170; gustavoabreu21.1@bahiana.edu.br, telefone (71)986459457; maristelasestelo@bahiana.edu.br; msestelo@uneb.br, telefone (71) 9 87548313; felipe06rds@gmail.com, telefone (38) 9 91842922; raquelcunha21.1@bahiana.edu.br, telefone (71) 9 93111256.',
                      
                      'Também estou ciente que caso tenha alguma dúvida ética, denúncia ou reclamação a fazer, poderei procurar o Comitê de Ética em Pesquisa (CEP) da Escola Bahiana de Medicina e Saúde Pública, localizado na rua Avenida Dom João VI, nº 274 – Brotas - CEP: 40.285-001 - Salvador – BA. Telefone: (71) 2101-1921. E-mail: cep@bahiana.edu.br. Assim, considero-me satisfeito (a) com as explicações deste documento. Portanto, no momento concordo em participar dessa pesquisa.',
                      
                      'NOME: ${name}',
                     
                      '',
                      
                      'Dra. Maristela Sestelo (CRM-8680)'
                      ]}
                  />
                </label>
                <FormHelperText>{errors[`termoConsentimento`]?.message?.toString()}</FormHelperText>

                <FormControlLabel
                  className={styles.chkTermos}
                  value={true}
                  control={<Checkbox />}
                  {...register('termoCCS', {
                    required: 'É necessário aceitar o termo para continuar'
                  })}
                  label="Aceito o termo: "
                  labelPlacement="end"
                />
                <label htmlFor="">
                  <ModalBlock
                    label='Termo de Compromisso, Confidencialidade e Sigilo'
                    title='Título da Pesquisa: Prevalência e Efeitos do uso de Substâncias Psicoativas por
                      Acadêmicos de Medicina de Universidades Pública e Privada de Salvador BA'
                    content={[
                      'a) Que o acesso aos dados registrados em questionários para fins da pesquisa cientifica será feito somente após aprovação do projeto de pesquisa pelo Comitê de Ética;',
                      'b) Que o acesso aos dados será supervisionado por uma pessoa que esteja plenamente informada sobre as exigências de confiabilidade;',
                      'c) Meu compromisso com a privacidade e a confidencialidade dos dados utilizados preservando integralmente o anonimato e a imagem do participante, bem como a sua não estigmatização;',
                      'd) Não utilizar as informações em prejuízo das pessoas e/ou das comunidades, inclusive em termos de autoestima, de prestígio e/ou econômico-financeiro;',
                      'e) Que o pesquisador responsável estabeleceu salvaguardar e assegurar a confidencialidades dos dados de pesquisa;',
                      'f) Que os dados obtidos na pesquisa serão usados exclusivamente para finalidade prevista no protocolo;',
                      'g) Que os dados obtidos na pesquisa somente serão utilizados para o projeto vinculado, os quais serão mantidos em sigilo, em conformidade com o que prevê os termos da resolução 466/12 do Conselho Nacional de Saúde, assino este termo para salvaguardar seus direitos. ',
                      'h) Caso tenha alguma reclamação a fazer, poderei procurar o Comitê de Ética em Pesquisa (CEP) da Escola Bahiana de Medicina e Saúde Pública, localizado na rua Avenida Dom João VI, nº 274 – Brotas - CEP: 40.285-001 - Salvador – BA.Telefone: (71) 98383-7127. E-mail: cep@bahiana.edu.br.'
                    ]}
                  />
                </label>
                <FormHelperText>{errors[`termoCCS`]?.message?.toString()}</FormHelperText>
              </>
            }

            <footer>
              <button
                type='submit'
              >
                Continuar
              </button>
            </footer>
          </form>
        </div>
      </main>
    </div>
  )
}