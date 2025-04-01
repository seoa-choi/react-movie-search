import MovieList from '@/components/MovieList';
import MovieSearch from '@/components/MovieSearch';
import MovieType from '@/components/MovieType';
import Pagination from '@/components/Pagination';
import { useEffect, useState } from 'react';

// ?파라메터=값&파라메터=값, 쿼리스트링을 통해 서버로 데이터 전송,get방식으로 데이터 요청 시 사용
// (form, 글 작성등은 객체형태로 post방식으로 보냄)
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=825452c7';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function searchMovies() {
      try {
        // throw new Error('에러 테스트');
        // 비동기 fetch로 응답을 json으로 받음
        const response = await fetch(
          `${API_URL}&s=${title}&type=${type}&page=${page}`
        );
        // json -> js객체로 변환
        const data = await response.json();

        // 검색결과가 없을 경우 data.Search가 undefinded이므로 오류방지
        const sortData = data.Search?.sort((a, b) =>
          a.Year > b.Year ? -1 : 1
        );
        setMovies(sortData);
        setTotalPage(Math.ceil(data.totalResults / 10));
      } catch (err) {
        console.error('데이터전송오류', err);
      }
    }
    searchMovies();
  }, [title, type, page]);

  return (
    <div className="p-[20px]">
      <h2 className="text-[40px] text-gray-600">MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} />
      <MovieType type={type} setType={setType} setPage={setPage} />
      <MovieList movies={movies} />
      {/* 데이터 있을때만 페이지네이션 나옴 */}
      {movies && (
        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      )}
    </div>
  );
}

// 데이터를 가져오는 함수는 try catch
// promise 데이터 가져오는 성공실패 여부 함수 내장되어있음
// fetch 로딩처리 캐싱처리등등은 안됨, 데이터 가져올땐 리액트쿼리 사용할 예정

// useEffect 쓰는이유 ?
// - 안쓰면 렌더링 될때마다 데이터를 계속 가져옴. 글씨하나, 점하나 쓸때마다 렌더링 되버림
// - 검색타이틀이 바뀌거나 페이지 번호가 바뀔때만 가져와야 함
// - 사용하는 앱과 관련없는 외부에서 일어나는 동작을 사용하기 때문에 씀
// - 렌더링 이후에 데이터 가져오는 동작이 작동되어야 함

// async(비동기) 데이터를 가져오는 모든 동작은 비동기로 작동됨, 비동기 - 순서대로 실행하지 않음
// await은 async같이 써야지 동작이 됨 await은 fetch같이 promise로 리턴되는 애가 앞에 와야 함
// json도 앞에 promise리턴 되는 애가 앞에 와야함
// 비동기 동작이 실행, 성공될때까지 기다리는게 await 키워드임
// 데이터가 다 들어오고 나서 순차적으로 실행되게 하기 위해 await을 써줘야함

// response.json() 상황에 따라 js->json json->js로 변환해준다
