import React, { Component } from 'react'
import { Card, Typography, Button, Tag } from 'antd'
import './home.styles.scss'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import { navigateToUrl } from '../../utils/navigationUtils'
import { Post } from '../../components/post/post'
import NewPost from '../../components/newPost/newPost'

class Home extends Component {
  navigateToPostDetails = postId => {
    navigateToUrl(`/posts/${postId}`)
  }

  renderPost = post => {
    return <Post clickable onClick={this.navigateToPostDetails} />
  }

  render() {
    return (
      <div className="home-container">
        <NewPost />
        {[1, 2, 3].map(() => this.renderPost())}
      </div>
    )
  }
}

export default Home
