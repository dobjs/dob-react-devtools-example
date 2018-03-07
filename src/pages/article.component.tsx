import { Connect } from "dob-react"
import * as React from "react";

@Connect
export default class Article extends React.PureComponent<any, any> {
  public render() {
    return (
      <li>
        <p>
          title: {this.props.article.title}
        </p>
        <p>
          author: {this.props.article.author}
        </p>
        <input
          placeholder="change current article's title.."
          onChange={event => {
            this.props.ArticleAction.changeArticleTitle(this.props.index, event.currentTarget.value)
          }}
        />
        <button onClick={() => {
          this.props.ArticleAction.removeArticle(this.props.index)
        }}>remove</button>
      </li>
    );
  }
}
