import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SubLocation } from "@/data/locations";

interface SubLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subLocations: SubLocation[];
  onLocationSelect: (location: SubLocation) => void;
}

export const SubLocationModal: React.FC<SubLocationModalProps> = ({
  isOpen,
  onClose,
  title,
  subLocations,
  onLocationSelect
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            Select {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {subLocations.map((location) => (
            <Card 
              key={location.id}
              className="p-4 cursor-pointer hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30"
              onClick={() => onLocationSelect(location)}
            >
              <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                {location.name}
              </h3>
            </Card>
          ))}
        </div>
        
        <Button 
          onClick={onClose}
          variant="outline"
          className="mt-4"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};