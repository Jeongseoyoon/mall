import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout';
import axios from 'axios';
import {IoEyeSharp} from "react-icons/io5";
import {FaRegComment, FaRegHeart} from "react-icons/fa";

function AboutPage(props) {
    return (
        <BasicLayout>
            <div className='board-box'>
                <div className='item'>
                    <div className='flex_between'>
                        <div>안녕하세요</div>
                        <div className='flex'>
                            <div>홍길동</div>
                            <div>2024-03-21</div>
                        </div>
                    </div>
                    <div className='flex_end'>
                        <div className="icon-box">
                            <IoEyeSharp/>
                            <span className="txt">10</span>
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
                    <div className='content'>
                        내용입니다.
                    </div>
                    {/* <div className="d-flex gap-2 justify-content-center">
                        <Link to={"/update-board"}
                            state={{
                                id: id,
                                title: title,
                                content: content,
                            }}
                        >
                        <Button variant="secondary" >수정하기</Button>
                        </Link>
                        <Button variant="danger" onClick={handleDeleteBtnClick}>
                            삭제하기
                        </Button>
                        <Link
                            to={"/"}
                            state={{}}
                        >
                            <Button variant="primary">목록보기</Button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </BasicLayout>
    );
}

export default AboutPage;