import { generatePagination } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Pagination({ page, totalPage, setPage }) {
  const [pageArr, setPageArr] = useState([]);

  // 외부에 들어오는 프롭에 의해서 생성되기 때문에 useEffect 사용
  useEffect(() => {
    // page, totalPage 변경시마다 페이지번호배열 생성하여 배열스테이트 업데이트
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[2px] justify-center mt-[40px]">
      {page !== 1 && (
        <button
          type="button"
          className="btn w-[36px] h-[30px] text-[13px] px-[2px] bg-[#eee]"
          onClick={() => setPage(page - 1)}
        >
          이전
        </button>
      )}
      {pageArr.map((item, i) => {
        if (item === '...') {
          return (
            <span
              key={i}
              className="w-[36px] h-[30px] text-[13px] px-[2px] text-center leading-[28px] border border-[#666] bg-[#eee]"
            >
              ...
            </span>
          );
        } else {
          return (
            <button
              type="button"
              key={i}
              className={`btn w-[36px] h-[30px] text-[13px] px-[2px] ${
                page === item ? 'text-white bg-[#666]' : 'bg-[#eee]'
              }`}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        }
      })}
      {page !== totalPage && (
        <button
          type="button"
          className="btn w-[36px] h-[30px] text-[13px] px-[2px] bg-[#eee]"
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      )}
    </div>
  );
}

// 이전 1이 아닐경우만 이전 1이면 이전버튼 없음, 다음 토탈페이지가 아닌경우 다음이동, 마지막페이지 다음 없음
