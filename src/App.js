import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  DynamicWidgets,
  Panel,
  ClearRefinements,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';


const searchClient = algoliasearch(process.env.REACT_APP_ID, process.env.REACT_APP_API);

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">React InstantSearch</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="#!">
            E-commerce demo
          </a>
        </p>
      </header>

      <div className="ais-InstantSearch">
        <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList attribute="brand" />
            <Configure hitsPerPage={10} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <div>
        <img src={props.hit.image} align="left" alt={props.hit.name} />
        <div className='hit-name'>
          <Highlight attribute="name" hit={props.hit} />
        </div>
        
        <div className='hit-description'>
          <Highlight attribute="description" hit={props.hit} />
        </div>
        <div className='hit-price'>
          ${props.hit.price}
        </div>
        <p>
          <Highlight attribute="categories" hit={props.hit} />
        </p>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
