import { Link } from 'react-router-dom'
import './open.css'
export default function OpenPage(){
    return(<div id="openPage">
        <div class="openTitle">
 <div className="OpenHead">REACT<br style={{marginTop:20}}/>MOVIE APP</div>

 <Link to="/project"  className="white-mode">GO to Project</Link>
</div>
</div>
    )
}