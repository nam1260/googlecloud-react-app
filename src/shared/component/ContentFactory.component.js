import {useCallback,useState,useEffect,useMemo} from "react";
import Styled from "styled-components";





export const APITestComponent = () => {

    return (
        <div></div>
    )

};


const StyledTextComp = Styled.div`
    position: absolute;
    padding: 50px;

`;
export const TextComponent = (text) => {


    return (
        <StyledTextComp>
            <span>{text}</span>
        </StyledTextComp>
    )
};



export const ImageComponent = (url) => {

    return (
        <div>
            <img src={url}/>
        </div>
    )
}