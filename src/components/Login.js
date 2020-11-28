import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import { updateSignedInState } from './../actions/updateSignedInState'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

var firebaseConfig = {
    apiKey: 'AIzaSyCtNG1STnSGEtsyyuI9x_9xn-3TEJelNYk',
    authDomain: 'scouter-d8831.firebaseapp.com',
    databaseURL: 'https://scouter-d8831.firebaseio.com',
    projectId: 'scouter-d8831',
    storageBucket: 'scouter-d8831.appspot.com',
    messagingSenderId: '839767277881',
    appId: '1:839767277881:web:555930f78a0546d0fce8e8',
    measurementId: 'G-PN29V6NLEM',
}

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
