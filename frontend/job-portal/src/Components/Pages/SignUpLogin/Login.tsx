import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Services/UserService";
import { loginValidation } from "../../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";

const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};
    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid) {
      loginUser(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Login Successful",
            message: "Redirecting to home page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/HomePage");
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Login failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };
  return (
    <>
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold"> Create Account</div>

        <TextInput
          value={data.email}
          error={formError.email}
          name="email"
          onChange={handleChange}
          withAsterisk
          leftSectionPointerEvents="none"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
        />
        <PasswordInput
          value={data.password}
          error={formError.password}
          name="password"
          onChange={handleChange}
          withAsterisk
          leftSection={
            <IconLock
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
          label="Password"
          placeholder="Password"
        />

        <Button onClick={handleSubmit} autoContrast variant="filled">
          Login
        </Button>
        <div className="mx-auto">
          Don't Have an account?{" "}
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/signup");
              setFormError(form);
              setData(form);
            }}
          >
            SignUp
          </span>
        </div>
        <div
          onClick={open}
          className="text-bright-sun-400 hover:underline cursor-pointer text-center "
        >
          Forget Password?
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};
export default Login;
