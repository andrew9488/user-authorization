import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            minWidth: 260,
            maxWidth: 340,
            width: "100%",
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#8080801f",
            "&:hover": {
                boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.4)"
            }
        },
        title: {
            margin: "10px 3px 5px 3px",
            fontSize: 24,
            fontWeight: 700,
        },
        media: {
            height: 306,
            width: "90%",
            marginTop: 10,
        }
    })
)