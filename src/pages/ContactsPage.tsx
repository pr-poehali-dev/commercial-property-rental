
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-secondary">
          <div className="container px-4 py-8 mx-auto">
            <h1 className="text-3xl font-bold">Контакты</h1>
            <p className="mt-2 text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </div>
        
        <div className="container px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Наши контакты</h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="flex items-start p-4 space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Телефон</h3>
                      <p className="text-sm">+7 (495) 123-45-67</p>
                      <p className="text-sm">+7 (495) 987-65-43</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-start p-4 space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-sm">info@nedvizhimost-pro.ru</p>
                      <p className="text-sm">arenda@nedvizhimost-pro.ru</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-start p-4 space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Адрес</h3>
                      <p className="text-sm">г. Москва, ул. Тверская, д. 10, офис 2</p>
                      <p className="text-sm">м. Тверская, 5 минут пешком</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-start p-4 space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Режим работы</h3>
                      <p className="text-sm">Пн-Пт: 9:00-19:00</p>
                      <p className="text-sm">Сб: 10:00-17:00, Вс: выходной</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">Мы на карте</h3>
                <div className="overflow-hidden rounded-lg aspect-video bg-muted">
                  {/* Здесь должна быть карта, заменяем placeholder */}
                  <img 
                    src="/placeholder.svg" 
                    alt="Карта" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Свяжитесь с нами</h2>
                  <p className="mb-6 text-muted-foreground">
                    Заполните форму, и наш менеджер свяжется с вами в ближайшее время.
                    Мы поможем подобрать помещение под ваши требования.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactsPage;
