
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: 'url(/placeholder.svg)' }}
      />
      <div className="container relative px-4 py-20 mx-auto md:py-32">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Аренда коммерческой недвижимости в Москве
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Широкий выбор офисных и торговых помещений различной площади
            на первых линиях жилых домов в пешей доступности от метро
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/properties">Смотреть объекты</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-base border-white text-white hover:bg-white/10">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
