type EbookPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function EbookPageHeader({ eyebrow = "State E-Books", title, description }: EbookPageHeaderProps) {
  return (
    <div className="section-heading">
      <div className="section-kicker">{eyebrow}</div>
      <h1 className="section-title">{title}</h1>
      <p className="section-copy">{description}</p>
    </div>
  );
}
