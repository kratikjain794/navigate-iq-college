import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import { locations, Location, SubLocation } from "@/data/locations";

interface SearchResult {
  id: string;
  name: string;
  type: string;
  url?: string;
  description?: string;
  isSubLocation?: boolean;
  parentLocation?: string;
}

interface SearchBarProps {
  onLocationSelect: (location: Location | SubLocation) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    // Search main locations
    locations.forEach(location => {
      if (
        location.name.toLowerCase().includes(query) ||
        location.type.toLowerCase().includes(query) ||
        (location.description && location.description.toLowerCase().includes(query))
      ) {
        results.push({
          id: location.id,
          name: location.name,
          type: location.type,
          url: location.url,
          description: location.description,
          isSubLocation: false
        });
      }

      // Search sub-locations
      if (location.subLocations) {
        location.subLocations.forEach(subLocation => {
          if (subLocation.name.toLowerCase().includes(query)) {
            results.push({
              id: subLocation.id,
              name: subLocation.name,
              type: location.type,
              url: subLocation.url,
              isSubLocation: true,
              parentLocation: location.name
            });
          }
        });
      }
    });

    return results.slice(0, 5); // Limit to 5 results
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    if (result.isSubLocation) {
      onLocationSelect({
        id: result.id,
        name: result.name,
        url: result.url || ""
      });
    } else {
      const location = locations.find(loc => loc.id === result.id);
      if (location) {
        onLocationSelect(location);
      }
    }
    setSearchQuery("");
    setIsFocused(false);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div className="nav-card">
        <div className="flex items-center gap-3 px-4 py-3">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Where do you want to go?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Search Results */}
      {isFocused && searchResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-80 overflow-y-auto bg-card/95 backdrop-blur-sm border border-border/50">
          {searchResults.map((result) => (
            <div
              key={`${result.id}-${result.isSubLocation}`}
              className="p-3 hover:bg-accent/50 cursor-pointer border-b border-border/30 last:border-0 transition-colors"
              onClick={() => handleResultClick(result)}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">
                    {result.name}
                  </h4>
                  <p className="text-sm text-muted-foreground capitalize">
                    {result.isSubLocation ? `${result.parentLocation} - ${result.type}` : result.type}
                  </p>
                  {result.description && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {result.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};