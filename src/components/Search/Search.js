import React, { Component } from 'react'
import Input from '../Input/Input';
import ResultsList from '../ResultsList/ResultsList';
import Button from '../Button/Button';

export default class Search extends Component {
  render() {
    return (
      <div>
        <Input/>
        <Button/>
        <ResultsList
            items={[1,2,3]}
            onSelect={item => console.log(item.name)}
            className="MyResultsList"
        />
      </div>
    )
  }
}
