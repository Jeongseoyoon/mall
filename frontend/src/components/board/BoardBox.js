import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function BoardBox(props) {

  return (
    <div className='board-box'>
      <Link to={"/detail"} state={{
        id: props.id
      }}>
        <div className='item'>
          {/* <div>{props.id}</div> */}
          <div className='flex_align'>
            <div className='label'>New</div>
            <div className='title'>{props.title}</div>
          </div>
          <div className='flex content'>
            <div>{props.content}</div>
          </div>
          <div className='flex_between'>
            <div className='flex'>
              <div className="icon-box">
                    <IoEyeSharp/>
                    <span className="txt">{props.hit}</span>
                </div>
                <div className="icon-box">
                    <FaRegComment/>
                    <span className="txt">5</span>
                </div>
                <div className="icon-box">
                    <FaRegHeart />
                    <span className="txt">5</span>
                </div>
              </div>
              <div className='flex gap-1'>
                <div>{props.userNm}</div>
                <div>{props.regDt}</div>
              </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BoardBox;