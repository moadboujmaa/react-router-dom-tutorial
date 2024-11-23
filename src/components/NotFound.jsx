import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="notfound"> 
			<h2>404 | Page Not Found</h2>
			<button onClick={() => navigate("/")}>Go to home</button>
		</div>
	)
}

export default NotFound;