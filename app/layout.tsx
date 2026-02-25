// Root layout just renders children.
// The actial HTML structure is handled in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
