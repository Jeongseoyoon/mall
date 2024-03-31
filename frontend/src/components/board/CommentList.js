import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentBox from './CommentBox ';
import { useLocation } from 'react-router-dom';

function CommentList(props) {
  // const location = useLocation();
  // const id = location.state.id; // 상세보기하려는 게시글의 id값
  // const params = { boardId: id}

  // console.log('파람',params)


  return (
    <div className='comment-list'>
    <CommentBox></CommentBox>                 
    </div>
  );
}

export default CommentList;