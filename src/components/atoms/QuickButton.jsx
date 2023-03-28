import React from 'react'
import clsx from 'clsx'

function QuickButton({ size, status, className, children, ...rest }) {
    return (
        <button
            {...rest}
            className={clsx(
                'rounded-full flex flex-row items-center justify-center focus:outline-none',
                { 'w-16 h-16': size === 'big' },
                { 'w-14 h-14': size === "small" },
                { '!bg-white': status === "inactive" },
                className
            )}>
            {children}
        </button>
    )
}

export default QuickButton