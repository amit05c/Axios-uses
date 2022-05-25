import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  // const [newTodo,setNewTodo]=useState('')
  const [page, setPage] = useState(1);
  const [totalCount, setTotal]=useState(0)
  const [limit,setLimit] = useState(5)
  useEffect(() => {
    const getTodo = async () => {
      let result = await axios.get(
        `http://localhost:3004/userData?_page=${page}&_limit=${limit}`
      );

      console.log(result);
      setTodos(result.data);
    //   console.log(Number.parseInt(result.headers[`x-total-count`]))
      setTotal(Number.parseInt(result.headers[`x-total-count`]))
    };
    getTodo();
  }, [page,limit]);
  //     const handleChange = (e)=>{
  //     //    console.log(e.target.value)
  //            setNewTodo(e.target.value)
  //    }

    //  const saveInfo= ()=>{
    //   fetch("http://localhost:3004/userData", {
    //       method: "POST",
    //       headers: {
    //           "content-type": "application/json"
    //       },
    //       body: JSON.stringify({
    //           text: newTodo,
    //           isCompleted: false
    //       })
    //   }).then(res => res.json()).then(data => {
    //       console.log(data)
    //        setTodos([...todos,data]);
    //        setNewTodo("")
    //   })
    //  }

  return (
    <div>
      <button disabled ={page<=1}
        onClick={() =>  setPage(page - 1)}>Previous</button>

        <select onChange={(e)=>{setLimit(e.target.value)}}>
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={15}>15</option>
        </select>

      <button disabled={page*2>=totalCount} onClick={() =>
           setPage(page + 1)}>Next</button>
      {todos.map((el) => (
        <div key={el.id}>
          {el.id} {`  : `} {el.text}
        </div>
        // <div>{console.log(el)}</div>
      ))}
    </div>
  );
};

export default Todo;
