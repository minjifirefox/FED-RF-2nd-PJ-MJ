// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link } from "react-router-dom";

// CSS불러오기
import "../../css/top_area.scss";

export default function TopArea() {
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
