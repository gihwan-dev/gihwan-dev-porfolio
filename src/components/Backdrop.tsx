interface BackdropProps {
  onClick: () => void;
}

export default function Backdrop({ ...props }: BackdropProps) {
  return (
    <div
      {...props}
      className="absolute left-0 top-0 z-10 h-screen w-screen"
    ></div>
  );
}
