
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property } from '@/lib/types';
import { MapPin, Ruler, Train } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const typeLabels = {
    'office': 'Офис',
    'retail': 'Торговое',
    'warehouse': 'Склад'
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0] || '/placeholder.svg'} 
          alt={property.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 left-2">
          {typeLabels[property.type]}
        </Badge>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/70 to-transparent">
          <p className="font-bold text-white">{property.price} ₽/м² в месяц</p>
        </div>
      </div>
      <CardContent className="p-4">
        <Link to={`/properties/${property.id}`}>
          <h3 className="mb-2 text-lg font-semibold hover:text-primary">{property.title}</h3>
        </Link>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>{property.address}</span>
          </div>
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>{property.area} м²</span>
          </div>
          <div className="flex items-center">
            <Train className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>м. {property.metro}, {property.metroDistance} мин. пешком</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap px-4 pt-0 pb-4 gap-1">
        {property.features.slice(0, 3).map((feature, index) => (
          <Badge key={index} variant="outline" className="bg-muted/50">
            {feature}
          </Badge>
        ))}
        {property.features.length > 3 && (
          <Badge variant="outline" className="bg-muted/50">
            +{property.features.length - 3}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
