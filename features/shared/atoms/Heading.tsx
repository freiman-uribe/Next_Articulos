interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Heading({
  as: Tag = "h1",
  id,
  className = "",
  children,
}: HeadingProps) {
  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  );
}