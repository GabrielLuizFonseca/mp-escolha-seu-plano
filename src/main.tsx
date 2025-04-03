// src/main.tsx

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import PlanosCard from './components/PlanosCard.tsx';
import Home from './pages/Home.tsx';

// Criação da root do React
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

// Renderização da aplicação dentro do StrictMode
root.render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>
);
