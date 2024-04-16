import { useRouter } from 'next/navigation';

const useNavigateTo = () => {
  const router = useRouter();

  const navigate = (href: string) => {
    router.push(href);
  };

  return {
    navigate,
  };
};

export default useNavigateTo;
