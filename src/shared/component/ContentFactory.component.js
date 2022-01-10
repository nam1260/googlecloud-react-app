import {useCallback,useState,useEffect,useMemo} from "react";
import Styled from "styled-components";



export const APITestComponent = () => {

    return (
        <div></div>
    )

};


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
            <a onClick={()=>{console.log("onclick"); window.open("https://github.com/nam1260/", '_blank')}}>gitHub 확인하기</a>
            <br/>
            <br/>

            <a onClick={()=>{console.log("onclick"); window.open("https://www.youronlymoment.com/", '_blank')}}>개인 프로젝트 작업 중인 사이트 : 당신에게 선물 될 최고의 순간 ,Moment </a>

        </StyledDomainComponent>


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