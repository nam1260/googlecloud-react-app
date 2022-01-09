import Styled from "styled-components";


const StyledTitle = Styled.div`
    
    font-size: 25px;
    width: 200px;
    text-align: center;
    padding: 10px 50px;
    
`


const Title = ({currentMenu})=>{

    return (
        <StyledTitle>
            <img/>
            <span>{currentMenu.menuName}</span>
        </StyledTitle>
    )
};
export default Title;