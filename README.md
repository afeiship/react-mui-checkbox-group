# react-mui-checkbox-group
> Checkbox group for mui

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-mui-checkbox-group --registry=https://registry.npm.taobao.org
```

```js
import ReactMuiCheckboxGroup from 'react-mui-checkbox-group';
```

```scss
// customize your styles:
$react-mui-checkbox-group-options:(
);

@import 'node_modules/react-mui-checkbox-group/dist/style.scss';
```


## usage:
```jsx

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

```
