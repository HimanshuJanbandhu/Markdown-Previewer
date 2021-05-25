import React from 'react';
import {connect} from 'react-redux';
import {setText,clearText} from '../../Actions/EditorActions';
import './Editor.css';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.setText(event.target.value);
    }

    render(){
        return (
            <div className = "editorBox">
            <textarea id="editor" value = {this.props.text} onChange={this.handleChange}></textarea>
            <p><b>Write!</b></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        text: state.text
    }
}

const actionCreators = {
    setText,
    clearText
}
export default connect(
    mapStateToProps,
    actionCreators)(Editor);