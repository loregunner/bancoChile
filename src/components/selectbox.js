import React, { Component } from "react";
import "./styles/selectbox.css";
import todo from '../Access/data/data.json'
//import Data from './data.js'

class SelectBox extends Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    data: todo.data,
    selectedItem: this.props.items && this.props.items[0],
  };

  dropDown = () => {
    this.setState((prevState) => ({
      showItems: !prevState.showItems,
    }));
  };

  selectItem = (item) =>{
    this.setState({
      selectedItem: item,
      showItems: false,

  })
  let newState = { ...this.state };
  newState.name = item.value;
  console.log(todo.data);
 newState.todo = todo.data.filter(
 s => s.comuna.includes(newState.name)
   //console.log('prueba' + s.comuna.includes(newState.name));
//return s.comuna.includes(newState.name)
  
 )
 console.log(todo.data.filter( s => s.comuna.includes(newState.name)))
 console.log(newState.name);
  this.setState(newState);

  //this.props.onUpdateDish(this.props.index, newState.name);
};
    handleChange = e => {

    };

  render() {
    
    return (
      <div> 
        <div className="select-box--box" style={{width: this.props.width || 250}}>
          <div className="select-box--container">
            <div className="select-box--selected-item">
              {this.state.selectedItem.value}
            </div>
            <div className="select-box--arrow" onClick={this.dropDown}>
              <span
                className={`${
                  this.state.showItems
                    ? "select-box--arrow-up"
                    : "select-box--arrow-down"
                }`}
              ></span>
              </div>
              <div
                style={{ display: this.state.showItems ? "block" : "none" }}
                className="select-box--items"
              >
              {this.state.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => this.selectItem(item)}
                  className={this.state.selectedItem === item ? "selected" : ""}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBox;