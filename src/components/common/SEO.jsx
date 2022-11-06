import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={`Madup X Wanted - ${title}`} data-react-helmet="true" />
    </Helmet>
  );
};

export default SEO;
