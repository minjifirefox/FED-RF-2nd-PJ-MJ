import React from "react";
import "../../css/artist.scss";
import { useLocation } from "react-router-dom";

function Artist() {
  // 라우터 전달값 받기
  const { state } = useLocation();

  console.log(state);

  // 아티스트 이름
  let artiName = state.tit;

  // 키네임으로 모두 변경가능하게 할것!!!
  let keyName = state.tit.replace(/\s/g, "_");

  let data = {
    "Silica Gel": {
      소제목: "실리카겔은 옮겼다!",
      분류: "ssss",
      내용: "ssss",
    },
    "10CM": {
      소제목: "ccc",
      분류: "ccccc",
      내용: "cccccc",
    },
    "OKDAL": {
      소제목: "ooo",
      분류: "ooooo",
      내용: "oooooooo",
    },
    "SE SO NEON": {
      소제목: "sss",
      분류: "ssssss",
      내용: "ssssss",
    },
  };

  return (
    <div className="container">
      <div className="scrollable left scbar">
        {/* 왼쪽 영역에 표시할 내용 */}
        <img src={"/images/artist/" + keyName + "/main.jpg"} alt="" />
        <h2>{artiName}</h2>
        <p>{data[artiName]["소제목"]}</p>
        <p>{data[artiName]["분류"]}</p>
        <p>{data[artiName]["내용"]}</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
      </div>
      <div className="scrollable right scbar">
        {/* 오른쪽 영역에 표시할 내용 */}
        <h2>오른쪽 스크롤 영역</h2>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
      </div>
    </div>
  );
}

export default Artist;
