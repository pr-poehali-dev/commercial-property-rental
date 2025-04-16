
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilter from '@/components/PropertyFilter';
import { properties } from '@/lib/data';
import { Property, PropertyFilter as FilterType } from '@/lib/types';

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filter, setFilter] = useState<FilterType>({
    type: 'all',
    minArea: 0,
    maxArea: 500,
    minPrice: 0,
    maxPrice: 5000,
    metro: 'Все станции'
  });

  useEffect(() => {
    const newFilteredProperties = properties.filter(property => {
      // Фильтр по типу
      if (filter.type !== 'all' && property.type !== filter.type) {
        return false;
      }

      // Фильтр по площади
      if (property.area < (filter.minArea || 0) || property.area > (filter.maxArea || 500)) {
        return false;
      }

      // Фильтр по цене
      if (property.price < (filter.minPrice || 0) || property.price > (filter.maxPrice || 5000)) {
        return false;
      }

      // Фильтр по метро
      if (filter.metro !== 'Все станции' && property.metro !== filter.metro) {
        return false;
      }

      return true;
    });

    setFilteredProperties(newFilteredProperties);
  }, [filter]);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-secondary">
          <div className="container px-4 py-8 mx-auto">
            <h1 className="text-3xl font-bold">Объекты аренды</h1>
            <p className="mt-2 text-muted-foreground">
              Найдите подходящее помещение для вашего бизнеса
            </p>
          </div>
        </div>
        
        <div className="container px-4 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <PropertyFilter onFilterChange={handleFilterChange} />
            </div>
            
            <div className="lg:col-span-3">
              <div className="mb-4">
                <p className="text-muted-foreground">
                  Найдено объектов: <span className="font-medium text-foreground">{filteredProperties.length}</span>
                </p>
              </div>
              
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-muted/20 rounded-lg">
                  <h3 className="text-lg font-medium">Объекты не найдены</h3>
                  <p className="mt-2 text-muted-foreground">
                    Попробуйте изменить параметры поиска
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertiesPage;
