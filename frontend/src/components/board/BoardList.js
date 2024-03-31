import React, { useEffect, useState } from 'react';
import BoardBox from './BoardBox';
import axios from 'axios';

function BoardList(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/boardList').then(list => {
      const result = list['data'];
      setData(result);
      console.log('result', result)
    });

  },[])

  return (
    <div className='board-list ef'>
      {data.map(m => <BoardBox 
                        key = {m.boardId}
                        id = {m.boardId}
                        title = {m.title}
                        content = {m.content}
                        userNm = {m.userNm}
                        regDt = {m.regDt}
                        hit = {m.hit}
                        >
                    </BoardBox>)
                        }
    </div>
  );
}

export default BoardList;