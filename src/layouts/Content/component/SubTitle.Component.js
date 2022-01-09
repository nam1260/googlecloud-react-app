import Styled from "styled-components";


const StyledSubTitle = Styled.div`

    font-size: 25px;
    vertical-align: middle;
    padding: 10px 50px;
    width: 100%;
    font-weight: 600;
    
`


const SubTitle = ({currentSubMenu})=>{
    console.log(currentSubMenu)
    return (
        <StyledSubTitle>
            <span>{currentSubMenu.menuName}</span>
        </StyledSubTitle>
    )
};
export default SubTitle;