import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Image src="/logo.png" alt="My Logo" width={50} height={50} />
        <a
          href="https://github.com/theonlyhennygod/pomodoro-timer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black text-white px-4 py-2 rounded"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.018c0 4.425 2.865 8.175 6.839 9.504.5.092.682-.217.682-.484 0-.237-.009-.867-.014-1.702-2.782.604-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.907-.62.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.89 1.528 2.34 1.087 2.91.831.092-.645.349-1.087.636-1.337-2.22-.253-4.555-1.114-4.555-4.96 0-1.095.39-1.99 1.029-2.691-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025a9.567 9.567 0 012.5-.336c.848.004 1.704.115 2.5.336 1.91-1.294 2.75-1.025 2.75-1.025.546 1.377.203 2.393.1 2.647.64.701 1.028 1.596 1.028 2.691 0 3.857-2.339 4.703-4.566 4.95.358.31.678.92.678 1.855 0 1.34-.012 2.42-.012 2.748 0 .27.18.58.688.482C19.135 20.19 22 16.44 22 12.018 22 6.484 17.523 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>
      </nav>
    </>
  );
}
