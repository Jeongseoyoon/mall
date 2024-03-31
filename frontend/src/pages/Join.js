import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout';

function Join(props) {
    return (
        <BasicLayout>
            <div className='login-container'>
				<div className='board-box'>
					<div className='logo-wrap'>
						<div className='title'>
						회원가입
						</div>
						<div className='subtitle'>
							아이옵스에 오신 것을 환영합니다.
						</div>
					</div>
					<div className="login_wrap">
						<div className='form_item mgb1'>
							<label>아이디</label>
							<input id='input_title' type="text" placeholder="4 ~ 20자의 영문, 숫자와 특수문자 '_'만 사용" />
						</div>
						<div className='form_item mgb1'>
							<label>비밀번호</label>
							<input id='input_title' type="text" placeholder="8~16자리 영문 대소문자,숫자,특수문자 중 3가지 조합" />
						</div>
						<div className='form_item mgb1'>
							<label>이름</label>
							<input id='input_title' type="text" placeholder="이름 입력" />
						</div>
						<button className="login_btn mgt1` mgb3">가입하기</button>
					</div>
				</div>
            </div>
        </BasicLayout>
    );
}

export default Join;