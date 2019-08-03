import React from 'react'
import { Card, Typography, Button, Tag, Input } from 'antd'
import './newPost.styles.scss'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import PostEditor from '../postEditor/postEditor'
import TagInputField from '../../components/tagInputField/tagInputField'

const { Paragraph } = Typography
const longText =
  'My goal is to find a better or more universal Regular Expression to match only one JSON item from a JSON array of elements by its unique GUID. The GUID property is somewhere between the other properties (it is not the first nor the last property). Also the other properties can have arbitrary level of nested properties or JSON objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456.objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456'

const shortText = 'I am doing good!'

const title = "What's new with React 16.x"

const NewPost = () => {
  const text = longText
  const isLong = Helpers.countCharactersInString(text) > 25

  const renderNewPostCard = () => {
    return (
      <Card style={{ width: '50em' }}>
        <div className="post-header">
          <div className="author-img">
            <img src={user} alt="user" className="img" />
          </div>
          <div className="author-info">
            <div className="name">John Appleseed</div>
            <div className="post-time">Just now</div>
          </div>
          <div className="post-tags">
            <TagInputField placeholder="Enter Tags" />
          </div>
        </div>
        <div className="post-content-container">
          <div className="post-content-title">
            <Input placeholder="Post title" size="large" />
          </div>
          <div className={`post-content-${isLong ? 'bg' : 'sm'}`}>
            <PostEditor
              textAreaProps={{ placeholder: 'Enter Post Description' }}
            />
          </div>
        </div>
        <div className="post-editor-actions">
          <Button type="primary">Save</Button>
          <Button type="danger">Cancel</Button>
        </div>
      </Card>
    )
  }
  return <div className="new-post">{renderNewPostCard()}</div>
}

export default NewPost
