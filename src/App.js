import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UsersList from "./components/UsersList";

function App() {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch({type: 'FETCH_TASKS_REQUEST'});
  }, [dispatch]);

  return (
    <>
      <UsersList/>
    </>
  );
}

export default App;