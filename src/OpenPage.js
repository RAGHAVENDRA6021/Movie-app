import { Link } from 'react-router-dom'
import './open.css'
export default function OpenPage(){
    return(
        <div class="openTitle">
 <div className="OpenHead">REACT<br style={{marginTop:20}}/>MOVIE PROJECT</div>

 <Link to="/project"  className="white-mode">GO to Project</Link>
</div>
    )
}