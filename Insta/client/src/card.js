import  "./component/card/card.css";
import hicon from "./images/heart2.png";
import sicon from "./images/share.png";
const Card =({post}) =>{
 
    return (

        <>
              <section className="card">
                <section className="card-header">
                    <div>
                    <div className="card-header_name">{post.author}</div>
                    <div className="card-header_location">{post.location}</div>

                    </div>
                    <span>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                <img src={post.image} alt="place" />    
                 </section>
                 <section className="reply"> 
                 <span>
                 <img src={hicon} alt="hicon"/>
                 </span>
                <span><img src={sicon} alt="sicon"/></span>
                 <span>{post.date}</span>
                 </section>
                  <section className="likes">
                    {post.likes} likes
                  </section>
                  <section className="description">
                    {post.description}
                  </section>
              </section>
        </>
    )
}
export default Card;