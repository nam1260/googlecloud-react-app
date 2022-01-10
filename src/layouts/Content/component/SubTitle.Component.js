import {useCallback} from "react";
import Styled from "styled-components";


const StyledSubTitle = Styled.div`

    font-size: 25px;
    vertical-align: middle;
    padding: 10px 50px;
    width: 100%;
    font-weight: 600;
    
    & > a{
    
        font-size: 20px;
        margin-left: 20px;
    
    }
    
`


const SubTitle = ({currentSubMenu})=>{
    console.log(currentSubMenu)

    const onClickDesc = useCallback((e)=>{
        alert(e.target.innerText);

    },[]);
    return (
        <StyledSubTitle>
            <span>{currentSubMenu.menuName}</span>
            <a onClick={onClickDesc}>{currentSubMenu.desc}</a>
        </StyledSubTitle>
    )
};
export default SubTitle;