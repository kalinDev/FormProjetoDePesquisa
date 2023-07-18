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
        label: "Com que freqüência (quantas vezes por semana) você consome bebidas alcoólicas? ",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Uma vez por mês ou menos',
                value: 'Uma vez por mês ou menos'
            },
            {
                label: '2-4 vezes por mês',
                value: '2-4 vezes por mês'
            },
            {
                label: '2-3 vezes por semana',
                value: '2-3 vezes por semana'
            },
            {
                label: '4 ou mais vezes por semana',
                value: '4 ou mais vezes por semana'
            }
        ]
    },
    {
        id: 2,
        type: "radio",
        label: "Quantas doses de álcool você consome num dia normal? ",
        radios: [
            {
                label: '0 ou 1',
                value: '0 ou 1'
            },
            {
                label: '2 ou 3',
                value: '2 ou 3'
            },
            {
                label: '4 ou 5',
                value: '4 ou 5'
            },
            {
                label: '6 ou 7',
                value: '6 ou 7'
            },
            {
                label: '8 ou mais',
                value: '8 ou mais'
            }
        ]
    },
    {
        id: 3,
        type: "radio",
        label: "Com que freqüência (quantas vezes por semana) você consome cinco ou mais doses em uma única ocasião?",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Menos que umavez por mês',
                value: 'Menos que umavez por mês'
            },
            {
                label: 'Uma vez por mês',
                value: 'Uma vez por mês'
            },
            {
                label: 'Uma vez por semana',
                value: 'Uma vez por semana'
            },
            {
                label: 'Quase todos os dias',
                value: 'Quase todos os dias'
            }
        ]
    },
    {
        id: 4,
        type: "radio",
        label: "Quantas vezes ao longo dos últimos doze meses você achou que não conseguiria parar de beber, uma vez tendo começado?",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Menos que umavez por mês',
                value: 'Menos que umavez por mês'
            },
            {
                label: 'Uma vez por mês',
                value: 'Uma vez por mês'
            },
            {
                label: 'Uma vez por semana',
                value: 'Uma vez por semana'
            },
            {
                label: 'Quase todos os dias',
                value: 'Quase todos os dias'
            }
        ]
    },
    {
        id: 5,
        type: "radio",
        label: "Quantas vezes ao longo dos últimos doze meses você não conseguiu fazer o que era esperado de você por causa do álcool?",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Menos que umavez por mês',
                value: 'Menos que umavez por mês'
            },
            {
                label: 'Uma vez por mês',
                value: 'Uma vez por mês'
            },
            {
                label: 'Uma vez por semana',
                value: 'Uma vez por semana'
            },
            {
                label: 'Quase todos os dias',
                value: 'Quase todos os dias'
            }
        ]
    },
    {
        id: 6,
        type: "radio",
        label: "Quantas vezes ao longo dos últimos doze meses você precisou beber pela manhã para poder se sentir bem ao longo do dia, após ter bebido bastante no dia anterior?",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Menos que umavez por mês',
                value: 'Menos que umavez por mês'
            },
            {
                label: 'Uma vez por mês',
                value: 'Uma vez por mês'
            },
            {
                label: 'Uma vez por semana',
                value: 'Uma vez por semana'
            },
            {
                label: 'Quase todos os dias',
                value: 'Quase todos os dias'
            }
        ]
    },
    {
        id: 7,
        type: "radio",
        label: "Quantas vezes ao longo dos últimos doze meses você se sentiu culpado ou com remorso após ter bebido?",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Menos que umavez por mês',
                value: 'Menos que umavez por mês'
            },
            {
                label: 'Uma vez por mês',
                value: 'Uma vez por mês'
            },
            {
                label: 'Uma vez por semana',
                value: 'Uma vez por semana'
            },
            {
                label: 'Quase todos os dias',
                value: 'Quase todos os dias'
            }
        ]
    },
    {
        id: 8,
        type: "radio",
        label: "Quantas vezes ao longo dos últimos doze meses você foi incapaz de lembrar o que aconteceu devido à bebida?",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Menos que umavez por mês',
                value: 'Menos que umavez por mês'
            },
            {
                label: 'Uma vez por mês',
                value: 'Uma vez por mês'
            },
            {
                label: 'Uma vez por semana',
                value: 'Uma vez por semana'
            },
            {
                label: 'Quase todos os dias',
                value: 'Quase todos os dias'
            }
        ]
    },
    {
        id: 9,
        type: "radio",
        label: "Você já causou ferimentos ou prejuízos a você mesmo ou a outra pessoa após ter bebido?",
        radios: [
            {
                label: 'Não',
                value: 'Não'
            },
            {
                label: 'Sim, mas não no último ano',
                value: 'Sim, mas não no último ano'
            },
            {
                label: 'Sim, durante o último ano',
                value: 'Sim, durante o último ano'
            }
        ]
    },
    {
        id: 10,
        type: "radio",
        label: "Alguém ou algum parente, amigo ou médico, já se preocupou com o fato de você beber ou sugeriu que você parasse?",
        radios: [
            {
                label: 'Não',
                value: 'Não'
            },
            {
                label: 'Sim, mas não no último ano',
                value: 'Sim, mas não no último ano'
            },
            {
                label: 'Sim, durante o último ano',
                value: 'Sim, durante o último ano'
            }
        ]
    }
]
