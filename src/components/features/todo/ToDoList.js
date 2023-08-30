import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TaskList1 = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  function deleteTask(id) {
    dispatch(deleteTodo(id));
  }

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
                onClick={() => deleteTask(task.id)}
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

export default TaskList1;

// Redux makes it easy to debug an application. By logging actions and state, it is easy to understand coding errors, network errors, and other forms of bugs that might come up during production. Besides logging, it has great DevTools that allow you to time-travel actions, persist actions on page refresh, etc.
