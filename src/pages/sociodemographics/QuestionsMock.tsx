type InputType = 'radio' | 'text' | 'number' | 'date' | 'checkBoxGroup'

interface Radio {
    label: string;
    value: string;
}

interface CheckBox {
    label: string;
    value: string;
}

interface QuestionItem {
    id: number;
    type: InputType;
    placeholder?: string;
    label: string;
    radios?: Radio[];
    checkboxes?: CheckBox[];
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
        label: "Estado de nascimento:",
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
    },
    {
        id: 13,
        type: "checkBoxGroup",
        label: "Você faz uso de alguma ou algumas das seguintes substâncias psicoativas?",
        checkboxes: [
            {
                label: 'Cigarros Eletrônicos ou dispositivos “Vape”',
                value: 'Screening'
            },
            {
                label: 'Álcool',
                value: 'Audit'
            },
            {
                label: 'Benzodiazepínicos',
                value: 'Benz'
            },
            {
                label: 'Tabaco',
                value: 'Smoking'
            },
            {
                label: 'Antidepressivos',
                value: 'Hads'
            },
            {
                label: 'Cannabis',
                value: 'Marijuana'
            }
        ]
    },
    {
        id: 14,
        type: "radio",
        label: "Instituição de graduação:",
        radios: [
            {
                label: 'Uneb',
                value: 'Uneb'
            },
            {
                label: 'Bahiana',
                value: 'Bahiana'
            }
        ]
    },
    {
        id: 15,
        type: "radio",
        label: "Cor/etnia:",
        radios: [
            {
                label: 'Branco',
                value: 'Branco'
            },
            {
                label: 'Negro',
                value: 'Negro'
            },
            {
                label: 'Pardo',
                value: 'Pardo'
            },
            {
                label: 'Amarelo',
                value: 'Amarelo'
            },
            {
                label: 'Indígena',
                value: 'Indígena'
            },
            {
                label: 'Não desejo responder',
                value: 'Não desejo responder'
            }
        ]
    },
    {
        id: 16,
        type: "text",
        label: "Algum diagnóstico Psiquiátrico prévio:",
    },
]
