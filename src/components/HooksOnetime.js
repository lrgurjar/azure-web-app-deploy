import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
  memo,
  useReducer,
  createContext,
  useContext,
} from "react";

const expensiveCalculation = (num) => {
  console.log("Render explosive");
  console.log("Calculating...");
  for (let i = 0; i < 10000; i++) {
    num += 1;
  }
  return num;
};

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOOGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-tod",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOOGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

function TodoList({ list, key, dispatch }) {
  return (
    <div>
      <span style={{ color: list.completed ? "yellow" : "#000" }}>
        {list.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: list.id } })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: list.id } })
        }
      >
        delete
      </button>
    </div>
  );
}

function MiseleousHooks() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const renderValue = useRef(0);
  const [inputValue, setInputValue] = useState("");
  // const [data, err] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [list, dispatch] = useReducer(reducer, []);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const incrementCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    renderValue.current = name;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: inputValue } });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>My Todso</h2>
        {count}
        <br />
        <br />
        <button onClick={incrementCount}>Click</button>
        <br />
        <br />
        <Todos todos={todos} addTodo={addTodo} />\
        <br />
        {calculation}
        <br />
        {renderValue.current}
        <input type="tex" value={name} onChange={handleChange} />
        {/* {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
          {err} */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue}
      </form>

      {list.map((item) => {
        return <TodoList key={item.id} list={item} dispatch={dispatch} />;
      })}
      <ShowContext />
    </>
  );
}

function Todos({ todos, addTodo }) {
  return (
    <>
      <button onClick={addTodo}>add ToDo</button>
      <br />
      {todos &&
        todos.map((item) => {
          return <div key={item}>{item}</div>;
        })}
    </>
  );
}
memo(Todos);

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [err, serEror] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => serEror(err.message));
  }, [url]);
  return [data, err];
};

export default MiseleousHooks;

const UserContext = createContext();
function ShowContext() {
  const [user, setUser] = useState("Leela gurjar");
  const setUser1 = (e) => {
    alert("clciked");
  };
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <button>click</button>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </>
  );
}

const useFetch1 = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async (() => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    });
    fetchData();
  },[url]);
  return { data, loading, error };
};
const MyComponent = () => {
  const { data, loading, error } = useFetch1('https://api.example.com/data');
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {/* Display fetched data */}
    </div>
  );
};




// Take in a component as argument WrappedComponent
// const higherOrderComponent = (WrappedComponent) => {
//   // And return another component
//     class HOC extends React.Component {
//       render() {
//         return <WrappedComponent />;
//       }
//     }
//     return HOC;
//   };
  
// Take in a component as argument WrappedComponent
function WithLoading(Component){
  return function WihLoadingComponent({isLoading, ...props}){
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  }
}

const ListWithLoading = WithLoading(ListComp);

class App1 extends React.Component {
  constructor(){
  this.state = {
    loading: true,
    repos: []
  }
}
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    );
  }
}


const ListComp = (props)=> {
  const { repos } = props;  
  if (!repos) return null;
  if (!repos.length) return <p>No repos, sorry</p>;

  return(
    <ul>
      {
        repos.map(item=> {
          return <li key={item.id}>{item.full_name}</li>
        })
      }
    </ul>
  )
}
function reportHoc(InputComponent, inputData){
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:[],
        columns:inputData.columns,
        header:inputData.header
      };
    }
    componentDidMount(){
      fetch(inputData.url).then(res => res.json()).then(result => {
        this.setState({
          data: result
        })
      })
    }
    reducer(){
      return(
        <Data data={this.state}></Data>
      )
    }
  }

}
class Data extends React.Component{

  constructor(props){

    super(props);

    //alert(JSON.stringify(props));

  }

  render(){

    return (

    <div>

        <h2>{this.props.data.header}...</h2>

        <table>

          <thead>

            <tr>

            {this.props.data.columns.map(c => (

              <th>{c}</th>

            ))}

            </tr>

          </thead>

          <tbody>

          {this.props.data.data.map(emp => (

            <tr key={emp.Id}>

              {this.props.data.columns.map(c => (

              <td>{emp[c]}</td>

            ))}

              </tr>

          ))}

          </tbody>

        </table>

      </div>

    );

  }

}
const EmployeeReports=reportsHOC(Employee,
  {Url:'https://localhost:44306/api/Employee', 
  columns:['Id','Name','Location','Salary'],header:'Employee Data'});