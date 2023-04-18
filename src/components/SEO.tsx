
 

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
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
    </Helmet>
  );
};

export default SEO;
