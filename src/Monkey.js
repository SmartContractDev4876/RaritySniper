import React from "react";
import { useNavigate } from "react-router-dom";

export default function Monkey({data}) {
  let navigate = useNavigate(); 
  const showrarity=()=>{
    console.log("good")
    navigate(`/${data.name.slice(15)}`);
  }
  // 
  return (
    data?
      <div href={`/${data.name.slice(15)}`} onClick={showrarity} className="card" >
        <img class="card-img-top" src={`https://megaprimates.mypinata.cloud/ipfs/QmYBrYjEvkztkxWwsJbxXg2rqx7XGqgKZmixDWJWBkFsvE/${data.name.slice(15)}.jpg`} alt="Card image"></img>
        {/* <img className="card-img-top" src={`https://ipfs.io/ipfs/QmNaXah5T4EYFtzzr1pc96feyZhFm4Upxqk7QzaNT5MLK5/${data.name.slice(15)}.jpg`} alt="Card image"></img> */}
        <div className="card-img-overlay">
          <h4 className="card-title card-id">#{data.name.slice(15)}</h4>
        </div>
      <div className="card-body row">
        <div className="col-6 card-rank">Rank {data.rank}</div>
        {/* <div className="col-6 card-score">Score {score[data.image.slice(88,-4)]}</div> */}
        <div className="col-6 card-score">Score {data.score}</div>

      </div>
    </div>
    :
    <></>
  );
}
