import React from 'react';
import AppHeader from './app-header';
import TodoList from './todo-list';
import TodoInput from './todo-input';

export default React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					task: "doogie",
					done: false
				},
				{
					task: "bling the hotline",
					done: false
				}
			]
		};
	},
	addTodo: function (inTask) {
		var newTodo = {task: inTask, done: false};
		var updateTodos = [
			...this.state.todos,
			newTodo
		];
		
		this.setState({todos: updateTodos});
	},
	toggleTodo: function (index) {
		var updateTodos = this.state.todos;
		
		updateTodos[index].done = !updateTodos[index].done;
		this.setState({todos: updateTodos});
	},
  	render: function () {
		return (
		  	<div>
		  		<AppHeader 
		  			title="React Intro - Todos" 
			  		tagline="getem done" />
		  		
		  		<TodoInput 
		  			onSubmit={this.addTodo} />
		  		
				<TodoList 
					todos={this.state.todos} 
					onTodoClick={this.toggleTodo} />
			</div>
		);
  	}
});
