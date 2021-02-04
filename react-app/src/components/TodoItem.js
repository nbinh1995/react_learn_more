import React, {Component} from 'react';
import "./TodoItem.css";
import className from 'classnames';
class TodoItem extends Component{
    render(){
        const { item, onClick } =this.props;
        let url =  item.isDone ? '/truedone.svg' : '/falsedone.svg';
        return (
            <div 
            className={className('TodoItem', {
                'TodoItem--done': item.isDone
            })} > 
                <img src={url} width={32} onClick={onClick}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;