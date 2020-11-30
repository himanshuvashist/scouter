import Form from './form/Form'
import Tabs from './Tabs'
import List from './list/List'
import { connect } from 'react-redux'
import { Button, Grid } from '@material-ui/core'
import { updateSignedInState } from './../actions/updateSignedInState'
export function Home(props) {
    const handleLogout = () => {
        props.updateState('')
    }
    return (
        <div>
            <br />
            <Tabs />
            <br />
            <div className="logoutButton">
                <Grid container spacing={1} justify="center" alignItems="center">
                    <Button variant="outlined" color="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Grid>
            </div>

            {props.state.activePage ? <List /> : <Form />}
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
        updateState: (data) => {
            return dispatch(updateSignedInState(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
