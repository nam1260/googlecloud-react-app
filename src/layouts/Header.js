import Styled from "styled-components"
import {useCallback, useState, useEffect, useMemo, useRef} from "react"


const MENU_ICON_PATH = "/assets/images/list.png";

const TEXT_MAIN_TITLE = "Google Cloud Platform";

const StyledHeader = Styled.div`
    
    position: relative;
    height: 50px;
    display: flex;
    z-index: 2;
    top: 0;
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


const Menu = ({onClickHandler}) => {

    return (
        <div onClick={() => onClickHandler(true)}>
            <img alt="none" className={"top-icon"} src={MENU_ICON_PATH}/>
        </div>
    )

}

const MainTitle = ({title}) => {
    return (
        <div>
            <span>{title}</span>
        </div>
    )
}

/**
 * 앱 상단 헤더 표시
 * @returns {*}
 * @constructor
 */
const Header = ({onClickHandler})=> {

  return (
      <StyledHeader>
          <Menu/>
          <MainTitle title={TEXT_MAIN_TITLE}/>
      </StyledHeader>

  )
};
export default Header;