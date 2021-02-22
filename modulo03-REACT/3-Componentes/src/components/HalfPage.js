import React from 'react';
import '../stylesheets/HalfPage.scss';

function HalfPage(props) {
    return (
       <div className="width">
            {props.children}
            <p>Estoy en la {props.side}</p>
        </div>
        
   );
}

export default HalfPage;