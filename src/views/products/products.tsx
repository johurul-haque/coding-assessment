"use client";

import { BackToHome } from '@/components/backToHome/backToHome';
import { PRODUCTS_DATA } from '@/data/productsData';
import { usePagination } from '@/hooks/usePagination';
import { Product } from '@/types';
import { PaginationControls } from '@/views/products/paginationControls/paginationControls';
import { ProductList } from '@/views/products/productList/productList';
import { ProductModal } from '@/views/products/productModal/productModal';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

export const Products: React.FC<{ product?: Product }> = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(product);
  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProducts,
    handlePageChange,
  } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });

  const router = useRouter();

  const handleOpenModal = useCallback((product: Product) => {
    router.push(`?product_id=${product.id}`);
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    router.push('/products');
    setSelectedProduct(undefined);
  }, []);

  return (
    <div>
      <BackToHome />
      <ProductList products={paginatedProducts} onOpenModal={handleOpenModal} />
      <div className="h-4" />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};
