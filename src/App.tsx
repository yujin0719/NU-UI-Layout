import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    /**
     * isMovieMode: 영화관 모드 설정
     *   하위 Detail 컴포넌트에 넣는 값으로 로직이 들어가면 page props로는 제거해도 됨 (지금은 데모의 편의를 위해 삽입)
     */
    <DetailPage />
  );
}
