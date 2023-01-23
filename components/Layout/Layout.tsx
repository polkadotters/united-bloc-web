import Head from "next/head"
import { FC } from "react"
import Header from "components/Layout/Header"
import Footer from "components/Layout/Footer"


type LayoutProps = {
  children: JSX.Element
}


const Layout: FC<LayoutProps> = ({ children }) => {
  const name = "United Bloc"
  const description = "Unifying and Diversifying the Blockchain"
  const image = "/favicon-480x480.png"

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242423" />
        <meta name="msapplication-TileColor" content="#242423" />
        <meta name="theme-color" content="#242423" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content={description} />
        <meta itemProp="name" content={name} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
      </Head>
      <div className="relative min-h-[100vh]">
        <div className="pb-[80px]">
          {children}
        </div>
      </div>
    </>
  );
}


export default Layout;
