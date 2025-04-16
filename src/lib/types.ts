
// Типы данных для объектов недвижимости
export interface Property {
  id: string;
  title: string;
  type: 'office' | 'retail' | 'warehouse';
  area: number; // площадь в м²
  price: number; // цена за м² в месяц
  address: string;
  metro: string;
  metroDistance: number; // расстояние до метро в минутах пешком
  description: string;
  features: string[];
  images: string[];
}

// Фильтр для поиска недвижимости
export interface PropertyFilter {
  type?: 'office' | 'retail' | 'warehouse' | 'all';
  minArea?: number;
  maxArea?: number;
  minPrice?: number;
  maxPrice?: number;
  metro?: string;
}
