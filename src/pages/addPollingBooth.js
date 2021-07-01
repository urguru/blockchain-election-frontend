import React from 'react';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import { addPollingBooth } from '../actions/pollingBoothActions';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Redux
import { connect } from 'react-redux';

const styles = {
    form: {
        textAlign: 'center'
    },
    formImage: {
        width: 60,
        margin: "10px auto",
    },
    pageTitle: {
        margin: "10px auto"
    },
    textField: {
        margin: "10px auto"
    },
    Button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: "red",
        fontSize: "0.8rem",
        margin: "10v auto"
    }
}

class AddPollingBooth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pollingBoothId: '',
            name: '',
        }
    }
    handleEmpty = () =>{
        if(this.state.name.length==0 ||  this.state.pollingBoothId.length==0){
        return true;
        }
        else{
            return false;
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        const pollingBooth = {
            pollingBoothId: this.state.pollingBoothId,
            name: this.state.name,
        }
        this.props.addPollingBooth(pollingBooth, this.props);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { classes } = this.props
        const { error } = this.state
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Add Polling Booth
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='pollingBoothId' variant="outlined" name='pollingBoothId' type='text' label="Polling Booth ID" className={classes.textField} value={this.state.pollingBoothId} onChange={this.handleChange} fullWidth />
                        <TextField id='name' name='name' variant="outlined" type='text' label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange} fullWidth />
                        <Button type="submit" disabled={this.handleEmpty()} variant="contained" color="primary" className={classes.Button}>
                            Add Polling Booth
                        </Button>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    admin: state.admin,
})

const mapActionsToProps = {
    addPollingBooth,
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(AddPollingBooth));