import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import ListIcon from '@material-ui/icons/List'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { updateActivePage } from './../actions/updateActivePage'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        // maxWidth: 500,
    },
})

export function PageTabs(props) {
    const classes = useStyles()
    const handleChange = (event, newValue) => {
        props.updateState(newValue)
    }

    return (
        <Grid container justify="space-around">
            <Paper square className={classes.root} elevation={3}>
                <Tabs
                    value={props.state.activePage}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<BorderColorIcon />} label="Add Info" />
                    <Tab icon={<ListIcon />} label="Info List" />
                </Tabs>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return { state: state.appReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (data) => {
            return dispatch(updateActivePage(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTabs)
