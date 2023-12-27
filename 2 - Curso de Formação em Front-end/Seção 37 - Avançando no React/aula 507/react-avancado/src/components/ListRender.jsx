import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "José"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "João", age: 19},
    ])
    return (
        <div>
            {/* 4- Render sem Key */}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            {/* 5 - Render com Key */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
        </div>
    );
};

export default ListRender;