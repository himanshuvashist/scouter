import './App.css'
import Container from '@material-ui/core/Container'
import Home from './components/Home'
import Login from './components/Login'
import {connect} from 'react-redux'

function App(props) {
    return (
        <div>
            <Container>{ props.state.appReducer.isSignedIn ? <Home /> : <Login />}</Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(App)