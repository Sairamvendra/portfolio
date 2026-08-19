// Types for the untyped MorphSlider.jsx (React Bits component)
export interface MorphSliderItem {
  image: string;
  caption?: string;
}

export default function MorphSlider(props: {
  items: MorphSliderItem[];
  startIndex?: number;
  transition?: 'melt' | 'ripple' | 'shear' | 'swirl';
  duration?: number;
  ease?: string;
  intensity?: number;
  scale?: number;
  aberration?: number;
  drift?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  radius?: number;
  overlayColor?: string;
  showCaptions?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}): React.JSX.Element;
