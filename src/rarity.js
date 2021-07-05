import React from "react";
import {useParams} from "react-router-dom";
import jsondata from './assets/test.json'
import {useState, useEffect } from "react";
import score from './data';
import rank from './rank'
import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const background_traits = ["Aqua","Blue","Brown","Dark Green","Dark Purple","Gold","Light Blue","Light Green","Orange","Purple","Red","Tan","Grey"]
const pattern_traits = ["--No Pattern--","Square MP","Banana","Gucci","LV","Camo","Leopard","Honeycomb"]
const fur_traits = ["Black","Blue","Brown","Cheetah","Gray","Green","Pink","Rainbow","Red","White","Zebra","Orange","Purple","Magenta"]
const skin_traits = ["Blue","Brown","Gold","Gray","Green","Pink","Purple","Silver","Tan","White"]
const shirt_traits = ["Logo Jacket","Cheetah Shirt","Gold Foil Jacket","Silver Foil Jacket","White Fur","Puffer Jacket",
                "Camo Jacket","Peacoat","Track Jacket","Bomber","Retro Jackreet","Leather","Suit","Blue Jersey","Astronaut Jacket",
                "Turtleneck","Kimono ","Sweater vest","Camo Hoodie","Denim Jacket","Acid Wash","White MP Logo Shirt",
                "Black Primates Shirt","Black Primates Hoodie","Blue Varsity Jacket","Winter Coat","Purple Varsity Jacket",
                "Red Varsity Jacket","Purple Jersey","Red Jersey"]
const headwear_traits = ["--No Headwear--","Horns","Halo","Crown","Fedora","Black Baggy Beanie","Maroon Baggy Beanie",
                "Forest Green Baggy Beanie","Tan Baggy Beanie","Dark Brown Baggy Beanie","Heather Gray Baggy Beanie",
                "Blue Logo Snapback","Black Snapback","Red Snapback","Green Snapback","Grey Snapback","White Snapback",
                "Brown Snapback","Blue Backward Logo Snapback","Black Backwards Snapback","Red Backwards Snapback",
                "Green Backwards Snapback","Grey Backwards Snapback","White Backwards Snapback","Brown Backwards Snapback",
                "Deep Fedora","Blue Blank Hat","Camo Blank Hat","Cheetah Blank Hat","Yellow Rolled Beanie","Black Rolled Beanie",
                "White Rolled Beanie","Gucci Bucket","Panama Black","Newsboy","Green Bass Pro Shop","Black Bass Pro Shop",
                "Brown Bass Pro Shop","Cowboy"]
const facialexpression_traits = ["Grin","Happy","Neutral"]
const eye_traits = ["Bitcoin","Black","Blue","Brown","Crossed","Green","Money","Gray","Ethereum","Stoned"]
const eyewear_traits = ["--No Eyewear--","Octagon","Blue Hearts","Red Hearts","Purple Hearts",
                        "Aviator","Rounded","Black Wayfarer","Blue Wayfarer","Red Wayfarer",
                        "Purple Wayfarer","Blue Readers","Red Readers","Purple Readers",
                        "Squared","Deal with It"]
const neck_traits = ["--No Neck Accessory--","Gold","Silver","Diamond","Gold MP","Gold Link","Dollar Sign","Silver Link","Bitcoin",
                            "Green Sling Bag","Red Sling Bag","Black Sling Bag"]

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

export default function Rarity({handleToggleSidebar}) {
    let navigate = useNavigate(); 
    let { id } = useParams();
    const [ranks ,setrank] =useState()
    const [data ,setdata] =useState()
    const [background,setbackground]=useState()
    const [pattern,setpattern]=useState()
    const [fur,setfur]=useState()
    const [skin,setskin]=useState()
    const [neck,setneck]=useState()
    const [clothing,setclothing]=useState()
    const [headwear,setheadwear]=useState()
    const [facial,setfacial]=useState()
    const [eyes,seteyes]=useState()
    const [eyewear,seteyewear]=useState()

    const [backgrounds,setbackgrounds]=useState()
    const [patterns,setpatterns]=useState()
    const [furs,setfurs]=useState()
    const [skins,setskins]=useState()
    const [necks,setnecks]=useState()
    const [clothings,setclothings]=useState()
    const [headwears,setheadwears]=useState()
    const [facials,setfacials]=useState()
    const [eyess,seteyess]=useState()
    const [eyewears,seteyewears]=useState()

    const [backgrounda,setbackgrounda]=useState()
    const [patterna,setpatterna]=useState()
    const [fura,setfura]=useState()
    const [skina,setskina]=useState()
    const [necka,setnecka]=useState()
    const [clothinga,setclothinga]=useState()
    const [headweara,setheadweara]=useState()
    const [faciala,setfaciala]=useState()
    const [eyesa,seteyesa]=useState()
    const [eyeweara,seteyeweara]=useState()


    useEffect(()=>{
        for(let i = 0;i<jsondata.length;i++){
            if(jsondata[i].name==`Mega Primates #${id}`) {
                setrank(rank[id-1])
                setdata(jsondata[i])

                setbackground(check(parseInt(traitsdata.BACKGROUND.split(",")[background_traits.indexOf(jsondata[i].attributes[0].value)]))) 
                setpattern(check(parseInt(traitsdata.PATTERN.split(",")[pattern_traits.indexOf(jsondata[i].attributes[1].value)]))) 
                setfur(check(parseInt(traitsdata.FUR.split(",")[fur_traits.indexOf(jsondata[i].attributes[2].value)]))) 
                setskin(check(parseInt(traitsdata.SKIN.split(",")[skin_traits.indexOf(jsondata[i].attributes[3].value)]))) 
                setneck(check(parseInt(traitsdata.NECK.split(",")[neck_traits.indexOf(jsondata[i].attributes[4].value)]))) 
                setclothing(check(parseInt(traitsdata.SHIRTS.split(",")[shirt_traits.indexOf(jsondata[i].attributes[5].value)]))) 
                setheadwear(check(parseInt(traitsdata.HEADWEAR.split(",")[headwear_traits.indexOf(jsondata[i].attributes[6].value)]))) 
                setfacial(check(parseInt(traitsdata.FACIAL.split(",")[facialexpression_traits.indexOf(jsondata[i].attributes[7].value)]))) 
                seteyes(check(parseInt(traitsdata.EYES.split(",")[eye_traits.indexOf(jsondata[i].attributes[8].value)]))) 
                seteyewear(check(parseInt(traitsdata.EYEWEAR.split(",")[eyewear_traits.indexOf(jsondata[i].attributes[9].value)]))) 

                setbackgrounds("col-3 " + check(parseInt(traitsdata.BACKGROUND.split(",")[background_traits.indexOf(jsondata[i].attributes[0].value)]))) 
                setpatterns("col-3 " + check(parseInt(traitsdata.PATTERN.split(",")[pattern_traits.indexOf(jsondata[i].attributes[1].value)]))) 
                setfurs("col-3 " + check(parseInt(traitsdata.FUR.split(",")[fur_traits.indexOf(jsondata[i].attributes[2].value)]))) 
                setskins("col-3 " + check(parseInt(traitsdata.SKIN.split(",")[skin_traits.indexOf(jsondata[i].attributes[3].value)]))) 
                setnecks("col-3 " + check(parseInt(traitsdata.NECK.split(",")[neck_traits.indexOf(jsondata[i].attributes[4].value)]))) 
                setclothings("col-3 " + check(parseInt(traitsdata.SHIRTS.split(",")[shirt_traits.indexOf(jsondata[i].attributes[5].value)]))) 
                setheadwears("col-3 " + check(parseInt(traitsdata.HEADWEAR.split(",")[headwear_traits.indexOf(jsondata[i].attributes[6].value)]))) 
                setfacials("col-3 " + check(parseInt(traitsdata.FACIAL.split(",")[facialexpression_traits.indexOf(jsondata[i].attributes[7].value)]))) 
                seteyess("col-3 " + check(parseInt(traitsdata.EYES.split(",")[eye_traits.indexOf(jsondata[i].attributes[8].value)]))) 
                seteyewears("col-3 " + check(parseInt(traitsdata.EYEWEAR.split(",")[eyewear_traits.indexOf(jsondata[i].attributes[9].value)]))) 

                setbackgrounda(checka(parseInt(traitsdata.BACKGROUND.split(",")[background_traits.indexOf(jsondata[i].attributes[0].value)]))) 
                setpatterna(checka(parseInt(traitsdata.PATTERN.split(",")[pattern_traits.indexOf(jsondata[i].attributes[1].value)]))) 
                setfura(checka(parseInt(traitsdata.FUR.split(",")[fur_traits.indexOf(jsondata[i].attributes[2].value)]))) 
                setskina(checka(parseInt(traitsdata.SKIN.split(",")[skin_traits.indexOf(jsondata[i].attributes[3].value)]))) 
                setnecka(checka(parseInt(traitsdata.NECK.split(",")[neck_traits.indexOf(jsondata[i].attributes[4].value)]))) 
                setclothinga(checka(parseInt(traitsdata.SHIRTS.split(",")[shirt_traits.indexOf(jsondata[i].attributes[5].value)]))) 
                setheadweara(checka(parseInt(traitsdata.HEADWEAR.split(",")[headwear_traits.indexOf(jsondata[i].attributes[6].value)]))) 
                setfaciala(checka(parseInt(traitsdata.FACIAL.split(",")[facialexpression_traits.indexOf(jsondata[i].attributes[7].value)]))) 
                seteyesa(checka(parseInt(traitsdata.EYES.split(",")[eye_traits.indexOf(jsondata[i].attributes[8].value)]))) 
                seteyeweara(checka(parseInt(traitsdata.EYEWEAR.split(",")[eyewear_traits.indexOf(jsondata[i].attributes[9].value)]))) 
                
                
            }
        }
    },[])

    const check = (count)=>{
        if(count<100) return "RAREST";
        else if(count<200) return "RARE";
        else  if(count<350)return "UNCOMMON";
        else  return "COMMON";
    }

    const checka = (count)=>{
        return (count / 8888 * 100).toFixed(2)
    }

    const back=()=>{
        navigate("/");
    }
  return (
   <div className="raritymain">
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
       <div className="row rarity">
            <div className="col-12 col-md-6">
                <h2 className="rtitle">
                    <button className="backbutton" onClick={back}><img className="backbtn" src="./back.svg"/></button>Check Your Ranking
                </h2>
            </div>

            <div className="col-12 col-md-6">
                {/* <br/>
                <div className="row">
                    <div className="col-5 row">
                        <div className="col-6 col-md-5 blacktitle">
                            ID
                        </div>
                        <div className="col-6 content">
                            {id}
                        </div>
                    </div>
                    <div className="col-2 col-md-1 row">

                    </div>
                    <div className="col-5 col-md-5 row">
                        <div className="col-6 blacktitle">
                            RANK
                        </div>
                        <div className="col-6 content">
                            {ranks}
                        </div>
                    </div>
                </div> */}
                
            </div>
       </div>
       <br/>
       
       <div className="row">
           <div className="col-12 col-md-6 cardpad">
                <div className="raritycard">
                    <img className="rarityimage" src={`https://megaprimates.mypinata.cloud/ipfs/QmYBrYjEvkztkxWwsJbxXg2rqx7XGqgKZmixDWJWBkFsvE/${id}.jpg`}/>
                    <div className="rarityid">
                        #{id}
                    </div>
                    <div className="rarityrank">
                        RANK {ranks}
                    </div>
                </div>
           </div>
           <div className="col-12 col-md-5 cardpads">
            <div className="border2">
                <div className="row margintop">
                    <div className="col-3 raritytitles">
                            BACKGROUND
                    </div>
                    <div className="col-6 attributes">
                        {data ? data.attributes[0].value:<></>}
                    </div>
                    <div className={backgrounds}>
                            {background}
                        <div>{backgrounda}%</div>
                            
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                            PATTERN
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[1].value:<></>}
                    </div>
                    <div className={patterns} >
                        {pattern}
                        <div>{patterna}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                        FUR
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[2].value:<></>}
                    </div>
                    <div className={furs}>
                        {fur}
                        <div>{fura}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                        SKIN
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[3].value:<></>}
                    </div>
                    <div className={skins}>
                        {skin}
                        <div>{skina}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                        NECK
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[4].value:<></>}
                    </div>
                    <div className={necks}>
                        {neck}
                        <div>{necka}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitles">
                        CLOTHING
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[5].value:<></>}
                    </div>
                    <div className={clothings} >
                        {clothing}
                        <div>{clothinga}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitles">
                        HEADWEAR
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[6].value:<></>}
                    </div>
                    <div className={headwears}>
                        {headwear}
                        <div>{headweara}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                        FACIAL
                    </div>
                    <div className="col-6 attributes">
                    {data ? data.attributes[7].value:<></>}
                    </div>
                    <div className={facials}>
                        {facial}
                        <div>{faciala}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                        EYES
                    </div>
                    <div className="col-6 attributes">
                        {data ? data.attributes[8].value:<></>}
                    </div>
                    <div className={eyess}>
                        {eyes}
                        <div>{eyesa}%</div>
                    </div>
                </div>
                <div className="row margintop">
                    <div className="col-3 raritytitle">
                        EYEWEAR
                    </div>
                    <div className="col-6 attributes">
                        {data ? data.attributes[9].value:<></>}
                        
                    </div>
                    <div className={eyewears}>
                        {eyewear}
                        <div>{eyeweara}%</div>
                    </div>
                </div>
            </div>
        </div>
       </div>
   </div>
  )}
