import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

function ReadPages(props) {

    const {tno} = useParams()
    
    const navigate = useNavigate()

    
    const [queryParams] = useSearchParams()

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

    const queryStr = createSearchParams({page:page, size:size}).toString()

    const moveToModify = (tno) => {
        navigate({
            pathname:`/todo/modify/${tno}`,
            search:queryStr
        })
    }

    const moveToList = () => {
        navigate({
            pathname:`/todo/list/${tno}`,
            search:queryStr
        })
    }

    console.log ('tno',tno)
    return (
        <div className='text-3xl'>
            Todo ReadPage {tno}
            <div>
                <button onClick={() => moveToModify(tno)}>수정하기</button>
                <button onClick={moveToList}>목록보기</button>
            </div>
        </div>
    );
}

export default ReadPages;