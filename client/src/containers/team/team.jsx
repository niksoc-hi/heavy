import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Typography, Button, Tag, Badge } from 'antd'
import { getAllUsers } from '../../actions/userActions'
import _ from '../../utils/lodashUtils'
import userImg from '../../assets/images/user.png'
import './team.styles.scss'
import { navigateToUrl } from '../../utils/navigationUtils'

class Team extends Component {
  componentDidMount() {
    const { getAllUsers } = this.props
    getAllUsers()
  }

  renderUserCard = user => {
    const userId = _.get(user, 'id', 1)
    return (
      <button
        className="user-card"
        onClick={() => navigateToUrl(`/users/${userId}`)}
      >
        <Card style={{ width: '50em' }}>
          <div className="user-card-content">
            <div className="user-img">
              <img
                alt="user"
                src={_.get(user, 'profile_img_url', userImg)}
                className="img"
              />
            </div>
            <div className="user-info-container">
              <div className="user-bio">
                <div className="full-name">
                  {_.get(user, 'first_name', 'user')} {''}{' '}
                  {_.get(user, 'last_name', 'user')}
                </div>
                <div className="username">
                  {_.get(user, 'username', '@user')} {''}{' '}
                </div>
                <div className="user-email">
                  {_.get(user, 'email', 'user@hashedin.com')} {''}{' '}
                </div>
                <div className="user-joined">
                  Joined: {_.get(user, 'date_joined', '21-06-2019')} {''}{' '}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </button>
    )
  }

  render() {
    const { allUsers } = this.props
    return (
      <div className="team-container">
        <div className="team-cards">
          {allUsers.map(user => this.renderUserCard(user))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allUsers: _.get(state, 'users.allUsers.results', []),
})
const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team)
