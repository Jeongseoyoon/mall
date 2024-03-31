import React, { useCallback } from 'react';
import BasicLayout from '../../layout/BasicLayout';
import BoardList from '../../components/board/BoardList';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function IndexBoard(props) {

  const navigate = useNavigate()

  // const handleClickCreate = useCallback(() => {
  //   navigate({pathname:'create'})   
  // },[])

  return (
    <BasicLayout>
      <div className='flex_end mgb1'>
        <Link to={'/create'}>
          <button className='btn btn-blue'>글쓰기</button>
          {/* <button onClick={handleClickCreate}>글쓰기</button> */}
        </Link> 
      </div>
      <div>
        <BoardList></BoardList>
      </div>
    </BasicLayout>
  );
}

export default IndexBoard;