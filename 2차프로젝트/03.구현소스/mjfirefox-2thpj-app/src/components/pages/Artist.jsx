import React, { useState } from "react";
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


  const [myNum, setMyNum] = useState(1);

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
      인포: [`실리카겔은 2013년 서울예술대학교 출신의 학생들 주도 하에 결성되었다. 밴드명은 평창 비엔날레에 출품하기 위해 그룹명을 정해야만 했는데, 우연히 껌통에서 보게 된 실리카 겔를 보고 지었다고 한다. 이후 음악에 VJ를 합친 스타일로 주목을 받기 시작했다.
      2015년 그들은 첫 EP 새삼스레 들이켜본 무중력 사슴의 다섯가지 시각를 발매했으며, 2016년에는 첫 정규 음반 실리카겔을 발매했다. 그들은 EBS가 주관한 2016년 올해의 헬로루키로 선정되었으며, 2017년 한국대중음악상에서 올해의 신인상을 받았다.
      2017년에는 밴드 파라솔과 합작 싱글 Space Angel을 발매했다. 같은 해 11월에는 EP SiO2.nH2O가 발매되었다.
      이후 2018년 부터 2년간 휴식기에 들어갔으며, 김한주는 인터뷰에서 이 기간 동안 자신의 잠재력을 끌어올릴 방법을 탐구했다고 이야기 한 바 있다. 2020년 싱글 Kyo181을 통해 복귀했으며 2021년 싱글 Desert Eagle은 2022 한국대중음악상 최우수 모던 록 노래를 수상하기도 했다.
      2022년 그들은 싱글 No Pain을 발매했으며, 대한민국 내에서 큰 인기를 얻었다. 이 싱글 역시 2023 한국대중음악상에서 최우수 모던 록 노래를 수상하며 연속 수상에 성공한다.
      2023년 그들은 EP Machine Boy를 발매했으며, 펜타포트 락 페스티벌, DMZ 피스트레인 뮤직 페스티벌 등 다양한 록 페스티벌에서 공연했다. 이후 같은 해 황소윤이 참여한 싱글 틱택톡을 발매했다.`, `Silica Gel was formed in 2013 under the leadership of students from Seoul Institute of the Arts. The band had to decide on a group name in order to exhibit at the Pyeongchang Biennale, and it is said that the name came from silica gel that they happened to find in a gum container. Afterwards, he began to attract attention for his style that combined music and VJ.
      In 2015, they released their first EP, Five Perspectives of a Weightless Deer, and in 2016, they released their first full-length album, Silica Gel. They were selected as Hello Rookie of the Year in 2016 by EBS, and received the Rookie of the Year Award at the 2017 Korean Popular Music Awards.
      In 2017, they released the joint single Space Angel with the band Parasol. In November of the same year, the EP SiO2.nH2O was released. Afterwards, he went on a two-year break starting in 2018, and Kim Han-joo said in an interview that he explored ways to increase his potential during this period. He returned through the 2020 single Kyo181, and his 2021 single Desert Eagle also won the Best Modern Rock Song at the 2022 Korean Music Awards.
      In 2022, they released the single No Pain, which became very popular in South Korea. This single also won the Best Modern Rock Song at the 2023 Korean Popular Music Awards, winning consecutive awards.
      In 2023, they released the EP Machine Boy and performed at various rock festivals, including Pentaport Rock Festival and DMZ Peacetrain Music Festival. Later, in the same year, they released the single Tic Tac Tok featuring Hwang So-yoon.`],

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
      인포: [
        `분명히 10CM는 한국 음악계의 하나의 아이콘이다. 
        질펀한 가사와 달콤한 멜로디로 대중들을 사로잡은 10CM. 
        인디 신에서 시작한 이 엉큼한 뮤지션은 한국 음악계의 인디와 
        메이저의 경계를 허문 장본인이기도 하다. ‘오늘밤은 어둠이 무서워요’,
         ‘아메리카노’로 이름을 알린 2010년에는 한국 버스킹 1세대로써 홍대 
         씬의 ‘통기타와 젬베’ 열풍을 설명하는 척도였고, 연이어 꾸준히 
         발매된 앨범들을 통해 대체 불가의 존재로 거듭나게 되었다. 탑 
         아이돌들과의 콜라버레이션, 각종 드라마 OST, 대형 페스티벌 등 섭외 
         1순위가 되었고, 식을 줄 모르는 열광 속에서 전 회 매진을 기록하는 단독 공연들. 
         무엇이 그렇게 특별했을까? 그 대답은 우리의 가슴을 간지럽힌 
         10CM의 음악에서 찾을 수 있겠다.`,
        `10CM is a South Korean indie pop project led by singer Kwon Jeong-yeol,
         whose amiable acoustic style transcended the country’s indie scene and 
         found a widespread audience in the middle part of the 2010s. Taking its
          name from the ten-centimeter height difference between the two members,
          the group issued an EP in April 2010, establishing the low-key folk-pop
          sound that consisted of Kwon on lead vocals and djembe (an African hand drum)
            and Yoon on guitar and harmony vocals. The following year, their independent
            full-length debut, 1.0, surprised many by selling over 200,000 copies and
              earning the duo a Korean Music Award for Best Pop Song. Over the next two
              years, 10cm became a reliable draw, consistently charting singles and
                appearing on several soundtracks while also delivering a follow-up 
                album in 2012’s 2.0. Two years later, their third album, 3.0, earned 
                their highest chart placement yet, landing at number nine on the Gaon
                albums chart. They hit number one in 2016 with their single “What the Spring?”
                  and landed another Top Ten hit with “My Eyes” from the Guardian: The Lonely 
                  and Great God soundtrack.`,
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
      인포: [`두 동갑내기 여성 김윤주와 박세진으로 이루어진 듀오 옥상달빛. 이들의 매력은 분명하다. ‘일상의 언어’로 노래하는 ‘일상의 이야기’들, 특유의 담백하면서도 위트 넘치는 노랫말로 전하는 삶에 대한 진솔한 메시지가 그것이다. 옥상달빛의 음악엔 인생의 희비가 고스란히 녹아있다. 인생의 모순을 있는 그대로 인정하면서도 그 속에서 긍정의 메시지를 끄집어내 때로는 청량함과 경쾌함으로, 때로는 정제된 차분함으로 풀어내는 이들의 음악은 ‘인생은 늘 행복과 슬픔이, 환희와 절망이 교차하지만 그래도, 그래서, 여전히 아름다운 것’이라 이야기한다. 하드코어한 인생사에 지친 우리들의 어깨를 조용히 다독거리는 작은 치유, 옥상달빛 음악의 진정한 힘이다.`, `Okdal, a female duo of the same age, Kim Yoon Ju and Park Se Jin. Their charm is quite obvious. It’s ‘Everyday stories’ that are sung in ‘Everyday language’, and honest messages about life conveyed through unique, simple yet witty lyrics. The music of Okdal reflects the joys and sorrows of life. While acknowledging the contradiction of life as it is, they draw out a positive message from it, sometimes with freshness and lightness, and sometimes with refined calm, saying ‘Life always intersects happiness and sadness, joy and despair, but still, therefore, it’s still beautiful’. It is the true power of Okdal’s music that a small remedy quietly pats our shoulders who are weary of our hardcore everyday life.`],
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
      인포: [`2016년 결성되어 2017년 데뷔한 대한민국의 밴드. 매직스트로베리사운드 소속이다.
      새소년이라는 밴드명은 보컬 황소윤이 인사동을 돌아다니던 중, 우연히 1980년대 인기 소년지였던 '새소년'을 발견해 감명 받아 이름을 따왔다고 한다. 새롭다는 뜻의 '새'일 수도 있고, 날아가는 '새'일 수도 있는 중의적인 의미의 '새'라는 단어가 마음에 들었다고 한다.
      황소윤이 만든 프로젝트 밴드가 새소년의 시작이다. 제천간디학교 선후배 사이였던 강토 합류 이후 베이시스트 김푸른하늘이 밴드에 몸담다가 탈퇴하고 문팬시가 새로 밴드에 들어왔다. 그러나 2018년 12월, 강토와 문팬시가 병역 의무 등으로 인해 2018년 12월 30일 현대카드 언더스테이지에서의 단독 콘서트를 마지막으로 밴드를 탈퇴했다. 2019년 새로운 멤버 유수(드럼), 박현진(새소년)(베이스)를 영입하여 마침내 지금의 멤버가 되었다. 2022년 8월 유수(드럼)이 계약기간종료로 탈퇴한 뒤 2023년 현재 새소년은 황소윤, 박현진 두 멤버로 활동중이다.`, `A South Korean band formed in 2016 and debuted in 2017. He belongs to Magic Strawberry Sound.
      The name of the band Saesonyeon is said to have been derived from vocalist Hwang So-yoon's inspiration after accidentally discovering 'Saesonye', a popular boy's magazine in the 1980s, while wandering around Insa-dong. It is said that he liked the word ‘bird’, which has an ambiguous meaning, which can be either ‘bird’ meaning new or ‘bird’ flying.
      The project band created by Hwang So-yoon is the beginning of a new boy. After joining Kangto, who was a senior and junior at Jecheon Gandhi School, bassist Blue Sky Kim left the band and Moon Fancy joined the band. However, in December 2018, Kangto and Moonfancy left the band after holding a solo concert at Hyundai Card Understage on December 30, 2018 due to military service obligations. In 2019, new members Yoo Su (drums) and Park Hyun-jin (Sae Boy) (bass) were recruited to finally become the current members. After Yusu (drums) left in August 2022 due to the end of his contract, Sae Boy is currently active with two members, Hwang So-yoon and Park Hyun-jin.`],
    },
  };

  ////////// 코드 리턴구역 ////////////
  return (
    <div className="container">
      <div className="scrollable left scbar">
        {/* 왼쪽 영역에 표시할 내용 */}
        <img src={"/images/artist/" + keyName + "/main.jpg"} alt="" />
        <h1>{artiName}</h1>
        <h2>{data[artiName]["가수"]}</h2>
        <p className="subtit sort">{data[artiName]["소제목1"]}</p>
        <p>
          {data[artiName]["분류"].map((v,i) => (
            <h3 key={i} style={{ display: "block" }}>{v}</h3>
          ))}
        </p>
        <span></span>
        <p className="subtit">{data[artiName]["소제목2"]}</p>
        <p>
          {data[artiName]["내용"].map((v,i) => (
            <h3 key={i} style={{ display: "block" }}>{v}</h3>
          ))}
        </p>
      </div>
      <div className="scrollable right scbar">
        {/* 오른쪽 영역에 표시할 내용 */}
        <button className="button" onClick={()=>setMyNum(1)}>Info</button>
        <button className="button" onClick={()=>setMyNum(2)}>Release</button>
        <button className="button" onClick={()=>setMyNum(3)}>Video</button>

        <>
          {myNum === 1 && (
            <div className="opt opt1">
              <p>{data[artiName]["인포"][0]}</p>
              <p>{data[artiName]["인포"][1]}</p>
            </div>
          )}
          {myNum === 2 && (
            <div className="opt opt2">
              <img src={"/images/album/" + keyName + "/1.jpg"} alt="" />
              <img src={"/images/album/" + keyName + "/2.jpg"} alt="" />
              <img src={"/images/album/" + keyName + "/3.jpg"} alt="" />
            </div>
          )}
          {myNum === 3 && <div className="opt opt3">세번째 ㅎㅎㅎ</div>}
        </>
      </div>
    </div>
  );
}

export default Artist;
