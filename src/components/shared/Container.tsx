import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx(
        className,
        "mx-auto px-[20px] sm:px-[30px] md:px-[50px] lg:px-[30px]",
        "w-full",
        "lg:max-w-[1040px]",
        "xl:max-w-[1330px]"
      )}
      {...props}
    />
  );
};
