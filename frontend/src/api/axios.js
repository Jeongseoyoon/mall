import axios from 'axios';

const request = axios.create({
  headers:{"Content-Type":"application/json"},
  timeout: 5000
});
 
request.interceptors.response.use(
  response => {
    // 요청이 성공했을 때 실행될 로직
    return response;
  },
  error => {
    const res = error.response;
    const status = res.status;
    console.log(error);
		if(status === 401){
      
    }else if(status === 500) {
      const data = res.data;
      window.alert(data.message);
    }

    return Promise.reject(error);
  }
);

export default request;