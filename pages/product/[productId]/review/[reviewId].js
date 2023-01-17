import { useRouter } from 'next/router'; //for the access id parameter

const ReviewDetails = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId} and the router ID :{reviewId}</p>
    </div>
  );
}

export default ReviewDetails;
