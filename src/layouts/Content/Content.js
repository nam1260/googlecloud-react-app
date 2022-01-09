import {useState,useEffect,useCallback,useMemo} from "react"
import Styled from "styled-components";

import Title from "./component/Title.component";
import SubTitle from "./component/SubTitle.component";
import SubMenu from "./component/SubMenu.component";
import CurrentView from "./component/CurrentView.component";



const StyledTopContent = Styled.section`

`
const StyledBottomContent = Styled.section`

`


const StyledContent = Styled.div`
    
    display: flex;
    flex-direction: column;
`

const TopContent = ({currentMenu}) => {
    return (
        <StyledTopContent>

        </StyledTopContent>
    )
};

const BottomContent = ({currentMenu}) => {
    return (
        <StyledBottomContent>

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

    return (
        <StyledContent>
            <TopContent currentMenu={currentMenu}></TopContent>
            <BottomContent currentMenu={currentMenu}></BottomContent>
        </StyledContent>
    )

};
export default Content;