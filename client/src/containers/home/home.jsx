import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Typography, Button, Tag } from 'antd'
import './home.styles.scss'
import user from '../../assets/images/user.png'
import Helpers from '../../utils/helpers'
import _ from '../../utils/lodashUtils'
import { navigateToUrl } from '../../utils/navigationUtils'
import Post  from '../../components/post/post'
import NewPost from '../../components/newPost/newPost'
import { getAllPosts } from '../../actions/postActions'

class Home extends Component {
  componentDidMount() {
    this.props.getAllPosts()
  }

  navigateToPostDetails = postId => {
    navigateToUrl(`/posts/${postId}`)
  }

  renderPost = post => {
    return <Post clickable onClick={this.navigateToPostDetails} data={post} />
  }

  render() {
    const { allPosts } = this.props
    return (
      <div className="home-container">
        <NewPost />
        {allPosts.map(post => this.renderPost(post))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allPosts: _.get(state, 'posts.allPosts.results', []),
})

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
