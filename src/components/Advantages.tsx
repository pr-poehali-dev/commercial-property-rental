
import { Building, Clock, MapPin, Shield } from 'lucide-react';

const advantages = [
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: 'Собственные объекты',
    description: 'Мы сдаем только собственные помещения, что гарантирует стабильность и прозрачные условия сотрудничества'
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: 'Удобное расположение',
    description: 'Все наши объекты находятся в пешей доступности от метро и на первых линиях жилых домов'
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Юридическая безопасность',
    description: 'Полная юридическая защита и прозрачные договоры без скрытых комиссий и условий'
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: 'Быстрое заселение',
    description: 'Оперативно оформляем документы и предоставляем доступ к помещению в кратчайшие сроки'
  }
];

const Advantages = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Наши преимущества</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                {advantage.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-center">
                {advantage.title}
              </h3>
              <p className="text-center text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
