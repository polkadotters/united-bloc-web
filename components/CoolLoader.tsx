import { FC, useEffect, useState } from "react"
import Image from "next/image"


type CoolLoaderProps = {
  setDone: () => void
}


const loadingStrings = [
  "init united bloc..",
  "syncing blocks",
  "playing back the chain",
  "launching united bloc..."
]


const CoolLoader: FC<CoolLoaderProps> = ({ setDone }) => {
  const [percentDone, setPercentDone] = useState(0)
  const [loadingText, setLoadingText] = useState(loadingStrings[0])

  useEffect(() => {
    const setRandomTimeout = (prev: number, timeoutMul: number, broken: boolean) =>
      setTimeout(() => {
        doIncrement(prev, broken)
      }, Math.floor(Math.random() * timeoutMul))
    const doIncrement = (prev: number, broken: boolean) => {
      let newPercent: number
      if (!broken)
        newPercent = Math.min(prev + Math.floor(Math.random() * 2) + 1, 100);
      else 
        newPercent = Math.min(prev + Math.floor(Math.random() * 75) + 1, 9999);
      let loadingStringsIndex = Math.min(Math.floor(loadingStrings.length * (newPercent / 100)), loadingStrings.length -1)
      setPercentDone(newPercent)
      setLoadingText(loadingStrings[loadingStringsIndex])
      if (newPercent < 100)
        setRandomTimeout(newPercent, 50, false)
      else if (newPercent == 100)
        setTimeout(() => setRandomTimeout(newPercent, 5, true), 1800)
      else
        setRandomTimeout(newPercent, 5, true)
    }
    const timer = setRandomTimeout(0, 50, false)
    return () => clearTimeout(timer);
  }, [])
  
  if (percentDone == 9999)
    setDone()

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-secondary-bg flex justify-center items-center flex-col pr-[5%] pl-[5%]">
      <div className="w-full max-w-[150px] aspect-square relative hidden">
        <Image src="/logo.webp" alt="Main logo" layout="fill" />
      </div>
      <div className="w-full max-w-[375px]">
        <div className={`text-6xl ${percentDone <= 100 ? "text-stone-100" : "text-red-500"}`}>{percentDone.toFixed(0)}%</div>
        <div className="bg-stone-600 h-[20px] mt-2 mb-1">
          <div className="bg-red-500 h-full" style={{width: percentDone.toFixed(0) + "%"}}></div>
        </div>
        <div className="text-stone-400">{loadingText}</div>
      </div>
    </div>
  )
}


export default CoolLoader;
