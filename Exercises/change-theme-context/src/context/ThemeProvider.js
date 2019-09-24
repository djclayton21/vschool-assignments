import React, {Component} from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: 'light'
        }
    }
    changeTheme = (event) => {
        this.setState({theme: event.target.value})
    }

    render() {
        return (
            <ThemeContext.Provider
                value = {{
                        theme: this.state.theme,
                        changeTheme: this.changeTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const withTheme = C => props => (
    <ThemeContext.Consumer>
        { value => <C {...value} {...props} />}
    </ThemeContext.Consumer>
)

export default ThemeProvider