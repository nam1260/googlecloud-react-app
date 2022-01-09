import Styled from "styled-components"
import {useCallback, useState, useEffect, useMemo, useRef} from "react"

import Menu from "./component/Menu.component"
import MainTitle from "./component/MainTitle.component"

const TEXT_MAIN_TITLE = "Google Cloud Platform";

const StyledHeader = Styled.div`
    
    position: relative;
    height: 50px;
    display: flex;
    z-index: 2;
    background-color: #0096ff;
    flex-direction: row;
    justify-content: left;
    font-size: 1.5em;
    vertical-align: center;
    padding: 10px 50px;
    
    
    & > div {
        display: flex;
        vertical-align: center;
        margin-right: 10px;
        cursor: pointer;
        & > img {
            vertical-align: middle;
        }
        
        & > span {
            font-size: 35px;
            color: #ffffff;
            vertical-align: middle;
        }
    }

`

/**
 * 앱 상단 헤더 표시
 * @returns {*}
 * @constructor
 */
const Header = ({isOpenSideMenu, setOpenSideMenu})=> {

  return (
      <StyledHeader>
          <Menu isOpenSideMenu = {isOpenSideMenu} setOpenSideMenu = {setOpenSideMenu}/>
          <MainTitle title={TEXT_MAIN_TITLE}/>
      </StyledHeader>

  )
};
export default Header;