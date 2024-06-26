import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    studentsTop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: "59vw",
        marginTop: "2vw",
    },
    buttonNewStudent: {
        width: "15vw",
        height: "7vh",
    },
    iconStudent: {
        marginLeft: "0.5vw",
        width: "2vw",
        height: "4vh",
    },
    tableStudentContent: {
        marginLeft: "9vw",
        marginTop: "2vw",
    },
    tableStudents: {
        borderSpacing: "0px",
        textAlign: "center",
    },
    titlemodalList: {
        margin: "0vh 0vw 0vh 1vw"
    },
    modalTop: {
        width: "85%",
        display: "flex",
        justifyContent: "space-between",
        margin: "3vh 0vw 3vh 0vw"
    },
    enrollment: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    labelStudent: {
        width: "100%",
        fontFamily: "Poppins-Regular",
        fontSize: "1.1vw",
        color: theme.palette.primary.main,
        textAlign: "center",
    },
    inputEnrollment: {
        width: "100%",
        height: "5vh",
        border: "none",
        borderColor: "none",
        borderRadius: "1vw",
        boxShadow: `0vw 0.1vw 0.2vw ${theme.palette.primary.light}`,
        fontSize: "1.1vw",
        fontFamily: "Poppins-Regular",
        textAlign: "center",
    },
    inputsModal: {
        display: "flex",
        width: "85%",
        justifyContent: "space-between",
        paddingTop:"2vw",
    },

    modalBottom: {
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    credentials: {
        height: "25vh",
        paddingBottom: "5vh",
        display: "flex",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flexDirection: "column"

    },
    selectContainer: {
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop:"1vw",
        marginLeft:"-3%"
    },
    labelSelect: {
        fontFamily: "Poppins-Regular",
        fontSize: "1.1vw",
        paddingLeft: "0.7vw"

    },
    select: {
        height: "5vh",
        width: "50%",
        borderRadius: "1vw",
        display: "flex",

    },
    buttonsModal: {
        display: "flex",
        justifyItems: "center",
        justifyContent: "space-around",
        paddingTop: "14vh",

    },
    buttonStudents: {
        width: "10vw",
        height: "7vh",
    },
    containerStudent: {
        width: "90%",
        height: "10%",
        marginBottom: "1.5vh",
    },
    nameStudent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "2vw",
        fontFamily: "Poppins-Semibold",
        paddingInline: "2vw",
        marginBottom: "0.5vw"
    },
    dataStudent: {
        fontFamily: "Poppins-Regular",
        fontSize: "1.2vw",
    },
    sectionYear: {
        width: "100%",
        height: "1.5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    year: {
        fontFamily: "Poppins-Regular",
        fontSize: "1.5vw",
        paddingLeft: "2vw",
    },
    buttonArrow: {
        background: "none",
        border: "none",
        borderColor: "none:",
        marginRight: "2vw",
    },
    iconArrow: {
        height: "100%",
        width: "100%",

    },
    tableQualified: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: "0.4vw 0.5vw 0.1vw 0.5vw",
        fontFamily: "Poppins-Regular",
        fontSize: "0.8vw",
        borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    positionTable: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1vw",
    },
    buttons: {
        position: "absolute",
        width: "11%",
        height: "8%",
        bottom: "4vw",
        right: "10vw",
    },
    iconPosition: {
        paddingLeft: "0.7vw",
    },
    lineFirst: {
        margin: "0.5vw 0vw 1vw 0vw"
    },headTeachers: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    buttonsTech: {
        display: "flex",
        width: "50%",
        fontSize: "1.3vw",
        marginLeft: "13vw",
    },
    button: {
        width: "13vw",
        paddingInline: "1vw",
        height: "7vh",
    },
    buttonList: {
        width: "17vw",
        paddingInline: "1vw",
        height: "6.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        fontSize: "1.1vw",
        borderRadius: "1vw",
        border: "none",
    },
    iconTeacher: {
        paddingLeft: "1vw",
        width: "3vw",
        height: "3vh",
    },
    tableTch: {
        width: "65vw",
        margin: " 2vh 0vw 0vh 8.9vw",
    },

    buttonTeacher: {
        display: "flex",
        justifyContent: "center",
        width: "50vw",
        padding: "10vh 0vw 0vh 3vw",
    },
    buttonS: {
        width: "10vw",
        height: "7vh",
        marginLeft: "5vw",
    },
    table: {
        width: "65vw",
        height: "20vh",
        borderSpacing: "0px",
        textAlign: "center",
        margin: "5vh 0vw 0vh 0vw",
    },
    tableBody: {
        backgroundColor: `${theme.palette.primary.main}`,
        borderBottom: `1px solid ${theme.palette.primary.light}`,
        fontFamily: "Poppins-Regular",
        fontSize: "0.9vw",
        color: theme.palette.primary.contrastText,
    },
    contentButtons: {
        width: "10vw",
        margin: "10vh 0vw 0vh 55vw ",
        height: "7vh",
    },
    titleEnable: {
        margin: "0vh 0vw 3vh 0vw",
    },
    containerName: {
        width: "90%",
        height: "10%",
        marginBottom: "1.5vh",
    },
    nameteacher: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1.7vw",
        fontFamily: "Poppins-Regular",
        paddingInline: "2vw",
    },
    subtitleAssign: {
        margin: "1vw 0vw 1vw 0vw ",
    },
    lineEnable: {
        width: "90%",
        padding: "0.35vh",
        marginBottom: "1.5vw",
        borderColor: theme.palette.primary.contrastText + "50",
        backgroundColor: theme.palette.primary.contrastText + "50",
    },
    containerEnable: {
        width: "90%",
        height: "60%",
        display: "flex",
        alignContent: "flex-start",
        justifyContent: "Space-around",
        marginBottom: "10vh",
    },
    containerAssign: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        backgroundColor: theme.palette.primary.contrastText + "B0",
        borderRadius: "3vh",
        fontFamily: "Poppins-Regular",
        fontSize: "1.5vw",
    },

    assign: {
        width: "100%",
        height: "25%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "5vw",
        fontFamily: "Poppins-Regular",
        fontSize: "1.1vw",
    },
    containerSmall: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        width: "90%",
        paddingInline: "1vw",
    },
    assignSmall: {
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins-Regular",
        fontSize: "1.1vw",
    },
    buttonContainer: {
        width: "40%",
        height: "100%",
        paddingTop: "3vh",
    },
    buttonAssign: {
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.main + "50",
        width: "100%",
        marginTop: "0.9vh",
        color: theme.palette.primary.main,
        fontSize: "1.1vw",
        borderRadius: "1vw",
        border: "0.1 solid ",
        height: "2.5vw",
    },
    containerSubjectAssign: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "48%",
        height: "20vw",
        fontFamily: "Poppins-Regular",
        fontSize: "1.5vw",
    },
    tableSubjects: {
        width: "100%",
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        marginBottom: "1vw",
        borderSpacing: "0px",
        height: "30%",
    },
    bodyTable: {
        backgroundColor: theme.palette.primary.main,
        fontSize: "0.8vw",
        fontFamily: "Poppins-Regular",
        borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    butonsActions: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "60%",
        height: "15vh",
        paddingTop: "0.7vw",
    },
    lineDetail: {
        width: "95%",
        padding: "0.35vh",
        marginBottom: "4vh",
        borderColor: theme.palette.primary.contrastText + "50",
        backgroundColor: theme.palette.primary.contrastText + "50",
    },
    containerTableDetail: {
        width: "90%",
        height: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "7vh",
    },
    tableDetail: {
        width: "80%",
        borderSpacing: "0px",
        paddingBottom: "20vh",
    },
    bodyTableDetail: {
        height: "5vh",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontSize: "0.8vw",
        fontFamily: "Poppins-Regular",
        borderBottom: `1px solid ${theme.palette.primary.light}`,
        textAlign: "center",
    },
    buttonClose: {
        width: "9vw",
        height: "6vh",
        marginLeft: "58vw",
    },
    subtitle: {
        fontFamily: "Poppins-Semibold",
        fontSize: "2vw",
        marginLeft: "9vw",
        color: theme.palette.primary.contrastText,
    },
    tableEvaluation: {
        marginLeft: "9vw",
    }   
    
}));

export default useStyles;