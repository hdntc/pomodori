import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { AppProps } from "next/app";

const theme = extendTheme({
    
});

function MyApp({ Component, pageProps }: AppProps) {
    return <ChakraProvider>
        <Head>
            <link rel="icon" href="/pomodori.svg"/>
        </Head>
        <Component {...pageProps} />
    </ChakraProvider>;
}

export default MyApp;