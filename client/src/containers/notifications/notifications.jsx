import React, { Component } from 'react'
import { Card, Typography, Button, Tag, Timeline } from 'antd'
import user from './../../assets/images/tejas.JPG'
import './notifications.styles.scss'

export default class Notifications extends Component {
  renderNotificationCard = () => {
    return (
      <div className="notification-card-container">
        <Card style={{ width: '50em' }}>
          <div className="notification">
            <div className="user-img">
              <img src={user} className="img" alt="user" />
            </div>
            <div className="text">
              <div className="details">
                <a>
                  <span className="bold">Ram Kumar</span>
                </a>
                Upvoted your post{' '}
                <a>
                  <span className="bold">What's new in React 16.x</span>
                </a>
              </div>
              <div className="time">4 hrs ago.</div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div className="notifications-container">
        {[1, 2, 3, 4].map(() => this.renderNotificationCard())}
      </div>
    )
  }
}
