import React, { Component } from "react";
import ResultsList from "./components/ResultsList/ResultsList";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "./App.css";
import Search from "./components/Search/Search";
import Axios from "axios";

const API_URL = "http://localhost:8010/proxy/suburbs.json?q=";

const API_SAMPLE = [
  { name: "Sydney South", state: { abbreviation: "NSW" } },
  { name: "Sydney", state: { abbreviation: "NSW" } },
  { name: "Sydney International Airport", state: { abbreviation: "NSW" } },
  { name: "Sydney Domestic Airport", state: { abbreviation: "NSW" } },
  { name: "Sydenham", state: { abbreviation: "VIC" } }
];

//let Suburb_Values;

export default class App extends Component {
  Suburb_Values = null;
  suggestions = null;
  state = {
    query:"",
    subUrb_Values:[],
    inputValue: ''
  }
  getSuburb(query,index){
    const suburb_values = {};
    this.Suburb_Values = suburb_values;

    fetch(`http://localhost:8010/proxy/suburbs.json?q=${query}`)
      .then(results => results.json())
      .then(data => {
        //if (this.Suburb_Values === suburb_values) {
          console.log(data);
          this.suggestions = data.filter(
            (value) => 
            (value.name).toLowerCase().startsWith(query.toLowerCase()));
          console.log(this.suggestions);
          this.setState({ subUrb_Values: this.suggestions });
        //}
      });
   
  }

  handleChange = (e) => {
    const value = e;
    this.setState({
      query: value
    });

    this.getSuburb(value);
  }

  onSelect = (e) => {
    const value = e;
    console.log(value);
    this.setState({
      inputValue: value.name,
    })
    this.suggestions = null;
  }

  componentDidMount(){
    this.getSuburb("");
  }

  render() {
    return (
      <section>
        {/* TODO: Implement a suburb autocomplete using &lt;Input /&gt;,
        &lt;ResultsList /&gt; and &lt;Button /&gt; and data provided by the{" "}
        <a href="http://localhost:8010/proxy/suburbs.json?q=Syd">API</a>. */}
        <div id='search_div'>
          <label htmlFor="Suburb" className='Suburb_Label'>Suburb</label>
          <Input
            id='Suburb'
            className="MyInput"
            data-something="Value"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <Button
            className="MyButton"
            onClick={() => console.log('Click')} 
          />
          {this.suggestions ? <ResultsList
        items={this.state.subUrb_Values}
        onSelect={this.onSelect}
        className="MyResultsList"
      /> : null}
        </div>
        
        
        
      {/* {
        Suburb_Values ?  : null
      }  */}
      
      </section>
    );
  }
}
