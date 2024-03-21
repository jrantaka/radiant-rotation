import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3 class="text-6xl font-semibold font-sans inline">{greeting}!</h3>
			<button
				onClick={() => setGreeting(randomMessage())}
				class="inline ml-4 hover:bg-lime-800 p-2 rounded-full"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-arrow-clockwise"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
					/>
					<path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
				</svg>
			</button>
		</div>
	);
}
