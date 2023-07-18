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
        label: "Eu me sinto tensa (o) ou contraída (o)",
        radios: [
            {
                label: 'a maior parte do tempo',
                value: 'a maior parte do tempo'
            },
            {
                label: 'boa parte do tempo',
                value: 'boa parte do tempo'
            },
            {
                label: 'de vez em quando',
                value: 'de vez em quando'
            },
            {
                label: 'nunca',
                value: 'nunca'
            },
        ]
    },
    {
        id: 2,
        type: "radio",
        label: "Eu ainda sinto que gosto das mesmas coisas de antes:",
        radios: [
            {
                label: 'sim, do mesmo jeito que antes',
                value: 'sim, do mesmo jeito que antes'
            },
            {
                label: 'não tanto quanto antes',
                value: 'não tanto quanto antes'
            },
            {
                label: 'só um pouco',
                value: 'só um pouco'
            },
            {
                label: 'já não consigo ter prazer em nada',
                value: 'já não consigo ter prazer em nada'
            },
        ]
    },
    {
        id: 3,
        type: "radio",
        label: " Eu sinto uma espécie de medo, como se alguma coisa ruim fosse acontecer",
        radios: [
            {
                label: 'sim, de jeito muito forte',
                value: 'sim, de jeito muito forte'
            },
            {
                label: 'sim, mas não tão forte',
                value: 'sim, mas não tão forte'
            },
            {
                label: 'um pouco, mas isso não me preocupa',
                value: 'um pouco, mas isso não me preocupa'
            },
            {
                label: 'não sinto nada disso',
                value: 'não sinto nada disso'
            },
        ]
    },
    {
        id: 4,
        type: "radio",
        label: "Dou risada e me divirto quando vejo coisas engraçadas",
        radios: [
            {
                label: 'do mesmo jeito que antes',
                value: 'do mesmo jeito que antes'
            },
            {
                label: 'atualmente um pouco menos',
                value: 'atualmente um pouco menos'
            },
            {
                label: 'atualmente bem menos',
                value: 'atualmente bem menos'
            },
            {
                label: 'não consigo mais',
                value: 'não consigo mais'
            },
        ]
    },
    {
        id: 5,
        type: "radio",
        label: "Estou com a cabeça cheia de preocupações",
        radios: [
            {
                label: 'a maior parte do tempo',
                value: 'a maior parte do tempo'
            },
            {
                label: 'boa parte do tempo',
                value: 'boa parte do tempo'
            },
            {
                label: 'de vez em quando',
                value: 'de vez em quando'
            },
            {
                label: 'raramente',
                value: 'raramente'
            },
        ]
    },
    {
        id: 6,
        type: "radio",
        label: " Eu me sinto alegre",
        radios: [
            {
                label: 'nunca',
                value: 'nunca'
            },
            {
                label: 'poucas vezes',
                value: 'poucas vezes'
            },
            {
                label: 'muitas vezes',
                value: 'muitas vezes'
            },
            {
                label: 'a maior parte do tempo',
                value: 'a maior parte do tempo'
            },
        ]
    },
    {
        id: 7,
        type: "radio",
        label: "Consigo ficar sentado à vontade e me sentir relaxado:",
        radios: [
            {
                label: 'sim, quase sempre',
                value: 'sim, quase sempre'
            },
            {
                label: 'muitas vezes',
                value: 'muitas vezes'
            },
            {
                label: 'poucas vezes',
                value: 'poucas vezes'
            },
            {
                label: 'nunca',
                value: 'nunca'
            },
        ]
    },
    {
        id: 8,
        type: "radio",
        label: "Eu estou lenta (o) para pensar e fazer coisas:",
        radios: [
            {
                label: 'quase sempre',
                value: 'quase sempre'
            },
            {
                label: 'muitas vezes',
                value: 'muitas vezes'
            },
            {
                label: 'poucas vezes',
                value: 'poucas vezes'
            },
            {
                label: 'nunca',
                value: 'nunca'
            },
        ]
    },
    {
        id: 9,
        type: "radio",
        label: "Eu tenho uma sensação ruim de medo, como um frio na barriga ou um aperto no estômago:",
        radios: [
            {
                label: 'nunca',
                value: 'nunca'
            },
            {
                label: 'de vez em quando',
                value: 'de vez em quando'
            },
            {
                label: 'muitas vezes',
                value: 'muitas vezes'
            },
            {
                label: 'quase sempre',
                value: 'quase sempre'
            }
        ]
    },
    {
        id: 10,
        type: "radio",
        label: "Eu perdi o interesse em cuidar da minha aparência:",
        radios: [
            {
                label: 'completamente',
                value: 'completamente'
            },
            {
                label: 'não estou mais me cuidando como eu deveria',
                value: 'não estou mais me cuidando como eu deveria'
            },
            {
                label: 'talvez não tanto quanto antes',
                value: 'talvez não tanto quanto antes'
            },
            {
                label: 'me cuido do mesmo jeito que antes',
                value: 'me cuido do mesmo jeito que antes'
            }
        ]
    },
    {
        id: 11,
        type: "radio",
        label: "Eu me sinto inquieta (o), como se eu não pudesse ficar parada (o) em lugar nenhum:",
        radios: [
            {
                label: 'sim, demais',
                value: 'sim, demais'
            },
            {
                label: 'bastante',
                value: 'bastante'
            },
            {
                label: 'um pouco',
                value: 'um pouco'
            },
            {
                label: 'não me sinto assim',
                value: 'não me sinto assim'
            }
        ]
    },
    {
        id: 12,
        type: "radio",
        label: "Fico animada (o) esperando animado as coisas boas que estão por vir",
        radios: [
            {
                label: 'do mesmo jeito que antes',
                value: 'do mesmo jeito que antes'
            },
            {
                label: 'um pouco menos que antes',
                value: 'um pouco menos que antes'
            },
            {
                label: 'bem menos do que antes',
                value: 'bem menos do que antes'
            },
            {
                label: 'quase nunca',
                value: 'quase nunca'
            }
        ]
    },
    {
        id: 13,
        type: "radio",
        label: "De repente, tenho a sensação de entrar em pânico:",
        radios: [
            {
                label: 'a quase todo momento',
                value: 'a quase todo momento'
            },
            {
                label: 'várias vezes',
                value: 'várias vezes'
            },
            {
                label: 'de vez em quando',
                value: 'de vez em quando'
            },
            {
                label: 'não senti isso',
                value: 'não senti isso'
            }
        ]
    },
    {
        id: 14,
        type: "radio",
        label: "De repente, tenho a sensação de entrar em pânico:",
        radios: [
            {
                label: 'quase sempre',
                value: 'quase sempre'
            },
            {
                label: 'várias vezes',
                value: 'várias vezes'
            },
            {
                label: 'poucas vezes',
                value: 'poucas vezes'
            },
            {
                label: 'quase nunca',
                value: 'quase nunca'
            }
        ]
    }
]
