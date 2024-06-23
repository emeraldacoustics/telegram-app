import './index.css';
import { useState, useContext } from "react";
import ThemeContext from "../theme_context";

const contacts: {
	avatar: string,
	name: string,
	lastMsg: string,
}[] = [
	{
		avatar: "https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg",
		name: 'Shrek',
		lastMsg: 'Hi! Where are you?'
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
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const theme = useContext(ThemeContext);

	const contactList = contacts.map(contact => (
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
					<h3 dir="auto" role="button" className="title fullName AS54Cntu">{contact.name}</h3>
				</div>
				<span className={'status ' + theme}>
					{contact.lastMsg}
				</span>
			</div>
		</div>
	));
	return (
		<>
			<div id='LeftColumn' className={'LeftColumn ' + theme}>
				<div className='LeftMainHeader'>
					<div className='round-button-container relative'>
						<button className={'round-button ' + theme} onClick={e => {
							e.preventDefault();
							setShowMenu(b => !b);
						}}>
							<i className={'bi bi-list round-button-icon ' + theme}></i>
						</button>
						<div className={'menu-container ' + theme} style={{
							display: showMenu ? 'block' : 'none'
						}}>
							<div className={'menu-item ' + theme}><i className='bi bi-bookmark menu-item-icon'></i>Saved Messages</div>
							<div className={'menu-item ' + theme}><i className='bi bi-person menu-item-icon'></i>Contacts</div>
							<div className={'menu-item ' + theme}><i className='bi bi-clock-history menu-item-icon'></i>My Stories</div>
							<div className={'menu-item ' + theme}><i className='bi bi-gear menu-item-icon'></i>Settings</div>
							<div className={'menu-item ' + theme}><i className='bi bi-moon-stars menu-item-icon'></i>Night Mode</div>
							<div className={'menu-item ' + theme}><i className='bi bi-flower1 menu-item-icon'></i>Animations</div>
							<div className={'menu-item ' + theme}><i className='bi bi-question-circle menu-item-icon'></i>Telegram Features</div>
							<div className={'menu-item ' + theme}><i className='bi bi-bug menu-item-icon'></i>Report Bug</div>
							<div className={'menu-item ' + theme}><i className='bi bi-git menu-item-icon'></i>Switch to K Version</div>
							<div className={'menu-item ' + theme}><i className='bi bi-plus-circle menu-item-icon'></i>Install App</div>
						</div>
					</div>
					<div className="search-container">
						<input type="text" placeholder="Search..." className={"search-input " + theme} />
						<i className="bi bi-search search-icon"></i>
					</div>
				</div>
				<div className='contacts-list custom-scroll'>
					<div className="overscroll-trigger"></div>
					{contactList}
				</div>
			</div>
		</>
	);
}

export default LeftColumn;