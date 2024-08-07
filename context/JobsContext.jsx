import { createContext, useEffect, useState } from "react";
import jobsData from "../data.json";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [visible, setVisible] = useState(true);

  const filterJobsByLocation = (location) => {
    setJobs(jobsData);
    if (!location) {
      return;
    } else {
      setJobs((prevJob) =>
        prevJob.filter(
          (job) =>
            job.location.toString().toLowerCase() === location.toLowerCase()
        )
      );
    }

    setVisible(false);
  };

  const filterJobsByTitle = (title) => {
    setJobs(jobsData);
    if (!title) {
      return;
    } else {
      setJobs((prevJob) =>
        prevJob.filter((job) =>
          job.position.toString().toLowerCase().includes(title.toLowerCase())
        )
      );
    }

    setVisible(false);
  };

  const filterJobsByContract = (isChecked) => {
    if (isChecked) {
      setJobs(jobsData);
      setJobs((prevJob) =>
        prevJob.filter((job) => job.contract === "Full Time")
      );
    } else {
      return;
    }
  };

  const filterjobsByContractAndLocation = (location, isChecked) => {
    if (location && isChecked) {
      setJobs(jobsData);
      setJobs((prevJob) =>
        prevJob.filter(
          (job) =>
            job.location.toString().toLowerCase() === location.toLowerCase() &&
            job.contract === "Full Time"
        )
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        filterJobsByLocation,
        filterJobsByTitle,
        filterJobsByContract,
        filterjobsByContractAndLocation,
        visible,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
