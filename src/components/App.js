import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first re instate localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = {...this.state.fishes};
    // 2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
     // 3. set the new fishes object to state
     this.setState({ fishes });
  };
  updateFish = (key, updatedFish) => {
    // 1. take copy of current state
    const fishes = {...this.state.fishes};
    // 2. upsdate the state
    fishes[key] = updatedFish;
    // 3. Set new stateless
    this.setState({ fishes });
  }

  loadSampleFishes = () =>{
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder= key => {
    // 1.take a copy of stateless
    const order = { ...this.state.order};
    // 2.add to our order, or update order
    order[key] = order[key] + 1 || 1;
    // 3.set state to update our state object
    this.setState({ order });
  };

  render(){

    return (
      <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.state.fishes).map( key => (
            <Fish
              key={key}
              index= {key}
              details={this.state.fishes[key]}
              addToOrder ={this.addToOrder}/>
          ))}
        </ul>
      </div>
       <Order fishes={this.state.fishes} order={this.state.order}/> {/* could also pass in using spread -> ...this.state */}
       <Inventory addFish={this.addFish}   updateFish={this.updateFish} loadSampleFishes={this.loadSampleFishes} fishes= {this.state.fishes} />
      </div>
    );
  }
}

export default App;
