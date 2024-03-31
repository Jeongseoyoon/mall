import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout';

function Login(props) {
    return (
        <BasicLayout>
            <div className='login-container'>
             <div className='board-box'>
                <div className='logo-wrap'>
                    <div className='title'>
                    로그인
                    </div>
                    <div className='subtitle'>
                        아이옵스에 오신 것을 환영합니다.
                    </div>
                </div>
                <div className="login_wrap">
					<p className="login_input">
						<input type="text" id="memberId" name="memberId" className="memberId" placeholder="아이디를 입력해주세요."/>
					</p>
					<p className="login_input">				
						<input type="password" id="memberPw" name="memberPw" className="memberPw" placeholder="비밀번호를 입력해주세요."/>
					</p>
					<p className="check">
						<input type="checkbox" id="id_save"/><label>아이디저장</label>
					</p>
					<button className="login_btn">로그인</button>
					<ul className="login_pb">
						<li>
							<span>회원 아이디 또는 패스워드를 잊어버리신 경우</span>
							<a href="/mydata/www/member/memberFindId.do">아이디·비번 찾기</a>
						</li>
						<li>
							<span>아직 아이옵스 회원이 아니신 경우</span>
							<a href="/mydata/www/member/memberCheck.do">회원가입</a>
						</li>
					</ul>
				</div>
             </div>
            </div>
        </BasicLayout>
    );
}

export default Login;