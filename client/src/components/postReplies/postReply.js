import React from 'react'
import { Card, Typography, Button, Tag } from 'antd'
import './postReply.styles.scss'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import PostEditor from '../postEditor/postEditor'
import { placeholder } from '@babel/types'

const { Paragraph } = Typography
const longText =
  'My goal is to find a better or more universal Regular Expression to match only one JSON item from a JSON array of elements by its unique GUID. The GUID property is somewhere between the other properties (it is not the first nor the last property). Also the other properties can have arbitrary level of nested properties or JSON objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456.objects but never the same GUID. For ease the properties are always in the same order - in my example from first to last.In the following example I need to select only the second item with guid: 456'

const shortText = 'I am doing good!'

const title = "What's new with React 16.x"

export const PostReply = props => {
  const text = longText
  const isLong = Helpers.countCharactersInString(text) > 25
  const {data} = props

  const onClick = event => {
    props.onClick && props.onClick(1)
  }

  const renderPostReplyCard = () => {
    return (
      <Card style={{ width: '50em' }}>
        <div className="post-header">
          <div className="author-img">
            <img src={data.user.profile_img_url} alt="user" className="img" />
          </div>
          <div className="author-info">
        <div className="name">{data.user.username}</div>
        <div className="post-time">{data.user.created_on}</div>
          </div>
        </div>
        <div className="post-content-container">
          <div className={`post-content-${isLong ? 'bg' : 'sm'}`}>
            {isLong && (
              <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                {data.description}
              </Paragraph>
            )}
            {!isLong && text}
          </div>
        </div>
        <div className="post-actions">
          <Button type="primary" shape="round" icon="up-circle">
            Upvote
          </Button>
          <Button type="danger" shape="round" icon="down-circle">
            Downvote
          </Button>
          <Button type="default" shape="round" icon="share-alt">
            Share
          </Button>
        </div>
      </Card>
    )
  }

  const renderPostReplyEditor = () => {
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
        </div>
        <div className="post-content-container">
          <div className={`post-content-${isLong ? 'bg' : 'sm'}`}>
            <PostEditor textAreaProps={{ placeholder: 'Write a reply' }} />
          </div>
        </div>
        <div className="post-editor-actions">
          <Button type="primary">Save</Button>
          <Button type="danger">Cancel</Button>
        </div>
      </Card>
    )
  }

  if (props.editable) {
    return (
      <div className="post-reply" {...props}>
        {renderPostReplyEditor()}
      </div>
    )
  } else {
    return props.clickable ? (
      <button
        className="post-reply"
        {...props}
        onClick={props.clickable ? onClick : undefined}
      >
        {renderPostReplyCard()}
      </button>
    ) : (
      <div className="post-reply" {...props}>
        {renderPostReplyCard()}
      </div>
    )
  }
}
