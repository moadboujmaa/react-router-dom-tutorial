import { useLoaderData } from "react-router-dom";

export const jobDetailsLoader = async ({ params }) => {
	const { id } = params;

	const res = await fetch("http://localhost:5000/jobs/" + id);
	if (!res.ok)
		throw Error("Could not found job details");
	return res.json();
};

const JobDetails = () => {
	const job = useLoaderData();

	return (
		<div>
			<h1>Job Details Page</h1>
			<p><b>Job Title: </b>{job.title}</p>
			<p><b>Salary: </b>{job.salary}</p>
			<p><b>Job Location: </b>{job.location}</p>
			<button>Apply now</button>
		</div>
	);
};

export default JobDetails;
