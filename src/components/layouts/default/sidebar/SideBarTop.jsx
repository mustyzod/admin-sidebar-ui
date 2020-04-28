import React from 'react';
import styled from "styled-components";

//  styled component block
const ProfilePix = styled.div`
    width: 35%;
    float: left;
`;

const SideNavProfileInfo = styled.div`
    padding: 25px 10px 10px;
    width: 65%;
    text-align: left;
    line-height: 15px;
    float: left;
`;

const Profile = styled.div`
    // border-bottom: solid 1px #a9a9a97a;
    @media (max-width: 768px) {
        display: none;
    }
`;
//  styled component block ends

// inline styles
const ProfileImage = {
    width: "70%",
    background: "#8d0000",
    marginLeft: "15%",
    zIndex: "1000",
    position: "inherit",
    marginTop: "20px",
    border: "1px solid rgba(52, 73, 94, .44)",
    padding: "4px"
}
const Sidenav_name = {
    fontSize: "0.8rem",
    fontWeight: "600"
}
const Sidenav_position = {
    color: "#9b9b9b",
    fontSize: "0.9rem",
    fontWeight: "900"
}
const Sidenav_cid = {
    color: "#8d0000",
    fontSize: "1.8rem",
    fontWeight: "900"
}
const Img_circle = {
    borderRadius: "50%"
}
// inline styles ends

export const SideBarProfile = () => {
    return (
        <Profile>
            <ProfilePix>
                <img style={{ ...ProfileImage, ...Img_circle }} src="https://graph.facebook.com/1121533047863818/picture?type=large" alt="..." />
            </ProfilePix>
            <SideNavProfileInfo>
                <p style={Sidenav_name}>Welcome,<br />Sodruldeen Mustapha</p>
                <p style={Sidenav_position}>Team Leader - İnformation Technologies</p>
                <p style={Sidenav_cid}>27345</p>
            </SideNavProfileInfo>
        </Profile>
    )
}
