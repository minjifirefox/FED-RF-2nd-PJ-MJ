// 메인 페이지 컴포넌트 ///

// CSS불러오기
import { useEffect, useRef } from "react";
import "../../css/main_area.scss";
import App from "../plugin/App";

// 제이쿼리
import $ from "jquery";

export default function Main() {
  // 흘러가는 글자 셋팅 ///////////
  const leftVal = useRef([0, 0]);
  const stopSts = useRef([false, false]);
  let tg = [0, 0];
  let oneSize = [0, 0];
  let boxes = [0, 0];

  // 앨범 슬라이드 인터발용 변수 ////
  const autoI = useRef(null);
  // 앨범 슬라이드 타임아웃용 변수 ////
  const autoT = useRef(null);
  // 앨범 자동실행 호출 한번만 체크 변수 ////
  const oneTime = useRef(true);

  const startFn = (seq) => {
    stopSts.current[seq] = false;
    flowFn(seq);
  };
  const stopFn = (seq) => (stopSts.current[seq] = true);

  const flowFn = (seq) => {
    // console.log(oneSize[seq], leftVal.current[seq]);
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
      // console.log("갱신크기:", oneSize[seq]);
    }

    // 멈춤상태가 false일때만 재귀호출
    if (!stopSts.current[seq]) setTimeout(() => flowFn(seq), 10);
  }; ///////////// flowFn함수 ////////////

  /************************************* 
    앨범 슬라이드 기능 함수 
  *************************************/
  const slideFn = (e) => {
    // 1.기본기능막기
    e.preventDefault();

    // 2.버튼구분 : is(클래스명) -> true/false
    let isR = $(e.currentTarget).is(".rb");

    // 3.슬라이드 이동함수 호출
    goSlide(isR);

    // 4.버튼 클릭시 인터발 지우기 함수호출
    clearAuto();
  }; ////////////// slideFn //////////////

  // 이동기능함수
  const goSlide = (dir) => {
    // dir - 방향(true:오른쪽, false:왼쪽)
    // 변경대상: .album-slide
    const eleTg = $(".album-slide");
    // console.log("이동버튼클릭!", dir, eleTg);

    // 3.버튼별 기능구현
    // (1) 오른쪽버튼
    if (dir) {
      // 맨앞요소 맨뒤로 이동
      eleTg.append(eleTg.find("li").first());
    } //// if ////
    // (2) 왼쪽버튼
    else {
      // 맨뒤요소 맨앞으로 이동
      eleTg.prepend(eleTg.find("li").last());
    } //// else /////
  }; /////////// goSlide함수 ////////////

  // 인터발 호출 함수 //////
  const autoFn = () => {
    console.log("인터발호출");
    autoI.current = setInterval(() => {
      // 오른쪽방향 호출
      goSlide(true);
    }, 2000);
  }; /////////// autoFn ////////////

  // 인터발 삭제 함수 ////
  const clearAuto = () => {
    console.log("인터발지우기 함수호출!");
    // 인터발지우기
    clearInterval(autoI.current);
    // 타임아웃지우기
    clearTimeout(autoT.current);
    // 타임아웃으로 다시 인터발호출셋팅
    autoT.current = setTimeout(autoFn, 3000);
  }; /////////// clearAuto //////////

  // 화면 랜더링 구역 //////////
  useEffect(() => {
    // 1. 흘러가는 글자 셋팅호출
    const eleTg = document.querySelectorAll(".loop-station");
    // console.log("loop-station:", eleTg);
    eleTg.forEach((ele, idx) => {
      tg[idx] = ele;
      // console.log("대상:", ele);
      oneSize[idx] = tg[idx].querySelector("div").offsetWidth;
      // console.log("초기값:", oneSize[idx], idx);

      flowFn(idx);
    }); ///// forEach /////

    // 2. 앨범 슬라이드 자동호출을 위한
    // 스크롤 이벤트 셋팅하기
    // 대상: .album
    const albumEle = document.querySelector(".album");
    // 기준: 윈도우 1/3
    const winH = (window.innerHeight / 3) * 2;
    console.log("윈도우1/3:", winH);

    $(window).on("scroll", () => {
      let pos = albumEle.getBoundingClientRect().top;
      console.log(pos);

      // 한번만 실행 변수가 true 일때 실행
      if (pos < winH && pos > -winH/2 && oneTime.current) {
        oneTime.current = false;
        console.log("자동한번만!!!!!!!!");
        // 바로실행한번
        goSlide(true);
        // 인터발호출
        autoFn();
      }
      // 기타의 경우 다시 멈추기
      else if (
        (pos > winH && !oneTime.current) ||
        (pos < -winH/2 && !oneTime.current)
        ) {
        // 한번만 상태값 반대로 바꾸기
        oneTime.current = true;
        // 인터발지우기
        clearInterval(autoI.current);
        // 타임아웃지우기
        clearTimeout(autoT.current);
      }
    });
  }); ///////// useEffect ////////

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
        <div className="first-loop loop">
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

        <div className="second-loop loop">
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
          <ul className="album-slide">
            <li>
              <a href="#">
                <img src="./images/여름깃.jpg" alt="새소년앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/40.jpg" alt="옥상달빛앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/POWERANDRE99.jpg" alt="실리카겔앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/LateNightWalk.jpg" alt="십센치앨범" />
              </a>
            </li>
            {/* 잘라낼때 반복단위 슬라이드 아랫쪽 li */}
            <li>
              <a href="#">
                <img src="./images/여름깃.jpg" alt="새소년앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/40.jpg" alt="옥상달빛앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/POWERANDRE99.jpg" alt="실리카겔앨범" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/LateNightWalk.jpg" alt="십센치앨범" />
              </a>
            </li>
          </ul>
          {/* 버튼박스 */}
          <aside className="btn-box">
            <a href="#" className="abtn rb" onClick={slideFn}>
              <img src="./images/right_btn.png" alt="오른쪽버튼" />
            </a>
            <a href="#" className="abtn lb" onClick={slideFn}>
              <img src="./images/left_btn.png" alt="왼쪽버튼" />
            </a>
          </aside>
        </div>
        {/* <img src="./images/SLCG.jpg" alt="일단해봄" /> */}
      </div>
      {/* 5. 뮤비추천영역 */}
      <div className="music-video">
        <ul>
          <li>
            <a href="https://youtu.be/tzL4A8hyXc8?si=VuLhIg26aU7p_O9H" target="_blank">
              <img src="./images/SSNmv (2).jpg" alt="새소년뮤비1" />
            </a>
            <p>[M/V] 새소년(SESONEON) - 긴 꿈</p>
          </li>
          <li>
            <a href="https://youtu.be/DIPxnt5vnhU?si=G-IHjI-v-d-fKrnW" target="_blank">
              <img src="./images/silicagelmv (3).jpg" alt="실리카겔뮤비1" />
            </a>
            <p>[M/V] 실리카겔(Silica Gel) - T + Tik Tak Tok (feat. So!YoON!)</p>
          </li>
          <li>
            <a href="https://youtu.be/Ywzq7q66iJ4?si=2l_N4GcStrnoGvw1" target="_blank">
              <img src="./images/OKDALmv (1).png" alt="옥상달빛뮤비1" />
            </a>
            <p>[Lyric Video] 옥상달빛(OKDAL) - Happy Ending</p>
          </li>
          <li>
            <a href="https://youtu.be/DA-vauI8hMI?si=4ZNVVs9xConotCGh" target="_blank">
              <img src="./images/10cmmv (1).png" alt="십센치뮤비1" />
            </a>
            <p>[M/V] 10CM - 소년(Dear)</p>
          </li>
          <li>
            <a href="https://youtu.be/o3aRASHu1vw?si=ydjtMXrA8MTEjVJB" target="_blank">
              <img src="./images/OKDALmv (2).jpg" alt="옥상달빛뮤비1" />
            </a>
            <p>[M/V] 옥상달빛(OKDAL) - Coming of age(어른이 될 시간)</p>
          </li>
          <li>
            <a href="https://youtu.be/23sM_7PtNvY?si=rUTWcWba6lm8KuvG" target="_blank">
              <img src="./images/silicagelmv (4).jpg" alt="실리카겔뮤비1" />
            </a>
            <p>[M/V] 실리카겔(Silica Gel) - Ryudejakeiru</p>
          </li>
        </ul>
      </div>
    </>
  );
} /////////// Main /////////////////////
