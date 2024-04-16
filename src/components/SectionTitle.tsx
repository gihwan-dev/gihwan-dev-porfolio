const SectionTitle: React.FC<{
  title: string;
}> = ({ title }) => {
  return <h1 className={'text-6xl text-text-primary-red'}>{title}</h1>;
};

export default SectionTitle;
