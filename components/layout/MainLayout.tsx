import { FC } from 'react';

import Head from "next/head";

import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css"


type Props = {
  children?: React.ReactNode
};

export const MainLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact - Jose</title>
            <meta name="description" content="Contact Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar />
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      );
}
