import '../config';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';

class MarkdownView extends Component{
	render(){
		return (
			<ReactMarkdown
				className='markdown-body'
				components={{
					code: CodeBlock,
				}}
				{...this.props}
			/>
		)
	}
}
// yarn add for-editor
// yarn add react-markdown
// pip install django-mdeditor

export default MarkdownView;