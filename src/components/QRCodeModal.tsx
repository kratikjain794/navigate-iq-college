import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, X } from "lucide-react";
import QRCode from "qrcode";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    name: string;
    url: string;
  };
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, location }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    if (isOpen && location.url) {
      QRCode.toDataURL(location.url, {
        width: 256,
        margin: 2,
        color: {
          dark: '#1e40af', // primary blue
          light: '#ffffff'
        }
      }).then(url => {
        setQrCodeUrl(url);
      }).catch(err => {
        console.error('Error generating QR code:', err);
      });
    }
  }, [isOpen, location.url]);

  const handleOpenMaps = () => {
    window.open(location.url, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="qr-container max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-primary">
            <MapPin size={24} />
            {location.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            {qrCodeUrl && (
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <img 
                  src={qrCodeUrl} 
                  alt={`QR Code for ${location.name}`}
                  className="w-48 h-48"
                />
              </div>
            )}
            <p className="text-sm text-muted-foreground text-center">
              Scan this QR code with your phone to navigate to {location.name}
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleOpenMaps}
              className="btn-hero w-full"
              size="lg"
            >
              <ExternalLink size={20} className="mr-2" />
              Open in Google Maps
            </Button>
            
            <Button 
              onClick={onClose}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <X size={20} className="mr-2" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};