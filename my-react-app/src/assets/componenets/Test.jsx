import React from 'react';

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { count: 0 };
  }

  // componentDidMount is called after the component is inserted into the DOM
  componentDidMount() {
    console.log('Component mounted');
  }

  // componentDidUpdate is called after a render update
  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillReceiveProps(){
    console.log('componentwillReceiveProps')
  }

  // componentWillUnmount is called before the component is removed from the DOM
  componentWillUnmount() {
    console.log('Component unmounted');
  }

  // Function to increment the count
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;

export class Apps extends React.Component {
    state = { color: 'green' };
    render() {
       setTimeout(() => {
          this.setState({ color: 'wheat' });
       }, 2000);
       return (
          <div>
             <h1>Tutorialspoint</h1>
             <ChangeName color={this.state.color} />
          </div>
       );
    }
 }
 class ChangeName extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
       console.log('Component received new props', nextProps);
    }
    render() {
       console.log('ChangeName component is called');
       return (
          <div>
             <h1 style={{ color: this.props.color }}>Simply Easy Learning</h1>
          </div>
       );
    }
 }
 