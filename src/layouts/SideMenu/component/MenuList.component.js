import { useCallback } from 'react';
import MenuData from "../../../resources/Menu"
import Styled from 'styled-components';


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

const Menu = ({menu,key,setOpenSideMenu,setCurrentMenu}) => {

    const onClickMenu = useCallback(()=>{
        console.log("onClickMenu");
        console.log(menu);
        setOpenSideMenu(false);
        setCurrentMenu(menu);
    },[]);

    return (
        <StyledMenu key={key} onClick={onClickMenu}>
            <span>{menu.menuName}</span>
        </StyledMenu>
    )
}


const MenuList = ({setOpenSideMenu,setCurrentMenu}) => {

    return (
        MenuData.length > 0 ?
            <StyledMenuList>
                {MenuData.map((item,idx)=>{
                    return <Menu
                        key={idx}
                        menu={item}
                        setOpenSideMenu={setOpenSideMenu}
                        setCurrentMenu={setCurrentMenu}
                    />
                })}
            </StyledMenuList> : ""
    )

};
export default MenuList;
