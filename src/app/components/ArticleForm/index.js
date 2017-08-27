// React
import React, { Component } from 'react'


/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class ArticleForm extends Component {
  render() {
    const { article = {} } = this.props
    return (
      <form>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={article.title} />
        </div>
        <div>
          <label>Text</label>
          <textarea>
            {article.content}
          </textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default ArticleForm
