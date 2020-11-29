import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { updateDetailState } from './../../actions/form/updateDetailState'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
}))

export function DetailInput(props) {
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
        <Grid container className={classes.root} justify="space-around">
            <TextField
                error={props.errorStatus}
                id="outlined-multiline-static"
                fullWidth
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                onChange={handleChange}
                value={props.state.formInfo.detail}
            />
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
            return dispatch(updateDetailState(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailInput)
