import { style as globalStyle } from "../user/style";

const userField = [
  { id: "name", label: "User Name" },
  { id: "age", label: "User Age", type: "number" },
  { id: "address", label: "User Address" },
  { id: "mobile", label: "User Mobile", type: "number" },
];

const UserForm4 = (props) => {
  // const [user, setUser] = useState(props.data); //{}
  const user = props.user;
  const setUser = props.setUser;

  const handleChange = (e) => {
    const id = e.target.id; // "name" | "age" | "address" | "mobile"
    const value = e.target.value;

    setUser({ ...user, [id]: value });
  };

  return (
    <div style={containerStyle}>
      <h1>User Form - 4 </h1>

      {userField.map((field) => {
        return (
          <div style={globalStyle.inputGroup}>
            <label style={globalStyle.fieldLabel}>{field.label}</label>
            <input
              id={field.id}
              type={field.type}
              value={user[field.id]}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserForm4;

const containerStyle = {
  ...globalStyle.container,
  background: "none",
  boxShadow: "none",
  margin: 20,
  border: "1px solid #ccc",
};
