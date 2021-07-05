import React, { useState ,useEffect,useLayoutEffect} from 'react';
import Aside from './Aside';
import jsondata from "./assets/test.json";
import score from './data';
import rank from './rank'
import { Route, Routes,BrowserRouter,HashRouter } from 'react-router-dom';
import Rarity from './rarity'
import Monkey from './Monkey';
import { Grid } from "react-virtualized";
import SlideRoutes from 'react-slide-routes';

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
  const [datas,setdata]=useState([]);
  const [width, height] = useWindowSize();
  const [column,setcolumn]=useState(4)
  const [columnCount,setcolumncount]=useState(2222)
  const [componentwidth,setwidth]=useState(0)

  useEffect(()=>{
    // setcolumn(parseInt(width/220))
    if(width<770)
    {
      setwidth(width)
    }
    else if(width>770) setwidth(width-270)
    // setcolumn(parseInt((width-270)/220))
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


  useEffect(()=>{
    let datas = []
    jsondata.map((data,index)=>{
      data.score = score[parseInt(data.name.slice(15))-1]
      data.rank = rank[parseInt(data.name.slice(15))-1]
      datas.push(data)
    })
    console.log(datas)
    setnew(datas.sort((a,b)=>(parseInt(a.name.slice(15))>parseInt(b.name.slice(15)))?1:-1))
  },[])

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const forceUpdate = useForceUpdate();
  
 async function filtering(data){
  console.log("<-----------input start------------>")
  console.log(data)
  console.log("<-----------input end------------>")
  // let a=[]
  // let sum=0
  // for(let j=0; j<10; j++){
  //   if(typeof(data[j])!=='undefined')
  //     sum=sum+data[j].length
  // }
  // if(sum==0){
  //   await setnew(jsondata.slice(0,8888));
  //   // console.log(jsondata)
  //   return;
  // }
  // else{
  //   for(let i =0;i<jsondata.length;i++)
  //   {
  //     let aa=true
  //     for(let j=0;j<10;j++)
  //     {
  //       if(typeof(data[j])!=='undefined')
  //         for(let k=0;k<data[j].length;k++)
  //           if(jsondata[i].attributes[parseInt(data[j][k][0])-1].value==data[j][k][1]){a.push(jsondata[i]);aa=aa&&true ;}
  //           //  else  aa=aa&&false
  //     }
  //     // if(aa) await a.push(jsondata[i])
  //   }
  // }
  // let language = "JavaScript";

  const filterData = jsondata.filter((monkey, index, array) => {
    let countValideTrait = 0;
    let count = 0;
    for (let trait of data) {
      if (trait.length == 0){
        countValideTrait++;
        continue;
      }
      for (let i = 0; i < trait.length; i++) {
        // for (let j = 0; j < monkey.attributes.length; j++){
          if (monkey.attributes[count].value == trait[i][1]){
            countValideTrait++;
            break;
          }
        // }
      }
    }
    count++;
    if (countValideTrait == monkey.attributes.length)
      return true;
    else return false;
  })
  
  
  console.log("<-----------output start------------>")
  console.log(filterData)
  console.log("<-----------output end------------>")
  await setnew(filterData)
}

function search(id){
  setbtn(true)
  setdata(jsondata.filter(data=>{return data.image.slice(88,-4)==id}))
}

const sort = (sortopt) => {
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
  // console.log(newarray)
}
const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
  // console.log(newarray)
  if(newarray.length!=0)
    return (
      <div key={key} style={style}>
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
              <Route exact path="/" element={<div>
                      <Grid
                      cellRenderer={cellRenderer}
                      columnCount={column}
                      columnWidth={220}
                      height={height}
                      rowCount={columnCount}
                      rowHeight={220}
                      width={componentwidth}
                      />
                  </div>}></Route>
            </Routes>
       </HashRouter>
     
    </div>
  );
}

export default Layout;
