import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Image src={product.img} alt="" width="300" height="300" />
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}> ${product.prices[0]} </span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
};

export default ProductCard;
