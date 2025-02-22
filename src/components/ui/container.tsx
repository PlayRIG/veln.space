import {cn} from "src/utils/cn";
import type {ReactNode} from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = (props: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-screen w-full flex-col items-center justify-center px-4 md:px-12",
        props.className,
      )}>
      {props.children}
    </div>
  );
};
