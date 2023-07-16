import { SectionHeaderStyle } from "./SectionHeaderStyle"

interface SectionHeaderProps {
    title: string,
    content: string[]
    subTitle?: string
}

export function SectionHeader({title, content, subTitle}: SectionHeaderProps) {

    const sectionHeaderStyle = SectionHeaderStyle();

    return (
        <header>
        <h1 style={sectionHeaderStyle.title}>{title}</h1>

        {content.map(paragraph => {
            return (
                <p 
                    key={paragraph}
                    style={sectionHeaderStyle.headerText}
                >
                    {paragraph}
                </p>
            )
        })}

        <h3>{subTitle}</h3>
    </header>
    )
}