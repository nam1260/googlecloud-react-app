
import * as ContentFactory from "../shared/component/ContentFactory.component";


const ContentDetailViewModel = (function () {

    const getImgComponentById = (menuId) => {
        let imgUrl;

        if(menuId === "1001") {
            imgUrl = "/assets/images/imgReport.png";
        }
        else if(menuId === "1002") {
            imgUrl = "/assets/images/imgPaymentMethod.png";
        }
        else if(menuId === "1003") {
            imgUrl = "/assets/images/imgDocument.png";
        }

        return ContentFactory.ImageComponent(imgUrl);
    };

    const getTextComponentById = (menuId) => {

        let text = "";

        return ContentFactory.TextComponent(text);

    };

    const getAPIComponentById = (menuId) => {

        let apiName;

        return ContentFactory.APITestComponent(apiName);
    };

    const getDetailComponentById = (menuId) => {
        let component;
        switch (menuId) {
            case "1001":
            case "1002":
            case "1003":
                component = getImgComponentById(menuId);
                break;
            case "2001":
            case "2002":

                break;
            case "3001":
            case "3002":

                break;
            default:
                break;
        }
        return component;

    };

    return {
        getDetailComponentById
    }
}());
export default ContentDetailViewModel;