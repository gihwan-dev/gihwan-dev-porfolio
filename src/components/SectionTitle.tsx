const SectionTitle: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <h1 className={'text-4xl text-text-primary-red sm:text-6xl'}>{title}</h1>
  );
};

export default SectionTitle;
