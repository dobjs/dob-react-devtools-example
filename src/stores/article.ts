import { Action, inject, observable } from "dob"

function waitOneMinute() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}

@observable
export class ArticleStore {
  public articles: Array<{
    id: number
    title: string
    author: string
  }> = []

  public a = {
    b: {
      c: {
        d: 5
      }
    }
  }
}

export class ArticleAction {
  @inject(ArticleStore) public ArticleStore: ArticleStore

  @Action public addArticle() {
    return this.ArticleStore.articles.push({
      id: Math.random(),
      title: "test dob-react-devtools",
      author: "ascoders"
    })
  }

  @Action public changeArticleTitle(index: number, title: string) {
    this.ArticleStore.articles[index].title = title

  }

  @Action public removeArticle(index: number) {
    this.ArticleStore.articles.splice(index, 1)
  }

  @Action public addArticleAndChangeTitle(title: string) {
    const index = this.addArticle()
    this.changeArticleTitle(index - 1, title)
  }

  @Action public runAsyncTest() {
    this.ArticleStore.a = {
      b: {
        c: {
          d: 6
        }
      }
    }
    waitOneMinute().then(() => {
      // Action(() => {
      this.ArticleStore.a.b.c.d = 7
      this.ArticleStore.a.b.c.d = 8
      this.ArticleStore.a.b.c.d = 9
      // })
    })
  }

  @Action public runAnonymousTest() {
    this.ArticleStore.a.b.c.d = 7
    Action(() => {
      this.ArticleStore.a.b.c.d = 8
      this.test2()
    })
    this.ArticleStore.a.b.c.d = 9
  }

  @Action public test2() {
    this.test3()
  }

  @Action public test3() {
    this.test4()
  }

  @Action public test4() {
    this.ArticleStore.a.b.c.d = 10
    this.ArticleStore.a.b.c.d = 11
  }
}
