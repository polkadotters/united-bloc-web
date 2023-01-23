import { FC } from "react"
import Link from "next/link"


const Header: FC<{}> = () => {
  return (
    <div id="header" className="pl-[5%] pr-[5%] pt-3 pb-3">
      <div className="w-full flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">United Bloc</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Header;
