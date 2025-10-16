const Users = (props) => {
  return (
    <div>
      {props.data.map((user) => {
        return (
          <div
            style={{
              background: "red",
              color: "white",
              border: "1px solid #fff",
              margin: "10px",
              padding: "10px",
            }}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
