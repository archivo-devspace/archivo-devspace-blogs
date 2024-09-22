import { ReactNode } from "react"
import { MouseEventHandler } from "react";

interface Props {
    variant?: "primary" | "danger" | "success" | "warning" |"iconTcon"
    btnType?: "button" | "submit",
    size?: string
    label?:string,
    isDisable?: boolean,
    children?: ReactNode,
    buttonIcon?: ReactNode,
    className?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default Props

