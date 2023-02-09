import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalFonts from './styles/fonts/pretendard'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <GlobalStyles />
        <GlobalFonts />
        <App />
    </React.StrictMode>
)
