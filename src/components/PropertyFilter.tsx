
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { PropertyFilter as FilterType } from '@/lib/types';
import { metroStations } from '@/lib/data';

interface PropertyFilterProps {
  onFilterChange: (filter: FilterType) => void;
}

const PropertyFilter = ({ onFilterChange }: PropertyFilterProps) => {
  const [filter, setFilter] = useState<FilterType>({
    type: 'all',
    minArea: 0,
    maxArea: 500,
    minPrice: 0,
    maxPrice: 5000,
    metro: 'Все станции'
  });

  const handleFilterChange = (newFilter: Partial<FilterType>) => {
    const updatedFilter = { ...filter, ...newFilter };
    setFilter(updatedFilter);
  };

  const handleApplyFilter = () => {
    onFilterChange(filter);
  };

  const handleResetFilter = () => {
    const resetFilter = {
      type: 'all',
      minArea: 0,
      maxArea: 500,
      minPrice: 0,
      maxPrice: 5000,
      metro: 'Все станции'
    };
    setFilter(resetFilter);
    onFilterChange(resetFilter);
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Фильтр объектов</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Тип помещения</Label>
          <Select 
            value={filter.type} 
            onValueChange={(value) => handleFilterChange({ type: value as FilterType['type'] })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="office">Офисы</SelectItem>
              <SelectItem value="retail">Торговые</SelectItem>
              <SelectItem value="warehouse">Склады</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Площадь, м²</Label>
            <span className="text-sm text-muted-foreground">
              {filter.minArea} - {filter.maxArea}
            </span>
          </div>
          <Slider
            defaultValue={[filter.minArea || 0, filter.maxArea || 500]}
            max={500}
            step={10}
            onValueChange={(value) => handleFilterChange({ minArea: value[0], maxArea: value[1] })}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Стоимость, ₽/м² в месяц</Label>
            <span className="text-sm text-muted-foreground">
              {filter.minPrice} - {filter.maxPrice}
            </span>
          </div>
          <Slider
            defaultValue={[filter.minPrice || 0, filter.maxPrice || 5000]}
            max={5000}
            step={100}
            onValueChange={(value) => handleFilterChange({ minPrice: value[0], maxPrice: value[1] })}
          />
        </div>

        <div className="space-y-2">
          <Label>Метро</Label>
          <Select 
            value={filter.metro || 'Все станции'} 
            onValueChange={(value) => handleFilterChange({ metro: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите станцию" />
            </SelectTrigger>
            <SelectContent>
              {metroStations.map((station) => (
                <SelectItem key={station} value={station}>{station}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col space-y-2">
          <Button onClick={handleApplyFilter}>Применить</Button>
          <Button variant="outline" onClick={handleResetFilter}>Сбросить</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
