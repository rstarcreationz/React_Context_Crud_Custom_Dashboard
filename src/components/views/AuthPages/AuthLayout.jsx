import { useContextCrud } from "../../../context/ContactsCrudContext";
import TheLogin from "./TheLogin";
import TheRegister from "./TheRegister";

const AuthLayout = () => {
  const { toggleAuth } = useContextCrud();

  return (
    <section className="_auth_Section">
      <div className="_slide_Wrap">
        <TheLogin />

        <TheRegister />

        <div
          className={
            toggleAuth
              ? "_plain_Wrap  _isTransform"
              : "_plain_Wrap _noTransform"
          }
        >
          <div>
            <h1>Welcome !</h1>
            <p>Enter your detail and start journey with us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
