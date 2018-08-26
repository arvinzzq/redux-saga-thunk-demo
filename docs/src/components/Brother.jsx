import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrother, deleteBrother, changeBrotherTitle, changeBrotherContent, changeBrotherColor } from '../actions/brother';

const mapStateToProps = state => ({brother: state.brother});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators({
  createBrother,
  deleteBrother,
  changeBrotherTitle,
  changeBrotherContent,
  changeBrotherColor
}, dispatch)});

@connect(mapStateToProps, mapDispatchToProps)
export default class Brother extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    brother: PropTypes.object.isRequired
  };

  handleTitleChange = () => this.props.actions.changeBrotherTitle('变！')

  handleContentChange = () => this.props.actions.changeBrotherContent('变！')

  handleColorChange = () => this.props.actions.changeBrotherColor('#e00')

  render() {
    const { brother } = this.props;
    return (
      <div style={{ color: brother.color }}>
        <button onClick={this.handleColorChange}>change color</button>
        <div onClick={this.handleTitleChange}>{brother.title}</div>
        <div onClick={this.handleContentChange}>{brother.content}</div>
      </div>
    );
  }
};