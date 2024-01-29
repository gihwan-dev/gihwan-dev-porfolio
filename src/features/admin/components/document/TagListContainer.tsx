import { Card } from '~/components/ui/card';
import CurrentTagList from './CurrentTagList';
import AllTagList from './AllTagList';
import AddNewTagButton from './AddNewTagButton';

const TagListContainer = () => {
  return (
    <Card className="flex flex-col gap-8 px-6 py-6">
      <CurrentTagList />
      <AllTagList />
      <AddNewTagButton />
    </Card>
  );
};

export default TagListContainer;
