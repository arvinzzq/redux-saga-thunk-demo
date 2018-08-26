import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBala, deleteBala, changeBalaTitle, changeBalaContent } from '../actions/bala';

const mapStateToProps = state => ({bala: state.bala});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators({
  createBala,
  deleteBala,
  changeBalaTitle,
  changeBalaContent
}, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Bala extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    bala: PropTypes.object.isRequired
  };

  handleTitleChange = () => this.props.actions.changeBalaTitle('变！')

  handleContentChange = () => this.props.actions.changeBalaContent('变！')

  render() {
    const { bala } = this.props;
    return (
      <div>
        <div onClick={this.handleTitleChange}>{bala.title}</div>
        <div onClick={this.handleContentChange}>{bala.content}</div>
      </div>
    );
  }
};