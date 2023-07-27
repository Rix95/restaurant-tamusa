import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Featured from "@/components/Featured";
import ProductList from "@/components/ProductList";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productList }) {
  return (
    <>
      <Head>
        <title>Restaurant Round 3</title>
        <meta name="description" content="Grade A Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList productList={productList} />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
