import React from "react";

function ListOfUsers({ users }) {
    return (
        <div className="users-container">
            {users.map((user) => (
                <article key={user.id}>
                    <h4>{user.username}</h4> {/* Toon de gebruikersnaam */}
                </article>
            ))}
        </div>
    );
}

export default ListOfUsers;
