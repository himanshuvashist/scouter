import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import firebase from 'firebase/app'
import 'firebase/firestore'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
})

function Row(props) {
    const { row } = props
    const [open, setOpen] = React.useState(false)
    const classes = useRowStyles()

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detail
                            </Typography>
                            <p>{row.detail}</p>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
    }).isRequired,
}

export default class Tablee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            rows: [],
        }
    }
    componentDidMount() {
        const db = firebase.firestore()
        db.collection('notes')
            .get()
            .then((querySnapshot) => {
                const d = []
                querySnapshot.forEach((doc) => {
                    d.push({ ...doc.data(), id: doc.id })
                })
                this.setState({ data: d }, () => {
                    const temp = []
                    this.state.data.forEach((e) => {
                        temp.push({
                            name: e.name,
                            date: e.date.seconds,
                            detail: e.detail,
                            id: e.id,
                        })
                    })
                    // ##TODO## sort temp in respect of latest to oldest date

                    // update state
                    this.setState({ rows: temp })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <TableContainer component={Paper} className="table">
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
