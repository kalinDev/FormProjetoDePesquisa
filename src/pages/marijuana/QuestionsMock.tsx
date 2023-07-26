type InputType = 'slider'

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
        type: "slider",
        label: "Fumar maconha seria prazeroso agora.",
    },
    {
        id: 2,
        type: "slider",
        label: "Eu não poderia controlar facilmente a quantidade de maconha que eu fumaria agora.",
    },
    {
        id: 3,
        type: "slider",
        label: "Agora, estou fazendo planos para usar maconha",
    },
    {
        id: 4,
        type: "slider",
        label: "Eu me sentiria mais no controle das coisas se fumasse maconha agora.",
    },
    {
        id: 5,
        type: "slider",
        label: "Fumar maconha me ajudaria a dormir melhor de noite.",
    },
    {
        id: 6,
        type: "slider",
        label: "Se eu fumasse maconha agora, eu me sentiria menos tenso.",
    },
    {
        id: 7,
        type: "slider",
        label: "Eu não seria capaz de controlar a quantidade de maconha que eu fumaria, se a tivesse agora.",
    },
    {
        id: 8,
        type: "slider",
        label: "Seria ótimo fumar maconha agora.",
    },
    {
        id: 9,
        type: "slider",
        label: "Eu seria menos ansioso se fumasse maconha agora.",
    },
    {
        id: 10,
        type: "slider",
        label: "Eu preciso fumar maconha agora.",
    },
    {
        id: 11,
        type: "slider",
        label: "Se eu tivesse fumado maconha agora, eu me sentiria menos menos nervoso.",
    },
    {
        id: 12,
        type: "slider",
        label: "Fumar maconha me deixaria satisfeito.",
    }
]