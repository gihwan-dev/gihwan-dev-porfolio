interface Props {
  title: string;
  description: string;
}

const ProjectOverviewDescription: React.FC<Props> = ({
  title,
  description,
}) => {
  return (
    <div className={'flex w-full flex-col items-center gap-2 px-4 py-3'}>
      <h3 className={'text-center text-lg font-bold text-white'}>{title}</h3>
      <p className={'text-center text-gray-400'}>{description}</p>
      <hr
        className={
          'mt-4 w-0 rounded-full border-2 opacity-0 transition-all duration-300 group-hover:w-1/4 group-hover:opacity-100'
        }
      />
    </div>
  );
};

export default ProjectOverviewDescription;
