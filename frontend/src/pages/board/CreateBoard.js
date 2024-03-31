import axios from 'axios';
import React, { useState } from 'react';
import BasicLayout from '../../layout/BasicLayout';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateBoard(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const onClickSave = () => {

    const params = {
      title: title,
      content: content,
      userId: userId,
    }
    axios.post('/api/board', params)
    .then((response)=>{
      console.log('response',response)
      toast.success('🦄게시글이 등록되었습니다.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    })
    .catch((eeror)=>{
      toast.error('게시글 등록에 실패하였습니다.')
    })
    setTimeout(function () {
       navigate("/board", { });
      }, 3000);
  };


  return (
    <BasicLayout>
      <div className='board-box flex_center'>
        <div className='item'>
          <div className='form_item mgb1'>
            <label>제목</label>
            <input id='input_title' type="text" placeholder="제목을 입력해주세요" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='form_item mgb1'>
            <label>작성자</label>
            <input id='input_title' type="text" placeholder="id를 입력해주세요" onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div className='form_item'>
            <label>내용</label>
            <textarea id='textarea_content' type="text" placeholder="내용을 입력해주세요" onChange={(e) => setContent(e.target.value)} /><br/>
          </div>
          <div className='flex_center mgt1'>
            <button className='btn btn-blue' value="게시글 생성" onClick={onClickSave}>등록</button>
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

export default CreateBoard;