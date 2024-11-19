import { PRODUCTS_DATA } from '@/data/productsData';
import { Products } from '@/views/products';

type PropsType = {
  searchParams?: {
    product_id?: string;
  };
};

export default function ProductsRoot({ searchParams }: PropsType) {
  const product = getProductById(searchParams?.product_id);

  return <Products product={product} />;
}

function getProductById(productId?: string) {
  if (!productId) return;

  return PRODUCTS_DATA.find((product) => product.id === productId);
}
