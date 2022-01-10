
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
        if(menuId === "3001") {
            text = "넷마블은 지난 7일 넷마블컴퍼니 정기 임원인사를 통해 이승원 각자 대표를 사장으로 승진 발령하고 글로벌 총괄로 신규 임명했다. 이 사장은 글로벌 총괄을 맡아 △카밤 △잼시티 △스핀엑스 등 해외 핵심 자회사 경영에 전진 배치해 글로벌 사업 추진력을 더한다는 계획이다. \n" +
                "이 사장이 맡았던 각자 대표에는 도기욱 넷마블 최고재무책임자(CFO)를 내정했다. 도 내정자는 중앙대학교 경영학과를 졸업한 이후 CJ E&M 게임부문 재경 실장을 거쳐 재무전략담당을 맡으며 투자 및 인수 합병 등을 주도해온 인사다. \n" +
                "도 내정자는 경영전략과 관리부문을 담당한다. 권영식 대표는 기존처럼 게임사업총괄을 맡아 각자 대표 체제를 이어간다. 넷마블은 오는 2월께 이사회를 열고 도 내정자를 각자 대표로 정식 선임할 예정이다.\n" +
                "이번 조직 개편은 방 의장이 연초 신년사를 통해 밝힌 ‘강한 넷마블, 건강한 넷마블’을 위한 행보다. 이 사장의 경우 그동안 넷마블의 글로벌 사업을 도맡아 왔던 만큼 넷마블이 이번 승진을 통해 글로벌 시장에서 성과를 늘리는데 집중하려는 전략으로 풀이된다.\n" +
                "넷마블에 따르면 이 사장은 지난 2007년 넷마블에 입사한 이후 해외사업 본부장, 글로벌 전략실 상무 등을 거치며 글로벌 사업 경험과 노하우를 쌓아왔다. 지난 2014년부터는 넷마블 글로벌 담당 부사장으로 임명돼 글로벌 시장에서 경쟁력을 키우는데 역할을 했다. \n" +
                "글로벌 게임 시장에서 성과를 확대함과 동시에 중장기적 성장동력을 확보하는데도 역량을 결집할 것으로 업계는 분석한다. 이를 위해 앞서 넷마블은 글로벌 게임 시장을 중심으로 활발한 투자를 이어왔다. \n" +
                "먼저 넷마블 북미 자회사 잼시티는 지난해 9월 캐나다 모바일 게임 개발사 ‘루디아’를 인수했다. 루디아는 △쥬라기 월드:더 게임 △쥬라기 월드:얼라이브 △드래곤즈:타이탄 업라이징 등 세계적 지식재산권(IP)을 기반으로 하는 다양한 장르 모바일 게임을 개발 및 퍼블리싱하는 모바일 게임사다. \n" +
                "또한 지난해 8월에는 글로벌 모바일 소셜카지노 게임사 ‘스핀엑스’를 인수했다. 스핀엑스는 △캐시 프렌지 △랏처 슬롯 △잭팟 월드 등을 앞세워 지난해 2분기 기준 글로벌 모바일 소셜카지노 장르 매출 기업 순위 3위에 오른 게임사다. \n" +
                "빠르게 성장하는 글로벌 게임 시장에 대응해 몸집을 키운 만큼 넷마블은 올해 글로벌 매출 규모를 더욱 확대할 수 있을 것으로 업계는 보고있다. 지난해 3분기 기준으로 넷마블의 해외 매출은 4,260억원으로 전체 매출의 70%를 차지한다. 지난해 2분기 해외 매출은 4,246억원을 기록하며 전제 매출 74%를 차지했다.\n" +
                "여기에 스핀엑스, 루디아 인수에 따라 해외 매출 규모는 더욱 확대될 것으로 분석된다. 에프앤가이드는 넷마블의 지난해 4분기 매출은 전년 동기 대비 27% 증가한 7,908억원, 영업이익은 867억원으로 전년 동기 대비 5% 증가할 것으로 추산했다.\n" +
                "또한 잼시티를 통해 탈중앙화 형태의 웹3 블록체인 기반의 플레이투언(P2E) 게임 ‘챔피언스:어센션’을 공개하는 등 블록체인 게임 사업도 앞두고 있는 만큼 올해 해외 매출이 가파른 상승곡선을 그릴 것으로도 전망된다.";
        }else if(menuId === "3002") {
            text = "넷마블은 이승원 대표를 사장으로 승진 발령해 글로벌 총괄로 새로 임명하고, 이 사장이 맡았던 각자 대표에는 도기욱 최고재무책임자(CFO)를 선임한다고 9일 밝혔다.\n" +
                "\n" +
                "이 사장은 북미의 카밤, 스핀엑스, 잼시티 등 핵심적인 해외 자회사 경영에 집중하면서 글로벌 사업 추진력을 강화하는 데 집중할 예정이다. 다음 달 이사회에서 각자 대표로 정식 선임될 도 내정자는 앞으로 경영전략과 관리 부문을 담당하게 된다. 권영식 대표가 종전처럼 게임사업 총괄을 맡으면서 넷마블은 각자 대표 체제를 이어간다.\n" +
                "\n" +
                "넷마블 관계자는 “각 전문 분야를 책임지는 전략적 경영 체계를 통해 게임사업 경쟁력이 한층 강화될 것으로 기대한다”고 밝혔다.";
        }

       // text="fasfasf";
        return ContentFactory.TextComponent(text);

    };

    const getAPIComponentById = (menuId) => {

        let apiName;

        return ContentFactory.APITestComponent(apiName);
    };

    const getDetailComponentById = (menuId) => {
        console.log(menuId);
        let component;
        switch (menuId) {
            case "1001":
            case "1002":
            case "1003":
                component = getImgComponentById(menuId);
                break;
            case "2001":
                component = getAPIComponentById(menuId);
                break;
            case "2002":
                component = ContentFactory.DomainComponent();
                break;
            case "3001":
            case "3002":
                component = getTextComponentById(menuId);
                break;
            default:
                break;
        }

        console.log(component);
        return component;

    };

    return {
        getDetailComponentById
    }
}());
export default ContentDetailViewModel;