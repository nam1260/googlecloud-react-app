import {useCallback,useMemo} from "react";
import Styled from "styled-components"


const StyledContentView = Styled.div`

   width: 100%;
   height: 100%;
   
`

const CurrentView = ({currentSubMenu})=>{
    console.log("CurrentView");
    console.log(currentSubMenu);
    const curSubMenuDetail = useMemo(()=>{

        console.log("curSubMenuDetail " +currentSubMenu.menuName);
        return currentSubMenu.menuId;
        // switch (currentSubMenu.id) {
        //     case "1001":
        //         break;
        //     case "1002":
        //         break;
        //     case "2001":
        //         break;
        //     case "2002":
        //         break;
        //     case "3001":
        //         break;
        //     case "3002":
        //         break;
        //
        //     default:
        //         break;
        // }
    },[currentSubMenu.menuId]);

    return (
        <StyledContentView>
            <div>{curSubMenuDetail}</div>
        </StyledContentView>
    )
};
export default CurrentView;