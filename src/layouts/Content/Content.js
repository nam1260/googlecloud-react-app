import {useState,useEffect,useCallback,useMemo} from "react"
import Styled from "styled-components";




const StyledTopContent = styled.section`

`
const StyledBottomContent = styled.section`

`



const StyledContent = styled.div`
    
    display: flex;
    flex-direction: column;
`

const TopContent = () => {
    return (
        <StyledTopContent>

        </StyledTopContent>
    )
};

const BottomContent = () => {
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
const Content = () => {

    return (
        <StyledContent>
            <TopContent></TopContent>
            <BottomContent></BottomContent>
        </StyledContent>
    )

};
export default Content;