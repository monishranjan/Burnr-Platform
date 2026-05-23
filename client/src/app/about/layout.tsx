import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Burnr | Free Disposable Email Address',
  description: 'Learn more about Burnr, the fastest and most secure temporary email generator designed to protect your privacy from spam.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
