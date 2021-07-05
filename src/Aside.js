import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {Form} from 'react-bootstrap'
import {  FaTwitter, FaDiscord, FaSearch, FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import MultipleSelectCheckmarks from './checkmark';

const background_traits = ["Aqua","Blue","Brown","Dark Green","Dark Purple","Gold","Light Blue","Light Green","Orange","Purple","Red","Tan","Grey"]
const background_traits1 = background_traits
const pattern_traits = ["--No Pattern--","Square MP","Banana","Gucci","LV","Camo","Leopard","Honeycomb"]
const pattern_traits1 = pattern_traits
const fur_traits = ["Black","Blue","Brown","Cheetah","Gray","Green","Pink","Rainbow","Red","White","Zebra","Orange","Purple","Magenta"]
const fur_traits1 = fur_traits
const skin_traits = ["Blue","Brown","Gold","Gray","Green","Pink","Purple","Silver","Tan","White"]
const skin_traits1 = skin_traits
const shirt_traits = ["Logo Jacket","Cheetah Shirt","Gold Foil Jacket","Silver Foil Jacket","White Fur","Puffer Jacket",
                "Camo Jacket","Peacoat","Track Jacket","Bomber","Retro Jackreet","Leather","Suit","Blue Jersey","Astronaut Jacket",
                "Turtleneck","Kimono ","Sweater vest","Camo Hoodie","Denim Jacket","Acid Wash","White MP Logo Shirt",
                "Black Primates Shirt","Black Primates Hoodie","Blue Varsity Jacket","Winter Coat","Purple Varsity Jacket",
                "Red Varsity Jacket","Purple Jersey","Red Jersey"]
const shirt_traits1 = shirt_traits   
const headwear_traits = ["--No Headwear--","Horns","Halo","Crown","Fedora","Black Baggy Beanie","Maroon Baggy Beanie",
                "Forest Green Baggy Beanie","Tan Baggy Beanie","Dark Brown Baggy Beanie","Heather Gray Baggy Beanie",
                "Blue Logo Snapback","Black Snapback","Red Snapback","Green Snapback","Grey Snapback","White Snapback",
                "Brown Snapback","Blue Backward Logo Snapback","Black Backwards Snapback","Red Backwards Snapback",
                "Green Backwards Snapback","Grey Backwards Snapback","White Backwards Snapback","Brown Backwards Snapback",
                "Deep Fedora","Blue Blank Hat","Camo Blank Hat","Cheetah Blank Hat","Yellow Rolled Beanie","Black Rolled Beanie",
                "White Rolled Beanie","Gucci Bucket","Panama Black","Newsboy","Green Bass Pro Shop","Black Bass Pro Shop",
                "Brown Bass Pro Shop","Cowboy"]
const headwear_traits1 = headwear_traits              
const facialexpression_traits = ["Grin","Happy","Neutral"]
const facialexpression_traits1 = facialexpression_traits
const eye_traits = ["Bitcoin","Black","Blue","Brown","Crossed","Green","Money","Gray","Ethereum","Stoned"]
const eye_traits1 = eye_traits
const eyewear_traits = ["--No Eyewear--","Octagon","Blue Hearts","Red Hearts","Purple Hearts",
                        "Aviator","Rounded","Black Wayfarer","Blue Wayfarer","Red Wayfarer",
                        "Purple Wayfarer","Blue Readers","Red Readers","Purple Readers",
                        "Squared","Deal with It"]
const eyewear_traits1 = eyewear_traits              
const neck_traits = ["--No Neck Accessory--","Gold","Silver","Diamond","Gold MP","Gold Link","Dollar Sign","Silver Link","Bitcoin",
                            "Green Sling Bag","Red Sling Bag","Black Sling Bag"]
const neck_traits1 = neck_traits
const traitsdata = {
  "_id": "62c01c8601c834cd37259baf",
  "BACKGROUND": "1000,897,630,360,631,951,905,596,614,898,341,337,728",
  "PATTERN": "4039,565,560,540,520,498,832,1334",
  "FUR": "1011,943,991,262,958,711,719,288,270,294,258,707,705,771",
  "SKIN": "938,1767,464,1253,878,896,926,427,894,445",
  "NECK": "3955,336,532,514,285,620,805,647,320,343,214,317",
  "SHIRTS": "501,140,136,155,154,140,573,325,152,135,146,487,513,451,160,150,143,300,447,334,290,472,422,306,310,153,310,303,457,323",
  "HEADWEAR": "872,89,95,95,181,260,250,278,255,263,267,257,242,271,250,284,257,256,295,288,266,277,260,238,268,176,178,183,156,198,199,196,83,84,89,286,175,178,93",
  "FACIAL": "3500,2679,2709",
  "EYES": "666,1106,1073,1072,906,1043,700,850,735,737",
  "EYEWEAR": "3652,370,209,244,201,496,348,512,332,349,360,479,313,342,393,288",
  "__v": 0
}

const Aside = ({ image, collapsed, rtl, toggled, filtering , handleToggleSidebar, sort , search}) => {
  
  const [sortopt,setsortopt]=useState("Rankh2l");
  const [searchid,setsearch]=useState();
  const [da,setda]=useState([],[],[],[],[],[],[],[],[],[])
  const [flag,setflag]=useState(false)

  function handleEntailmentRequest(e){
    searchbtn();
    e.preventDefault();
  }
  function searchbtn(){
      search(searchid)
  }

  useEffect(()=>{
    sort(sortopt)
  },[sortopt])

  function addfilter1(string){
    let a=da
    a[0]=string
    setda(a)
    filtering(da)
  }
  function addfilter2(string){
    let a=da
    a[1]=string
    setda(a)
    filtering(da) 
  }
  function addfilter3(string){
    let a=da
    a[2]=string
    setda(a)
    filtering(da)
  }
  function addfilter4(string){
    let a=da
    a[3]=string
    setda(a)
    filtering(da)
  }
  function addfilter5(string){
    let a=da
    a[4]=string
    setda(a)
    filtering(da)
  }
  function addfilter6(string){
    let a=da
    a[5]=string
    setda(a)
    filtering(da)
  }
  function addfilter7(string){
    let a=da
    a[6]=string
    setda(a)
    filtering(da)
  }
  function addfilter8(string){
    let a=da
    a[7]=string
    setda(a)
    filtering(da)
  }

  function addfilter9(string){
    let a=da
    a[8]=string
    setda(a)
    filtering(da)
  }

  function addfilter10(string){
    let a=da
    a[9]=string
    setda(a)
    filtering(da)
  }

  const changeimage = () =>{
    if(sortopt == "Idl2h") setsortopt("Idh2l")
    if(sortopt == "Idh2l") setsortopt("Idl2h")
    if(sortopt == "Rankl2h") setsortopt("Rankh2l")
    if(sortopt == "Rankh2l") setsortopt("Rankl2h")
    setflag(!flag)
  }

  const intl = useIntl();
  return (
    <ProSidebar
      // image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
      <div className='logodiv'><a className='logoa' href="/"><img className='logo'  src="./logo.png" /></a></div>
        <div
        className='title'
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign:'center'
          }}
        >
          MEGA PRIMATES NFT
        </div>
      </SidebarHeader>

      <SidebarContent>
      <Menu iconShape="circle">

          <MenuItem
            // suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaSearch />}
          >
            
            <div class="input-group mb-0">
              <input type="text" className="form-control" value={searchid} onChange={e => {setsearch(e.target.value)}} placeholder="Enter ID" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button className="btn btn-outline-secondary" type="button" onClick={(e)=>{handleEntailmentRequest(e)}} id="button-addon2">Check</button>
            </div>
          </MenuItem>
          <MenuItem icon={flag ? <FaSortAmountDownAlt onClick={changeimage} /> :<FaSortAmountUpAlt onClick={changeimage} />}> 
            {/* <select className="cars" id="cars" defaultValue={0} onChange={(e)=>{
                                              setsortopt(e.target.value)
                                            }}>
              <option value="Idl2h">Sort By ID</option>
              <option value="Rankh2l" >Sort By Rank</option>
            </select> */}

              <Form.Select aria-label="Default select example" defaultValue={0} onChange={(e)=>{
                                              setsortopt(e.target.value)
                                            }}>
                <option value="Rankh2l" >Sort By Rank</option>
                <option value="Idl2h">Sort By ID</option>
                
              </Form.Select>

          </MenuItem>      
          </Menu>
          <Menu iconShape="circle">
            {/* <MenuItem icon={<FaDatabase />}> TRAITS</MenuItem> */}
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="BACKGROUND(12)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={background_traits1.map(data => {return([1,data,traitsdata.BACKGROUND.split(',')[background_traits.indexOf(data)]])})} addfilter={addfilter1}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="PATTERN(9)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={pattern_traits1.map(data => {return([2,data,traitsdata.PATTERN.split(',')[pattern_traits.indexOf(data)]])})} addfilter={addfilter2}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="FUR(14)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={fur_traits1.map(data => {return([3,data,traitsdata.FUR.split(',')[fur_traits.indexOf(data)]])})} addfilter={addfilter3}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="SKIN(10)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={skin_traits1.map(data => {return([4,data,traitsdata.SKIN.split(',')[skin_traits.indexOf(data)]])})} addfilter={addfilter4}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="NECK(12)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={neck_traits1.map(data => {return([5,data,traitsdata.NECK.split(',')[neck_traits.indexOf(data)]])})} addfilter={addfilter5}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="CLOTHING(30)"
            >
              <MenuItem><MultipleSelectCheckmarks 
              datas={shirt_traits1.map(data => {return([6,data,traitsdata.SHIRTS.split(',')[shirt_traits.indexOf(data)]])})} addfilter={addfilter6}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="HEADWEAR(39)"
            >
              <MenuItem><MultipleSelectCheckmarks className="headfilter" datas={headwear_traits1.map(data => {return([7,data,traitsdata.HEADWEAR.split(',')[headwear_traits.indexOf(data)]])})} addfilter={addfilter7}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="EXPRESSION(3)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={facialexpression_traits1.map(data => {return([8,data,traitsdata.FACIAL.split(',')[facialexpression_traits.indexOf(data)]])})} addfilter={addfilter8}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}
              title="EYES(10)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={eye_traits1.map(data => {return([9,data,traitsdata.EYES.split(',')[eye_traits.indexOf(data)]])})} addfilter={addfilter9}/></MenuItem>
            </SubMenu>
            <SubMenu
              // prefix={<span className="badge gray">3</span>}  sort((a,b)=>a.localeCompare(b))
              title="EYEWEAR(16)"
            >
              <MenuItem><MultipleSelectCheckmarks  datas={eyewear_traits1.map(data => {return([10,data,traitsdata.EYEWEAR.split(',')[eyewear_traits.indexOf(data)]])})} addfilter={addfilter10}/></MenuItem>
            </SubMenu>
            
          </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div className='asldg'>
        <div
          className="sidebar-btn-wrapper"
          style={{
            marginTop:"5px",
            marginBottom:"5px"
          }}
        >
          <a
            href="https://discord.gg/megaprimates"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaDiscord />
            &nbsp;
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              DISCORD
            </span>
          </a>
        </div>
        <div
          className="sidebar-btn-wrapper"
          style={{
            marginTop:"5px",
            marginBottom:"5px"
          }}
        >
          <a
            href="https://twitter.com/megaprimates"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            &nbsp;
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              TWITTER
            </span>
          </a>
        </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
