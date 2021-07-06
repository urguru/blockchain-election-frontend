import React from 'react';
import BackgroundImage from '../images/background.jpg';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';

const styles = {
    image: {
        width: "100vw",
        height: "90vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        margin: "0",
        padding: "0",
        fontFamily:"roboto"
    },
    heading: {
        margin: "0",
        padding: "0"
    }
}

class HomePage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.image}>
                <div className={classes.text}>
                    <h1 className={classes.heading}>BLOCKCHAIN BASED E-VOTING SYSTEM</h1>
                    <h2>"Voting made Secure and Simple"</h2>
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => ({
})

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(HomePage));