  import logo from "../../assets/icons/images/logo.png";

  function TopNavBar() {
    return (
      <header className="h-16 border-b bg-white flex items-center justify-between px-14">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="QPay Logo" className="h-10 w-auto" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Greeting */}
          <div className="text-right">
            <p className="text-sm text-gray-400">Hello</p>
            <p className="text-base font-medium text-gray-700">Thomas Shelby</p>
          </div>

          {/* Dropdown arrow */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </header>
    );
  }

  export default TopNavBar;
