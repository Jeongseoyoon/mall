import {axios, useState, Button, Modal, useNavigate, Link, useLocation, BasicLayout, React } from '../../common/module';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

function CreateBoard(props) {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  const [saveSuccess, setSaveSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const navigate = useNavigate();

  function openModal(message) {
    setIsOpen(true);
    setModalMessage(message);
  }

  function closeModal() {
    setIsOpen(false);
    if(saveSuccess) {
      navigate("/board", { });
    }
  }
  const onClickSave = () => {

    const params = {
      title: title,
      content: content,
      userId: userId,
    }
    axios.post('/api/board', params)
    .then((res)=>{
      setSaveSuccess(true);
      openModal('게시글이 성공적으로 등록되었습니다.');
    }).catch((error) => {
      const message = '게시글 작성에 실패하였습니다.';
      setSaveSuccess(false);
      openModal(message);
    });
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
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
            style={customStyles}
          >
            <button onClick={closeModal}>close</button>
              <div>{modalMessage}</div>
          </Modal>
        </div>
      </div>
    </BasicLayout>
  );
}

export default CreateBoard;