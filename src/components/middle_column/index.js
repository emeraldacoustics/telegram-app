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
        <div className="back-button">
          <button type="button" className="Button smaller translucent round" aria-label="Back" title="Back">
            {'<'}
            {/* <div className="animated-close-icon state-back"></div> */}
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
          <div className="HeaderActions">
            {/* <button type="button" className="Button smaller translucent round" aria-label="Search this chat" title="Search this chat">
              <i className="icon icon-search" aria-hidden="true"></i>
            </button>
            <button type="button" className="Button smaller translucent round has-ripple" aria-label="More actions" title="More actions">
              <i className="icon icon-more" aria-hidden="true"></i>
              <div className="ripple-container"></div>
            </button> */}
          </div>
        </div>
      </div>
      <div className='MiddleContent'>
        {messageList}
      </div>
    </div>
  );
}

export default MiddleColumn;