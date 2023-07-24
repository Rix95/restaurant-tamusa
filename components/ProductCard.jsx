import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="300" height="300" />
      <h1 className={styles.title}>Very Delicious Borgers</h1>
      <span className={styles.price}> $19.90 </span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      </p>
    </div>
  );
};

export default ProductCard;
