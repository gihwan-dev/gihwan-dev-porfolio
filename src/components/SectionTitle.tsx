interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className={'text-4xl text-text-primary-red sm:text-6xl'}>{title}</h1>
  );
}
