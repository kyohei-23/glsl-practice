import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { classNameX } from "../functions";

export const Container:FC<{children: ReactNode}> = ({
  children
}) =>{
  return (
    <div className={"h-screen w-full"}>
      <Link className={classNameX(
        "block fixed top-0 z-50 overflow-hidden bg-white",
        "py-3 px-6 mx-4 my-2",
        "text-2xl uppercase font-bold",
        "border-current border-2 rounded-full",
        "after:block",
        "after:absolute after:top-0 after:rounded-full after:aspect-square after:right-full after:h-full after:bg-slate-900 after:origin-left after:scale-0",
        "hover:after:scale-[350%] after:-z-[1] after:transition-transform after:duration-500 after:ease-in-out"
      )} to="/">
        <span className={"mix-blend-difference text-white"}>
          index
        </span>
      </Link>
      { children }
    </div>
  )
}