import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../components/Routes/Routes";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./materialUIstyles";
import icon from "../../assets/images/image.png"

export const Profile: React.FC = React.memo(() => {

    const name = useSelector<AppRootStateType, string | null>(state => state.profile.userName)
    const email = useSelector<AppRootStateType, string | null>(state => state.profile.userEmail)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const styles = useStyles()

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <Card className={styles.root}>
            <CardMedia
                className={styles.media}
                image={icon}
            />
            <Typography variant="h5" component="h1" className={styles.title}>
                Name: {name}
            </Typography>
            <Typography variant="h5" component="h1" className={styles.title}>
                Email: {email}
            </Typography>
        </Card>
    )
})