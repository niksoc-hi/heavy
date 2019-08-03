import React from 'react'
import { connect } from 'react-redux'
import { Card, Typography, Button, Tag, Input } from 'antd'
import './newPost.styles.scss'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import _ from '../../utils/lodashUtils'

import PostEditor from '../postEditor/postEditor'
import TagInputField from '../../components/tagInputField/tagInputField'
import { createPost } from '../../actions/postActions'

const NewPost = props => {
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [tags, setTags] = React.useState([])

  const createPost = () => {
    const post = {
      title,
      description: desc,
      tags,
    }
    props.createPost(post)
  }

  const renderNewPostCard = () => {
    const { currentUser } = props
    return (
      <Card style={{ width: '50em' }}>
        <div className="post-header">
          <div className="author-img">
            <img
              src={_.get(currentUser, 'profile_img_url', user)}
              alt="user"
              className="img"
            />
          </div>
          <div className="author-info">
            <div className="name">
              {_.get(currentUser, 'first_name', 'user')}{' '}
              {_.get(currentUser, 'last_name', '')}
            </div>
          </div>
          <div className="post-tags">
            <TagInputField
              placeholder="Enter Tags"
              onChange={value => setTags(value)}
            />
          </div>
        </div>
        <div className="post-content-container">
          <div className="post-content-title">
            <Input
              placeholder="Post title"
              size="large"
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className={`post-content-bg`}>
            <PostEditor
              textAreaProps={{ placeholder: 'Enter Post Description' }}
              onChange={setDesc}
            />
          </div>
        </div>
        <div className="post-editor-actions">
          <Button type="primary" onClick={createPost}>
            Save
          </Button>
          <Button type="danger">Cancel</Button>
        </div>
      </Card>
    )
  }
  return <div className="new-post">{renderNewPostCard()}</div>
}

const mapStateToProps = state => ({
  currentUser: _.get(state, 'users.currentUser', {}),
})
const mapDispatchToProps = dispatch => ({
  createPost: body => dispatch(createPost(body)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
