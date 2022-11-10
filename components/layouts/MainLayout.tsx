import Head from "next/head";
import * as React from 'react';
import { Navbar } from "../Navbar";

type Props = {
  children?: React.ReactNode
};

export const MainLayout:  React.FC<Props> = ({ children }) => {
    return (
        <div className={'title'}>
          <Head>
            <title>Home | Ebros</title>
            <meta name="description" content="Home page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
    
          <main className={'description'}>
              {children}
          </main>
    
        </div>
      )
}
