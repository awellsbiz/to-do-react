import React, {Component} from 'react'
import './App.css'
import ListItems from "./ListItems"


class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index)=>{
      return <ListItems 
        task={item}
        key={index}
      />
    })
    return(
      <div>
        <h1>Things I Should Stop Procrasinating</h1>
        <ul>
          {todoItems}

         
        </ul>

      </div>
    )
  }
}

export default MyList