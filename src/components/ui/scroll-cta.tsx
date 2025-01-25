import SlashesSvg from "@components/svg/slashes.svg?react";

export const ScrollCTA = () => {
  return (
    <div className="flex items-center space-x-1.5 text-white transform rotate-90 origin-bottom">
      <SlashesSvg className="scale-125" />
      <p className="font-neue-machina text-lg">SCROLL</p>
      <SlashesSvg className="scale-125" />
    </div>
  );
};
