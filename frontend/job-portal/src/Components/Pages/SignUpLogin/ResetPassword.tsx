import {
  Button,
  Modal,
  PasswordInput,
  PinInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../../../Services/UserService";
import { signupValidation } from "../../../Services/FormValidation";
import {
  errorNotification,
  succesNotification,
} from "../../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [resendLoader, setResendLoader] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if (seconds === 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    } else setSeconds((s) => s - 1);
    setSeconds((s) => s - 1);
  }, 1000);

  const handleSendOtp = () => {
    setOtpSending(true);
    sendOtp(email)
      .then((res) => {
        console.log(res);
        succesNotification("OTP sent successfully", "Enter OTP to reset.");
        setOtpSent(true);
        setOtpSending(false);
        setResendLoader(true);
        interval.start();
      })
      .catch((err) => {
        console.log(err);
        setOtpSending(false);
        errorNotification("OTP sent failed", err.response.data.errorMessage);
      });
  };
  const handlevVerifyOtp = (otp: string) => {
    verifyOtp(email, otp)
      .then((res) => {
        console.log(res);
        succesNotification("OTP verified", "Enter new password.");
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "OTP verification failed",
          err.response.data.errorMessage
        );
      });
  };
  const resendOtp = () => {
    if (resendLoader) return;
    handleSendOtp();
  };
  const changeEmail = () => {
    setOtpSent(false);
    setResendLoader(false);
    setSeconds(60);
    setVerified(false);
    interval.stop();
  };
  const handleResetPassword = () => {
    changePass(email, password)
      .then((res) => {
        console.log(res);
        succesNotification(
          "Password changed successfully",
          "Login with new password"
        );
        props.close();
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "Password reset failed",
          err.response.data.errorMessage
        );
      });
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          value={email}
          name="email"
          size="md"
          onChange={(e) => setEmail(e.target.value)}
          withAsterisk
          leftSectionPointerEvents="none"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
          rightSection={
            <Button
              loading={otpSending && !otpSending}
              size="xs"
              className="mr-1"
              onClick={handleSendOtp}
              autoContrast
              disabled={email === "" || otpSent}
              variant="filled"
            >
              Login
            </Button>
          }
          rightSectionWidth="xl"
        />
        {otpSent && (
          <PinInput
            onComplete={handlevVerifyOtp}
            length={6}
            className="mx-auto"
            size="md"
            gap="lg"
            type="number"
          />
        )}
        {otpSent && !verified && (
          <div className="flex gap-2">
            {
              <Button
                fullWidth
                loading={otpSending}
                color="bright-sun.4"
                size="xs"
                className="mr-1"
                onClick={resendOtp}
                autoContrast
                variant="light"
              >
                {resendLoader ? seconds : "Resend"}
              </Button>
            }
            {
              <Button
                fullWidth
                onClick={changeEmail}
                autoContrast
                variant="filled"
              >
                Email
              </Button>
            }
          </div>
        )}
        {verified && (
          <PasswordInput
            value={password}
            error={passErr}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPassErr(signupValidation("password", e.target.value));
            }}
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
        )}
        {verified && (
          <Button onClick={handleResetPassword} size="lg" className="w-full" />
        )}
      </div>
    </Modal>
  );
};
export default ResetPassword;
