import { FC } from 'react'

import { ClassName, useClassName } from '../hooks/className'
import { useFireEvent, AnyEvent } from '../events'

// import * as design from "@optoinvest/opto-design-system" as any;
import {ArrowRightStroke, Button} from "@optoinvest/opto-design-system"

export interface ButtonProps {
  type: 'Button'
  text: string
  onClick?: AnyEvent
  htmlType?: 'button' | 'submit' | 'reset'
  className?: ClassName
}

export const ButtonComp: FC<ButtonProps> = (props) => {
  const { text, onClick, htmlType } = props

  const { fireEvent } = useFireEvent()

  return (
    <Button text="blah!" type={htmlType} onClick={() => fireEvent(onClick)}/>
  )

//   return (<ArrowRightStroke/>)
//
//   return (
//     <button className={useClassName(props)} type={htmlType} onClick={() => fireEvent(onClick)}>
//       {text}
//     </button>
//   )
}
