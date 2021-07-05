import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useState,useEffect,useLayoutEffect } from 'react';
import Monkey from './Monkey';
import { Grid } from "react-virtualized";
import Rarity from './rarity'
import score from './data';
import rank from './rank'
import jsondata from "./assets/test.json";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const Main = ({items,handleToggleSidebar}) => {
  useEffect(()=>{
    console.log(items)
  },[])
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();
  const [column,setcolumn]=useState(4)
  const [columnCount,setcolumncount]=useState(2222)
  const [componentwidth,setwidth]=useState()

  useEffect(()=>{
    if(width<770)
    {
      setwidth(width)
    }
    else if(width>770) setwidth(width-270)
  },[width])

  useEffect(()=>{
    if(componentwidth<200) setcolumn(0)
    else if(componentwidth>200&&componentwidth<400) {setcolumn(1);setcolumncount(8888)}
    else if(componentwidth>400&&componentwidth<600) {setcolumn(2);setcolumncount(4444)}
    else if(componentwidth>600&&componentwidth<800) {setcolumn(3);setcolumncount(2965)}
    else if(componentwidth>800&&componentwidth<1000) {setcolumn(4);setcolumncount(2222)}
    else if(componentwidth>1000&&componentwidth<1200) {setcolumn(5);setcolumncount(1778)}
    else if(componentwidth>1200&&componentwidth<1400) {setcolumn(6);setcolumncount(1482)}
    else if(componentwidth>1400&&componentwidth<1600) {setcolumn(7);setcolumncount(1270)}
    else if(componentwidth>1600&&componentwidth<1800) {setcolumn(8);setcolumncount(1111)}
    else if(componentwidth>1800&&componentwidth<2000) {setcolumn(9);setcolumncount(988)}
  },[componentwidth])
 

const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
  // console.log(newarray)
  if(items.length!=0)
    return (
      <div key={key} style={style}>
          <Monkey data={items[rowIndex*column+columnIndex]}/>
      </div>
    );
};


  return (
    <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <div>
            <Grid
            cellRenderer={cellRenderer}
            columnCount={column}
            columnWidth={210}
            height={height}
            rowCount={columnCount}
            rowHeight={220}
            width={componentwidth}
            />
        </div>

      </main>
  );
};

export default Main;
