import React, { Component } from 'react'
import store from './store'
import {getTodoList,changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor(props){
    super(props)
    this.changeInputValue=this.changeInputValue.bind(this)
    this.storeChange=this.storeChange.bind(this)
    this.clickBtn=this.clickBtn.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.state=store.getState()
    store.subscribe(this.storeChange)
  }
  render() { 
    return (  
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
        list={this.state.list}
      />
    );
  }

  componentDidMount(){
    const action=getTodoList()
    store.dispatch(action)
  }

  changeInputValue(e){
    // const action={
    //   type:CHANGE_INPUT,
    //   value:e.target.value
    // }
    const action=changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(
      store.getState()
    )
  }
  clickBtn(){
    // const action={
    //   type:ADD_ITEM
    // }
    const action=addItemAction()
    store.dispatch(action)
  }
  deleteItem(index){
  // const action={
  //   type:DELETE_ITEM,
  //   index
  // }
  const action=deleteItemAction(index)
  store.dispatch(action)
  }
}

export default TodoList;