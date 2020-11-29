import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import { updateSignedInState } from './../actions/updateSignedInState'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import firebaseConfig from './../firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export function Login(props) {
    const classes = useStyles()
    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                props.updateState(true)
                return false
            },
        },
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    }
    return (
        <div className={`${classes.root} loginCard`}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (data) => {
            return dispatch(updateSignedInState(data))
        },
    }
}

export default connect(null, mapDispatchToProps)(Login)
