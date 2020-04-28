import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    bottom: 0;
    background: #fff;
    padding:1rem;
    font-size:.7rem;
    text-align:right;
    // text-align:left;
    display: block;
    margin-left: 230px;
    @media (max-width: 768px) {
        margin-left:70px;
    }
`;
const Footer = () => {
    return (
        <FooterContainer>
            © 2020 All Right Reserved
        </FooterContainer>
    )
}
export default Footer;
