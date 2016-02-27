import React from 'react';
import TodoItem from './todo-item';

export default React.createClass({
    render: function () {
        var todoItemsDOM = this.props.todos.map( (todo, index) => {
            var onClick = () => {
                this.props.onTodoClick(index);
            }
            
            return (
                <TodoItem 
                    key={index} 
                    task={todo.task} 
                    done={todo.done} 
                    onClick={onClick} />
            );
        });
        
        return (
            <div>
                {todoItemsDOM}
            </div>
        );
    }
});