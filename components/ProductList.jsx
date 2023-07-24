import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Products</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        dignissimos delectus, quibusdam, dolores maxime ullam incidunt beatae
        saepe, animi odit alias consequuntur voluptates in aliquam quos
        consectetur. Nisi, alias doloremque.
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
