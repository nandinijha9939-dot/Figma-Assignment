export default function Navbar() {
  return (
    <nav className="w-full bg-[#f5f5f5] px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-6 flex items-center justify-between">

      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">
        Elementum
      </h1>

      <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 text-[10px] sm:text-xs md:text-sm">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Studio</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">FAQs</li>
      </ul>

      <button className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        ☰
      </button>

    </nav>
  );
}