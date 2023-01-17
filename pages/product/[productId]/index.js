import { useRouter } from 'next/router'; //for the access id parameter

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default ProductDetails;
