import { style } from "./style";

const User = function (props) {
  return (
    <div className="bg-primary p-4 d-flex flex-column gap-2">
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Name - </span>
        <span style={style.fieldValue}>{props.user.name}</span>
      </div>
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Age - </span>
        <span style={style.fieldValue}>{props.user.age}</span>
      </div>
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Address - </span>
        <span style={style.fieldValue}>{props.user.address}</span>
      </div>
      <div style={style.inputGroup}>
        <span style={style.fieldLabel}>Mobile - </span>
        <span style={style.fieldValue}>{props.user.mobile}</span>
      </div>
    </div>
  );
};

export default User;
