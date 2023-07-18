type InputType = 'text' | 'number' | 'radio';

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

export const QuestionsMock: QuestionItem[] = [
    {
        id: 1,
        type: "radio",
        label: "Eu fumo cigarros para me manter alerta.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 2,
        type: "radio",
        label: "Manusear um cigarro é parte do prazer de fumá-lo.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 3,
        type: "radio",
        label: "Fumar dá prazer e é relaxante.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 4,
        type: "radio",
        label: "Eu acendo um cigarro quando estou bravo com alguma coisa.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 5,
        type: "radio",
        label: "Quando meus cigarros acabam, acho isso quase insuportável até eu conseguir outro.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 6,
        type: "radio",
        label: "Cigarros me fazem companhia, como um amigo íntimo.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 7,
        type: "radio",
        label: "Eu fumo cigarros automaticamente sem mesmo me dar conta disso.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 8,
        type: "radio",
        label: "É mais fácil conversar e me relacionar com outras pessoas quando estou fumando.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 9,
        type: "radio",
        label: "Eu fumo para me estimular, para me animar.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 10,
        type: "radio",
        label: "Parte do prazer de fumar um cigarro vem dos passos que eu tomo para acendê-lo.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 11,
        type: "radio",
        label: "Eu acho os cigarros prazerosos.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 12,
        type: "radio",
        label: "Quando eu me sinto desconfortável ou chateado com alguma coisa, eu acendo um cigarro.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 13,
        type: "radio",
        label: "Controlar meu peso é uma razão muito importante pela qual eu fumo.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 14,
        type: "radio",
        label: "Eu acendo um cigarro sem perceber que ainda tenho outro aceso no cinzeiro.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 15,
        type: "radio",
        label: "Enquanto estou fumando me sinto mais seguro com outras pessoas.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 16,
        type: "radio",
        label: "Eu fumo cigarros para me “pôr para cima”.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 17,
        type: "radio",
        label: "Às vezes eu sinto que os cigarros são os meus melhores amigos.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 18,
        type: "radio",
        label: "Eu fumo cigarros quando me sinto triste ou quando quero esquecer minhas obrigações ou preocupações.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 19,
        type: "radio",
        label: "Eu sinto uma vontade enorme de pegar um cigarro se fico um tempo sem fumar.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 20,
        type: "radio",
        label: "Eu já me peguei com um cigarro na boca sem me lembrar de tê-lo colocado lá.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    {
        id: 21,
        type: "radio",
        label: "Eu me preocupo em engordar se parar de fumar.",
        radios: [
            {
                label: 'Nunca',
                value: 'Nunca'
            },
            {
                label: 'Raramente',
                value: 'Raramente'
            },
            {
                label: 'Às vezes',
                value: 'Às vezes'
            },
            {
                label: 'Frequentemente',
                value: 'Frequentemente'
            },
            {
                label: 'Sempre',
                value: 'Sempre'
            }
        ]
    },
    
];
