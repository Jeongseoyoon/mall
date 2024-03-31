import React, { useEffect, useState } from 'react';
import BasicLayout from '../../layout/BasicLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function UpdateBoard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNm, setUserNm] = useState("");

  const location = useLocation();
  const navigate = useNavigate(); // 다른 component 로 이동할 때 사용
  const id = location.state.id; // 상세보기하려는 게시글의 id값
  const params = { boardId: id}
  console.log('params',params)
  const old_title = location.state.title;
  const old_content = location.state.content;
  const old_userNm = location.state.userNm;

  const resetInput = () => {
    setTitle("");
    setContent("");
    setUserNm("");
    document.getElementById('input_title').value = '';
    document.getElementById('textarea_content').value = '';
    document.getElementById('input_id').value = '';
  }

  const onClickUpdate = async (e) => {
    e.preventDefault();
    document.getElementById('input_title').value = '';
    document.getElementById('textarea_content').value = '';
    document.getElementById('input_id').value = '';
    const request_data = {boardId: id, title: title, content: content};
    console.log('req_data: ', request_data);
    try{
        let response = await axios({
            method: 'put',
            url: '/api/board',
            headers: {'Content-Type': 'application/json' },
            data: JSON.stringify(request_data)
        });
        console.log('writeBoard/response: ', response);
        console.log('writeBoard/response.status: ', response.status);
        navigate("/detail", { state : { id: id } });
    } catch (err) {
        console.log('CreateBoard/handleInput/err: ', err);
        resetInput();
    }
}
useEffect(() => {
    console.log('UpdateBoard/useEffect()');
    setTitle(old_title);
    setContent(old_content);
    setUserNm(old_userNm);
    console.log('title: ', title);
    console.log('content: ', content);
    console.log('setUserNm: ', userNm);
}, [])


  return (
    <BasicLayout>
      <div className='board-box flex_center'>
        <div className='item'>
          <div className='form_item mgb1'>
            <label>제목</label>
            <input id='input_title' type="text" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className='form_item mgb1'>
            <label>작성자</label>
            <input id='input_id' type="text" value={userNm} onChange={(e) => setUserNm(e.target.value)}/>
          </div>
          <div className='form_item'>
            <label>내용</label>
            <textarea id='textarea_content' type="text" placeholder="내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value)}/><br/>
          </div>
          <div className='flex_center mgt1 gap-1'>
            <button className='btn btn-gray' value="게시글 생성" onClick={onClickUpdate}>수정하기</button>
            <Link
              to={"/board"}
              state={{}}
            >
              <button className='btn btn-blue'>목록보기</button>
            </Link>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </BasicLayout>
  );
}

export default UpdateBoard;