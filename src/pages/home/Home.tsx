import styles from './Home.module.css';
import avatar from '../../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/input/Input';

import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { ModalBlock } from '../../components/modalBlock/ModalBlock';

export function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();


  const name = watch('nome')

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/form');

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
          <form onSubmit={handleSubmit(onSubmit)}>
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

                      'Fui informado que este é um projeto que visa compreender a prevalência do uso de substâncias psicoativas (SPA), tais como tabaco, cannabis, cigarros eletrônicos e dispositivos “vape”, álcool, benzodiazepínicos e antidepressivos, bem como algumas de suas possíveis consequências de uso crônico para os estudantes de medicina da Escola Bahiana de Medicina e Saúde Pública e da Universidade do Estado da Bahia.',

                      'Para participar desta pesquisa, responderei a questionários de análise para cada uma das substâncias, validados para o Brasil, disponibilizados por meio de plataforma online indicada pelos realizadores da pesquisa, tendo todos os meus dados e respostas armazenados de forma anônima e mantidos em sigilo pelos realizadores da pesquisa.',

                      'Para os cigarros eletrônicos e dispositivos vape, o questionário utilizado será o questionário de Triagem CRAFFT 2.1+N, que é uma escala que ajuda a identificar pessoas que podem estar usando substâncias psicoativas, incluindo álcool, maconha, drogas ilegais, tabaco, dispositivos de vaporização, entre outros. Essa escala é composta por dez questões. As três primeiras questões se referem ao uso de substâncias psicoativas. A quarta pergunta se refere ao uso de dispositivos de vaporização e produtos do tabaco. As perguntas 5 a 10 são destinadas a todos que indicaram ter usado álcool, drogas ou vaporizadores/tabaco.',

                      'Em relação ao álcool, o questionário utilizado será o Alcohol Use Disorders Identification Test (AUDIT). Sua estrutura é composta por 10 questões, com pontuações variando entre 0 e 4 pontos. De acordo com a pontuação obtida, é possível a seguinte classificação em zonas: Zona I (baixo risco) - 0 a 7 pontos; Zona II (uso de risco) - 8 a 15 pontos; Zona III (uso nocivo) - 16 a 19 pontos; Zona IV (provável dependência) - 20 a 40 pontos.',

                      'No que diz respeito ao tabaco, a escala que será utilizada é a Escala de Razões Para Fumar da Universidade de São Paulo (ERF-USP). A escala é composta por 21 perguntas. Cada pergunta pode obter notas de 1 a 5 pontos, já a nota dos fatores é dada por meio da média das notas das perguntas que compõem o referido fator, podendo variar de 1 a 5 pontos.',

                      'Para os benzodiazepínicos e antidepressivos, as escalas utilizadas serão BENDEP-SRQ-PV (Escala Benzodiazepine Dependence Self-Report Questionaire Portuguese Version) e HAD (Hospital Anxiety and Depression). A escala BENDEP-SRQ-PV é composta por 20 questões de múltipla escolha, cada uma com cinco itens que devem ser assinalados pelos entrevistados. A escala HAD é composta por 14 questões de múltipla escolha, sendo sete para ansiedade e sete para depressão.',

                      'Para a cannabis, o questionário utilizado será Marijuana Craving Questionnaire – MCQ-SF/Versão Brasil, que procura estudar o desejo ou estado de motivação em usuários dessa substância psicoativa. O MCQ-SF possui 12 questões que possuem como base em 4 subescalas; compulsividade, emocionalidade, expectativas e intencionalidade. O questionário avalia a resposta de 1 a 7, sendo a nota mínima para “concordo fortemente” e a máxima para “discordo fortemente”.',

                      'Os resultados da pesquisa serão utilizados para a realização de Trabalhos de Conclusão de Curso (TCC) e possivelmente publicados em revista médica, mas a Profa. Maristela Sestelo garantiu-me que jamais poderei ser identificado(a) como participante desta pesquisa. Ou seja, os dados serão publicados na revista médica SEM constar o meu nome (ou as iniciais do meu nome).',

                      'Também estou ciente que caso tenha alguma reclamação a fazer, poderei procurar o Comitê de Ética em Pesquisa (CEP) da Escola Bahiana de Medicina e Saúde Pública, localizado na rua Avenida Dom João VI, nº 274 – Brotas - CEP: 40.285-001 - Salvador – BA. Telefone: (71) 98383-7127. E-mail: cep@bahiana.edu.br. Assim, considero-me satisfeito (a) com as explicações deste documento. Portanto, no momento concordo em participar dessa pesquisa.']}
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