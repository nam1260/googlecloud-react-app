import {useCallback,useEffect,useMemo,useState} from "react";
import Styled from "styled-components";

import ContentDetailViewModel from "../../../viewModel/ContentDetail.viewModel";

const StyledContentView = Styled.div`

   width: 100%;
   height: 100%;
   
`

const ContentDetail = ({currentSubMenu})=>{

    return (
        <StyledContentView>
            <ContentDetailViewModel
                currentMenuId = {currentSubMenu.menuId}
            />
        </StyledContentView>
    )
};
export default ContentDetail;