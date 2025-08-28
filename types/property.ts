export interface PropertyProps {
  id: number;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  mapPosition: { top: string; left: string };
  type?: string;
}

export interface MapViewProps {
  property: PropertyProps;
  isSelected: boolean;
  onClick: (property: PropertyProps) => void;
}

export interface PropertyCardProps {
  property: PropertyProps;
  isMapView?: boolean;
}
