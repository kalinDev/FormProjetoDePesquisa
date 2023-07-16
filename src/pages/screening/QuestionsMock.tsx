type InputType = 'text' | 'number' | 'radio';

interface Radio {
    label: string;
    value: string | 'number';
}

interface QuestionItem {
    id: number;
    type: InputType;
    placeholder?: string;
    label: string;
    radios?: Radio[];
}

export const QuestionsMock: QuestionItem[] = [
    {
        id: 1,
        type: "number",
        placeholder: "Quantos dias",
        label: "Bebeu qualquer bebida alcoólica tais como cerveja, vinho, vodka (mais do que uns goles)? Coloque '0' se não usou.",
    },
    {
        id: 2,
        type: "number",
        placeholder: "Quantos dias",
        label: "Você usa qualquer tipo de maconha (por exemplo, erva, óleo ou haxixe para fumar, vapear ou em alimentos) ou “maconha sintética” (por exemplo, “K2” ou “Spice”)? Coloque '0' se não usou.",
    },
    {
        id: 3,
        type: "number",
        placeholder: "Quantos dias",
        label: "Você usa alguma outra coisa para ficar alto (por exemplo, outras drogas ilegais, medicamentos sem receita, e coisas que você “cheira”, aspira ou vapeia)? Coloque '0' se não usou.",
    },
    {
        id: 4,
        type: "number",
        placeholder: "Quantos dias",
        label: "Você usa qualquer tipo de maconha (por exemplo, erva, óleo ou haxixe para fumar, vapear ou em alimentos) ou “maconha sintética” (por exemplo, “K2” ou “Spice”)?",
    },
    {
        id: 5,
        type: "radio",
        label: "Você já andou num CARRO/MOTO dirigido por alguém (inclusive você) que estava alterado ou tinha bebido álcool ou usado drogas?",
        radios: [
            {
                label: 'Não',
                value: 'não'
            },
            {
                label: 'Sim',
                value: 'sim'
            }
        ]
    },
    {
        id: 6,
        type: "radio",
        label: "Você já bebeu álcool ou usou drogas para RELAXAR, sentir-se bem ou se enturmar?",
        radios: [
            {
                label: 'Não',
                value: 'não'
            },
            {
                label: 'Sim',
                value: 'sim'
            }
        ]
    },
    {
        id: 7,
        type: "radio",
        label: "Você já bebeu álcool ou usou drogas quando estava por sua conta ou SOZINHO/A?",
        radios: [
            {
                label: 'Não',
                value: 'não'
            },
            {
                label: 'Sim',
                value: 'sim'
            }
        ]
    },
    {
        id: 8,
        type: "radio",
        label: "Você já ESQUECEU coisas que fez quando tinha bebido álcool ou usado drogas?",
        radios: [
            {
                label: 'Não',
                value: 'não'
            },
            {
                label: 'Sim',
                value: 'sim'
            }
        ]
    },
    {
        id: 9,
        type: "radio",
        label: "A sua FAMÍLIA ou AMIGOS já falaram para você diminuir seu uso de álcool e drogas?",
        radios: [
            {
                label: 'Não',
                value: 'não'
            },
            {
                label: 'Sim',
                value: 'sim'
            }
        ]
    },
    {
        id: 10,
        type: "radio",
        label: "Você já se meteu em ENCRENCA enquanto estava usando álcool ou drogas?",
        radios: [
            {
                label: 'Não',
                value: 'não'
            },
            {
                label: 'Sim',
                value: 'sim'
            }
        ]
    },
];
