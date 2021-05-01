import marioBG from '../styles/img/back.png'
export const MarioStyles = {
    psevdobody: {
        height: "100vh",
        /*backgroundSize: '100vw',*/
        color: "white",
        minHeight: "100vh",
        maxWidth: '100vw',
        // backgroundSize: "100%",
        // background: `url(${marioBG}) bottom no-repeat fixed`,
        /*background: `url(${marioBG}) bottom 100% / auto no-repeat fixed `,*/
        background: `url(${marioBG}) 0 0/ 100% no-repeat fixed `,
        backgroundColor: "#5c94fc",
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'

    },
    linksA:{
        color: "white"
    },
    container: {
        width: "70%",
        margin: "0 auto",
        paddingTop: "15vh"
    },
    h1: {
        fontSize: "2.5vh"
    },
    h2: {
        fontSize: "2.5vh",
        marginBottom: "1em"
    },
    p: {
        textIndent: "1em",
        textAlign: "justify"
    },
    wrapper: {
        display: "grid",
        gridTemplateAreas: `"bio skills"
    "bio links"`,
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "5vw"
    },
    item: {
        padding: "1em"
    },
    bio: {
        display: "block",
        gridArea: "bio"
    },
    header: {
        height: "10vh",
        paddingBottom: "2em"

    },
    name: {
        textAlign: "right"
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
    skills: { gridArea: "skills" },
    h3: { fontWeight: "normal", paddingLeft: "2em" },
    skill: { display: "flex", justifyContent: "space-between" },
    lvl: {
        border: "0.1em solid white",
        width: "5em",
        display: "block",
        height: "0.3em",

    },
    done: {
        backgroundColor: "white",
        height: "100%",
        display: "block",
        content: '""',
        position: "relative",

    },
    five: { width: "50%" },
    six: { width: "60%" },
    seven: { width: "70%" },
    eight: { width: "80%" },
    links: { gridArea: "links" },
    footer: {
        height: "2.6vw",
        position: "fixed",
        top: "calc(100vh - 2.6vw)",
        width: "100vw",
        textAlign: "center"
    },
    footerImg: { maxHeight: "1em", verticalAlign: "middle" },
    footerA: { position: "relative", top: "-2em", color: "black" }
}