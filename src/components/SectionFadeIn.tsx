import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { cn } from "@/lib/utils";

interface SectionFadeInProps {
  children: React.ReactNode;
  className?: string;
}

const SectionFadeIn = ({ children, className }: SectionFadeInProps) => {
  const ref = useScrollFadeIn();
  return (
    <div ref={ref} className={cn("fade-in-section", className)}>
      {children}
    </div>
  );
};

export default SectionFadeIn;
