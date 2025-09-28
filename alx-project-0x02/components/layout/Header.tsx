import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ALX Project 2
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/home" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
