import { useState } from 'react'

export const useModal = (state: boolean) => {
  const [isShow, setIsShow] = useState<boolean>(state);
    const toggle = () => setIsShow(!isShow);
  return {
    isShow,
    setIsShow,
    toggle,
  }
}