import {useEffect, useState} from "react";

export const IsMenuOrNavbar = () => {
        const [isNavBar, setNavBar] = useState()
        const isBrowser = typeof window !== "undefined"

          useEffect(() => {
            if (isBrowser) {
              const initialState = window.innerWidth >= 920 ? 'navbar' : 'menu'
              setNavBar( () => initialState)
              
              const handleResize = () => {
                const currentState = window.innerWidth >= 920 ? 'navbar' : 'menu'
                setNavBar( () => currentState)
          }
           window.addEventListener('resize', handleResize)
                }
            }
          )
          return isNavBar;
}