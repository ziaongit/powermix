import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store';
import App from './App';
import './styles/index.scss';


render(
    <BrowserRouter>
            <Suspense fallback="Loading...">
                    <StoreProvider>
                        <App />
                    </StoreProvider>
            </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);
