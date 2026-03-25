type SectionTitleProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
}: SectionTitleProps) {
  const HeadingTag = as;

  return (
    <div className={`section-title ${align === "center" ? "section-title--center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <HeadingTag>{title}</HeadingTag>
      {intro ? <p className="section-title__intro">{intro}</p> : null}
    </div>
  );
}
