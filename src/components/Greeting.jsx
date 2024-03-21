import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3>{greeting}! Thank you for visiting!</h3>
			<button
				onClick={() => setGreeting(randomMessage())}
				class="border-[1px] p-2 rounded-lg hover:bg-stone-500 active:bg-stone-400"
			>
				New Greeting
			</button>
		</div>
	);
}
