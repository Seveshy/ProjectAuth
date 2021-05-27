import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
 
    font-family: roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
 
  :root {
    
    --background: #fff;
    --verde-skytef: #009384;
    --strong-verde-skytef:#11AEAD;
    --azul-skytef: #003f76;
    --gray-font-color:#7B7B7B;
    --gray-light-color :#F4F0F0;
    --label : #878282;
    --primary: #edf4ff;
    --secondary: #15181C;
    --search: #202327;
    --white: #fff;
    --mascara: rgba(255,255,255,0.24); 
    --border: rgba(0,0,0,0.20); 
    --gray: #4d4d4d;
    --outline: #2F3336;
    --verde-skytef: #009384;
    --azul-skytef: #003f76;
    --hover: #e6e6e6;
    --vermelho-item-list: 	 #ff5c33;
    --verde-item-list:#53c653;
    --azul-item-list:#4da6ff;
    --hover-light-shadow:  rgba(44, 142, 214,0.25);
    --hover-light-shadow-azul:  rgba(0, 63, 118,0.11);
    --placeholder: #silver;
  
   
  }
    /* width */
::-webkit-scrollbar {
  width: 10px;
  
}

/* Track */
::-webkit-scrollbar-track {

  border-radius:10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:  	 #b3b3b3; 
  border-radius:10px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:linear-gradient(to top,   var(--verde-skytef), var(--azul-skytef));
}

`;
