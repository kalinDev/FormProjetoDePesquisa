export const ModalBlockStyle = {
    boxStyle: {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        overflow: 'scroll',
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        width: '80%',
        height: '60%'
    },
    labelStyle: {
        textDecoration: "underline",
        color: 'var(--blue-500)',
        '&:hover': {
            color: 'red'
        }
    },
    paragraph: {
        marginBottom: "1rem"
    },
    title: {
        marginBottom: "2rem"
    }
}