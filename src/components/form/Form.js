import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { connect } from 'react-redux'
import CalanderInput from './CalanderInput'
import DetailInput from './DetailInput'
import NameInput from './NameInput'
import PositiveFeedback from './PositiveFeedback'
import { updateDetailState } from './../../actions/form/updateDetailState'
import { updateNameState } from './../../actions/form/updateNameState'
import { updateDateState } from './../../actions/form/updateDateState'
import NegativeFeedback from './NegativeFeedback'
import Paper from '@material-ui/core/Paper'

export function Form(props) {
    const [openPF, setOpenPF] = useState(false)
    const [openNF, setOpenNF] = useState(false)
    const [nameErrorStatus, updateNameErrorStatus] = useState(false)
    const [detailErrorStatus, updateDetialErrorStatus] = useState(false)
    const handlePFeedbackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenPF(false)
    }
    const handleNFeedbackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenNF(false)
    }
    const db = firebase.firestore()
    const handleSubmit = () => {
        if (props.state.formInfo.name.trim() !== '' && props.state.formInfo.detail.trim() !== '') {
            db.collection('notes')
                .add({
                    name: props.state.formInfo.name,
                    date: props.state.formInfo.date,
                    detail: props.state.formInfo.detail,
                })
                .then(function (docRef) {
                    console.log('Document written with ID: ', docRef.id)
                    props.updateNameState('')
                    props.updateDetailState('')
                    setOpenPF(true)
                })
                .catch(function (error) {
                    console.error('Error adding document: ', error)
                    setOpenNF(true)
                })
        } else {
            if (props.state.formInfo.name.trim() === '') {
                updateNameErrorStatus(true)
            }
            if (props.state.formInfo.detail.trim() === '') {
                updateDetialErrorStatus(true)
            }
        }
    }
    return (
        <div className="form">
            <Paper elevation={3} className="boxy">
                <Grid container spacing={1} justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <NameInput
                            errorStatus={nameErrorStatus}
                            updateErrorStatus={updateNameErrorStatus}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CalanderInput />
                    </Grid>
                    <Grid item xs={12}>
                        <DetailInput
                            errorStatus={detailErrorStatus}
                            updateErrorStatus={updateDetialErrorStatus}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="space-around">
                            <Button variant="outlined" color="secondary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <PositiveFeedback open={openPF} handleClose={handlePFeedbackClose} />
                <NegativeFeedback open={openNF} handleClose={handleNFeedbackClose} />
            </Paper>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.appReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDateState: (data) => {
            return dispatch(updateDateState(data))
        },
        updateNameState: (data) => {
            return dispatch(updateNameState(data))
        },
        updateDetailState: (data) => {
            return dispatch(updateDetailState(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
