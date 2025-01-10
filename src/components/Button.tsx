import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: 'h-14',
        },
        navButton: {
            navButton: 'py-3'
        }
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: 'sm';
        navButton?: 'navButton';
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, navButton, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant,
                navButton,
                size,
                className,
            })}
            {...otherProps}
        />
    );
}
