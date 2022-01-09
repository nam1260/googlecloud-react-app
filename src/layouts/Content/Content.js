import {useState,useEffect,useCallback,useMemo} from "react"
import Styled from "styled-components";

 import Title from "./component/Title.component";
 import SubMenu from "./component/SubMenuList.component";
 import CurrentView from "./component/CurrentView.component";
 import SubTitle from "./component/SubTitle.Component"



const StyledTopContent = Styled.section`
    position: relative;
    max-height: 100px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #808080;
    box-sizing: border-box;

`
const StyledBottomContent = Styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
`


const StyledContent = Styled.div`
    
    display: flex;
    flex-direction: column;
`

const TopContent = ({currentMenu,currentSubMenu}) => {
    return (
        <StyledTopContent>
            <Title currentMenu={currentMenu}/>
            <SubTitle currentSubMenu={currentSubMenu}/>
        </StyledTopContent>
    )
};

const BottomContent = ({currentMenu,currentSubMenu,setCurrentSubMenu}) => {
    return (
        <StyledBottomContent>
            <SubMenu currentMenu={currentMenu} setCurrentSubMenu={setCurrentSubMenu}/>
            <CurrentView currentSubMenu={currentSubMenu}/>
        </StyledBottomContent>
    )
};



/**
 * 4가지 영역 노출
 * //메뉴 제목
 * //
 * @returns {*}
 * @constructor
 */
const Content = ({currentMenu}) => {
    console.log(currentMenu);

    const [currentSubMenu, setCurrentSubMenu] = useState(currentMenu.subMenu[0]);

    useEffect(()=>{
        setCurrentSubMenu(currentMenu.subMenu[0]);
    },[currentMenu.menuId]);

    return (
        <StyledContent>
            <TopContent
                currentMenu={currentMenu}
                currentSubMenu={currentSubMenu}
            />
            <BottomContent
                currentMenu={currentMenu}
                currentSubMenu={currentSubMenu}
                setCurrentSubMenu={setCurrentSubMenu}
            />
        </StyledContent>
    )

};
export default Content;