import { style } from "./style";

const User = function (props) {
  return (
    <div className="bg-primary p-4 d-flex flex-column gap-2">
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Name - </span>
        <span>{props.user.name}</span>
      </div>
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Age - </span>
        <span>{props.user.age}</span>
      </div>
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Address - </span>
        <span>{props.user.address}</span>
      </div>
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Mobile - </span>
        <span>{props.user.mobile}</span>
      </div>
    </div>
  );
};

export default User;
