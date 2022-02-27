import '../styles/tailwind.css';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import aplloClient from '../lib/apollots';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={aplloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
