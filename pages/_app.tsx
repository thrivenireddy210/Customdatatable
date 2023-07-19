// pages/_app.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const theme = extendTheme({
  // Customize your Chakra UI theme here
  // Example theme configuration
  colors: {
    primary: "#FF0000",
    secondary: "#00FF00",
  },
  // Add more theme configurations as needed
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
