import Link from "next/link";

const Product = ({productId = 34}) => {
  return (
    <div>
    <Link href="/product/1"><h1>The Product Page</h1></Link>
    <Link href="/product/2"><h1>The Product Page 2 </h1></Link>
    <Link href="/product/3"><h1>The Product Page 3</h1></Link>
    <Link href={`/product/${productId}`}><h1>The Product Page {productId}</h1></Link>
    </div>
  );
}

export default Product;