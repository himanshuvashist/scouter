import './App.css'
import Container from '@material-ui/core/Container'
import Home from './components/Home'
import Login from './components/Login'
import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
function App(props) {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container>{props.state.appReducer.isSignedIn ? <Home /> : <Login />}</Container>
            </ThemeProvider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(App)
