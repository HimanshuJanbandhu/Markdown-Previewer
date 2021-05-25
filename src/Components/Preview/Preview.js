import React from 'react';
import './Preview.css';
import marked from 'marked';

class Preview extends React.Component {
    render(){
        marked.setOptions({
            breaks: true
        });
        return(
            <div className = "previewBox">
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.written)}} />
                <p><b>Here's the preview.</b></p>
            </div>
        )
    }
}

export default Preview;