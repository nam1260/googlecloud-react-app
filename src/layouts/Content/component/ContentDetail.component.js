import {useCallback,useEffect,useMemo,useState} from "react";
import Styled from "styled-components";

import ContentDetailViewModel from "../../../viewModel/ContentDetail.viewModel";

const StyledContentView = Styled.div`

   width: 100%;
   height: 100%;
   
`

const ContentDetail = ({currentSubMenu})=>{
    console.log("ContentDetail");
    console.log(currentSubMenu);


    const curSubMenuDetail = useMemo(()=>{

        return ContentDetailViewModel.getDetailComponentById(currentSubMenu.menuId);

    },[currentSubMenu.menuId]);


    return (
        <StyledContentView>
            <div>{curSubMenuDetail}</div>
        </StyledContentView>
    )
};
export default ContentDetail;