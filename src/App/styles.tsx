import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     * {
          box-sizing: border-box;
          font-family: 'Helvetica', sans-serif;
          border: none;
          outline: none;
          margin: 0;
          padding: 0;
          color: black;
          scroll-behavior: smooth;
     }    
     
     body {
          min-height: 100%;
          background: #fff;
          background-attachment: fixed;
          overflow-x: hidden;
     }
     
     li{
          list-style-type: none;
     }

     ::-webkit-scrollbar{
          width: 8px;
          background: black;
     }

     ::-webkit-scrollbar-thumb{
          background: linear-gradient(#555555,#555555);
     border-radius: 4px;
     }

     ::-webkit-scrollbar-thumb:active{
          background: linear-gradient(transparent,#95CB5A,#DAC355,transparent);
     
          border-radius: 4px;
     }
`
