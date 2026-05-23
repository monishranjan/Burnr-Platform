import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Burnr Disposable Email',
  description: 'Read the terms and conditions for using Burnr temporary email addresses.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
