import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  RadioGroup,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../../Services/UserService";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [value, setValue] = useState("react");
  const [data, setData] = useState(form);

  const handleChange = (event: any) => {
    if (typeof event == "string") setData({ ...data, accountType: event });
    else setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    registerUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        name="name"
        withAsterisk
        value={data.name}
        onChange={handleChange}
        label={"Full Name"}
        placeholder="Your Name"
      />
      <TextInput
        name="email"
        withAsterisk
        value={data.email}
        onChange={handleChange}
        leftSectionPointerEvents="none"
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput
        name="password"
        value={data.password}
        onChange={handleChange}
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Confirm Password"
        placeholder="Password"
      />
      <RadioGroup
        value={data.accountType}
        onChange={handleChange}
        label="You Are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg has-[:checked]:bg-bright-sun-400/5"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border  hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg  has-[:checked]:bg-bright-sun-400/5 "
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </RadioGroup>

      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms and conditions</Anchor>
          </>
        }
      />
      <Button onClick={handleSubmit} autoContrast variant="filled">
        SignUp
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <Link to={"/login"} className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
