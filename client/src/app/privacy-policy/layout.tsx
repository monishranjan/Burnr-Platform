import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Burnr Temp Mail',
  description: 'Read the privacy policy of Burnr. We value your privacy and explain how our temporary email service handles your data and cookies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
