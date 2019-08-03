import * as React from 'react'
import { connect } from 'react-redux'
import _ from '../../utils/lodashUtils'
import './activityIndicator.styles.scss'
import { Spin } from 'antd'

const ActivityIndicator = props => {
  const { requests } = props
  return !_.isEmpty(requests) ? (
    <div className="loading-overlay">
      <div>
        <Spin size="large" />
      </div>
    </div>
  ) : null
}

const mapStateToProps = state => ({
  requests: _.get(state, 'activityIndicator.requests', []),
})

export default connect(
  mapStateToProps,
  null
)(ActivityIndicator)
