// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";

// CSS불러오기
import "../../css/top_area.scss";

export default function TopArea() {

  const goNav = useNavigate();

  const goPage = (e)=>{
    // 기본이동막기
    e.preventDefault();
    // 선택된 메뉴
    let txt = e.target.innerText;
    console.log("페이지로가!",txt);

    // 페이지이동
    goNav("/artist",{state:{tit:txt}});
    
  }
  //// 코드 리턴구역 //////////////
  return (
    <>
      <header>
        <img src="./images/logo.png" alt="로고" />
      </header>
      <nav className="gnb">
        <ul>
          <li>
            <Link to="/artist">Artist</Link>
            <ol className="sub-menu">
              <li>
                <a href="#" onClick={goPage}>Silica Gel</a>
              </li>
              <li>
                <a href="#" onClick={goPage}>10CM</a>
              </li>
              <li>
                <a href="#" onClick={goPage}>OKDAL</a>
              </li>
              <li>
                <a href="#" onClick={goPage}>SE SO NEON</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#">Release</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </nav>
    </>
  );
} /////////// TopArea /////////////////////
