import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { connect } from 'react-redux'
import { updateDateState } from './../../actions/form/updateDateState'

export function CalanderInput(props) {
    const handleDateChange = (date) => {
        console.log(date)
        props.updateState(date)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={props.state.formInfo.date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
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
            return dispatch(updateDateState(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalanderInput)
