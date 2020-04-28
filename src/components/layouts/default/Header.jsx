import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background: #8d0000;
    
    // width:100%;
    // color: #fff;
    // padding:1rem;
    // font-size:.7rem;
    // text-align:left;
    // display: block;
    // position:fixed;
    overflow:hidden;
    
    min-height:50px;
    margin-left: 230px;
    @media (max-width: 768px) {
        margin-left:70px;
    }
`;
// const Toggle = styled.span`
//     float: left;
//     margin: 0;
//     padding-top: 16px;
//     width: 30px;
//     padding-left: 0;
//     margin-bottom: 0;
//     list-style: none;
//     background:black;
// `;
// const Head = styled.ul`
//     margin: 0;
//     color:#fff;
// `;
// const InnerHead = styled.li`
//     // position: relative;
//     display: inline;
//     // padding-right:.5rem;
//     float: right;
// `;
const InnerHeadTextLink = styled.span`
    padding:1rem;
    // margin-left:100%;
    // float: right;
    // width: 100%;
    // background:blue;
    // position:absolute;
`;

// const TopNavProfileName = styled.span`
//     color:#fff;
//     font-size:.9rem;
//     font-weight:600;
//     text-decoration:none;
//     &:hover{
//         background:#252529;
//     }
// `;
const Header = () => {
    return (
        <HeaderContainer>
            {/* <div className="header"> */}
            <div className="header-right">
                <InnerHeadTextLink>Home</InnerHeadTextLink>
                <InnerHeadTextLink>Home</InnerHeadTextLink>
                <InnerHeadTextLink>Home</InnerHeadTextLink>
                <a href="#default" className="logo bigprofile">Sodruldeen Mustapha</a>
            </div>
            {/* </div> */}

        </HeaderContainer>
    )
}
export default Header;
