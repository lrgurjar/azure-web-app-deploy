import React, { createContext } from "react";
import D3Com from "./components/D3/D3Com";
// import AgGrid from "./components/AgGrid/AgGrid";
// import Chart from "./components/chart/Chart";
// import Task1 from "./components/features/todo/ToDodata";
// import TaskList1 from "./components/features/todo/ToDoList";
// import HOC from "./components/HocComponent";
// import Accordion from "./components/Accordion";
// import Tutorial from "./components/Tutorial";
// import AxiosTutorial from "./components/CustomHook";
// import DynamicForm from "./components/DynamicForm";
// import UseRedux from "./components/TaksListRedux";

const data = createContext();
function App() {
  // const items = [
  //   {
  //     id: "l2kj5",
  //     label: "Can I use React on a project?",
  //     content:
  //       "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
  //   },
  //   {
  //     id: "lk2j35lkj",
  //     label: "Can I use Javascript on a project?",
  //     content:
  //       "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
  //   },
  //   {
  //     id: "l1kj2i0g",
  //     label: "Can I use CSS on a project?",
  //     content:
  //       "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
  //   },
  // ];
  // let name = "Leelaram gurjar2";

  return (
    <>
      {/* <Accordion items={items} />
      <div style={{ margin: "40px" }}>
        <data.Provider value={name}>
          <Tutorial name="Leelaram gurjar" />
        </data.Provider>
      </div>
      <AxiosTutorial /> */}
      {/* <DynamicForm /> */}
      {/* <Task1 />
      <TaskList1 />
      <HOC /> */}
      {/* <UseRedux /> */}
      {/* <AgGrid /> */}
      {/* <Chart /> */}
      <D3Com />
    </>
  );
}

export default App;
export { data };
