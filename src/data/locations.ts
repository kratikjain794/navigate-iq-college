export interface SubLocation {
  id: string;
  name: string;
  url: string;
}

export interface Location {
  id: string;
  name: string;
  url?: string;
  type: "department" | "playground" | "library" | "canteen" | "ngo" | "parking" | "digital-centre" | "horse-camp";
  subLocations?: SubLocation[];
}

export const locations: Location[] = [
  {
    id: "department",
    name: "Department",
    type: "department",
    subLocations: [
      {
        id: "gate-2",
        name: "IPS Gate No. 2",
        url: "https://maps.app.goo.gl/2rw4zkVx9JjEYj4n9"
      },
      {
        id: "business",
        name: "Institute of Business",
        url: "https://maps.app.goo.gl/eL2jGfKjZMLiH9y78"
      },
      {
        id: "fashion",
        name: "Institute of Fashion",
        url: "https://maps.app.goo.gl/J5DetbiDoc54DRMx9"
      },
      {
        id: "architecture",
        name: "College of Architecture",
        url: "https://maps.app.goo.gl/EQNfWpNBF8bcxKXA8"
      },
      {
        id: "mass-communication",
        name: "Institute of Mass Communication",
        url: "https://maps.app.goo.gl/vLjvcZ2ZxgMnUVFY7"
      },
      {
        id: "professional-studies",
        name: "Institutional Professional Studies",
        url: "https://maps.app.goo.gl/SUM2GcH5LP7kp2qVA"
      },
      {
        id: "engineering",
        name: "Institute of Engineering and Science",
        url: "https://maps.app.goo.gl/MfL3gSzC9wVREDMn7"
      }
    ]
  },
  {
    id: "playground", 
    name: "Playground",
    type: "playground",
    url: "https://maps.app.goo.gl/nW78BRP1Ve2A9hfk9"
  },
  {
    id: "library",
    name: "Library", 
    type: "library",
    url: "https://maps.app.goo.gl/YourLibraryLocationHere"
  },
  {
    id: "canteen",
    name: "Canteen",
    type: "canteen", 
    url: "https://maps.app.goo.gl/YourCanteenLocationHere"
  },
  {
    id: "ngo",
    name: "Urja NGO",
    type: "ngo",
    url: "https://maps.app.goo.gl/SfCQsnTggbVB72xz9"
  },
  {
    id: "parking",
    name: "Parking",
    type: "parking",
    subLocations: [
      {
        id: "academy-parking",
        name: "IPS Academy Parking",
        url: "https://maps.app.goo.gl/3g3JPGvZJJnYFb2V8"
      },
      {
        id: "student-parking",
        name: "IPS Academy Student Parking",
        url: "https://maps.app.goo.gl/iMV9eAtEcoYdySBS8"
      }
    ]
  },
  {
    id: "digital-centre",
    name: "Ion Digital Centre",
    type: "digital-centre",
    url: "https://maps.app.goo.gl/uPakvsZmGPsxNDBc6"
  },
  {
    id: "horse-camp",
    name: "Horse Camp",
    type: "horse-camp",
    url: "https://maps.app.goo.gl/DgeT3u6pwKz1A9AAA"
  }
];