import {useCallback,useEffect} from 'react';
import Styled from 'styled-components';
import MenuData from "../../../resources/Menu";


const StyledSubMenuList = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
    width: 200px;
    
    @media (max-width: 768px) {
        display: none;  
    }
  
`

const StyledSubMenu = Styled.li`
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

const SubMenu = ({menu,key, setCurrentSubMenu}) => {
    const onClickMenu = useCallback(()=>{
        console.log("onClickMenu");
        console.log(menu);
        setCurrentSubMenu(menu);
    },[menu]);


    return (
        <StyledSubMenu
            key={key} onClick={onClickMenu}>
            <span>{menu.menuName}</span>
        </StyledSubMenu>
    )
}

const SubMenuList = ({currentMenu, setCurrentSubMenu}) => {
    console.log("render SubMenuList");
    console.log(currentMenu);

    return (
        currentMenu.subMenu.length > 0 ?
            <StyledSubMenuList>
                {currentMenu.subMenu.map((item, idx) => {
                    return <SubMenu
                        key={idx}
                        menu={item}
                        setCurrentSubMenu={setCurrentSubMenu}
                    />
                })}
            </StyledSubMenuList> : ""

    )
};
export default SubMenuList;