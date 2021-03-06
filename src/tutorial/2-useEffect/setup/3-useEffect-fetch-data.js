import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const reponse = await fetch(url);
    const users = await reponse.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((i) => {
          const { id, login, avatar_url, html_url } = i;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
