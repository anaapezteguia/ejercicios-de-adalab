import avatar from './images/girl.jpg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <article className="article">
      <div className="top">
        <img src={avatar} alt="foto perfil" className="profilePic" />
        <div className="description">
          <h2>Alexa Guerrero</h2>
          <p>Martes 16 febrero de 2021</p>
        </div>
      </div>
      <p className="texto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      <div className="bottomContent">
        <a href="#top">Leer más...</a>
        <div className="lovers">
          <p className="amount">37</p>
          <i class="fas fa-heart"></i>
        </div>
      </div>
      
      </article>
    </div>
  );
}

export default App;
