import {
	DragDropContext,
	Draggable,
	DropResult,
	Droppable,
} from "react-beautiful-dnd";
import { atom, useRecoilState } from "recoil";
import { styled } from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	max-width: 480px;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const Boards = styled.div`
	display: grid;
	grid-template-columns: reap(1, 1fr);
	width: 100%;
`;

const Board = styled.div`
	padding: 10px;
	min-height: 200px;
	border-radius: 5px;
	background-color: #eeeeee;
`;

const Title = styled.h2`
	padding: 10px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
`;

const Card = styled.div`
	padding: 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	border: 1px solid #dcdcdc;
	background-color: white;
`;

const toDoState = atom({
	key: "toDo",
	default: ["a", "b", "c", "d", "e", "f"],
});

function App() {
	const [toDos, setToDos] = useRecoilState(toDoState);
	const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
		console.log(draggableId, source, destination);

		if (source.index === destination?.index) return;
		setToDos((currentToDos) => {
			// 1) 기존 배열의 요소를 추출하여 새 배열에 포함
			const copiedToDos = [...currentToDos];
			// 2) 선택한 아이템 제거(source.index)
			copiedToDos.splice(source.index, 1);
			// 3) 선택한 아이템을 도착지점에 포함(destination.index)
			copiedToDos.splice(Number(destination?.index), 0, draggableId);
			return copiedToDos;
		});
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="list">
						{(provied) => (
							<Board ref={provied.innerRef} {...provied.droppableProps}>
								<Title>To Do</Title>
								{toDos.map((toDo, index) => (
									<Draggable draggableId={toDo} key={toDo} index={index}>
										{(provied) => (
											<Card
												ref={provied.innerRef}
												{...provied.draggableProps}
												{...provied.dragHandleProps}
											>
												{toDo}
											</Card>
										)}
									</Draggable>
								))}
								{provied.placeholder}
							</Board>
						)}
					</Droppable>
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
