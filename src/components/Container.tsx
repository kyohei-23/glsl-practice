import { FC, ReactNode } from "react";

export const Container:FC<{children: ReactNode}> = ({
  children
}) =>{
  return (
    <div className={"h-screen w-full"}>
      { children }
    </div>
  )
}