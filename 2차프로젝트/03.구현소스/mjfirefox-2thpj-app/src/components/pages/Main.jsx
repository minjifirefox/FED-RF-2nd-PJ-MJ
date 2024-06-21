// 메인 페이지 컴포넌트 ///

// CSS불러오기
import "../../css/main_area.scss";
import App from "../plugin/App";

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div className="open">
        {/* <h1>메인영역</h1> */}
        <img src="./images/msb_open.gif" alt="오픈" />
      </div>
      {/* 2. 소개영역 */}
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
      {/* 3. 소속가수영역 */}
      <App />
      {/* <div className="artists">
        <ul>
          <li>
            <img src="./images/SLCG.jpg" alt="실리카겔" />
          </li>
          <li>
            <img src="./images/OKDAL.jpg" alt="옥상달빛" />
          </li>
          <li>
            <img src="./images/10CM.jpg" alt="십센치" />
          </li>
          <li>
            <img src="./images/SESONEON.jpg" alt="새소년" />
          </li>
        </ul>
      </div> */}
      {/* 4. 앨범소개영역 */}
      <div className="release">
        <div className="first-loop">
          <section className="text-marquee">
            <div className="loop-station" /* onMouseEnter='handleMouse(true)' onMouseLeave='handleMouse(false)' */>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="second-loop">
          <section className="text-marquee">
            <div className="loop-station" /* onMouseEnter='handleMouse(true)' onMouseLeave='handleMouse(false)' */>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요한 소식🍒🍓
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} /////////// Main /////////////////////
