import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const Footer = () => (
    <FooterContainer>
        <Link to="/">
            <FontAwesomeIcon icon={faInfinity} size="2x" />
        </Link>
        <FooterAuthor href="https://www.samstorres.com">
            © 2019 — Powered by Gatsby and Prismic
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
