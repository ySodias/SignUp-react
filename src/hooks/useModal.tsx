import { useState } from 'react'

export const useModal = () => {
  const [isShow, setIsShow] = useState<boolean>();
    const toggle = () => setIsShow(!isShow);
  return {
    isShow,
    setIsShow,
    toggle,
  }
}