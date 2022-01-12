import React,{useCallback,useState,useEffect,useMemo} from "react";
import Styled from "styled-components";


const StyledDomainComponent = Styled.div`
     padding: 50px;
     display: flex;
     flex-direction: column;
     font-size: 25px;
     font-weight: 600;
     text-align: center;
     
     & > a{
     
      text-decoration:underline;
     }
    
`


export const DomainComponent = () => {

    return (
        <StyledDomainComponent>
            <a href="https://github.com/nam1260/" target='_blank'>gitHub 확인하기</a>
            <br/>
            <br/>
            <a href="https://www.youronlymoment.com/" target='_blank'>개인 프로젝트 작업 중인 사이트 : 당신에게 선물 될 최고의 순간 ,Moment </a>
        </StyledDomainComponent>


    )
};
React.memo(DomainComponent);



const StyledTextComp = Styled.div`
    position: absolute;
    padding: 50px;

`;
export const TextComponent = (text) => {


    return (
        <StyledTextComp>
            <p>{text}</p>
        </StyledTextComp>
    )
};
React.memo(TextComponent);



const StyledImageComp = Styled.div`
    & > img {
        width: 100%;
        height: auto;
    }
`
export const ImageComponent = (url) => {

    return (
        <StyledImageComp>
            <img src={url}/>
        </StyledImageComp>
    )
}
React.memo(ImageComponent);