import "./header.css"
import { useNavigate } from "react-router-dom";
const Header=() =>{
    const navigate = useNavigate();
    return(
        <>
             <nav className="header">
                 <div className="clone" onClick={() => navigate("/")}>
                    <img src={require("../../images/instaclone.png") } alt="logo" />
                 </div>
                 <div className="camera" onClick={() => navigate("/nform")}>
                 <img src={require("../../images/camera2.png") } alt="logo1" />
                 </div>
             </nav>
        </>
    )
}
export default Header;