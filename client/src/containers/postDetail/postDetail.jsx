import React, { Component } from 'react'
import { Card, Typography, Button, Tag, Timeline } from 'antd'
import user from '../../assets/images/user.png'
import _ from '../../utils/lodashUtils'
import Helpers from '../../utils/helpers'
import './postDetail.styles.scss'
import Post  from '../../components/post/post'
import { PostReply } from '../../components/postReplies/postReply'
import { connect } from 'react-redux'
import { getPostDetail } from '../../actions/postActions'

const { Paragraph } = Typography
const longText =
  'My goal is to find a better or more universal Regular Expression to match only one JSON item from a JSON array of elements by its unique GUID. The GUID property is somewhere between the other properties (it is not the first nor the last property). Also the other properties can have arbitrary level of nested properties or JSON objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456.objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456'

const shortText = 'I am doing good!'

const title = "What's new with React 16.x"

class PostDetail extends Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getPostDetail(this.getPostId())
  }

  getPostId() {
    const { match: { params } } = this.props 
    return params.id
  }

  getPost() {
    return this.props.posts[this.getPostId()]
  }

  renderPostDetails = () => {
    return <Post data={this.getPost()}/>
  }

  renderPostReply = reply => {
    return (
      <Timeline.Item>
        <PostReply data={reply} />
      </Timeline.Item>
    )
  }

  renderPostReplies = () => {
    return (
      <div className="post-replies">
        <Timeline>
          {this.getPost().comments.map(comment => this.renderPostReply(comment))}
          <Timeline.Item>
            <PostReply editable />
          </Timeline.Item>
        </Timeline>
      </div>
    )
  }

  render() {
    if (this.getPost() === undefined) {
      return null
    }
    return (
      <div className="post-details-container">
        {this.renderPostDetails()}
        {this.renderPostReplies()}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  posts: _.get(state, 'posts', []),
})

const mapDispatchToProps = dispatch => ({
  getPostDetail: (postId) => dispatch(getPostDetail(postId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
