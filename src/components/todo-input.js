import React from 'react';

export default React.createClass({
    getInitialState: function () {
        return {
            value: ''  
        };  
    },
    onChange: function (event) {
        this.setState({
            value: event.target.value
        });
    },
    onKeyDown: function (event) {
        if (event.key === "Enter" ) {
            var value = this.state.value;
            this.props.onSubmit(value);
            this.setState({value: ''});
        }
    },
    render: function () {
        return (
            <input 
                value={this.state.value} 
                onChange={this.onChange} 
                onKeyDown={this.onKeyDown} />
        );
    }
});