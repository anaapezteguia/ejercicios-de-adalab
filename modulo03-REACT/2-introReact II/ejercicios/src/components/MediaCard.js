import avatar from '../images/girl.jpg';
import React from "react";

class MediaCard extends React.Component {
  render() {
    return (
        <div className="Card">
        <article className="article">
        <div className="article__top">
          <img src={avatar} alt="foto perfil" className="article__profilePic" />
          <div className="article__description">
            <h2>Alexa Guerrero</h2>
            <p>Martes 16 febrero de 2021</p>
          </div>
        </div>
        <p className="article__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <div className="article__bottomContent">
          <a href="#top">Leer más...</a>
          <div className="article__bottomContent--lovers">
            <p className="amount">37</p>
            <i class="fas fa-heart"></i>
          </div>
        </div>
        
        </article>
      </div>
    );
  }
}

export default MediaCard;