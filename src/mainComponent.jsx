import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { ADDTODO, REMOVETODO, UPDATETODO } from "./action";
import { v4 as uuidv4 } from "uuid";
const RenderTodo = () => {
  const [todo, setTodo] = useState({});
  const [newtodo, setnewTodo] = useState("");

  const selector = useSelector((initialState) => {
    return initialState.Todo;
  });

  function AddTodoLocally() {
    const Todo = {
      id: uuidv4(),
      title: newtodo,
    };
    setTodo({ ...Todo });
  }

  console.log("@VA TODO", todo);

  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch({ type: ADDTODO, todo: todo });
    setnewTodo("");
  };

  const removeTodo = (item) => {
    let filteredTodo = selector.filter((elem) => {
      if (elem.id !== item.id) {
        return elem;
      }
    });
    console.log("@VA filteredTodo", filteredTodo);
    dispatch({ type: REMOVETODO, item: item.id });
  };

  const updateTodo = (id) => {
    dispatch({ type: UPDATETODO, payload: { id: id, updatedTodo: newtodo } });
    setnewTodo("");
  };

  console.log("selector", selector);
  return (
    <>
      <h1>To Do App</h1>
      <Container>
        <Input
          value={newtodo}
          placeholder="Add to do...."
          onChange={(e) => {
            setnewTodo(e.target.value);
          }}
        ></Input>

        <Button
          onClick={(e) => {
            AddTodoLocally();
          }}
        >
          SAVE
        </Button>
        <Button
          onClick={() => {
            addTodo();
          }}
        >
          ADD
        </Button>
        <Container
          className="mt-5"
          style={{ backgroundColor: "black", color: "white", padding: "20px" }}
        >
          <h2 style={{ margin: "10px" }}>To Do List</h2>
          {selector.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  margin: "10px",
                  padding: "20px",
                }}
              >
                <p>{item.id}</p>
                <p>{item.title}</p>

                <Button
                  onClick={() => {
                    removeTodo(item);
                  }}
                >
                  Remove
                </Button>
                <Button
                  onClick={() => {
                    updateTodo(item.id);
                  }}
                >
                  Update
                </Button>
              </div>
            );
          })}
        </Container>
      </Container>
    </>
  );
};
export default RenderTodo;
