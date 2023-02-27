import { FC } from "react"
import { Link } from "react-router-dom"
import { routerSource } from "../router"

export const Nav:FC = () => {
  return (
    <main>
      <nav>
        <ul className={"grid grid-cols-2 max-w-7xl mx-auto py-12 gap-4"}>
          { 
            routerSource.map(({path, labelTxt})=>{
              return (
                <li className={"text-2xl hover:underline capitalize"}>
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