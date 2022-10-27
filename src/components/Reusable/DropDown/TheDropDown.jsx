import { useNavigate } from "react-router-dom";
import { useContextCrud } from "../../../context/ContactsCrudContext";

export default function TheDropDown({ listarray }) {
  const { authSubmission } = useContextCrud();

  const navigate = useNavigate();
  const handleClick = (handleType) => {
    if (handleType === "Logout") {
      localStorage.removeItem("userInfo");
      authSubmission("login", "");
      navigate("/login");
    } else {
      console.log("profile page redirect");
    }
  };

  return (
    <div className="_The_Dropdown">
      <ul>
        {listarray.map((item, key) => {
          return (
            <li key={key} onClick={() => handleClick(item.name)}>
              <div>
                <span>{item.icon}</span> {item.name}{" "}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
