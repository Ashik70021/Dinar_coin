const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#161614] border-t-2 border-t-[#f3b841] text-white p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Contract Address</a>
                <a className="link link-hover">How To Buy</a>
                <a className="link link-hover">Whitepaper</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {/* Telegram Icon */}
                    <a
                        href="https://t.me/DinarCoinChat1" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                            alt="Telegram"
                            className="h-6 w-6"
                        />
                    </a>
                    {/* Twitter Icon */}
                    <a
                    href="https://x.com/DinarBankARB?t=_TG9XMZC9plC4zrAhR7TxQ&s=09">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a
                    href="https://x.com/DinarCoinArb?t=JxZSPzJG5JkpS1CEEDdjtQ&s=09">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    
                </div>
            </nav>
            <aside className="text-white">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by{' '}
                    <span className="text-[#f3b841]">DINAR COIN</span>.
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
