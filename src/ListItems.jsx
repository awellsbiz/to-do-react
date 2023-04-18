import React, {Component} from "react"
import './App.css'

class ListItems extends Component {
    render() {
        return (
            <li>{this.props.task}</li>
        )
    }
}

export default ListItems