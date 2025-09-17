import { useState } from "react";
import { NavigationCard } from "@/components/NavigationCard";
import { QRCodeModal } from "@/components/QRCodeModal";
import { SubLocationModal } from "@/components/SubLocationModal";
import { SearchBar } from "@/components/SearchBar";
import { locations, Location, SubLocation } from "@/data/locations";
import { Shield } from "lucide-react";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | SubLocation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subLocationModal, setSubLocationModal] = useState<{
    isOpen: boolean;
    location: Location | null;
  }>({ isOpen: false, location: null });

  const handleLocationClick = (location: Location) => {
    if (location.subLocations && location.subLocations.length > 0) {
      setSubLocationModal({ isOpen: true, location });
    } else if (location.url) {
      setSelectedLocation(location);
      setIsModalOpen(true);
    }
  };

  const handleSearchSelect = (location: Location | SubLocation) => {
    if ('subLocations' in location && location.subLocations && location.subLocations.length > 0) {
      setSubLocationModal({ isOpen: true, location });
    } else if (location.url) {
      setSelectedLocation(location);
      setIsModalOpen(true);
    }
  };

  const handleSubLocationSelect = (subLocation: SubLocation) => {
    setSelectedLocation(subLocation);
    setSubLocationModal({ isOpen: false, location: null });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  const handleCloseSubLocationModal = () => {
    setSubLocationModal({ isOpen: false, location: null });
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-white drop-shadow-lg shadow-black/50">
              Smart Department Navigator using QR
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Find your way around campus with ease. Scan QR codes to get instant directions to any location.
          </p>
        </header>

        {/* Functional Search Bar */}
        <div className="mb-12">
          <SearchBar onLocationSelect={handleSearchSelect} />
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((location) => (
            <NavigationCard
              key={location.id}
              title={location.name}
              type={location.type}
              onClick={() => handleLocationClick(location)}
              className="min-h-[180px]"
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="nav-card max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              Made for College Navigation
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Scan & Go with Smart Department Navigator using QR
            </p>
          </div>
        </footer>

        {/* QR Code Modal */}
        {selectedLocation && selectedLocation.url && (
          <QRCodeModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            location={{
              name: selectedLocation.name,
              url: selectedLocation.url,
              description: 'description' in selectedLocation ? selectedLocation.description : undefined
            }}
          />
        )}

        {/* Sub Location Modal */}
        {subLocationModal.location && (
          <SubLocationModal
            isOpen={subLocationModal.isOpen}
            onClose={handleCloseSubLocationModal}
            title={subLocationModal.location.name}
            subLocations={subLocationModal.location.subLocations || []}
            onLocationSelect={handleSubLocationSelect}
          />
        )}
      </div>
    </div>
  );
};

export default Index;