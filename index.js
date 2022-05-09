import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { useData } from './useData';

import { Marks } from './Marks';
// import {} from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;


const App = () => {
  const data = useData();
  if (!data) {
    return <pre>loading..</pre>;
  }
  

  return (
    <svg width={width} height={height}>
     
        
        
        <Marks
          data={data}
         
        />
     
    </svg>
  );
};

const rootElement = document.getElementById(
  'root'
);
ReactDOM.render(<App />, rootElement);
