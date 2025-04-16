
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import Advantages from '@/components/Advantages';
import ContactForm from '@/components/ContactForm';
import { properties } from '@/lib/data';
import { Building, MapPin, Phone } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'office' | 'retail'>('office');
  
  const filteredProperties = properties.filter(property => property.type === activeTab).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Типы помещений */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Наши предложения</h2>
            
            <div className="flex justify-center mb-8 space-x-4">
              <Button 
                variant={activeTab === 'office' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('office')}
                className="min-w-32"
              >
                <Building className="w-4 h-4 mr-2" /> Офисы
              </Button>
              <Button 
                variant={activeTab === 'retail' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('retail')}
                className="min-w-32"
              >
                <MapPin className="w-4 h-4 mr-2" /> Торговые
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button asChild size="lg">
                <Link to="/properties">Смотреть все объекты</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <Advantages />
        
        {/* О компании */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">О компании</h2>
                <p className="mb-4 text-lg">
                  Компания НедвижимостьПро специализируется на управлении собственной коммерческой
                  недвижимостью разного целевого назначения. 
                </p>
                <p className="mb-6">
                  Наш портфель преимущественно составляют офисные и торговые помещения различной
                  площади и конфигурации, находящиеся на первых линиях жилых домов в пешей 
                  доступности от метро. Мы гарантируем прозрачные условия аренды, юридическую
                  чистоту и оперативное решение всех вопросов.
                </p>
                <Button asChild>
                  <Link to="/about">Подробнее о компании</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="О компании" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Форма связи */}
        <section className="py-16 bg-secondary">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Остались вопросы?</h2>
                <p className="mb-6">
                  Заполните форму и наш менеджер свяжется с вами для консультации по аренде помещений.
                  Мы поможем подобрать оптимальное решение для вашего бизнеса.
                </p>
                <div className="p-4 mb-4 bg-white rounded-lg">
                  <h3 className="mb-4 text-lg font-semibold">Свяжитесь с нами</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>г. Москва, ул. Тверская, д. 10, офис 2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Заказать звонок</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
