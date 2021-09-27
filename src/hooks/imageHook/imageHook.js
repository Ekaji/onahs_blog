import {useEffect, useState} from "react"

export const ImageHook = (desktop, mobile) => {
        const [deviceType, setDeviceType] = useState()
        const isBrowser = typeof window !== "undefined"

          useEffect(() => {
            if (isBrowser) {
              const initialState = window.innerWidth >= 650 ? desktop : mobile
              setDeviceType( () => initialState)
              
              const handleResize = () => {
                const currentState = window.innerWidth >= 650 ? desktop : mobile
                setDeviceType( () => currentState)
          }
           window.addEventListener('resize', handleResize)
                }
            }
          )
          return deviceType
}
 