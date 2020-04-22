import React, { Component } from 'react';
import "../Styles/NeumorphismStyle.css";
class NeumorphismButtonComponent extends Component {

    render() { 
        var Buttoncontent;
        var Link;
        var Click;
        return (
        <a id="NeumorphismButton" href={this.props.Link} onClick={this.props.Click}><span>{this.props.Buttoncontent}</span></a>);
    }
}
 
export default NeumorphismButtonComponent;