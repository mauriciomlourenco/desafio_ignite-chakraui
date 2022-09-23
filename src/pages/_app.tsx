import { AppProps } from 'next/app';
import { ChakraProvider} from '@chakra-ui/react';
import { theme } from '../styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/slider.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  
  );
}

export default App
