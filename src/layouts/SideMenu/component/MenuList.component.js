import { useCallback } from 'react';
import MenuData from "../../../resources/Menu"
import Styled from 'styled-components';


const StyledMenu = Styled.li`

    font-size: 25px;
    line-height: 52px;
    letter-spacing: -.8px;
    color: #101010;
    margin-bottom: 27px;
    cursor: pointer;
    display: flex;
    
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
    
    & > img {
        max-height: 44px;
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
    console.log(menu.imgUrl);
    const onClickMenu = useCallback(()=>{
        console.log("onClickMenu");
        console.log(menu);
        setOpenSideMenu(false);
        setCurrentMenu(menu);
    },[]);

    return (
        <StyledMenu key={key} onClick={onClickMenu}>
            <img src={menu.imgUrl}/>
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
