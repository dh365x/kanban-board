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
	gap: 10px;
	width: 100%;
	padding: 0 10px;
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
		if (!destination) return;
		// 같은보드 카드 이동
		if (source.droppableId === destination?.droppableId) {
			setToDos((allBoards) => {
				const boardCopy = [...allBoards[source.droppableId]];
				boardCopy.splice(source.index, 1);
				boardCopy.splice(Number(destination?.index), 0, draggableId);
				return {
					...allBoards,
					[source.droppableId]: boardCopy,
				};
			});
		}
		// 다른보드 카드 이동
		if (source.droppableId !== destination?.droppableId) {
			setToDos((allBoard) => {
				const sourceBoard = [...allBoard[source.droppableId]];
				const destinationBoard = [...allBoard[destination.droppableId]];
				sourceBoard.splice(source.index, 1);
				destinationBoard.splice(destination.index, 0, draggableId);
				return {
					...allBoard,
					[source.droppableId]: sourceBoard,
					[destination.droppableId]: destinationBoard,
				};
			});
		}
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
