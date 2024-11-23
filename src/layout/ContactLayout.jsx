import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact"

const ContactLayout = () => {
	return (
		<div>
			
			<div className="container">
				<Contact />
				<Outlet />
			</div>
		</div>
	)
}

export default ContactLayout;