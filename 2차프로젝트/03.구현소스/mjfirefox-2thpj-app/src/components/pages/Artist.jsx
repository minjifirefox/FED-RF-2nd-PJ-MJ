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
      가수: "실리카겔",
      소제목1: "DISCOGRAPHY",
      분류: [
        "2023 – Album – [POWER ANDRE 99]",
        "2023 – Single – [Tik Tak Tok]",
        "2023 – EP – [Machine Boy]",
        "2023 – Single – [Mercurial]",
        "2022 – Single – [NO PAIN]",
        "2022 – Single – [I’MMORTAL (feat. sogumm)]",
        "2021 – Single – [Desert Eagle]",
        "2021 – Single – [S G T A P E – 01]",
        "2021 – Single – [Hibernation]",
        "2020 – Single – [Kyo181]",
        "2017 – EP – [SiO2.nH2O]",
        "2017 – Single – [Space Angel]",
        "2016 – Album – [실리카겔]",
        "2016 – Single – [Sister]",
        "2016 – Single – [두개의 달]",
        "2015 – EP – [새삼스레 들이켜본 무중력 사슴의 다섯가지 시각]",
      ],

      // "2023 – Album – [POWER ANDRE 99]"
      // "2023 – Single – [Tik Tak Tok]"
      // "2023 – EP – [Machine Boy]"
      // "2023 – Single – [Mercurial]"
      // "2022 – Single – [NO PAIN]"
      // "2022 – Single – [I’MMORTAL (feat. sogumm)]"
      // "2021 – Single – [Desert Eagle]"
      // "2021 – Single – [S G T A P E – 01]"
      // "2021 – Single – [Hibernation]"
      // "2020 – Single – [Kyo181]"
      // "2017 – EP – [SiO2.nH2O]"
      // "2017 – Single – [Space Angel]"
      // "2016 – Album – [실리카겔]"
      // "2016 – Single – [Sister]"
      // "2016 – Single – [두개의 달]"
      // "2015 – EP – [새삼스레 들이켜본 무중력 사슴의 다섯가지 시각]"

      소제목2: "AWARD",
      내용: [
        "2024 – 제21회 한국대중음악상 올해의 음악인",
        "2024 – 제21회 한국대중음악상 최우수 모던록 노래",
        "2024 – 제21회 한국대중음악상 최우수 모던록 음반",
        "2023 – 제15회 멜론뮤직어워드 베스트 뮤직스타일",
        "2023 – 제20회 한국대중음악상 최우수 모던록 노래",
        "2022 – 제19회 한국대중음악상 최우수 모던록 노래",
        "2017 – 제14회 한국대중음악상 올해의 신인",
        "2016 – EBS스페이스 공감 올해의 헬로루키 대상",
        "2016 – 한국콘텐츠진흥원 K-루키즈 대상",
      ],

      // "2024 – 제21회 한국대중음악상 올해의 음악인"
      // "2024 – 제21회 한국대중음악상 최우수 모던록 노래"
      // "2024 – 제21회 한국대중음악상 최우수 모던록 음반"
      // "2023 – 제15회 멜론뮤직어워드 베스트 뮤직스타일"
      // "2023 – 제20회 한국대중음악상 최우수 모던록 노래"
      // "2022 – 제19회 한국대중음악상 최우수 모던록 노래"
      // "2017 – 제14회 한국대중음악상 올해의 신인"
      // "2016 – EBS스페이스 공감 올해의 헬로루키 대상"
      // "2016 – 한국콘텐츠진흥원 K-루키즈 대상"
    },

    "10CM": {
      가수: "십센치",
      소제목1: "DISCOGRAPHY",
      분류: [
        "2024 – Single – 5.6 [너랑 밤새고 싶어]",
        "2024 – Single – 5.5 [소년]",
        "2023 – Single – 5.4 [부동의 첫사랑]",
        "2023 – EP – [Remake 1.0]",
        "2022 – Single – 10CM X BIG Naughty [딱 10CM만]",
        "2022 – Single –  [5.3]",
        "2021 – EP – [The 3rd EP]",
        "2021 – Single –  [5.2 (Feat. 이수현)]",
        "2020 – Single –  [5.1]",
        "2020 – Single –  [Tight(4.5)]",
        "2019 – Single –  [방에 모기가 있어(4.4)]",
        "2019 – Single –  [4.3]",
        "2018 – Single –  [4.1]",
        "2017 – Album – [4.0]",
        "2017 – Single – [HELP]",
        "2016 – Single – [3.3]",
        "2016 – Single – [3.2]",
        "2015 – Single – [3.1]",
        "2014 – Album – [3.0]",
        "2013 – EP – [The 2nd EP]",
        "2012 – Album – [2.0]",
        "2011 – Album – [1.0]",
        "2010 – EP – [The 1st EP]",
      ],

      소제목2: "AWARD",

      내용: [
        "2016  제8회 멜론뮤직어워드 포크블루스 부문",
        "2015  제7회 멜론뮤직어워드 포크부문",
        "2011  제8회 한국대중음악상 최우수 팝 노래 부문",
        "2010  M.NET 아시안 뮤직 어워드 올해의 발견상",
      ],
    },
    OKDAL: {
      가수: "옥상달빛",
      소제목1: "DISCOGRAPHY",
      분류: [
        "2024 – Album – [40]",
        "2024 – Single – [Happy Ending]",
        "2022 – Single – [세레머니(Ceremony)]",
        "2022 – Single – [평범한 엔딩 (옥상달빛 X LH 한국토지주택공사)]",
        "2021 – Single – MSB SOUND X VIVO [잘 먹고 잘 사는 법]",
        "2021 – Single – [푸른밤]",
        "2020 – EP – [Still a Child]",
        "2019 – Single – [Good Night]",
        "2019 – Single – [그대로도 아름다운 너에게]",
        "2018 – Single – [밤밤밤]",
        "2018 – Single – [발란스]",
        "2018 – Single – [직업병]",
        "2018 – Single – [청춘길일 (靑春吉日)]",
        "2017 – Single – [어른이 될 시간]",
        "2017 – Single – [월월월월금]",
        "2016 – Single – [좋은 생각이 났어, 니 생각] with 하상욱",
        "2016 – EP – [RE:TAG]",
        "2015 – Single – [희한한 시대]",
        "2014 – Single – [또 고마워서 만든 노래]",
        "2014 – Single – [가끔은 그래도 괜찮아]",
        "2014 – Single – [Enchante(만나서 반가워요)]",
        "2013 – Album – [Where]",
        "2013 – Single – [새로와]",
        "2012 – Single – [서로 (EACH OTHER)]",
        "2011 – Album – [28]",
        "2010 – EP – [옥탑라됴]",
      ],

      소제목2: "PARTICIPATION",

      내용: [
        "2023 – [최정훈의 밤의 공원] Reː Wake x 옥상달빛 ‘하드코어 인생아’",
        "2020 – 드라마 <허쉬> OST ‘당신의 안녕 (Say hello to me)’",
        "2020 – 드라마 <경우의 수> OST ‘서로’",
        "2019 – 드라마 <청일전자 미쓰리> OST ‘행운을 빌어요’",
        "2019 – 모바일 게임 <BTS WORLD> OST ‘라라라’",
        "2019 – MBC <지금 1위는?> ‘마음에 쓰는 편지’",
        "2019 – [님 찾아가는 길] (MBC 라디오 ‘대한민국 임시정부 수립 100주년 특별기획’ 주제곡) ‘님 찾아가는 길’",
        "2017 – [마음으로 부르는 노래] (청각장애 어린이를 위한 노래) ‘마음으로 부르는 노래’",
        "2016 – 드라마 <혼술남녀> OST ‘떠날 수 있을까’",
        "2015 – 드라마 <너를 사랑한 시간> OST ‘내 사랑의 노래’",
        "2014 – 드라마 <미스코리아> OST ‘그럴 수 있잖아’",
        "2012 – 드라마 <로맨스가 필요해> OST ‘칵테일 사랑’ (with 신재)",
        "2012 – 드라마 <그대를 사랑합니다> OST ‘그대와 나’, ‘보호해줘’",
        "2011 – 드라마 <마이 프린세스> OST ‘곰인형’",
      ],
    },
    "SE SO NEON": {
      가수: "새소년",
      소제목1: "DISCOGRAPHY",
      분류: [
        "2023 – Single – [Kidd]",
        "2021 – Single – [joke!]",
        "2021 – Single – [자유 (Jayu)]",
        "2020 – Single – [난춘 (亂春) (NAN CHUN)]",
        "2020 – EP – [비적응 (Nonadaptation)]",
        "2019 – Single – [집에 (go back)]",
        "2017 – EP – [여름깃 (Summer Plumage)]",
        "2017 – Single – [파도 (The Wave)]",
        "2017 – Single – [긴꿈 (A Long Dream)]",
      ],
      소제목2: "AWARD & NOMINATE",
      내용: [
        "2016 – 신한카드 펜타루키즈 은상 | SHINHANCARD PENTAROOKIES Silver",
        "2018 – 제15회 한국대중음악상 ‘올해의 신인’ | 15th Korean Music Awards ‘Rookie of the Year’",
        "2018 – 제15회 한국대중음악상 ‘최우수 록 : 노래’ | 15th Korean Music Awards ‘The Best Rock : Song’",
        "2020 – 제17회 한국대중음악상 ‘최우수 록 : 노래’ 후보 | 17th Korean Music Awards ‘The Best Rock : Song’ Nominate",
        "2020 – Pitchfork <The 35 Best Rock Albums of 2020>",
        "2020 – Paste Magazine <The 40 Best Rock Albums of 2020>",
        "2021 – 제18회 한국대중음악상 ‘최우수 모던록 : 음반’ 후보 | 18th Korean Music Awards ‘The Best Modern Rock : Album’ Nominate",
        "2021 – 제18회 한국대중음악상 ‘최우수 모던록 : 노래’ 후보 | 18th Korean Music Awards ‘The Best Modern Rock : Song’ Nominate",
      ],
    },
  };

  return (
    <div className="container">
      <div className="scrollable left scbar">
        {/* 왼쪽 영역에 표시할 내용 */}
        <img src={"/images/artist/" + keyName + "/main.jpg"} alt="" />
        <h1>{artiName}</h1>
        <h2>{data[artiName]["가수"]}</h2>
        <p className="subtit sort">{data[artiName]["소제목1"]}</p>
        <p>
          {data[artiName]["분류"].map((v) => (
            <h3 style={{ display: "block" }}>{v}</h3>
          ))}
        </p>
        <span></span>
        <p className="subtit">{data[artiName]["소제목2"]}</p>
        <p>
          {data[artiName]["내용"].map((v) => (
            <h3 style={{ display: "block" }}>{v}</h3>
          ))}
        </p>
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
