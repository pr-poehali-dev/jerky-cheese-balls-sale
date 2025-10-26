import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Продукты', path: '#products' },
    { name: 'Доставка', path: '#delivery' },
    { name: 'Акции', path: '#promo' },
    { name: 'Контакты', path: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-2xl">🥩</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">PRO Jerki</span>
              <span className="text-xs text-muted-foreground">by Илья</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://t.me/PROJerki" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={18} className="mr-2" />
                Заказать
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <a href="https://t.me/PROJerki" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} className="mr-2" />
                  Заказать
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
