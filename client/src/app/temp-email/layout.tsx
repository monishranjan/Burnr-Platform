import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Temporary Inbox | Burnr',
  description: 'Access your fast, free, and secure temporary email inbox. Receive emails instantly and bypass verifications.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
