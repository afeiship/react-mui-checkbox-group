import './dev.scss';
import ReactMuiCheckboxGroup from './main';
import NxAntBuildItems from 'next-ant-build-items';

/*===example start===*/

// install: npm install afeiship/react-mui-checkbox-group --save
// import : import ReactMuiCheckboxGroup from 'react-mui-checkbox-group'

class App extends React.Component {
  state = {
    value:[],
    items: nx.antBuildItems(['op1', 'op2', 'op3'], true)
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e => {
    console.log(e.target.value);

    this.setState({ value: e.target.value })
  };

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="hello-react-mui-checkbox-group">
        <ReactMuiCheckboxGroup value={this.state.value} items={items} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
