// import React from 'react'
const Table = () => {
  const userData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "city": "Gwenborough",
    },{
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "city": "Wisokyburgh",
    },{
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "city": "McKenziehaven",
    },{
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org",
      "city": "South Elvis",
    },{
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca",
      "city": "Roscoeview",
    },{
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.info",
      "city": "South Christy",
    }
  ]
  return (
    <>
    <h1>listsandkeys</h1>
    <table className="table">
      <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>cty</th>
      </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
  </>
)
}
export default Table