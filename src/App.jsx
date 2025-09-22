import "./App.css";
import { Link, NavLink, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));

    navigate("/users");
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/*<Route path="home" element={<Home />} />*/}
          <Route index element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route
              path=":userId"
              element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users({ users }) {
  return (
    <>
      <h2>users</h2>
      <ul>
        {users.map((u) => {
          return (
            <>
              <li key={u.id}>
                <Link to={`/users/${u.id}`}>{u.fullName}</Link>
              </li>
            </>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}

const Layout = () => {
  return (
    <>
      <h1>React Router</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

const User = ({ onRemoveUser }) => {
  const { userId } = useParams();
  return (
    <>
      <h2>User:{userId}</h2>
      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>
      <Link to="/users">Back to Users</Link>
    </>
  );
};
