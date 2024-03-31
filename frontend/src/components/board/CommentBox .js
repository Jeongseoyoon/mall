import React, { useState } from 'react';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function CommentBox(props) {
  console.log('props당', props);
  const id = props.commentId;

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(props.comment);

  const handleEditChange = (e) => {
    setEditContent(e.target.value);
  };

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onClickCancel = () => {
    setIsEditing(false);
    setEditContent(props.comment); // 이전 댓글 내용으로 복원
  };

  const onClickSave = async () => {
    const params = {
      commentId: props.commentId,
      comment: editContent
    };
    console.log('ddddd',editContent)

    try {
      const response = await axios.put(`/api/comment`, params);
      setIsEditing(false);
      toast.success('댓글이 수정되었습니다.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
    } catch (error) {
      console.error('댓글 수정 오류:', error);
    }
    setTimeout(function () {
      window.location.replace("/detail")
    }, 2000);
  };


  const onClickCommentDelete = async (e) => {
    e.preventDefault();
    const requestData = { id: id };
    console.log('dasdasdas', requestData)
    let response = await axios({
      method: 'delete',
      url: `/api/comment/${id}`,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(requestData)
    });
    toast.warning('댓글이 삭제되었습니다.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setTimeout(function () {
      window.location.replace("/detail")
    }, 3000);
  };

  return (
    <div className='comment-box'>
      <div className='flex flex_between'>
        <div>{props.userNm}</div>
        <div className='date'>{props.regDt}</div>
      </div>
      {isEditing ? (
        <textarea className='edit' value={editContent} onChange={handleEditChange} />
      ) : (
        <div className='comment-content'>{props.comment}</div>
      )}
      <div className='flex flex_end gap-05'>
        {isEditing ? (
          <>
            <button className='btn btn-line' onClick={onClickSave}>저장</button>
            <button className='btn btn-line' onClick={onClickCancel}>취소</button>
          </>
        ) : (
          <button className='btn btn-line' onClick={onClickEdit}>수정</button>
        )}
        <button className='btn btn-line' onClick={onClickCommentDelete}>삭제</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
  );
}

export default CommentBox;