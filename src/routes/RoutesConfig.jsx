import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

// import { ProductDetails } from '../pages/ProductDetails';
// import { CartPage } from '../pages/CartPage';
// import { HomeProducts } from '../pages/HomeProducts';

const HomeProducts = React.lazy(() =>
  import('../pages/HomeProducts').then((module) => ({
    default: module.HomeProducts,
  }))
);
const ProductDetails = React.lazy(() =>
  import('../pages/ProductDetails').then((module) => ({
    default: module.ProductDetails,
  }))
);
const CartPage = React.lazy(() =>
  import('../pages/CartPage').then((module) => ({
    default: module.CartPage,
  }))
);

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageNotFound } from '../pages/PageNotFound';

export const RoutesConfig = () => {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path='/' element={<HomeProducts />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<CartPage />} />

            {/* Rota para página não encontrada */}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};
