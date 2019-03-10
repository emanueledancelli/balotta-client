import React from "react";
import Helmet from "react-helmet";

const MetaTags = ({ title, description, image, type }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={image ? image : "https://balotta.co/og-image.webp"}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type || "website"} />
      <meta
        property="og:image"
        content={image ? image : "https://balotta.co/og-image.webp"}
      />
    </Helmet>
  );
};

export default MetaTags;
