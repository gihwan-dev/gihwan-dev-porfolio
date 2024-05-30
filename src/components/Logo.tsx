import MainLogoMobile from '~/assets/svgs/MainLogoMobile';
import MainLogo from '~/assets/svgs/MainLogo';

interface LogoProps {
  isMobile: boolean;
}

export default function Logo({ isMobile }: LogoProps) {
  return <div>{isMobile ? <MainLogoMobile /> : <MainLogo />}</div>;
}
