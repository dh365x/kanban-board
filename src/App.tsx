import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
	const onDragEnd = () => {};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				<Droppable droppableId="list">
					{(provied) => (
						<ul ref={provied.innerRef} {...provied.droppableProps}>
							{toDos.map((toDo, index) => (
								<Draggable draggableId={toDo} key={index} index={index}>
									{(provied) => (
										<li
											ref={provied.innerRef}
											{...provied.draggableProps}
											{...provied.dragHandleProps}
										>
											{toDo}
										</li>
									)}
								</Draggable>
							))}
							{provied.placeholder}
						</ul>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}

export default App;
