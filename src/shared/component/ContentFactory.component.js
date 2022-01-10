import {useCallback,useState,useEffect,useMemo} from "react";


export const APITestComponent = () => {

    return (
        <div></div>
    )

};


export const InputComponent = ({text}) => {
    return (
        <textarea type ="text"></textarea>
    )
}



export const TextComponent = ({text}) => {
    return (
        <div></div>
    )
}


export const ImageComponent = (url) => {
    return (
        <div>
            <img src={url}/>
        </div>
    )
}