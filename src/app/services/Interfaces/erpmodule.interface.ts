export interface ERPModule {
  id: number; // ID field
  name: string;
  checked: boolean;
  description: string;
  available: boolean;
  clickable: boolean;
  backgroundImage: string;  // Path to the background image
  gradient: string;  // CSS gradient string
  hoverGradient: string;
}