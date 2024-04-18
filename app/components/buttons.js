export default function Buttons({ className = "", onClick, children }) {
	return (
		<button type="button" className={`${className}`} onClick={onClick}>
			{children}
		</button>
	);
}
