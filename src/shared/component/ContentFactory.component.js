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

    const textContent = useMemo((()=>text),[text]);

    return (
        <StyledTextComp>
            <span>{textContent}</span>
        </StyledTextComp>
    )
};



export const ImageComponent = (url) => {

    const selectedImgUrl = useMemo((()=>url),[url]);
    return (
        <div>
            <img src={selectedImgUrl}/>
        </div>
    )
}