import React from "react";
import BLTSvg from "@components/svg/blt.svg?react";
import BLBSvg from "@components/svg/blb.svg?react";
import BRTSvg from "@components/svg/brt.svg?react";
import BRBSvg from "@components/svg/brb.svg?react";
import clsx from "clsx";
import {omit} from "radash";
import {ArrowUpRight} from "lucide-react";

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isCTAExist?: boolean;
}

export const ButtonCTA = (props: ButtonCTAProps) => {
  return (
    <button
      {...omit(props, ["className", "isCTAExist"])}
      aria-label="Button CTA"
      className="w-full border border-white/[15%]">
      <div className={clsx("relative", props.className)}>
        <BLTSvg className="absolute -left-[1.5px] -top-[1.5px]" />
        <BLBSvg className="absolute -bottom-[1.5px] -left-[1.5px]" />
        <BRTSvg className="absolute -right-[1.5px] -top-[1.5px]" />
        <BRBSvg className="absolute -bottom-[1.5px] -right-[1.5px]" />

        <div className="flex items-center justify-center space-x-2">
          <p className="text-center font-machina text-white opacity-90 md:text-lg">
            {props.text}
          </p>
          {props.isCTAExist && <ArrowUpRight size={20} color="white" className="-mt-1" />}
        </div>
      </div>
    </button>
  );
};
