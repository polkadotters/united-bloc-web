import { FC } from "react"


const Footer: FC<{}> = () => {
  return (
    <div className="absolute lg:flex items-center w-full bottom-0 bg-secondary-bg pr-[2%] pl-[2%] flex-wrap h-[80px] lg:h-[55px] justify-between ">
      <div className="text-white text-sm text-center mt-2 lg:mt-0 flex justify-center gap-4">
        <div>© 2023 United Bloc</div>
      </div>
    </div>
  )
}


export default Footer;
