// React
import React, { Component } from 'react'

import Input from '../Input'
import Textarea from '../Textarea'


/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class ArticleForm extends Component {
  constructor(props) {
    super(props)

    const { article = {} } = this.props
    this.state = {
      title: article.title || '',
      content: article.content || ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange(event) {
    const { target } = event
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Input
            label="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Textarea
            label="Content"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default ArticleForm
