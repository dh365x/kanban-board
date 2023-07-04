import { atom } from "recoil";

export interface ITodo {
	id: number;
	text: string;
}

export interface IToDoState {
	[key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
	key: "toDo",
	default: {
		"To Do": [{ id: 1, text: "초밥먹기" }],
		Doing: [],
		Done: [],
	},
});
