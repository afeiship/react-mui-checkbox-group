import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import ReactMuiCheckbox from 'react-mui-checkbox';
import { FormGroup, FormControlLabel } from '@material-ui/core';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  _onChange = (inItem) => () => {
    const { onChange, value } = this.props;
    const index = value.indexOf(inItem.value);
    if (index > -1) {
      value.splice(index, 1);
    } else {
      value.push(inItem.value);
    }
    onChange({ target: { value } });
  };

  render() {
    const { className, items, value, onChange, ...props } = this.props;

    return (
      <FormGroup className={classNames('react-mui-checkbox-group', className)} {...props}>
        {
          items.length > 0 && (
            items.map((item, index) => {
              const isChecked = value.indexOf(item.value) > -1;
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <ReactMuiCheckbox
                      value={isChecked}
                      onChange={this._onChange(item)}
                    />
                  }
                  label={item.label}
                />
              )
            })
          )
        }
      </FormGroup>
    );
  }
}
