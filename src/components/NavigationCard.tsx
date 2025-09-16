import { Card } from "@/components/ui/card";
import { Building2, GraduationCap, BookOpen, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationCardProps {
  title: string;
  type: "department" | "playground" | "library" | "canteen";
  onClick: () => void;
  className?: string;
}

const iconMap = {
  department: Building2,
  playground: GraduationCap,
  library: BookOpen,
  canteen: UtensilsCrossed,
};

const colorMap = {
  department: "nav-department",
  playground: "nav-playground", 
  library: "nav-library",
  canteen: "nav-canteen",
};

export const NavigationCard: React.FC<NavigationCardProps> = ({ 
  title, 
  type, 
  onClick, 
  className 
}) => {
  const Icon = iconMap[type];
  
  return (
    <Card 
      className={cn(
        "nav-card cursor-pointer group",
        colorMap[type],
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="p-4 rounded-full bg-gradient-to-br from-white/80 to-white/60 group-hover:from-white/90 group-hover:to-white/70 transition-all duration-300">
          <Icon 
            size={40} 
            className={cn(
              "transition-colors duration-300",
              type === "department" && "text-navigation-department",
              type === "playground" && "text-navigation-playground", 
              type === "library" && "text-navigation-library",
              type === "canteen" && "text-navigation-canteen"
            )}
          />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Card>
  );
};