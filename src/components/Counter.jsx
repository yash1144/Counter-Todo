import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../counterSlice/counterSlice";
import { logout } from "../authSlice/auth";
import { Link, useNavigate } from "react-router-dom";

function Counter() {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <h1>Counter</h1>
      <div>
        <div>{count}</div> 
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <Link to="/todo">Link to Todo-app</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Counter;
