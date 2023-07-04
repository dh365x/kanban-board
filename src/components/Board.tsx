import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";
import { useForm } from "react-hook-form";
import { ITodo } from "../atoms";

interface ISnapshot {
	$isDraggingOver: boolean;
}

const Wrapper = styled.div<ISnapshot>`
	min-height: 200px;
	padding: 20px 10px;
	border-radius: 5px;
	flex-grow: 1;
	background-color: ${(props) => (props.$isDraggingOver ? "#f9f9f9" : "null")};
	transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h2`
	margin-bottom: 10px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
`;

const Form = styled.form`
	width: 100%;
	input {
		width: 100%;
	}
`;

interface IBoard {
	toDos: ITodo[];
	boardId: string;
}

interface IForm {
	toDo: string;
}

function Board({ toDos, boardId }: IBoard) {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const onValid = (data: IForm) => {
		console.log(data);
		setValue("toDo", "");
	};
	return (
		<Droppable droppableId={boardId}>
			{(provided, snapshot) => (
				<Wrapper
					ref={provided.innerRef}
					{...provided.droppableProps}
					$isDraggingOver={snapshot.isDraggingOver}
				>
					<Title>{boardId}</Title>
					<Form onSubmit={handleSubmit(onValid)}>
						<input
							type="text"
							placeholder={`Add task on ${boardId}`}
							{...register("toDo", {
								required: true,
							})}
						/>
					</Form>
					{toDos.map((toDo, index) => (
						<Card
							key={toDo.id}
							index={index}
							toDoId={toDo.id}
							toDoText={toDo.text}
						/>
					))}
					{provided.placeholder}
				</Wrapper>
			)}
		</Droppable>
	);
}
export default Board;
