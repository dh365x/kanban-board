import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const DragCard = styled.div`
	padding: 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	border: 1px solid #dcdcdc;
	background-color: white;
`;

interface ICard {
	toDo: string;
	index: number;
}

function Card({ toDo, index }: ICard) {
	return (
		<Draggable draggableId={toDo} key={toDo} index={index}>
			{(provied) => (
				<DragCard
					ref={provied.innerRef}
					{...provied.draggableProps}
					{...provied.dragHandleProps}
				>
					{toDo}
				</DragCard>
			)}
		</Draggable>
	);
}

export default Card;
