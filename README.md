# Emotion Diary

## React project (clone coding)

[Emotion Diary Link](https://gavin-emotiondiary-project.web.app/)

Udemy 한입 크기로 잘라 먹는 리액트(React.js)를 통한 포트폴리오용 프로젝트 완료.

* <h4>skill</h4>
  * useNavigate - 화면간 이동.
  * useCallback - 일기 작성 시 감정선택 부분에서 선택된 감정 활성화, 비선택된 감정 비활성화 하는 함수를 재활용하기 위해 사용.
  * useContext - 전역으로 데이터를 공유하기 위해 사용. 트리안의 중간 엘리먼트들을 거치지 않고 데이터 사용.
  * useEffect - 리액트 컴포넌트가 렌더링 될 때마다 지정된 함수를 실행.
  * useRef - 하위 코드처럼 useRef()로 Ref 객체를 생성한 후 DOM에 ref값을 지정하여 focus() 기능을 사용.
     ```Javascript
     contentRef.current.focus();
     ```
  * useState - 함수형 컴포넌트에서도 상태 관리를 가능하게 함.
  * React.memo - React는 컴포넌트가 렌더링 후 결과를 메모이징하여 다음 동작들의 결과가 이전에 메모이징 된 결과와 같을 경우 재사용하여 불필요한 리렌더링을 하지않음으로 속도향상.
