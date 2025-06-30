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
        "mx-auto flex h-screen w-full flex-col justify-center",
        props.className,
      )}>
      {props.children}
    </div>
  );
};
