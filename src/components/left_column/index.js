import './index.css';
import { useContext } from "react";
import { ThemeContext } from "../theme_context";

const contacts = [
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Did you have a nice dinner?'
	},
];

function LeftColumn() {
	const theme = useContext(ThemeContext);

	const contactList = contacts.map(contact => {
		return (
			<div className={'ContactInfo ' + theme}>
				<div className='avatar-box'>
					<img
						src={contact.avatar}
						className='avatar rounded-avatar Avatar__media avatar-media opacity-transition slow open shown'
						alt={contact.name}
					/>
				</div>
				<div className="info">
					<div className={'title ' + theme}>
						<h3 dir="auto" role="button" className="fullName AS54Cntu">{contact.name}</h3>
					</div>
					<span className={'status ' + theme}>
						{contact.lastMsg}
					</span>
				</div>
			</div>
		);
	});

	return (
		<div id='LeftColumn' className='LeftColumn'>
			<div className='LeftMainHeader'>
				<input type='text' className='search' />
			</div>
			<div className='contacts-list custom-scroll'>
				<div className="overscroll-trigger"></div>
				{contactList}
			</div>
		</div>
	);
}

export default LeftColumn;