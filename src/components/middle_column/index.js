import './index.css';
import { useContext } from "react";
import { ThemeContext } from "../theme_context";

const messages = [
	{
		fromMe: false,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello! How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing?",
		timestamp: '0001',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello! How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing?",
		timestamp: '0001',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello! How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing?",
		timestamp: '0001',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello! How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing?",
		timestamp: '0001',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello! How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing?",
		timestamp: '0001',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello! How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing? How are you doing?",
		timestamp: '0001',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: true,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
	{
		fromMe: false,
		message: "Hello",
		timestamp: '0000',
		status: 'sent'
	},
];

function MiddleColumn({isChannel}) {
	const theme = useContext(ThemeContext);
	const messageList = messages.map(msg => {
		return (
			<div
				className='message-container clearfix'
				style={{
					justifyContent: isChannel ? 'none' : (msg.fromMe ? 'left' : 'right')
				}}
			>
				<div
					className={'message-box ' + theme}
					style={{
						maxWidth: isChannel ? '100%' : '75%'
					}}
				>
					{msg.message}
				</div>
			</div>
		);
	});

	return (
		<div id='MiddleColumn' className='MiddleColumn'>
			<div className={'MiddleHeader ' + theme}>
				<div id='MiddleColumnBackButton' className='round-button-container back-button-container'>
					<button type="button" className={'round-button ' + theme} aria-label="Back" title="Back">
						<i className={'bi bi-arrow-left round-button-icon ' + theme}></i>
					</button>
				</div>
				<div className='ChatInfo'>
					<div className='inner'>
						<img
							src="https://static.wikia.nocookie.net/rise-of-the-brave-tangled-dragons/images/a/a9/Frozen-disneyscreencaps_com-7.jpg"
							className='avatar rounded-avatar Avatar__media avatar-media opacity-transition slow open shown'
							alt="Codeforces Solutions"
						/>
					</div>
					<div className="info">
						<div className={'title ' + theme}>
							<h3 dir="auto" role="button" className="fullName AS54Cntu">Codeforces Solutions</h3>
						</div>
						<span className={'status ' + theme}>
							<span className="group-status">426 members</span>
							<span className="online-status">, 8 online</span>
						</span>
					</div>
				</div>
				<div className="header-tools">
					<div id='MiddleHeaderSearch' className='round-button-container'>
						<button type="button" className={'round-button ' + theme} aria-label="Back" title="Back">
							<i className={'bi bi-search round-button-icon ' + theme}></i>
						</button>
					</div>
					<div id='MiddleHeaderCall' className='round-button-container'>
						<button type="button" className={'round-button ' + theme} aria-label="Back" title="Back">
							<i className={'bi bi-telephone round-button-icon ' + theme}></i>
						</button>
					</div>
					<div className='round-button-container'>
						<button type="button" className={'round-button ' + theme} aria-label="Back" title="Back">
							<i className={'bi bi-three-dots-vertical round-button-icon ' + theme}></i>
						</button>
					</div>
				</div>
			</div>
			<div className='MiddleContent custom-scroll'>
				<div className='middle-content-box'>
					{messageList}
				</div>
			</div>
			<div className='middle-column-footer'>
				<div className='message-box'>
					<input type='textarea' className={'message-input ' + theme} />
				</div>
				<div className='round-button-container'>
					<button type="button" className={'round-button ' + theme} aria-label="Back" title="Back">
						<i className={'bi bi-mic round-button-icon ' + theme}></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default MiddleColumn;