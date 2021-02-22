import React from "react";
// import RandomCat from "./RandomCat";
// import CatList from "./CatList";
import MediaList from "./MediaList";
import avatar from "../images/girl.jpg";
const users = [
  {
    user: {
      username: "Alexa Guerrero",
      avatar: avatar,
    },
    post: {
      date: "Martes 16 febrero de 2021",
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      likes: 37,
    },
  },
];
const App = () => {
  return (
    <div className="App">
      {/* <RandomCat /> */}
      <MediaList users={users} />
    </div>
  );
};
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <div className="App">
//         <CatList width="200" height="400" imgSrc="" />
//         {/* <MediaList users={users} /> */}
//       </div>
//     );
//   }
// }
export default App;
// class App extends React.Component {
//   render() {
//     const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
//     const likes = 37;
//     return (
//       <div className="App">
//         {/* <RandomCat /> */}
//         <MediaCard
//           username="Alexa Guerrero"
//           date="Martes 16 febrero de 2021"
//           src={avatar}
//           post={text}
//           likes={likes}
//           heart= {(likes>0) ? "heartFull" : ""}
//         />
//       </div>
//     );
//   }
// }
