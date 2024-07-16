import React from 'react';
import '../../css/artist.scss'

function Artist() {
  return (
    <div className="container">
      <div className="scrollable left">
        {/* 왼쪽 영역에 표시할 내용 */}
        <h2>왼쪽 스크롤 영역</h2>
        <p>컨텐츠1</p>
        <p>컨텐츠2</p>
        <p>컨텐츠3</p>
        <p>컨텐츠4</p>
        <p>컨텐츠5</p>
        <p>컨텐츠6</p>
      </div>
      <div className="scrollable right">
        {/* 오른쪽 영역에 표시할 내용 */}
        <h2>오른쪽 스크롤 영역</h2>
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