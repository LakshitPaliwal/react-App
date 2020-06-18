import * as React from 'react';
import { Appbar,Text } from 'react-native-paper';

export default class Home extends React.Component {
render() {
    return (
      <Appbar.Header>
        <Appbar.Content
          title="First React App"
          alignItems="center"
        />
        
      </Appbar.Header>
    );
  }
}
