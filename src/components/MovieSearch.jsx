import { useRef } from 'react';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  function handleSearch(e) {
    e.preventDefault();

    // 검색필드에 값이 있을때만 검색되게, 빈칸제거
    if (inputRef.current.value.trim()) {
      setType('');
      setPage(1);
      // 일회성 value는 state 사용안함
      setTitle(inputRef.current.value);
    }
  }

  return (
    <div className="my-[20px] border border-[#ccc]">
      <form onSubmit={handleSearch} className="flex">
        <input
          ref={inputRef}
          type="search"
          placeholder="제목검색"
          title="제목검색"
          className="border-0 w-full"
        />
        <button
          type="submit"
          className="w-[60px] bg-[#eee] text-[14px] shrink-0 text-gray-600"
        >
          검색
        </button>
      </form>
    </div>
  );
}

// 서브밋 누르면 온서브밋으로 연결되게
// 새로고침 되서 이벤트 추가
// 버튼 서브밋 하면 form이 연결되기 때문에 input에 연결하려면 useRef로 처리
// state가 필요없음, 입력 된 내용을 계속 관리하는 것이 아니기 때문 - 일회성이라서
