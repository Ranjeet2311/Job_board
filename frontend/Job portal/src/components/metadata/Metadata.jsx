import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function Metadata({ title, description }) {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta property="og:title" content="Ranjeet Kumar|Portfolio" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
