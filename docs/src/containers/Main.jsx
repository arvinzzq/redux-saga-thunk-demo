import React from 'react';
import Bala from '../components/Bala';
import Brother from '../components/Brother';

export default class Main extends React.PureComponent {
  render() {
    return (
      <div>
        <Bala />
        <Brother />
      </div>
    );
  }
};