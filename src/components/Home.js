import Form from './form/Form'
import Tabs from './Tabs'
import List from './list/List'
import { connect } from 'react-redux'

export function Home(props) {
    return (
        <div>
            <br />
            <Tabs />
            {props.state.activePage ? <List /> : <Form />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.appReducer,
    }
}

export default connect(mapStateToProps)(Home)
