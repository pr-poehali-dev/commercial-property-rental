
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Advantages from '@/components/Advantages';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-secondary">
          <div className="container px-4 py-8 mx-auto">
            <h1 className="text-3xl font-bold">О компании</h1>
            <p className="mt-2 text-muted-foreground">
              Профессиональное управление коммерческой недвижимостью
            </p>
          </div>
        </div>
        
        <div className="container px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Наша история</h2>
              <p className="mb-4">
                Компания НедвижимостьПро была основана в 2008 году группой профессионалов рынка
                недвижимости. За более чем 15 лет работы мы сформировали обширный портфель коммерческой
                недвижимости разного целевого назначения.
              </p>
              <p className="mb-4">
                Сегодня наша компания является надежным партнером для сотен арендаторов, от индивидуальных
                предпринимателей до крупных сетевых компаний. Мы гордимся высоким уровнем удовлетворенности
                наших клиентов и постоянно работаем над улучшением качества предоставляемых услуг.
              </p>
              <p>
                Миссия нашей компании — обеспечивать бизнес качественными помещениями по разумным ценам, 
                создавая оптимальные условия для развития и процветания предпринимательства.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="История компании" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <Advantages />
        
        <div className="container px-4 py-12 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">Наша команда</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Александр Петров',
                position: 'Генеральный директор',
                image: '/placeholder.svg',
                description: 'Руководит компанией с момента основания. Имеет более 20 лет опыта в сфере недвижимости.'
              },
              {
                name: 'Екатерина Смирнова',
                position: 'Коммерческий директор',
                image: '/placeholder.svg',
                description: 'Отвечает за коммерческие вопросы и развитие портфеля недвижимости компании.'
              },
              {
                name: 'Дмитрий Иванов',
                position: 'Технический директор',
                image: '/placeholder.svg',
                description: 'Курирует техническое обслуживание объектов и управление инфраструктурой.'
              }
            ].map((person, index) => (
              <Card key={index}>
                <div className="overflow-hidden rounded-t-lg aspect-square">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-lg font-semibold">{person.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{person.position}</p>
                  <p className="text-sm">{person.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
