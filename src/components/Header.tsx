
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 mr-2" />
          <span className="text-xl font-bold text-primary">НедвижимостьПро</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">Главная</Link>
          <Link to="/properties" className="text-sm font-medium hover:text-primary">Объекты</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">О компании</Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <span className="font-medium">+7 (495) 123-45-67</span>
          </div>
          <Button size="sm">Заказать звонок</Button>
        </div>

        {/* Мобильное меню */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium" onClick={toggleMenu}>Главная</Link>
              <Link to="/properties" className="text-sm font-medium" onClick={toggleMenu}>Объекты</Link>
              <Link to="/about" className="text-sm font-medium" onClick={toggleMenu}>О компании</Link>
              <Link to="/contacts" className="text-sm font-medium" onClick={toggleMenu}>Контакты</Link>
              <div className="flex items-center pt-2">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="font-medium">+7 (495) 123-45-67</span>
              </div>
              <Button size="sm" className="w-full">Заказать звонок</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
