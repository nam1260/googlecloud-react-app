
import Styled from "styled-components"
import MenuList from "./component/MenuList.component"


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


const SideMenu = ({isOpenSideMenu, setOpenSideMenu, setCurrentMenu}) => {
    return (
        <StyledSideMenu isOpen={isOpenSideMenu}>
            <MenuList
                setOpenSideMenu={setOpenSideMenu}
                setCurrentMenu={setCurrentMenu}
            />
        </StyledSideMenu>
    )

};
export default SideMenu;