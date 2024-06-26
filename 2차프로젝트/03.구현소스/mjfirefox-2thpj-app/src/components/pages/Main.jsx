// 메인 페이지 컴포넌트 ///

// CSS불러오기
import { useEffect, useRef } from "react";
import "../../css/main_area.scss";
import App from "../plugin/App";

export default function Main() {
  const leftVal = useRef([0, 0]);
  const stopSts = useRef([false, false]);
  let tg = [0, 0];
  let oneSize = [0, 0];
  let boxes = [0, 0];

  const startFn = (seq) => {
    stopSts.current[seq] = false;
    flowFn(seq);
  };
  const stopFn = (seq) => (stopSts.current[seq] = true);

  const flowFn = (seq) => {
    console.log(oneSize[seq], leftVal.current[seq]);
    tg[seq].style.left = -leftVal.current[seq] + "px";
    leftVal.current[seq] = ++leftVal.current[seq];

    // 첫번째 한개의 크기와 같을때 잘라서 뒤로보냄
    if (leftVal.current[seq] >= oneSize[seq]) {
      boxes[seq] = tg[seq].querySelectorAll("div");
      // 내부박스 중 첫번째 것 boxes[seq][0]
      tg[seq].appendChild(boxes[seq][0]);

      // left값 초기화
      leftVal.current[seq] = 0;

      // 바로 left값 0만들어서 튀지않게함!!!
      tg[seq].style.left = "0px";

      // 한개의 크기 갱신
      boxes[seq] = tg[seq].querySelectorAll("div");
      oneSize[seq] = boxes[seq][0].offsetWidth;
      console.log("갱신크기:", oneSize[seq]);
    }

    // 멈춤상태가 false일때만 재귀호출
    if (!stopSts.current[seq]) setTimeout(() => flowFn(seq), 10);
  };

  useEffect(() => {
    const eleTg = document.querySelectorAll(".loop-station");
    console.log("loop-station:", eleTg);
    eleTg.forEach((ele, idx) => {
      tg[idx] = ele;
      console.log("대상:", ele);
      oneSize[idx] = tg[idx].querySelector("div").offsetWidth;
      console.log("초기값:", oneSize[idx], idx);

      flowFn(idx);
    });
  });
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
            <p className="민지" align="right">
              <b>Magic Strawberry Sound</b> 매직 스트로베리 사운드
              <br />
              작은 공간에서 함께 듣던 음악의 떨림을 기억합니다.
              <br />
              매직스트로베리사운드는 좋은 순간을 위한 매니지먼트를 지속합니다.
              <br />
              구성원의 다양성에 대한 존중은 긴밀한 연대로 이어지고 한계없이
              <br />
              자유로운 창작 활동의 기반이 됩니다. 우리의 창작물은 긍정적인
              <br />
              파장이 되어 당신의 일상 속 반짝이는 순간을 만듭니다.
              <br />
              매직스트로베리사운드는 이 모든 것을 ‘마법같다'고 말합니다.
            </p>
          </div>
          <div className="bbbb">
            <img src="./images/msb_logo.jpg" alt="로고" />
          </div>
          <div className="cccc">
            <p className="민지">
              We remember the moments when music touched us deeply. MAGIC
              <br />
              STRAWBERRY SOUND stands for those moments. Embracing individuality
              <br />
              allows room for creativity that knows no limits. And that
              <br />
              creativity will turn into a wave that adds sparkles to your
              <br />
              day-to-day life. MAGIC STRAWBERRY SOUND calls all this magical.
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
            <div
              className="loop-station"
              onMouseEnter={() => stopFn(0)}
              onMouseLeave={() => startFn(0)}
            >
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중중중중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요중중중중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">🍓🍒중요한식🍒🍓</span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중중중중중요중중중중요중중중중요요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요중중중중중중중요식🍒🍓
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="second-loop">
          <section className="text-marquee">
            <div
              className="loop-station"
              onMouseEnter={() => stopFn(1)}
              onMouseLeave={() => startFn(1)}
            >
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중중중중중요중중중중요중중중중요요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요중중중중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중중중중요한 소식🍒🍓
                  </span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">🍓🍒중요한식🍒🍓</span>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <span className="looping-word">
                    🍓🍒중요중중중중중중중요식🍒🍓
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="album">
          <ul>
            <li>
              <a href="#">
                <img src="./images/POWERANDRE99.jpg" alt="실리카겔앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/40.jpg" alt="옥상달빛앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/LateNightWalk.jpg" alt="십센치앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/여름깃.jpg" alt="새소년앨범" />
              </a>
            </li>
          </ul>
        </div>
        {/* <img src="./images/SLCG.jpg" alt="일단해봄" /> */}
      </div>
      {/* 5. 뮤비추천영역 */}
      <div className="music-video">
        <ul>
          <li>
            <a href="#">
              <img src="./images/SSNmv (2).jpg" alt="새소년뮤비1" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/SSNmv (2).jpg" alt="새소년뮤비1" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/SSNmv (2).jpg" alt="새소년뮤비1" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/SSNmv (2).jpg" alt="새소년뮤비1" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/SSNmv (2).jpg" alt="새소년뮤비1" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} /////////// Main /////////////////////
