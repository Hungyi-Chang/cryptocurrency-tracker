import { useState } from 'react';
import Theme from '../styles/theme';
import Layout from '../components/Layout/Layout';
import { checkContext } from '../contexts/checkContext';

function MyApp({ Component, pageProps }) {
  const [checked, setChecked] = useState(false);

  const setDarkMode = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Theme>
        <checkContext.Provider value={{ checked }}>
          <Layout setDarkMode={setDarkMode} checked={checked}>
            <Component {...pageProps} />
          </Layout>
        </checkContext.Provider>
      </Theme>

    </>
  );
}

export default MyApp;
