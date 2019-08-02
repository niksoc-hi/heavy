import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';

class Home extends Component {
  render() {
    const { fireAction } = this.props;
    fireAction();
    return <div>Hello World, I am workplace.</div>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  fireAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
