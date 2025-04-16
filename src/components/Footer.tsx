
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">НедвижимостьПро</h3>
            <p className="mb-4 text-sm">
              Управление собственной коммерческой недвижимостью. В нашем портфеле офисные и 
              торговые помещения различной площади и конфигурации.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:opacity-75">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-primary-foreground hover:opacity-75">
                <span className="sr-only">Telegram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.237 0-.47-.033-.696-.09l-1.92 1.192.495-1.943c-.883-.731-1.459-1.864-1.459-3.127 0-2.205 1.73-3.99 3.86-3.99 2.13 0 3.86 1.785 3.86 3.99 0 2.204-1.73 3.968-3.86 3.968h-.28z" />
                </svg>
              </a>
              <a href="#" className="text-primary-foreground hover:opacity-75">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">Главная</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:underline">Объекты недвижимости</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">О компании</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:underline">Контакты</Link>
              </li>
              <li>
                <Link to="/policy" className="hover:underline">Политика конфиденциальности</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-2 shrink-0" />
                <span>г. Москва, ул. Тверская, д. 10, офис 2</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-2 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-2 shrink-0" />
                <span>info@nedvizhimost-pro.ru</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-center">© 2024 НедвижимостьПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
