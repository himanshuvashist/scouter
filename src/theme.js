import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: pink[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: pink[500],
        },
    },
})

export default theme
