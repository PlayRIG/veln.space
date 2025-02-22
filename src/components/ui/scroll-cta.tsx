import SlashesSvg from "@components/svg/slashes.svg?react";

export const ScrollCTA = () => {
  return (
    <div className="flex origin-bottom rotate-90 transform items-center space-x-1.5 text-white">
      <SlashesSvg className="scale-125" />
      <p className="font-machina text-lg">SCROLL</p>
      <SlashesSvg className="scale-125" />
    </div>
  );
};
