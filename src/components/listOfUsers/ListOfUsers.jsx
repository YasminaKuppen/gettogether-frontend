import React from "react";
import './ListOfUsers.css'
function ListOfUsers({ users }) {
    return (
        <div className="users-container">
            {users.map((user) => (
                <div className="users" key={user.id}>
                    <li>{user.username}</li>
                </div>
            ))}
        </div>
    );
}

export default ListOfUsers;
