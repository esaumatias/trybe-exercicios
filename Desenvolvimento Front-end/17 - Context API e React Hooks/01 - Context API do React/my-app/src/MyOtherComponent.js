import React from 'react';
import MyContext from './MyContext';

class MyOtherComponent extends React.Component {
  render() {
    const { valor } = this.context;
    return (
      <div>
        {`senha igual á: ${valor}`}
      </div>
    )
  }
}

MyOtherComponent.contextType = MyContext;

export default MyOtherComponent;
