type InputType = 'radio' | 'text' | 'number' | 'date'

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
        label: "Sexo:",
        radios: [
            {
                label: 'Masculino',
                value: 'Masculino'
            },
            {
                label: 'Feminino',
                value: 'Feminino'
            }
        ]
    },
    {
        id: 2,
        type: "date",
        label: "Data de nascimento:",
    },
    {
        id: 3,
        type: "number",
        label: "Idade:",
    },
    {
        id: 4,
        type: "text",
        label: "Nasceu em:",
    },
    {
        id: 5,
        type: "text",
        label: "País de nascimento:",
    },
    {
        id: 6,
        type: "radio",
        label: "Estado civil:",
        radios: [
            {
                label: 'Casado',
                value: 'Casado'
            },
            {
                label: 'Solteiro',
                value: 'Solteiro'
            },
            {
                label: 'Separado',
                value: 'Separado'
            },
            {
                label: 'Divorciado',
                value: 'Divorciado'
            },
            {
                label: 'Viúvo',
                value: 'Viúvo'
            },
            {
                label: 'União estável',
                value: 'União estável'
            }
        ]
    },
    {
        id: 7,
        type: "number",
        label: "Telefone:",
    },
    {
        id: 8,
        type: "text",
        label: "Escolaridade:",
    },
    {
        id: 9,
        type: "text",
        label: "Semestre do curso:",
    },
    {
        id: 10,
        type: "text",
        label: "Profissão:",
    },
    {
        id: 11,
        type: "number",
        label: "Renda familiar (R$):",
    },
    {
        id: 12,
        type: "number",
        label: "Número de pessoas que dependem desta renda:",
    }
]
