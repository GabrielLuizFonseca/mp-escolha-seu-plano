// src/pages/Home.js
import React from 'react';
import PlanosCard from '../components/PlanosCard';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <PlanosCard 
        titulo="Plano Gratuito" 
        preco="R$0" 
        tipo="Plano Básico"
      />
      <PlanosCard 
        titulo="Plano Mensal" 
        preco="R$29,99/mês" 
        tipo="Cobrança Mensal"
      />
      <PlanosCard 
        titulo="Plano Anual" 
        preco="R$299,99/ano" 
        tipo="Cobrança Anual"
      />
    </div>
  );
};

export default Home;
