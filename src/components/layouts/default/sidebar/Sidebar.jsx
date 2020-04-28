import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideBarProfile } from './SideBarTop';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuLists } from './MenuList';

//  Set default route
let currentRoute = "/";
let currentSubRoute = "/";
let currentRoute2 = "/";

// react style
const isActive = {
    width: "auto",
    // background: "rgba(255, 255, 255, .05)",
    // color: "#8d0000",
    cursor: "pointer",
    webkitTransitionDelay: "0s",
    borderRight: "8px solid #8d0000",

    boxShadow: "rgba(0, 0, 0, .25) 0 1px 0, inset rgba(255, 255, 255, .16) 0 1px 0",
    textShadow: "rgba(0, 0, 0, .25) 0 - 1px 0!important",
    background: "linear - gradient(#1c1c1c, #1c1c1c), #8d0000!important"
}
//  react style ends

//  styled component block
const LeftCol = styled.div`
    min-height: 100%;
    width: 230px;
    padding: 0;
    position: fixed;
    display: -ms-flexbox;
    display: flex;
    z-index: 1;
        @media (max-width: 768px) {
        width:70px;
        overflow-x: visible;
    }
`;
const SidebarContainer = styled.div`
    height:100vh;
    width:230px;
    top:0;
    // position:fixed;
    z-index:2;
    background-color:#252529;
    color:#fff;
    font-family: "Roboto", sans-serif;
    display:flex;
    flex-direction:column;

    overflow-x: hidden;
    @media (max-width: 768px) {
        width:70px;
        overflow-x: visible;
    }
`;

const MenuDropdownContainer = styled.div`
    display:${props => props.display || "none"} ;
    z-index:99;
    @media (max-width: 768px) {
        background: #1c1c1c;
        position:absolute;
        margin-top: 1rem;
        margin-left: 4.8rem;
        
        &:before {
            content: "";
            height: 8px;
            left: -7px;
            margin-top: 5px;
            position: absolute;
            height: 0;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #8d0000;
        }
    }
`;

const SideMenu = styled(Link)`
    color:darkgrey;
    text-decoration:none;

    display: flex;
    flex-direction: column;
    width:auto;
    position:relative;

    &:hover ${MenuDropdownContainer} {
        display: block;
    }
`;
const SideMenuDrop = styled.div`
    ${props => (props.to === '/' + currentRoute) ? isActive : ""}
    color:#fff;
    text-decoration:none;
    display: flex;
    flex-direction: column;
    width:auto;
    position:relative;
    @media (max-width: 769px) {
        &:hover ${MenuDropdownContainer} {
            display: block;
        }
    }
    // make dropdown active on wide screen
    @media (min-width: 769px) {
        ${props => (props.to === '/' + currentRoute) ? MenuDropdownContainer + '{display: block}' : "none"};
    }
`;

const SideMenuItem = styled.div`
    padding: .7rem 0 .7rem .7rem ; 
    width: auto; 
    text-align: left;
    &:hover{
        background: rgba(255,255,255,.05);
        color:#8d0000;
        cursor: pointer;
        -webkit-transition-delay: 0s;
        // border-right: 8px solid #8d0000;
    }
`;

const SideMenuIcon = styled.span`
    font-size: ${props => props.fontSize ? props.fontSize : "1.2rem"}; 
    padding: 1rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        padding-left:.5rem;
    }
`;

const SidebarMenuItemLabel = styled.span`
    font-family: "Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif;
    font-size:16px;
    font-weight: 900;
    line-height:1.471;
    text-align:left;
    padding: 12px 0px;
    z-index: 2;
    position: relative;
    -webkit-transition: border-radius .1s linear, background .1s linear, z-index 0s linear;
        -webkit-transition-delay: .8s;

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuDropdownText = styled(Link)`
    display:flex;
    color:darkgrey;
    font-weight:600;
    text-decoration:none;
    padding:.5rem 4rem;
    font-size: 14px;
    list-style:none;
    text-align:left;
    &:hover{
        background: rgba(255,255,255, 0.05);
        color: #8d0000;
        cursor: pointer;
    }

    &:before {
        background: #425668;
        bottom: auto;
        content: "";
        height: 8px;
        left: 18px;
        margin-top: 4px;
        margin-left:25px;
        position: absolute;
        right: auto;
        width: 8px;
        z-index: 1;
        border-radius: 50%;
    }
    &:after{
        border-left: 1px solid #425668;
        bottom: 0;
        content: "";
        left: 21px;
        margin-left:25px;
        margin-top:-10px;
        position: absolute;
        top: 8px;
    }
    @media (max-width: 768px) {
        padding:.5rem 1rem;
        &:before {
            display:none
        }
        &:after{
            display:none
        }
    }
`;

const SubMenuDropdownContainer = styled.div`
    display:${props => ((props.display === 'block') || (props.url === '/' + currentRoute + '/' + currentRoute2)) ? props.display : "none"};
    background:${props => ((props.display === 'block') || (props.url === '/' + currentRoute + '/' + currentRoute2)) ? "#504e4e26" : "none"};
    z-index:99;
    // background:#504e4e26;
    @media (max-width: 768px) {
        background: #1c1c1c;
        position:absolute;
        width:100%;
        margin-top: 0rem;
        margin-left: 5.4rem;
        
        &:before {
            content: "";
            height: 8px;
            left: -7px;
            margin-top: 5px;
            position: absolute;
            height: 0;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #8d0000;
        }
    }
`;

const SubMenuDropdownText = styled(Link)`
    display:flex;
    white-space: nowrap;

    color:darkgrey;
    font-weight:600;
    text-decoration:none;
    padding:.5rem 5.5rem;
    font-size: 12px;
    list-style:none;
    text-align:left;

    

    &:hover{
        background: rgba(255,255,255, 0.05);
        color: #8d0000;
        cursor: pointer;
    }

    &:before {
        background: #425668;
        bottom: auto;
        content: "";
        height: 7px;
        width: 7px;
        left: 28px;
        margin-top: 4px;
        margin-left:40px;
        position: absolute;
        right: auto;
        z-index: 1;
        border-radius: 50%;
    }
        &:after{
        border-left: 1px solid #425668;
        bottom: 0;
        content: "";
        left: 21px;
        margin-left: 50px;
        margin-top: -10px;
        position: absolute;
        top: 40px;
    }
    @media (max-width: 768px) {
        padding:.5rem 1rem;
        &:before {
            display:none
        }
        &:after{
            display:none
        }
    }
`;

const SideSubMenuDrop = styled.div`
    ${props => (props.to === '/' + currentRoute) ? isActive : ""}
    color:#ffffff;
    text-decoration:none;

    background:#1c1c1c;

    display: flex;
    flex-direction: column;
    width:auto;
    position:relative;
    @media (max-width: 769px) {
        &:hover ${SubMenuDropdownContainer} {
            display: block;
        }
    }
    // make dropdown active on wide screen
    @media (min-width: 769px) {
        ${props => (props.to === currentSubRoute) ? SubMenuDropdownContainer + '{display: block}' : "none"};
    }
`;

const MenuChevronSpan = styled.span`
    @media (min-width: 769px) {
        &:before {
            bottom: auto;
            // content: "";
            ${props => (props.show.length > 0) ? 'content: ""' : ''} ; //show only when their is a child
            left: 18px;
            // margin-top: 12px;
            margin-top: 1.2rem;
            margin-left:185px;
            position: absolute;
            right: auto;
            width:0px;
            border:none;
            border-top:7px solid darkgrey;
            // border-bottom:5px solid #fff;
            border-left:6px solid rgba(0,0,0,0);
            border-right:6px solid rgba(0,0,0,0);
            }
    }
`;

const SubMenuChevronSpan = styled.span`
    @media (min-width: 769px) {
        &:before {
            bottom: auto;
            // content: "";
            ${props => (props.show.length > 0) ? 'content: ""' : ''} ; //show only when their is a child
            left: 18px;
            margin-top: 12px;
            margin-left:185px;
            position: absolute;
            right: auto;
            width:0px;
            border:none;
            border-top:5px solid darkgrey;
            // border-bottom:5px solid #fff;
            border-left:5px solid rgba(0,0,0,0);
            border-right:5px solid rgba(0,0,0,0);
        }
    }
`;
//  styled component block ends

const Sidebar = () => {
    let location = useLocation();
    currentRoute = location.pathname.split('/')[1]; //  Get page location and use it to set the active link
    currentSubRoute = location.pathname;
    currentRoute2 = location.pathname.split('/')[2];
    return (
        <LeftCol>
            <SidebarContainer>
                <SideBarProfile />
                {
                    MenuLists.map(menulist => {
                        return (
                            <React.Fragment key={menulist.id}>
                                <SideMenuDrop to={menulist.url}>
                                    <SideMenu to={menulist.url}>
                                        <MenuChevronSpan show={menulist.content}>
                                            <SideMenuItem>
                                                <SideMenuIcon>
                                                    <FontAwesomeIcon icon={menulist.icon} />
                                                </SideMenuIcon>
                                                <SidebarMenuItemLabel>{menulist.label}</SidebarMenuItemLabel>
                                            </SideMenuItem>
                                        </MenuChevronSpan>
                                    </SideMenu>

                                    <MenuDropdownContainer>
                                        {
                                            menulist.content.map(firstLevel => {
                                                return (
                                                    <SideSubMenuDrop key={firstLevel.id} to={firstLevel.url}>
                                                        <SubMenuChevronSpan show={firstLevel.content} url={firstLevel.url}>
                                                            <MenuDropdownText to={firstLevel.url}>{firstLevel.label}</MenuDropdownText>
                                                        </SubMenuChevronSpan>
                                                        <SubMenuDropdownContainer url={firstLevel.url} >
                                                            {
                                                                firstLevel.content.map(secondLevel => {
                                                                    return (
                                                                        <React.Fragment key={secondLevel.id}>
                                                                            <SubMenuDropdownText to={secondLevel.url}>{secondLevel.label}</SubMenuDropdownText>
                                                                        </React.Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </SubMenuDropdownContainer>
                                                    </SideSubMenuDrop>
                                                )
                                            })
                                        }
                                    </MenuDropdownContainer>
                                </SideMenuDrop>
                            </React.Fragment>
                        )
                    })
                }
            </SidebarContainer >
        </LeftCol>
    )
}
export default Sidebar
