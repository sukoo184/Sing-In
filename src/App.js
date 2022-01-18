import React from 'react'
import { connect } from 'react-redux'
import { addUser, deleteUser } from './redux/actions/users'

const App = (props) => {
  const { users, addUser, deleteUser } = props
  console.log(users)

  const saveUser = () => {
    const name = document.getElementsByName('name')[0].value
    const phone = document.getElementsByName('phone')[0].value
    addUser(users.length, name, phone)
  }

  return (
    <div className="App ">
      <div className="container" id="sı">
        <h1 className="text-center">Sing In</h1>
        <label className="label">Name</label>
        <br />
        <input id="ınput" type="text" name="name" />
        <br />
        <label className="label">Phone</label>
        <br />
        <input id="ınput" type="text" name="phone" />
        <br />
        <button className="btn" onClick={saveUser}>
          Kaydet
        </button>
      </div>

      <div>
        <table className="table table-fixed">
          <thead className="thead">
            <tr>
              <th>Ad</th>
              <th>Telefon</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody id="body">
            {users &&
              users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button
                        className="btn-del"
                        onClick={() => deleteUser(user.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return { users: users.users }
}

const mapDispatchToProps = {
  addUser,
  deleteUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
