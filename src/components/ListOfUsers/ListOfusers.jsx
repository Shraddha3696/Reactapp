import React, { useState , useEffect } from 'react';
import axios from 'axios';

//================using useQuery=====================================
// const fetchUsers = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// };


// function ListOfUsers() {
//     const { data, status } = useQuery("users", fetchUsers);

//      return (
//        <div>
          
//          {status === "success" && 
//       (
//            <div>
//              {data.map((user,index) => (
//                <p key={index}>{user.name}</p>
//              ))}
//              <p> status is :{status}</p>
//            </div>
//         )}
//       </div>
//      );
// }

//=======================using axios=================================
function ListOfUsers(){
    const [user, setUsers] = useState([]);

    const getUsers = () =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>{
            console.log(response);
            const myUsers = response.data;
            setUsers(myUsers);
        })
    }
    useEffect(()=>getUsers(),[]);
    return (
                <div>
                    {user.map((user,index) => (
                        <p key={index}>{user.name}</p>
                    ))}
                </div>
            )
}
export default ListOfUsers
