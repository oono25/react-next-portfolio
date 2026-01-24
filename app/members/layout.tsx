import { GoogleAnalytics } from '@next/third-parties/google';
import Sheet from '@/app/_compontents/sheet';
import Hero from '@/app/_compontents/Hero';

export const metadata = {
  title: 'メンバー',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
      <GoogleAnalytics gaId="G-XXX" />
    </>
  );
}