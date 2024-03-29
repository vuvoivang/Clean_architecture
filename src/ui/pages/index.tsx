import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { useCountLoading } from "~/adapters/ui/global.adapter";
import { useGetData } from "~/application/product/getData.usecase";
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  const countLoading = useCountLoading();
  const { getData } = useGetData();
  const handleFetchData = () => {
    getData();
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {countLoading === 0 ? (
          <>
            <Button title="Button" />
            <Navbar />
          </>
        ) : (
          <p className={styles.description}>Loading...</p>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
