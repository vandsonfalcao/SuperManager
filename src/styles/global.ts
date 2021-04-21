import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --text: #71717a;
        --background: #fff;
        --shape: #f0f2f5;
        --red: rgb(220, 0, 0);
        --green: #22c55e;
        --blue: #2563eb;
        --dark-blue: #1e3a8a;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{ 
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        font-family: 'Poppins', sans-serif;
        background: var(--background);
        --webkit-font-smoothing: antialiased; 
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }
    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }
    button { 
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    // ANIMATIONS
    @keyframes appearing-from-right {
        0% {
            transform: translate(5vw,0);
            opacity: 0;
        }
        100% {
            transform: translate(0,0);
            opacity: 1;
        }
    }
    @keyframes appearing-from-left {
        0% {
            transform: translate(-5vw,0);
            opacity: 0;
        }
        100% {
            transform: translate(0,0);
            opacity: 1;
        }
    }
`; 