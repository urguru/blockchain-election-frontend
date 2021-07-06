import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

const styles = {
    card:{
        margin:"20px",
        padding:"20px",
        fontFamily:"roboto"
    }
}

class HelpPage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <h2>HELP MANUAL</h2>
                <div>
                    <h3>1.Login</h3>
                    <p>
                        This option is given for system admin and polling booth officers, registered email id and password has to be entered
                    </p>
                </div>
                <div>
                    <h3>2.Admin Options</h3>
                    <p>
                        The functionalities for admin is show in side navigation bar.It includes:

                        <div>
                            a.Add constituency:Constituency details has to be entered.
                        </div>
                        <div>
                            b.Add citizen:The name,voter-id,gender and constituency details has to be entered.
                        </div>
                        <div>
                            c.Add candidate:Candidate details such as his id and constituency has to be entered.
                        </div>
                        <div>
                            d.Add polling booth:Polling booth details has to be entered.
                        </div>
                        <div>
                            e.Change election status:Start and complete elections.
                        </div>


                    </p>
                </div>
                <div>
                    <h3>3.Voting</h3>
                    <p>
                        Voter id is entered at the polling booth in the "Citizen search option"  and if he is valid,list of candidates is displayed and voter can cast his vote.
                    </p>
                </div>
                <div>
                    <h3>4.Results</h3>
                    <p>
                        Entering the constituency id in the constituency search box ,the deatils as well as the rank of each candidate is displayed.
                    </p>
                </div>
            </Card>);
    }
}

const mapStateToProps = (state) => ({
})

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(HelpPage));