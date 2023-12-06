import Head from "next/head";
import { Inter, Space_Mono } from "next/font/google";
import Image from "next/image";
import ProductList from "@/components/ProductList";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jaguar Bookstore</title>
        <meta name="description" content="Grade A Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {admin && <AddButton setClose={setClose} />}
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = true;

  const res = await axios("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
      admin,
    },
  };
};
