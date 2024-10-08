import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label={"Full Name"} placeholder="Your Name" />
      <TextInput
        withAsterisk
        leftSectionPointerEvents="none"
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Confirm Password"
        placeholder="Password"
      />
      <Checkbox
      autoContrast
       label={<>I accept{' '}<Anchor>terms and conditions</Anchor></>}
      />
      <Button autoContrast variant="filled">SignUp</Button>
      <div className="mx-auto">Have an account? <Link to={'/login'} className="text-bright-sun-400 hover:underline">Login</Link></div>
    </div>
  );
};

export default SignUp;
