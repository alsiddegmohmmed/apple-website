interface SectionProps {
    children: React.ReactNode;
    id: string;
  }
  
  export default function Section({ children, id }: SectionProps) {
    return (
      <section id={id} data-scroll-section>
        {children}
      </section>
    );
  }
  