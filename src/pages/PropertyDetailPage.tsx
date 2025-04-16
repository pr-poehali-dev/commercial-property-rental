
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactForm from '@/components/ContactForm';
import { properties } from '@/lib/data';
import { MapPin, Ruler, Train, Phone, ArrowLeft } from 'lucide-react';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container flex-grow px-4 py-12 mx-auto text-center">
          <h1 className="mb-4 text-2xl font-bold">Объект не найден</h1>
          <p className="mb-6">Запрашиваемый объект недвижимости не существует или был удален.</p>
          <Button asChild>
            <Link to="/properties">Вернуться к списку объектов</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const typeLabels = {
    'office': 'Офис',
    'retail': 'Торговое помещение',
    'warehouse': 'Склад'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-secondary">
          <div className="container px-4 py-8 mx-auto">
            <Link to="/properties" className="flex items-center mb-4 text-sm hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-1" /> Назад к списку объектов
            </Link>
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <div className="flex flex-wrap items-center mt-2 gap-2">
              <Badge>{typeLabels[property.type]}</Badge>
              <span className="text-muted-foreground">ID: {property.id}</span>
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Галерея */}
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {property.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative overflow-hidden rounded-lg aspect-video">
                          <img 
                            src={image || '/placeholder.svg'} 
                            alt={`${property.title} - изображение ${index + 1}`} 
                            className="object-cover w-full h-full" 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              
              {/* Табы с информацией */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="features">Характеристики</TabsTrigger>
                  <TabsTrigger value="terms">Условия аренды</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-4 mt-2 border rounded-md">
                  <h3 className="mb-3 text-lg font-semibold">Описание помещения</h3>
                  <p>{property.description}</p>
                </TabsContent>
                <TabsContent value="features" className="p-4 mt-2 border rounded-md">
                  <h3 className="mb-3 text-lg font-semibold">Характеристики помещения</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 mr-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="terms" className="p-4 mt-2 border rounded-md">
                  <h3 className="mb-3 text-lg font-semibold">Условия аренды</h3>
                  <div className="space-y-2">
                    <p>• Арендная плата: {property.price} ₽/м² в месяц</p>
                    <p>• Коммунальные платежи оплачиваются отдельно</p>
                    <p>• Предоплата: 1 месяц</p>
                    <p>• Страховой депозит: 1 месяц</p>
                    <p>• Долгосрочный договор аренды</p>
                    <p>• Индексация: 1 раз в год</p>
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Похожие объекты */}
              <div>
                <h3 className="mb-4 text-xl font-semibold">Похожие объекты</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {properties
                    .filter(p => p.type === property.type && p.id !== property.id)
                    .slice(0, 2)
                    .map(similarProperty => (
                      <Card key={similarProperty.id}>
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={similarProperty.images[0] || '/placeholder.svg'} 
                            alt={similarProperty.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Link to={`/properties/${similarProperty.id}`} className="hover:text-primary">
                            <h4 className="mb-2 font-semibold">{similarProperty.title}</h4>
                          </Link>
                          <p className="mb-2">{similarProperty.area} м² • {similarProperty.price} ₽/м²</p>
                          <Badge variant="outline">{typeLabels[similarProperty.type]}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* Карточка с информацией */}
              <div className="sticky top-20">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold mb-4">
                      {property.price} ₽/м² в месяц
                    </div>
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center">
                        <Ruler className="w-5 h-5 mr-2 text-muted-foreground" />
                        <span>Площадь: {property.area} м²</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-muted-foreground" />
                        <span>{property.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Train className="w-5 h-5 mr-2 text-muted-foreground" />
                        <span>м. {property.metro}, {property.metroDistance} мин. пешком</span>
                      </div>
                    </div>
                    <div className="p-3 mb-4 bg-muted/30 rounded-md">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-primary" />
                        <span className="font-medium">+7 (495) 123-45-67</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">Забронировать просмотр</Button>
                  </CardContent>
                </Card>
                
                {/* Форма связи */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Получить консультацию</h3>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
