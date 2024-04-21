import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3 class="text-2xl font-semibold font-headline inline">{greeting}!</h3>
			<button onClick={() => setGreeting(randomMessage())} class="inline ml-4">
				↻
			</button>
		</div>
	);
}
