import { useState } from 'react';

import Theme from '../styles/theme';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [checked, setChecked] = useState(false);
  const setDarkMode = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Theme>
        <Layout setDarkMode={setDarkMode} checked={checked}>
          <Component {...pageProps} />
        </Layout>
      </Theme>

    </>
  );
}

export default MyApp;
