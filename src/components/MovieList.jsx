import MovieItem from '@/components/MovieItem';

export default function MovieList({ movies }) {
  // console.log(movies); // Episode undefined

  return (
    <ul className="grid grid-cols-2 mt-[20px] gap-x-[15px] gap-y-[30px]">
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
    </ul>
  );
}

// 최초렌더링시에 movies는 없고, 한번 더 렌더링 되면 렝스가 들어와서 배열이 생성
