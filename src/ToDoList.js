import { Component } from "react";
import image from './todo.png'
import imageTwo from './delete.png'
import imageEdit from './edit.png'

export class ToDoList extends Component {
    state = {
        userInput: '',
        toDoList: [],
    }
    onChange = (e) =>{
        this.setState({userInput: e});
    }
    addItem(input) {
        if(input === '') {
            alert('Please enter an item')
        } else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ''})
        }
    }
    crossWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }
    deleteItem(index) {
            let listArray = this.state.toDoList
            listArray.splice(index, 1)
            this.setState({toDoList: listArray})
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    editItem = (index) => {
        let listArray = this.state.toDoList;
        let editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
        let updated = [...listArray];
        updated[index] = editedTodo;
        console.log(updated)
        this.setState({
            toDoList: updated,
        });
        }
      }
    render () {
        return(
            <div>
                <div className="container">
                    <h1>What are you doing today?</h1>
                    <form onSubmit={this.onFormSubmit}>
                    <div className="containerInput">
                        <input
                        placeholder="Add item..."
                        type="text"
                        onChange={(e) => {this.onChange(e.target.value)}}
                        value={this.state.userInput}
                        />
                        <button className="btnAdd" onClick={() => this.addItem(this.state.userInput)}>+</button>
                    </div>
                    <ul>
                        {this.state.toDoList.map((item,index) =>(
                            <li
                            onClick={this.crossWord}
                            key={index}
                            >
                                <button
                                onClick={() => this.deleteItem(index)}
                                key={index}
                                className="btnDelete"
                                ><img src={ imageTwo } alt="delete" width="18px"/></button>
                                 <button
                                 className="btnEdit"
                                 onClick={() => this.editItem(index)}>
                                 <img src={ imageEdit } alt="edit" width="13px"/>
                                </button>
                                 { item }
                            </li>
                        ))}
                    </ul>
                    </form>
                </div>
            </div>
        )
    }
}