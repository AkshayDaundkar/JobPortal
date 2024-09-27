import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3 text-mine-shaft-200">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput label="FullName" placeholder="Your Name" />
      <TextInput
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Enter your Email?"
      />
      <PasswordInput
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Enter Your Password"
      />
      <PasswordInput
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Confirm Password"
        placeholder="Confirm Your Password"
      />
      <Checkbox
        autoContrast
        label={
          <>
            I accept {""} <Anchor>terms & Conditions</Anchor>
          </>
        }
      />
      <Button variant="filled" autoContrast>
        Sign Up
      </Button>
      <div className="mx-auto">
        Have a Account?
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Singup;
