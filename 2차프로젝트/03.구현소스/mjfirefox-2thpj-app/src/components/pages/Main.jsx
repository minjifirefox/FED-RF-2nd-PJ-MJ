// 메인 페이지 컴포넌트 ///

// CSS불러오기
import "../../css/main_area.scss";

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div className="open">
        {/* <h1>메인영역</h1> */}
        <img src="./images/msb_open.gif" alt="오픈" />
      </div>
      <div className="intro">
        <div className="centerlogo">
          <div className="aaaa">
            <p className="민지">
              나는 민지야
            </p>
            </div>
          <div className="bbbb">
            <img src="./images/msb_logo.jpg" alt="로고" />
          </div>
          <div className="cccc">
          <p className="민지">
            너도 민지니?
          </p>
            </div>
        </div>
      </div>
    </>
  );
} /////////// Main /////////////////////
