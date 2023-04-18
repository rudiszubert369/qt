
 

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {

  return (
    <Helmet>
      <title>quantoo</title>
      <meta
        name="description"
        content="quantoo task"
      />

    </Helmet>
  );
};

export default SEO;

{/* <link
rel="icon"
type="image/png"
href={`${process.env.PUBLIC_URL}/favicon.png`}
/> */}