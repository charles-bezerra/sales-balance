import React, { Component } from 'react';

export default class Select extends Component {
    renderOptions(options) {
         let children = [];
         let myOptions = options;
         let option = null;

         for(let i = 0; i < myOptions.length; i++){
            option = myOptions[i];
            if (typeof option == 'object'){
                 children.push( <option key={i} value={ option.name }>{option.name}</option> );
            }
            else{
                children.push( <option key={i} value={ option }>{ option }</option> );                         
            }
         }

         return children;
    }

    render () {
        return (
            <div className="form-group">
                { this.props.title }
                <select  
                    className="form-control" 
                    name={ this.props.name } 
                    onChange={ this.props.onChange } >
                    { this.renderOptions(this.props.options) }
                </select>
            </div>
        );
    }
}