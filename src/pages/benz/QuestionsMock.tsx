type InputType = 'radio'

interface Radio {
    label: string;
    value: string;
}

interface QuestionItem {
    id: number;
    type: InputType;
    placeholder?: string;
    label: string;
    radios?: Radio[];
}

export const QuestionsMock : QuestionItem[] = [
    {
        id: 1,
        type: "radio",
        label: "Eu tomo outra dose da medicação na hora prevista porque senão eu teria problemas",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 2,
        type: "radio",
        label: "Eu fico nervoso(a) se minha medicação está fora do meu alcance",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 3,
        type: "radio",
        label: "Outras pessoas já pediram para eu usar menos a medicação",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 4,
        type: "radio",
        label: "Eu tomo mais medicação do que está prescrito na receita",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 5,
        type: "radio",
        label: "Eu me sinto seguro(a) quando tenho minha medicação comigo",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 6,
        type: "radio",
        label: "Atualmente, minha medicação faz menos efeito do que costumava fazer",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 7,
        type: "radio",
        label: "Minha medicação acaba rápido demais",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 8,
        type: "radio",
        label: "A medicação está me colocando em apuros",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 9,
        type: "radio",
        label: "Eu altero o que está escrito na prescrição",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 10,
        type: "radio",
        label: "Eu tenho pensado em parar de usar a medicação",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 11,
        type: "radio",
        label: "Logo antes de tomar minha medicação, fico pensando apenas nisso",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 12,
        type: "radio",
        label: "Eu passo grande parte do tempo pensando em minha medicação",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 13,
        type: "radio",
        label: "Eu penso que a medicação está destruindo a minha vida",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 14,
        type: "radio",
        label: "Eu vou e pego uma nova prescrição (receita) antes da data marcada",
        radios: [
            {
                label: 'Isto é absolutamente falso pra mim',
                value: 'Isto é absolutamente falso pra mim'
            },
            {
                label: 'Isto é falso pra mim',
                value: 'Isto é falso pra mim'
            },
            {
                label: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim',
                value: 'Isto é parcialmente verdadeiro e parcialmente falso pra mim'
            },
            {
                label: 'Isto é verdadeiro pra mim',
                value: 'Isto é verdadeiro pra mim'
            },
            {
                label: 'Isto é absolutamente verdadeiro pra mim',
                value: 'Isto é absolutamente verdadeiro pra mim'
            },
        ]
    },
    {
        id: 15,
        type: "radio",
        label: "Sentindo-me deprimido",
        radios: [
            {
                label: 'Nada ou quase nada prejudicado',
                value: 'Nada ou quase nada prejudicado'
            },
            {
                label: 'Um pouco prejudicado',
                value: 'Um pouco prejudicado'
            },
            {
                label: 'Mais ou menos prejudicado',
                value: 'Mais ou menos prejudicado'
            },
            {
                label: 'Muito prejudicado',
                value: 'Muito prejudicado'
            },
            {
                label: 'Extremamente prejudicado',
                value: 'Extremamente prejudicado'
            },
        ]
    },
    {
        id: 16,
        type: "radio",
        label: "Cansaço",
        radios: [
            {
                label: 'Nada ou quase nada prejudicado',
                value: 'Nada ou quase nada prejudicado'
            },
            {
                label: 'Um pouco prejudicado',
                value: 'Um pouco prejudicado'
            },
            {
                label: 'Mais ou menos prejudicado',
                value: 'Mais ou menos prejudicado'
            },
            {
                label: 'Muito prejudicado',
                value: 'Muito prejudicado'
            },
            {
                label: 'Extremamente prejudicado',
                value: 'Extremamente prejudicado'
            },
        ]
    },
    {
        id: 17,
        type: "radio",
        label: "Tremores",
        radios: [
            {
                label: 'Nada ou quase nada prejudicado',
                value: 'Nada ou quase nada prejudicado'
            },
            {
                label: 'Um pouco prejudicado',
                value: 'Um pouco prejudicado'
            },
            {
                label: 'Mais ou menos prejudicado',
                value: 'Mais ou menos prejudicado'
            },
            {
                label: 'Muito prejudicado',
                value: 'Muito prejudicado'
            },
            {
                label: 'Extremamente prejudicado',
                value: 'Extremamente prejudicado'
            },
        ]
    },
    {
        id: 18,
        type: "radio",
        label: "Irritabilidade",
        radios: [
            {
                label: 'Nada ou quase nada prejudicado',
                value: 'Nada ou quase nada prejudicado'
            },
            {
                label: 'Um pouco prejudicado',
                value: 'Um pouco prejudicado'
            },
            {
                label: 'Mais ou menos prejudicado',
                value: 'Mais ou menos prejudicado'
            },
            {
                label: 'Muito prejudicado',
                value: 'Muito prejudicado'
            },
            {
                label: 'Extremamente prejudicado',
                value: 'Extremamente prejudicado'
            },
        ]
    },
    {
        id: 19,
        type: "radio",
        label: "Inquieto",
        radios: [
            {
                label: 'Nada ou quase nada prejudicado',
                value: 'Nada ou quase nada prejudicado'
            },
            {
                label: 'Um pouco prejudicado',
                value: 'Um pouco prejudicado'
            },
            {
                label: 'Mais ou menos prejudicado',
                value: 'Mais ou menos prejudicado'
            },
            {
                label: 'Muito prejudicado',
                value: 'Muito prejudicado'
            },
            {
                label: 'Extremamente prejudicado',
                value: 'Extremamente prejudicado'
            },
        ]
    },
]
