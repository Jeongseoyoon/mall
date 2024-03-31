import React, { useEffect, useState } from 'react';
import BasicLayout from '../../layout/BasicLayout';
import { IoConstructOutline, IoEyeSharp } from 'react-icons/io5';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import CommentList from '../../components/board/CommentList';
import CommentBox from '../../components/board/CommentBox ';

function DetailBoard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNm, setUserNm] = useState("");
  const [regDt, setRegDt] = useState("");
  const [hit, setHit] = useState("");
  const [userId, setUserId] = useState("");
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState("");
  console.log('유저아이디',)
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id; // 상세보기하려는 게시글의 id값
  const params = { boardId: id}
  console.log('params',params)
  console.log('Detail/id: ', id);

  const handleDeleteBtnClick = async (e) => {
    e.preventDefault();
    const request_data = {id: id};
    let response = await axios({
      method: 'delete',
      url: `/api/board/${id}`,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(request_data)
    });
    toast.warn('게시글이 삭제되었습니다.', {
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
    setTimeout(function () {
        window.location.replace("/board")
      }, 3000);
  };

  useEffect(()=>{
    console.log("commentId"+commentId)
  },[commentId])

  const onClickCommentSave =  () => {
    const params = {
      boardId : id,
      userId : userId,
      comment : comment,
      regDt:regDt
    }
    console.log('paramsparamsparamsparams',params)
    axios.post('/api/comment', params)
    .then((response)=>{
      console.log('response',response)
      toast.success('🦄댓글이 등록되었습니다.', {
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
    })
    .catch((eeror)=>{
      toast.error('댓글 등록에 실패하였습니다.')
    })
    setTimeout(function () {
        window.location.replace("/detail")
      }, 2000);
  }

  useEffect(() => {
    const getDetailBoard = async () => {
        // let response = await axios.get(`/api/board/`,params);
        let response = await axios.get(`/api/board/${id}`);
        let response2 = await axios.get(`/api/commentList?boardId=${id}`);
        console.log('Detail/response: ', response);
        console.log('Detail/response2: ', response2);
        console.log('Detail/response.data: ', response.data);
        const result = response2['data'];
        setTitle(response.data.title);
        setContent(response.data.content);
        setUserNm(response.data.userNm);
        setRegDt(response.data.regDt);
        setHit(response.data.hit);
        setUserId(response.data.userId);
        setComment(response2.data.comment);
        setCommentId(response2.data.commentId);
        setData(result);
        console.log('으악',result)
    }
    getDetailBoard();
  }, [])


  return (
    <BasicLayout>
            <div className='board-box'>
                <div className='item'>
                    <div className='flex_between'>
                        <div className='title'>{title}</div>
                        <div className='flex gap-1'>
                            <div>{userNm}</div>
                            <div>{regDt}</div>
                        </div>
                    </div>
                    <div className='flex_end mgt1'>
                        <div className="icon-box">
                            <IoEyeSharp/>
                            <span className="txt">{hit}</span>
                        </div>
                        <div className="icon-box">
                            <FaRegComment/>
                            <span className="txt">5</span>
                        </div>
                        <div className="icon-box">
                            <FaRegHeart/>
                            <span className="txt">5</span>
                        </div>
                    </div>
                    <div className='detail-content mgt1'>
                        {content}
                    </div>
                    <div className="flex gap-1 flex_center mgt1 mgb2">
                        <Link to={"/update"}
                            state={{
                                id: id,
                                title: title,
                                content: content,
                                userNm: userNm,
                            }}
                        >
                          <button className='btn btn-gray'>수정하기</button>
                        </Link>
                          <button className='btn btn-orange' onClick={handleDeleteBtnClick}>
                            삭제하기
                          </button>
                        <Link
                            to={"/board"}
                            state={{}}
                        >
                            <button className='btn btn-blue'>목록보기</button>
                        </Link>
                    </div>
                    <div className='comment mgb2'>
                      <div className='mgb1'>{userNm}</div>
                      <div className='flex flex_center mgb1'>
                        <div className='form_item'>
                          <textarea id='textarea_content' type="text" placeholder="댓글을 입력해주세요" onChange={(e) => setComment(e.target.value)}/><br/>
                        </div>
                      </div>
                      <div className='flex_end'>
                        <button className='btn btn-line' onClick={onClickCommentSave}>등록</button>
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
                    {data.map(m => <CommentBox
                          key = {m.boardId}
                          boardId = {m.boardId}
                          userId = {m.userId}
                          userNm = {m.userNm}
                          comment = {m.comment}
                          commentId = {m.commentId}
                          regDt = {m.regDt}
                          >
                      </CommentBox>)
                    }
                </div>
            </div>
        </BasicLayout>
  );
}

export default DetailBoard;