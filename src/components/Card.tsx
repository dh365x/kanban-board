import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

interface ISnapshot {
	$isDragging: boolean;
}

const Wrapper = styled.div<ISnapshot>`
	padding: 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	border: 1px solid #dcdcdc;
	background-color: #ffffff;
	box-shadow: 2px 2px 4px
		${(props) => (props.$isDragging ? "rgba(0,0,0,0.2)" : "null")};
`;

interface ICard {
	index: number;
	toDoId: number;
	toDoText: string;
}

function Card({ index, toDoId, toDoText }: ICard) {
	return (
		<Draggable draggableId={String(toDoId)} key={toDoId} index={index}>
			{(provied, snapshot) => (
				<Wrapper
					ref={provied.innerRef}
					{...provied.draggableProps}
					{...provied.dragHandleProps}
					$isDragging={snapshot.isDragging}
				>
					{toDoText}
				</Wrapper>
			)}
		</Draggable>
	);
}

export default React.memo(Card);
