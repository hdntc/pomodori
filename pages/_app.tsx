import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <ChakraProvider>
        <Head>
            <link rel="icon" href="/pomodori.svg"/>
        </Head>
        <Component {...pageProps} />
    </ChakraProvider>;
}

export default MyApp;