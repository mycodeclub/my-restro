export interface MenuItem {
  id: number;
  image: string;
  title: string;
  description: string;
  fullPrice: number;
  halfPrice?: number;
  category: string;
}
