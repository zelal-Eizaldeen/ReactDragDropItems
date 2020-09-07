import React from 'react';
import './SearchResultsList.css';

const SearchResultsList = (props) => {
  const results =  props.results.map((result) => {
        return <img key={result.id} src={result.urls.regular} alt='مقاولات-الكويت-بناء'/>
    })
    return <div className='result-list'>{results}</div>
}
export default SearchResultsList;