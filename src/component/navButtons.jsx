import { useState, useMemo } from "react";
import RefrigerationCycle from "./reviewPages/refrigerationCycle"
import "./navButtons.css"


export default function NavButtons( {page, setPage}) {

    if (page === "RefrigerationCycle") {
    return <RefrigerationCycle setPage={setPage} />;
  }
   
    return (
        <div className="navBtn">
            <button  onClick={()=> {setPage("RefrigerationCycle")}}> Refrigeration Cycle</button>
            <button  onClick={()=> {setPage("fireSafety")}}> Fire Life Safety</button>
            <button  onClick={()=> {setPage("generator")}}> Generator</button>
        </div>

    )
}