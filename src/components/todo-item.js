import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    render: function () {
        var className = classNames({
            'todo-item': true,
            'done': this.props.done
        });

        return (
            <div className={className} onClick={this.props.onClick} >
                {this.props.task}
            </div>
        );
    }
});