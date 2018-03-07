import { Connect, startDebug } from "dob-react";
import "dob-react-devtools"
import * as React from "react";

import Article from "./article.component"

startDebug()

@Connect
export default class Page1 extends React.PureComponent<any, any> {
  public render() {
    const Articles = this.props.ArticleStore.articles.map((article: any, index: number) => {
      return <Article key={article.id} index={index} article={article} />
    })

    return (
      <div>
        <button onClick={() => {
          this.props.ArticleAction.addArticle()
        }}>add article</button>

        <button onClick={() => {
          this.props.ArticleAction.addArticleAndChangeTitle("custom name")
        }}>add article and change name</button>

        <button onClick={() => {
          this.props.ArticleAction.runAsyncTest()
        }}>test async action {this.props.ArticleStore.a.b.c.d}</button>

        <button onClick={() => {
          this.props.ArticleAction.runAnonymousTest()
        }}>test anonymous action</button>

        <ul>
          {Articles}
        </ul>
      </div>
    );
  }
}
