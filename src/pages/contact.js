import React from "react";
import PropTypes from "prop-types";

// api
import { graphql } from "gatsby";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Contact from "templates/Contact";

// styles
import "../styles/index.scss";

export const query = graphql`
  {
    contentfulAuthor(page: { eq: "Contact" }) {
      text {
        json
      }
      seoTitle
    }
  }
`;

const ContactPage = ({ data }) => {
  const {
    text: { json },
    seoTitle
  } = data.contentfulAuthor;
  return (
    <main>
      <Seo title={seoTitle} />
      <Contact />
      <Layout showParticles showMenu showSocial />
    </main>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    contentfulAuthor: PropTypes.shape({
      text: PropTypes.shape({
        json: PropTypes.object
      }),
      seoTitle: PropTypes.string
    })
  })
};

ContactPage.defaultProps = {
  data: {}
};

export default ContactPage;
