import React, { Component } from 'react'
import { Card, Typography, Button, Tag, Timeline } from 'antd'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import './postDetail.styles.scss'
import { Post } from '../../components/post/post'

const { Paragraph } = Typography
const longText =
  'My goal is to find a better or more universal Regular Expression to match only one JSON item from a JSON array of elements by its unique GUID. The GUID property is somewhere between the other properties (it is not the first nor the last property). Also the other properties can have arbitrary level of nested properties or JSON objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456.objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456'

const shortText = 'I am doing good!'

const title = "What's new with React 16.x"

class PostDetail extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  renderPostDetails = () => {
    return <Post />
  }

  renderPostReply = reply => {
    return (
      <Timeline.Item>
        <Post className="post-reply" />
      </Timeline.Item>
    )
  }

  renderPostReplies = () => {
    return (
      <div className="post-replies">
        <Timeline>{[1, 2, 3].map(() => this.renderPostReply())}</Timeline>
      </div>
    )
  }

  render() {
    return (
      <div className="post-details-container">
        {this.renderPostDetails()}
        {this.renderPostReplies()}
      </div>
    )
  }
}

export default PostDetail
