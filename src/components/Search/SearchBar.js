import React from 'react';
import SearchResultsList from '../../components/searchResults/SearchResultsList';

import './SearchBar.css'
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="rootSearch">
      <div className="search">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{textAlign:"center"}}>ابحث</label>
            <input
             placeholder=" buildings   مثال "
             style={{textAlign: 'right'}}
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
      {this.props.results.length == 0 ? 
      <p style={{textAlign: 'center', fontSize:'14px'}}>لا يوجد نتائج </p> : 
       
      <SearchResultsList results={this.props.results}/>
      }
      </div>
    );
  }
}
export default SearchBar;



