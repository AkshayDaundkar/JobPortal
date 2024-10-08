import JobHistory from "./JobHistory/JobHistory";

const JobHistoryPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] pl-4">
      <div className="gap-5 pt-5">
        <JobHistory />
      </div>
    </div>
  );
};

export default JobHistoryPage;
