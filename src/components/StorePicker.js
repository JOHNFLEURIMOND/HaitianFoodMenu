import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();
// runs before component is created
  // constructor(){
  //   // fun component first
  //   super();
  //   // run and attatch method to instance of this Component
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // new solution
  // goToStore is a property, (just like myInput is a property) instead of a method!, set to arrow function which allows us to bind to the instance
  goToStore = event => {
    // 1.stop form from submitting
    event.preventDefault();
    //  2.get text from input
    const storeName = this.myInput.value;
    // 3. Change the page to store/whatever-user-entered
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return (

      <form action="" className="store-selector" onSubmit= {this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}></input>
        <button type="submit">Visit Store</button>
      </form>

    );
  }

}

export default StorePicker;
