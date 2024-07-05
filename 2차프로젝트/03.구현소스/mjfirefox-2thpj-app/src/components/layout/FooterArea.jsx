// 하단영역 컴포넌트 ///

// CSS불러오기
import "../../css/footer_area.scss";

export default function FooterArea() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div className="footer">
        <h2 style={{ backgroundColor: "black", color: "white", padding: "40px" }}>
          E MAIL
          <br />
          msbsound@magicstrawberry.co.kr <br />
          매직스트로베리사운드 대표 메일 <br />
          ok@magicstrawberry.co.kr <br />
          아티스트 섭외 및 문의 <br />
          sjkim@magicstrawberry.co.kr <br />
          레이블 협업 문의 <br />
          FAX <br />
          02-336-5423 <br />
        </h2>
        <div className="footer-logo">
          <img src="./images/MSB_footer_logo.jpg" alt="밑로고" />
        </div>
      </div>
    </>
  );
} /////////// FooterArea /////////////////////
