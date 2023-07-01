import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import Board from "./components/Board";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	max-width: 680px;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const Boards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
`;

interface IToDoState {
	[key: string]: string[];
}

const toDoState = atom<IToDoState>({
	key: "toDo",
	default: {
		"To Do": ["a", "b"],
		Doing: ["c", "d", "e"],
		Done: ["f"],
	},
});

function App() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
		if (source.index === destination?.index) return;
		// setToDos((currentToDos) => {
		// 	// 1) 기존 배열의 요소를 추출하여 새 배열에 포함
		// 	const copiedToDos = [...currentToDos];
		// 	// 2) 선택한 아이템 제거(source.index)
		// 	copiedToDos.splice(source.index, 1);
		// 	// 3) 선택한 아이템을 도착지점에 포함(destination.index)
		// 	copiedToDos.splice(Number(destination?.index), 0, draggableId);
		// 	return copiedToDos;
		// });
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					{Object.keys(toDos).map((boardId) => (
						<Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
					))}
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
