import Image from "next/image";

export default function Nav() {
  const navItems = [
    { text: "Home", href: "/" },
    { text: "Submit", href: "/submit" },
    { text: "Vote", href: "/vote" },
    { text: "Directory", href: "/directory" },
    { text: "About", href: "/about" },
  ];
  return (
    <nav className="fixed top-0 px-32 py-12 h-48 flex flex-row justify-between w-full bg-transparent">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={44}
        height={51}
        className="h-20 w-[18px]"
      />
      <div className="flex gap-24">
        {navItems.map((item) => (
          <a
            key={item.text}
            href={item.href}
            className="text-white mix-blend-difference"
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
