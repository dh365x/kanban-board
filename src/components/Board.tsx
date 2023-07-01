import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";

interface ISnapshot {
	isDraggingOver: boolean;
}

const Wrapper = styled.div<ISnapshot>`
	min-height: 200px;
	padding: 20px 10px;
	border-radius: 5px;
	flex-grow: 1;
	background-color: ${(props) => (props.isDraggingOver ? "#f9f9f9" : "null")};
	transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h2`
	margin-bottom: 10px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
`;

interface IBoard {
	toDos: string[];
	boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
	return (
		<Droppable droppableId={boardId}>
			{(provided, snapshot) => (
				<Wrapper
					ref={provided.innerRef}
					{...provided.droppableProps}
					isDraggingOver={snapshot.isDraggingOver}
				>
					<Title>{boardId}</Title>
					{toDos.map((toDo, index) => (
						<Card key={toDo} index={index} toDo={toDo} />
					))}
					{provided.placeholder}
				</Wrapper>
			)}
		</Droppable>
	);
}
export default Board;
