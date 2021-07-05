import React, { useState ,useEffect,useLayoutEffect} from 'react';
import Aside from './Aside';
import jsondata from "./assets/test.json";
import score from './data';
import rank from './rank'
import { FaBars } from 'react-icons/fa';
import { Route, Routes,HashRouter } from 'react-router-dom';
import Rarity from './rarity'
import Monkey from './Monkey';
import { Grid } from "react-virtualized";
import {  FaTwitter, FaDiscord, FaSearch, FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function Layout() {
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
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [newarray,setnew]=useState([])
  const [btn,setbtn]=useState(false)
  const [columnheight,setcolumnheight]=useState();
  const [width, height] = useWindowSize();
  const [column,setcolumn]=useState(4)
  const [columnCount,setcolumncount]=useState(2222)
  const [componentwidth,setwidth]=useState()
  const [columnwidth,setcolumnwidth]=useState(200)
  const [opt,setopt]=useState('Rankh2l')
  const [filterdata,setfilterdata]=useState([])

  useEffect(()=>{
    if(width<770)
    {
      setwidth(width)
    }
    else if(width>770) setwidth(width-270)
  },[width])

  useEffect(()=>{
    if(componentwidth<200) setcolumn(0)

    else if(componentwidth>200&&componentwidth<630) {setcolumn(2);setcolumncount(4444);setcolumnwidth(componentwidth/2);}
    else if(componentwidth>630&&componentwidth<840) {setcolumn(3);setcolumncount(2965);setcolumnwidth(componentwidth/3)}
    else if(componentwidth>840&&componentwidth<1050) {setcolumn(4);setcolumncount(2222);setcolumnwidth(componentwidth/4)}
    else if(componentwidth>1050&&componentwidth<1260) {setcolumn(5);setcolumncount(1778);setcolumnwidth(componentwidth/5)}
    else if(componentwidth>1260&&componentwidth<1460) {setcolumn(6);setcolumncount(1482);setcolumnwidth(componentwidth/6)}
    else if(componentwidth>1460&&componentwidth<1670) {setcolumn(7);setcolumncount(1270);setcolumnwidth(componentwidth/7)}
    else if(componentwidth>1670&&componentwidth<1870) {setcolumn(8);setcolumncount(1111);setcolumnwidth(componentwidth/8)}
    else if(componentwidth>1870&&componentwidth<2080) {setcolumn(9);setcolumncount(988);setcolumnwidth(componentwidth/9)}
  },[componentwidth])


  useEffect(()=>{
    let datas = []
    jsondata.map((data,index)=>{
      data.score = score[parseInt(data.name.slice(15))-1]
      data.rank = rank[parseInt(data.name.slice(15))-1]
      datas.push(data)
    })
    setnew(datas.sort((a,b)=>(parseInt(a.rank)>parseInt(b.rank))?1:-1))
  },[])

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const forceUpdate = useForceUpdate();
  
 async function filtering(data){
  setfilterdata(data)
   let finaldata = data.reduce(
    (previousValue, currentValue, currentIndex) => {
      if (currentValue.length === 0) return previousValue
      let d =  previousValue.filter(d => {
        let flags = currentValue.map(item => {
          if(d.attributes[currentIndex].value == item[1]) return true;
          else return false;
        })
        return flags.includes(true)
      })
      return d
    },
    jsondata
  )
  switch(opt){
    case('Idl2h'):
      setnew(finaldata.sort((a,b)=>(parseInt(a.name.slice(15))>parseInt(b.name.slice(15)))? 1 : -1 ))  
      break;
    case('Idh2l'):
      setnew(finaldata.sort((a,b)=> (parseInt(a.name.slice(15)) > parseInt(b.name.slice(15)))? -1 : 1))
      console.log('here')
      break;
    case('Rankl2h'):
      setnew(finaldata.sort((a,b)=> (parseFloat(a.score)>parseFloat(b.score))?1:-1))
      break;
    case('Rankh2l'):
      setnew(finaldata.sort((a,b)=>(parseFloat(a.score)>parseFloat(b.score))?-1:1))
      break;
  }
  forceUpdate()
  await setnew(finaldata)
  
}

function search(id){
  setbtn(true)
  if(id == "") filtering(filterdata)
  else  setnew(jsondata.filter(data=>{return data.name.slice(15)==id}))
}

const sort = (sortopt) => {
  setopt(sortopt)
  switch(sortopt){
    case('Idl2h'):
      setnew(newarray.sort((a,b)=>(parseInt(a.name.slice(15))>parseInt(b.name.slice(15)))? 1 : -1 ))  
      break;
    case('Idh2l'):
      setnew(newarray.sort((a,b)=> (parseInt(a.name.slice(15)) > parseInt(b.name.slice(15)))? -1 : 1))
      console.log('here')
      break;
    case('Rankl2h'):
      setnew(newarray.sort((a,b)=> (parseFloat(a.score)>parseFloat(b.score))?1:-1))
      break;
    case('Rankh2l'):
      setnew(newarray.sort((a,b)=>(parseFloat(a.score)>parseFloat(b.score))?-1:1))
      break;
  }
  forceUpdate()
}
const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
  if(newarray.length!=0)
    return (
      <div className='justifucontent' key={key} style={style}>
          <Monkey data={newarray[rowIndex*column+columnIndex]}/>
      </div>
    );
};


  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>      
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        filtering={filtering}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        search={search}
        sort={sort}
      />
       <HashRouter hashType="noslash">
            <Routes>
              <Route exact path="/:id" element={<Rarity handleToggleSidebar={handleToggleSidebar}/>}></Route>
              <Route exact path="/" element={<div className='graybackround'>
                      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                        <div className='row width100'>
                          <div className='col-1 icons'>
                            <FaBars />
                          </div>
                          <div className='col-2'></div>
                          <div className='col-5'>
                            <img className='smalllogo'  src="./logo.png" />
                          </div>
                          <div className='col-1'></div>
                          <div className='col-1 icons'>
                            <a
                              href="https://discord.gg/megaprimates"
                              className='iconsa'
                            >
                              <FaDiscord />
                            </a>
                          </div>
                          <div className='col-2 icons'>
                            <a
                              href="https://twitter.com/megaprimates"
                              className='iconsa'
                            >
                              <FaTwitter />
                            </a>
                          </div>
                        </div>
                        
                      </div>
                      <div className='smallitemtext'>{newarray.length} items</div>
                      <Grid
                        cellRenderer={cellRenderer}
                        columnCount={column}
                        columnWidth={columnwidth}
                        height={height - 35}
                        rowCount={columnCount}
                        rowHeight={columnwidth+40}
                        width={componentwidth}
                      />
                  </div>}></Route>
            </Routes>
       </HashRouter>
     
    </div>
  );
}

export default Layout;
