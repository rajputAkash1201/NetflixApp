import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className="heading__style">My Top 5 Favourite Netflix Series</h1>
    {Sdata.map((val)=> {
  return(
    <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link ={val.link}
    />
  )
})}      
  </>,
  document.getElementById('root')
);
