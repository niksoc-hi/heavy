import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Typography, Button, Tag, Timeline } from 'antd'
import user from './../../assets/images/tejas.JPG'
import './notifications.styles.scss'
import _ from '../../utils/lodashUtils'
import {navigateToUrl} from '../../utils/navigationUtils'

import {getAllNotifications} from '../../actions/notificationsActions'

class Notifications extends Component {
  componentDidMount() {
    this.props.getAllNotifications()
  }

  renderNotificationCard = (notification) => {
    return (
      <div className="notification-card-container" key={notification.id}>
        <Card style={{ width: '50em' }}>
          <div className="notification">
            <div className="user-img">
              <img src={notification.actor.profile_img_url} className="img" alt="user" />
            </div>
            <div className="text">
              <div className="details">
                <a onClick={navigateToUrl.bind(null, `users/${notification.actor.id}/`)}>
                  <span className="bold">{notification.actor.username}</span>
                </a>
                {notification.verb}
                <a>
                  <span className="bold">{notification.action_object.resource_type}</span>
		  <span>{notification.action_object.preview}</span>
                </a>
              </div>
              <div className="time">{notification.time_since}</div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  render() {
    console.log(this.props.allNotifications)
    return (
      <div className="notifications-container">
        {this.props.allNotifications.map(notification => this.renderNotificationCard(notification))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allNotifications: _.get(state, 'notifications.allNotifications.results', []),
})

const mapDispatchToProps = dispatch => ({
  getAllNotifications: () => dispatch(getAllNotifications()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications)



