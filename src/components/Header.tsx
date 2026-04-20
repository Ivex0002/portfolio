import { FloatingBox } from "vive-floating-box";

export function Header() {
  return (
    <div className="h-25 flex justify-center items-center bg-transparent w-full px-8 py-4">
      <div className="flex items-center gap-8">
        <Title />
        <FloatingBox onlyActiveHover={true}>
          <a
            className="flex h-14 bg-amber-50 items-center justify-between p-1 rounded-[28px] cursor-pointer"
            title="git_link:ivex0002"
            href="https://github.com/Ivex0002"
            target="_blank"
          >
            <Logo />
            <span className="text-2xl font-bold mb-1.5 mx-3">garam_kim</span>
          </a>
        </FloatingBox>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <img
      src="https://github.com/ivex0002.png"
      alt="logo"
      className="w-12 h-12 rounded-full"
    />
  );
}
function Title() {
  return <span className="text-6xl font-bold">Portfolio</span>;
}
