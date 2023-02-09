import '../config';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Editor from 'for-editor';

class MarkdownEditor extends Component{
	constructor() {
		super()
		this.editor = React.createRef()
	}
	handleContentChange(content) {
		if (this.props.setContent) {
			this.props.setContent(content);
		}
	}
	render(){
		return (
			<Editor
				placeholder='Begin editing...'
				preview={true}
				subfield={true}
				ref={this.editor}
				toolbar={{h1:true,h2:true,h3:true,h4:true,link:true,code:true,preview:true,expand:true,undo:true,redo:true,save:true,subfield:true,img:false}}
				value={this.props.value}
				onChange={(content) => this.handleContentChange(content)}
				{...this.props}
			/>
		)
	}
}

export default MarkdownEditor;