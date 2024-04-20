import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar() {
	return (
		<div className="z-10">
			<DesktopNavbar />
			<MobileNavbar />
		</div>
	);
}
