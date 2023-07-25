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
    }
]