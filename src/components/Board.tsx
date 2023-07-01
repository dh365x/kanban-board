import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
	min-height: 200px;
	padding: 20px 10px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.boardColor};
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
			{(provided) => (
				<Wrapper ref={provided.innerRef} {...provided.droppableProps}>
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
