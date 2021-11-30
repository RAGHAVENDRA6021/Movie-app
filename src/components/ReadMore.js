import { useState } from "react";

export default function ReadMore({data}){
  
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
 
        if(data.length<=150){
      return(<div className="plot">{data}</div>)
        }
        else{
            return( <div className="plot">
            {isReadMore ?data.slice(0, 150) : data}
          <span onClick={toggleReadMore} className="read-or-hide plot">
         {isReadMore ? <u>...read more</u> : <u>...show less</u>}</span>
        
        </div>)
           
        }
        
    
    
}