export const CasualStyles = {
    psevdobody: {
        height: "100vh",
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundColor: "white",
        color: "black"
    },
    container: {
        width: "70%",
        margin: "0 auto",
        paddingTop: "15vh",
        color: "inherit"
    },
    h1: {
        fontSize: "2.5vh",
        color: "inherit"
    },
    h2: {
        fontSize: "2.5vh",
        marginBottom: "1em",
        color: "inherit"
    },
    p: {
        textIndent: "1em",
        textAlign: "justify",
        color: "inherit"
    },
    wrapper: {
        display: "grid",
        gridTemplateAreas: `"bio skills"
    "bio links"`,
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "5vw",color: "inherit"
    },
    item: {
        padding: "1em"
    },
    bio: {
        display: "block",
        gridArea: "bio",
        color: "inherit"
    },
    header: {
        height: "10vh",
        paddingBottom: "2em",
        color: "inherit"

    },
    name: {
        textAlign: "right",
        color: "inherit"
    },
    avatar: {
        float: "left",
        height: "100%",
        paddingLeft: "5vh"
    },
    avatarImg:{
        position: "relative",
        maxHeight: "100%"
    },
    skills: { gridArea: "skills",
        color: "inherit" },
    h3: { fontWeight: "normal", paddingLeft: "2em",
        color: "inherit" },
    skill: { display: "flex", justifyContent: "space-between",
        color: "inherit" },
    lvl: {
        width: "5em",
        display: "block",
        height: "0.3em",
        border: "0.1em solid black",

        color: "inherit"
    },
    done: {
        height: "100%",
        display: "block",
        content: '""',
        position: "relative",
        backgroundColor: "black"
    },
    five: { width: "50%" },
    six: { width: "60%" },
    seven: { width: "70%" },
    eight: { width: "80%" },
    links: { gridArea: "links",
        color: "inherit" },

    footer: {
        height: "2.6vw",
        position: "fixed",
        top: "calc(100vh - 2.6vw)",
        width: "100vw",
        textAlign: "center",
        color: "inherit"
    },
    footerImg: { maxHeight: "1em", verticalAlign: "middle" },
    footerA: { position: "relative", top: "-2em", color: "inherit" },
    skillName: {
    color: "inherit"
    }
}