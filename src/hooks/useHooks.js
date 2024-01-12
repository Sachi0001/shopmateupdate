
import { useEffect } from "react"

export const useHooks = (title) => {

  useEffect(()=>{
    document.title = `${title}|shopmate`
  },[title])
  return null
}
