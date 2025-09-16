export interface Location {
  id: string;
  name: string;
  url: string;
  type: "department" | "playground" | "library" | "canteen";
}

export const locations: Location[] = [
  {
    id: "department",
    name: "Department",
    type: "department",
    url: "https://maps.app.goo.gl/YourDepartmentLocationHere", // Replace with actual department location
  },
  {
    id: "playground", 
    name: "Playground",
    type: "playground",
    url: "https://maps.app.goo.gl/nW78BRP1Ve2A9hfk9", // User provided playground link
  },
  {
    id: "library",
    name: "Library", 
    type: "library",
    url: "https://maps.app.goo.gl/YourLibraryLocationHere", // Replace with actual library location
  },
  {
    id: "canteen",
    name: "Canteen",
    type: "canteen", 
    url: "https://maps.app.goo.gl/YourCanteenLocationHere", // Replace with actual canteen location
  }
];