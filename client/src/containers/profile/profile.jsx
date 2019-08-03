import React, { Component } from 'react'
import { connect } from 'react-redux'
import user from '../../assets/images/user.png'
import './profile.styles.scss'
import  Post  from '../../components/post/post'
import { Card, Icon, Rate } from 'antd'
import _ from '../../utils/lodashUtils'
import { getPostsByUser } from '../../actions/postActions'

class Profile extends Component {
  componentDidMount() {
    const { getPostsByUser, currentUser, match, location } = this.props
    getPostsByUser(_.get(currentUser, 'id', 1))
  }
  render() {
    const { postsByUser, currentUser } = this.props
    return (
      <div className="profile-container">
        <div className="profile-head">
          <div className="profile-cover">
            <img src={user} alt="user" className="profile-img" />
          </div>
          <div className="user-info">
            <div className="name">
              {_.get(currentUser, 'first_name', 'User')}{' '}
              {_.get(currentUser, 'last_name', '')}
            </div>
            <div className="user-name">
              {_.get(currentUser, 'username', '@User')}
            </div>
            <div className="user-mail">
              {_.get(currentUser, 'email', 'user@hashedin.com')}
            </div>
          </div>
          <div className="profile-content">
            <div className="user-posts">
              {postsByUser.map(post => (
                <Post data={post} clickable />
              ))}
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
  currentUser: _.get(state, 'currentUser.currentUser', {}),
})
const mapDispatchToProps = dispatch => ({
  getPostsByUser: userId => dispatch(getPostsByUser(userId)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
