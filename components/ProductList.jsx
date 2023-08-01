import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Products</h1>
      <p className={styles.desc}>
        Try our tasty burgers, and you will never want to eat anything else!,
        style your burger however you want! There is not such thing as too much
        with us!
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
