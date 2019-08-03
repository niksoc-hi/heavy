import React, { Component } from 'react'
import user from '../../assets/images/user.png'
import './profile.styles.scss'
import  Post  from '../../components/post/post'
import { Card, Icon, Rate } from 'antd'

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-head">
          <div className="profile-cover">
            <img src={user} alt="user" className="profile-img" />
          </div>
          <div className="user-info">
            <div className="name">Tejas Upmanyu</div>
            <div className="user-name">@tejasupmanyu</div>
            <div className="user-mail">tejas.upmanyu@hashedin.com</div>
          </div>
          <div className="profile-content">
            <div className="user-posts">
              {[1, 2, 3].map(() => (
                <Post />
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

export default Profile
