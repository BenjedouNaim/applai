import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

export const Logo = ({ className }: { className?: string }) => {
    return (
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    );
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    );
}
