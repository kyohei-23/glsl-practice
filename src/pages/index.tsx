import { FC } from "react"
import { Link } from "react-router-dom"
import { routerSource } from "../router"

export const Nav:FC = () => {
  return (
    <main>
      <nav>
        <ul className={"grid grid-cols-2 w-[min(80rem, calc(100% - 1rem))] mx-auto py-12 gap-4"}>
          { 
            routerSource.map(({path, labelTxt})=>{
              return (
                <li
                  key={path}
                  className={"text-2xl hover:underline capitalize"}
                >
                  <Link to={path!}>
                    { labelTxt }
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </main>
  )
}