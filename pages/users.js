const Users = ({users}) => {
  return (
    <div>
      {
        users.map(user => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Users;


export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data
    }
  }
}

