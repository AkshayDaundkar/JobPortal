import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-20 pb-5 pt-7 flex items center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
      {/* Title */}
      <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100 mb-3">
        Never want to Miss any{" "}
        <span className="text-bright-sun-400">Job News?</span>
      </div>
      <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2 rounded-xl items-center">
        <TextInput
          variant="unstyled"
          placeholder="Your@name.com"
          size="lg"
          className="[&_input]:text-mine-shaft-100 font-semibold"
        />
        <Button className="!rounded-lg text-mine-shaft-100" color="brightSun.4" size='lg' variant="filled">Subscribe</Button>
      </div>
    </div>
  );
};

export default Subscribe;
