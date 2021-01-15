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
