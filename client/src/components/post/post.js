import React from 'react'
import { Card, Typography, Button, Tag, Badge } from 'antd'
import './post.styles.scss'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import PostEditor from '../postEditor/postEditor'
import { upVotePost, downVotePost } from '../../actions/postActions'
import { connect } from 'react-redux'

import _ from '../../utils/lodashUtils'
import { navigateToUrl } from '../../utils/navigationUtils'

const { Paragraph } = Typography

const Post = props => {
  const onClick = event => {
    navigateToUrl(`/posts/${_.get(props, 'data.id')}`)
    props.onClick && props.onClick(1)
  }

  const upVote = () => {}

  const renderPostCard = () => {
    const { data } = props
    const isLong =
      Helpers.countCharactersInString(_.get(data, 'description', '')) > 45
    return (
      <Card style={{ width: '50em' }}>
        <div className="post-header">
          <div className="author-img">
            <img
              src={_.get(data, 'user.profile_img_url', user)}
              alt="user"
              className="img"
            />
          </div>
          <div className="author-info">
            <div className="name">{`${_.get(
              data,
              'user.first_name',
              'User'
            )} ${_.get(data, 'user.last_name')}`}</div>
            <div className="post-time">{_.get(data, 'created_on')}</div>
          </div>
          <div className="post-tags">
            {_.get(data, 'tags', []).map(tag => (
              <Tag color="geekblue">{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="post-content-container">
          <div className="post-content-title">
            <Paragraph ellipsis={{ rows: 2, expandable: false }}>
              {_.get(data, 'title', 'Title')}
            </Paragraph>
          </div>
          <div className={`post-content-${isLong ? 'bg' : 'sm'}`}>
            {isLong && (
              <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                {/* {_.get(data, 'description', 'description')}{' '} */}
                {/* {Helpers.HTMLParser(_.get(data, 'description', 'description'))} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${_.get(data, 'description', 'description')}`,
                  }}
                />
              </Paragraph>
            )}
            {/* {!isLong && _.get(data, 'description', 'description')} */}
            <div
              dangerouslySetInnerHTML={{
                __html: `${_.get(data, 'description', 'description')}`,
              }}
            />
          </div>
        </div>
        <div className="post-actions">
          <div className="action">
            <Button
              type="primary"
              shape="round"
              icon="up-circle"
              onClick={e => {
                e.stopPropagation()
                props.upVotePost(props.data.id)
              }}
            >
              Upvote
            </Button>
            {_.get(data, 'num_vote_up', 0)} upvote
          </div>
          <div className="action">
            <Button
              type="danger"
              shape="round"
              icon="down-circle"
              onClick={e => {
                e.stopPropagation()
                props.downVotePost(props.data.id)
              }}
            >
              Downvote
            </Button>
            {_.get(data, 'num_vote_down', 0)} downvotes
          </div>
          <Button type="default" shape="round" icon="share-alt">
            Share
          </Button>
        </div>
      </Card>
    )
  }

  const renderPostEditor = () => {
    const { data } = props
    const isLong = Helpers.countCharactersInString(data.description || '') > 45
    return (
      <Card style={{ width: '50em' }}>
        <div className="post-header">
          <div className="author-img">
            <img src={user} alt="user" className="img" />
          </div>
          <div className="author-info">
            <div className="name">{`${_.get(data, 'user.first_name')} ${_.get(
              data,
              'user.last_name'
            )}`}</div>
            <div className="post-time">{_.get(data, 'created_on')}</div>
          </div>
          <div className="post-tags">
            {_.get(data, 'tags', []).map(tag => (
              <Tag color="geekblue">{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="post-content-container">
          <div className="post-content-title">
            <Paragraph ellipsis={{ rows: 2, expandable: false }}>
              {_.get(data, 'title', 'Title')}
            </Paragraph>
          </div>
          <div className={`post-content-${isLong ? 'bg' : 'sm'}`}>
            <PostEditor />
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
      <div className="post" {...props}>
        {renderPostEditor()}
      </div>
    )
  } else {
    return props.clickable ? (
      <button
        className="post"
        {...props}
        onClick={props.clickable ? onClick : undefined}
      >
        {renderPostCard()}
      </button>
    ) : (
      <div className="post" {...props}>
        {renderPostCard()}
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  upVotePost: id => dispatch(upVotePost(id)),
  downVotePost: id => dispatch(downVotePost(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
