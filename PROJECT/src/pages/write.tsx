// @ts-nocheck
import Markdown from 'react-markdown/with-html'
import styles from '../index.module.css'

import { sendNewArticle } from '../utils/request'

class Push extends React.Component<
  {
    loading: Function
  },
  {
    text: string
    title: string
    catagory: string
    help: string
  }
  > {
  constructor(props) {
    super(props)
    this.state = {
      text: localStorage.getItem('writing-text') || '',
      title: localStorage.getItem('writing-title') || '',
      catagory: '',
      help: '',
    }
  }

  componentDidMount() {
    this.recorder = setInterval(() => {
      const savedLength =
        (localStorage.getItem('writing-text') && localStorage.getItem('writing-text').length) || 0
      if (Math.abs(savedLength - this.state.text.length) > 100) {
        this.save()
      }
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.recorder)
  }

  recorder: any

  clearInput = () => {
    this.setState({ text: '', title: '', help: '' })
    localStorage.removeItem('writing-title')
    localStorage.removeItem('writing-text')
  }

  save = () => {
    localStorage.setItem('writing-title', this.state.title)
    localStorage.setItem('writing-text', this.state.text)
  }

  push = () => {
    if (this.state.title) {
      this.props.loading()
      sendNewArticle(this.state.title, this.state.text, this.state.catagory || '技术').then(() => {
        this.props.loading()
        this.setState({ text: '', title: '', help: '😊publish success!' })
      })
    } else {
      this.setState({ help: '🤢need a title!' })
    }
  }

  render() {
    return (
      <div className={ styles['write-container'] }      >
        <input
          className={ styles['write-title'] }
          placeholder="标题将出现在首页"
          value={ this.state.title }
          onChange={ (e) => {
            this.setState({ title: e.target.value })
          } }
        />
        <div className={ styles['editor-container'] }>
          <textarea
            onChange={ (e) => {
              this.setState({ text: e.target.value })
            } }
            placeholder="使用Markdown语法书写正文，将在右侧面板预览格式"
            className={ styles['write-textarea'] }
            value={ this.state.text }
          />
          <Markdown
            source={ this.state.text }
            className={ styles['parseMarkdown'] }
            escapeHtml={ false }
          />
        </div>
        <input
          className={ styles['write-catagory'] }
          placeholder="自定义分类，默认为[技术]"
          value={ this.state.catagory }
          onChange={ (e) => {
            this.setState({ catagory: e.target.value })
          } }
        />
        <div>
          <button onClick={ this.push } className={ styles['submitButton'] }>
            publish
          </button>
          <button className={ styles['submitButton'] } onClick={ this.clearInput }>
            clear
          </button>
        </div>
        <p style={ { color: 'red' } }>{ this.state.help }</p>
      </div>
    )
  }
}

export default Push
