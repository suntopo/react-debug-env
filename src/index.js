const ReactDOM = require('react-dom');
const React = require('react');

const Counter = (props) => {
  return (<div id="app:01:02:01">{props.count}</div>)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    return (
      <div id="app:01">
        <div onClick={this.handleClick} id="app:01:01">{this.state.counter}</div>
        <Counter count={5} id="app:01:02" />
      </div>
    )
  }
}

const container = document.getElementById("container");
global.container = container; // 挂载出来方便查看

const app = <App id="app" />
ReactDOM.render(app, container)

module.hot && module.hot.accept();
