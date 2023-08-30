import { useRef } from "react";
import { createStore, applyMiddleware } from "redux";
import { useSelector, useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const addTodo = (text) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const addNewTask = () => {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  };
  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
