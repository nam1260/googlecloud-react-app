import {useState, useEffect, useCallback, useMemo} from "react"
import Styled from "styled-components"

import MenuData from "../resources/Menu"


const StyledSideMenu = Styled.div` 
    position: fixed;
    top: 70px;
    z-index: 4;
    height: 100%;
    left: ${props => props.isOpen ? "0px" : "-200px"};
    width: 200px;
    font-family: "AppleSDGothicNeo";
    background-color: #fff;
    transition: ${props => props.isOpen ? "left .3s ease-out;" : "left .3s ease-in,width .3s ease-in;"};  
`;

const StyledMenu = Styled.li`

    font-size: 25px;
    line-height: 1.25;
    letter-spacing: -.8px;
    color: #101010;
    margin-bottom: 27px;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
    
    & > span{
        margin-left: 20px;
    }
`

const StyledMenuList = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
`
const Menu = ({menu,key,setOpenSideMenu}) => {

    const onClickMenu = useCallback(()=>{
        setOpenSideMenu(false);
    },[]);

    return (
        <StyledMenu key={key} onClick={onClickMenu}>
            <span>{menu.menuName}</span>
        </StyledMenu>
    )
}

const MenuList = ({menuData,setOpenSideMenu}) => {
    console.log(menuData);

    return (

        menuData.length > 0 ?
        <StyledMenuList>
            {menuData.map((item,idx)=>{
               return <Menu key={idx} menu={item} setOpenSideMenu={setOpenSideMenu}/>
            })}
        </StyledMenuList> : ""
    )

};

const SideMenu = ({isOpenSideMenu, setOpenSideMenu}) => {
    console.log("sideMenu" +isOpenSideMenu);
    return (
        <StyledSideMenu isOpen={isOpenSideMenu}>
            <MenuList menuData = {MenuData} setOpenSideMenu={setOpenSideMenu}></MenuList>
        </StyledSideMenu>
    )

};
export default SideMenu;