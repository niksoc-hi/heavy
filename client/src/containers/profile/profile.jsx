import React, { Component } from 'react'
import { connect } from 'react-redux'
import userImg from '../../assets/images/user.png'
import './profile.styles.scss'
import  Post  from '../../components/post/post'
import { Card, Icon, Rate } from 'antd'
import _ from '../../utils/lodashUtils'
import { getPostsByUser } from '../../actions/postActions'
import { getUserProfile } from '../../actions/userActions'

class Profile extends Component {
  componentDidMount() {
    const {
      getPostsByLoggedInUser,
      currentUser,
      match,
      location,
      getUserProfile,
    } = this.props
    const myProfile = match.params.id ? false : true
    if (!myProfile) {
      const userId = match.params.id
      getUserProfile(userId)
      getPostsByLoggedInUser(userId)
    } else {
      getPostsByLoggedInUser(_.get(currentUser, 'id', 1))
    }
  }

  isMyProfile = () => {
    const { location } = this.props
    if (
      location.pathname
        .split('/')
        .pop()
        .toLowerCase() === 'me'
    )
      return true
    else return false
  }

  getUserDetails = () => {
    const { userProfile, currentUser } = this.props
    if (this.isMyProfile()) return currentUser
    else return userProfile
  }

  render() {
    const { postsByUser } = this.props
    const user = this.getUserDetails()
    return (
      <div className="profile-container">
        <div className="profile-head">
          <div className="profile-cover">
            <img
              src={_.get(user, 'profile_img_url', userImg)}
              alt="user"
              className="profile-img"
            />
          </div>
          <div className="user-info">
            <div className="name">
              {_.get(user, 'first_name', 'User')} {_.get(user, 'last_name', '')}
            </div>
            <div className="user-name">{_.get(user, 'username', '@User')}</div>
            <div className="user-mail">
              {_.get(user, 'email', 'user@hashedin.com')}
            </div>
          </div>
          <div className="profile-content">
            <div className="user-posts">
              {!_.isEmpty(postsByUser) ? (
                postsByUser.map(post => <Post data={post} clickable />)
              ) : (
                <div className="no-posts-text">
                  Looks like {_.get(user, 'first_name', 'user')} is yet to post
                  anything.
                </div>
              )}
            </div>
            <div className="user-bio">
              <Card style={{ width: '100%' }}>
                <div className="user-bio-field">
                  <span>
                    <Icon type="crown" /> Birthday
                  </span>
                  <span>21-05-1997</span>
                </div>
                <div className="user-bio-field">
                  <span>
                    <Icon type="crown" /> Designation
                  </span>
                  <span>Software Engineer</span>
                </div>
                <div className="user-bio-field">
                  <span>
                    <Icon type="crown" /> Reputation
                  </span>
                  <span>
                    <Rate disabled defaultValue={4} />
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postsByUser: _.get(state, 'posts.currentUserPosts.results', []),
  currentUser: _.get(state, 'users.currentUser', {}),
  userProfile: _.get(state, 'users.userProfile', {}),
})
const mapDispatchToProps = dispatch => ({
  getPostsByLoggedInUser: userId => dispatch(getPostsByUser(userId)),
  getUserProfile: userId => dispatch(getUserProfile(userId)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
