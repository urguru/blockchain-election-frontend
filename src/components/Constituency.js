import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import constants from '../common/constants';
import TableCard from './Table';


const styles = {
}

class ConstituencyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getTableItems = () => {
        const { electionStatus, contractConstituency, constituency } = this.props;
        const totalVoteCountFromDataBase = constituency.maleVoteCount + constituency.femaleVoteCount + constituency.otherVoteCount;
        const tableList = [];
        tableList.push(["Name", constituency.name]);
        tableList.push(["ConstituencyId", constituency.constituencyId]);
        tableList.push(["Registered Male Voters", constituency.registeredMaleVoters]);
        tableList.push(["Registered Female Voters", constituency.registeredFemaleVoters]);
        tableList.push(["Registered Other Voters", constituency.registeredOtherVoters]);
        tableList.push(["Registered on duty officials", constituency.registeredOnDutyOfficials]);
        if (electionStatus.text != constants.electionStatus.NOT_STARTED.text) {
            tableList.push(["Male Voter Voted", constituency.maleVoteCount]);
            tableList.push(["Female Voter Voted", constituency.femaleVoteCount]);
            tableList.push(["Others Voter Voted", constituency.otherVoteCount]);
            tableList.push(["Total Vote Count From Database", totalVoteCountFromDataBase]);
            tableList.push(["Total Vote Count From Contract", contractConstituency[1]]);
        }
        return tableList;
    }

    getOtherDetailsTableItems = () => {
        const { electionStatus, contractConstituency, constituency } = this.props;
        const tableList = [];
        if (electionStatus.text != constants.electionStatus.NOT_STARTED.text) {
            tableList.push(["OnDuty Officials Voted", constituency.onDutyOfficialsVoteCount]);
            tableList.push(["NOTA Votes Voted", contractConstituency[2]]);
        }
        return tableList;
    }

    render() {
        const { electionStatus, contractConstituency, constituency } = this.props;
        return (
            <div>
                <TableCard title="Constituency Details" lists={this.getTableItems()} />
                {electionStatus.text != constants.electionStatus.NOT_STARTED.text &&
                    <TableCard title="Other Stats" lists={this.getOtherDetailsTableItems()} />}
            </div>)
    }
}

const mapStateToProps = (state) => ({
    electionStatus: state.election.electionStatus
})

const mapActionsToProps = {
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ConstituencyCard)));