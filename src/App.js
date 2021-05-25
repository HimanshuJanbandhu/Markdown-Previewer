import {connect} from 'react-redux';
import Editor from './Components/Editor/Editor';
import Preview from './Components/Preview/Preview';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "normal"
    }
  }

  SelectEditor = () => {
    this.setState({
      mode: "editor"
    })  
  }

  SelectPreview = () => {
    this.setState({
      mode: "preview"
    })  
  }

  render(){
    let written = this.props.text;
    let AppClass = "App " + this.state.mode; 
    return (
      <div className = {AppClass}>
        <div onMouseOver={this.SelectEditor}>
          <Editor/>
        </div>
        <div onMouseOver={this.SelectPreview}>
          <Preview written = {written}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

export default connect(
  mapStateToProps
)(App);
