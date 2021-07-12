import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2)
            }
        }
    })
)