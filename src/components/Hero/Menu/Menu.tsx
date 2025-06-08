import Image from "next/image";

const inActiveStyle = "text-white/50";
const activeStyle =
  "bg-white text-black rounded-full px-6 py-2 border-[1px] border-white/50";

export default function Menu() {
  return (
    <div className="relative z-10 flex items-center justify-between px-20 top-1">
      <div className="flex items-center gap-1">
        <Image
          src="/images/svg/diamond.svg"
          alt="logo"
          width={20}
          height={20}
        />
        <div className="text-white text-xl font-bold"> Ricardi Antoine </div>
      </div>
      <div className="text-white text-xl font-semibold flex items-center gap-4 bg-gray-800/70 px-4 py-2 rounded-full">
        <div className={activeStyle}>Home</div>
        <div className={inActiveStyle}>About Me</div>
        <div className={inActiveStyle}>Projects</div>
        <div className={inActiveStyle}>Blog</div>
        <div className={inActiveStyle}>Hobbies</div>
      </div>
      <div className="text-white text-xl font-semibold flex items-center gap-4">
        <div className="bg-white rounded-full px-6 py-2 text-black">
          Hire Me
        </div>
        <div className="rounded-full px-6 py-2 border-white border-[1px]">
          Links
        </div>
      </div>
    </div>
  );
}
