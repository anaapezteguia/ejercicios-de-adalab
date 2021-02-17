
import React from "react";

const MediaCard = (props) => {
    return (
        <div className="Card">
        <article className="article">
        <div className="article__top">
          <img src={props.src} alt="foto perfil" className="article__profilePic" />
          <div className="article__description">
              <h2>{props.username}</h2>
            <p>{props.date}</p>
          </div>
        </div>
          <p className="article__text">{props.post}</p>
        <div className="article__bottomContent">
          <a href="#top">Leer más...</a>
          <div className="article__bottomContent--lovers">
              <p className="amount">{props.likes}</p>
            <i className={"fas fa-heart " + props.heart}></i>
          </div>
        </div>
        </article>
      </div>
    );
}
export default MediaCard;
// class MediaCard extends React.Component {
//   render() {
//     return (
//         <div className="Card">
//         <article className="article">
//         <div className="article__top">
//           <img src={this.props.src} alt="foto perfil" className="article__profilePic" />
//           <div className="article__description">
//               <h2>{this.props.username}</h2>
//             <p>{this.props.date}</p>
//           </div>
//         </div>
//           <p className="article__text">{this.props.post}</p>
//         <div className="article__bottomContent">
//           <a href="#top">Leer más...</a>
//           <div className="article__bottomContent--lovers">
//               <p className="amount">{this.props.likes}</p>
//             <i className={"fas fa-heart " + this.props.heart}></i>
//           </div>
//         </div>
        
//         </article>
//       </div>
//     );
//   }
// }
