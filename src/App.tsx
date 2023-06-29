import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
	const onDragEnd = () => {};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				<Droppable droppableId="list">
					{(provied) => (
						<ul ref={provied.innerRef} {...provied.droppableProps}>
							<Draggable draggableId="item1" index={0}>
								{(provied) => (
									<li
										ref={provied.innerRef}
										{...provied.draggableProps}
										{...provied.dragHandleProps}
									>
										item①
									</li>
								)}
							</Draggable>
							<Draggable draggableId="item2" index={1}>
								{(provied) => (
									<li
										ref={provied.innerRef}
										{...provied.draggableProps}
										{...provied.dragHandleProps}
									>
										item②
									</li>
								)}
							</Draggable>
							{provied.placeholder}
						</ul>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
}

export default App;
