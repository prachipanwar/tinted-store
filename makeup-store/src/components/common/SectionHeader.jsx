export default function SectionHeader({
    subtitle,
    title,
  }) {
    return (
      <div className="mb-12">
  
        <p className="uppercase tracking-[4px] text-sm text-muted-foreground mb-3">
          {subtitle}
        </p>
  
        <h2 className="text-4xl md:text-5xl font-semibold">
          {title}
        </h2>
  
      </div>
    );
  }