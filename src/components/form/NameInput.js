import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { connect } from 'react-redux'
import { updateNameState } from './../../actions/form/updateNameState'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}))

export function NameInput(props) {
    const classes = useStyles()
    const handleChange = (e) => {
        if (e.target.value.trim() !== '') {
            if (props.errorStatus) {
                props.updateErrorStatus(false)
            }
        } else {
            props.updateErrorStatus(true)
        }
        props.updateState(e.target.value)
    }
    return (
        <Grid container justify="space-around">
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle color="primary"/>
                    </Grid>
                    <Grid item>
                        <TextField
                            error={props.errorStatus}
                            id="input-with-icon-grid"
                            label="Name"
                            onChange={handleChange}
                            value={props.state.formInfo.name}
                        />
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.appReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (data) => {
            return dispatch(updateNameState(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameInput)
