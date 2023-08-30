import { useState } from "react";

function DynamicForm() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { name: "", age: "" };
    setInputFields((prevState) => {
      return [...inputFields, newfield];
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  const removeFields = (reIndex) => {
    let data = [...inputFields];
    data.splice(reIndex, 1);
    setInputFields(data);
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(e) => handleFormChange(index, e)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(e) => handleFormChange(index, e)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
        <button onClick={submit}>Submit</button>
        <br />
        <button onClick={addFields}>Add More..</button>
      </form>
    </div>
  );
}

export default DynamicForm;
