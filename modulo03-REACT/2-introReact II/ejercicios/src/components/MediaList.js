import React from "react";
import MediaCard from "./MediaCard";
// import avatar from '../images/girl.jpg';

const MediaList = (props) => {
  return (
    <section>
      <h2>Mi lista de tarjetas</h2>
      <ul>
        <li className="noList">
          <MediaCard
            username={props.users[0].user.username}
            src={props.users[0].user.avatar}
            date={props.users[0].post.date}
            post={props.users[0].post.text}
            likes={props.users[0].post.likes}
            heart={props.users[0].post.likes > 0 ? "heartFull" : ""}
          />
        </li>
        <li className="noList">
          <MediaCard
            username={props.users[0].user.username}
            src={props.users[0].user.avatar}
            date={props.users[0].post.date}
            post={props.users[0].post.text}
            likes={props.users[0].post.likes}
            heart={props.users[0].post.likes > 0 ? "heartFull" : ""}
          />
        </li>
        <li className="noList">
          <MediaCard
            username={props.users[0].user.username}
            src={props.users[0].user.avatar}
            date={props.users[0].post.date}
            post={props.users[0].post.text}
            likes={props.users[0].post.likes}
            heart={props.users[0].post.likes > 0 ? "heartFull" : ""}
          />
        </li>
      </ul>
    </section>
  );
};
export default MediaList;

// En nuestra web de tarjetas sociales,
// vamos a crear un nuevo componente MediaList
// para manejar una lista de componentes MediaCard.
// Para ello, mostrará una nueva sección con un título
// y un listado de 3 componentes MediaCard.
// Cada tarjeta tendrá datos personalizados
// que definiremos mediantes props desde el
// componente madre, es decir, el que maneja la lista.

// const MediaCard = (props) => {
// const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
// const likes = 37;
//     return (
//         <div className="Card">
//         <article className="article">
//         <div className="article__top">
//           <img src={props.src} alt="foto perfil" className="article__profilePic" />
//           <div className="article__description">
//               <h2>{props.username}</h2>
//             <p>{props.date}</p>
//           </div>
//         </div>
//           <p className="article__text">{props.post}</p>
//         <div className="article__bottomContent">
//           <a href="#top">Leer más...</a>
//           <div className="article__bottomContent--lovers">
//               <p className="amount">{props.likes}</p>
//             <i className={"fas fa-heart " + props.heart}></i>
//           </div>
//         </div>
//         </article>
//       </div>
//     );
// }
