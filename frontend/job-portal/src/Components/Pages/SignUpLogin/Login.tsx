import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../Services/UserService";

const form = {
  email: "",
  password: "",
};
const Login = () => {
  const [data, setData] = useState(form);

  const handleChange = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    loginUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Login Account</div>

      <TextInput
        withAsterisk
        leftSectionPointerEvents="none"
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        placeholder="Your email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <PasswordInput
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} autoContrast variant="filled">
        Login
      </Button>
      <div className="mx-auto">
        Do not have an account?{" "}
        <Link to={"/signup"} className="text-bright-sun-400 hover:underline">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
