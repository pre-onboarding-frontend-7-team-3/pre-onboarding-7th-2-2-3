import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <meta name="description" content={`Madup X Wanted - ${title}`} data-react-helmet="true" />
    </Helmet>
  );
};

export default SEO;
