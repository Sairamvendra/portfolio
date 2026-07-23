// Types for the untyped InfiniteMenu.jsx (tsc otherwise infers `items = []` as never[])
export interface InfiniteMenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

export default function InfiniteMenu(props: {
  items?: InfiniteMenuItem[];
  scale?: number;
}): React.JSX.Element;
