import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-2xl">🥩</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">PRO Jerki</span>
                <span className="text-xs text-white/70">by Илья</span>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Создаю самые вкусные мясные чипсы и сырные шарики в Белгороде. 
              Авторские рецепты, натуральные ингредиенты, любовь к делу.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/PROJerki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="tel:+79205583053"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a 
                href="mailto:maxximuss_2011@mail.ru"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#products" className="hover:text-white transition-colors">Продукты</a></li>
              <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
              <li><a href="#promo" className="hover:text-white transition-colors">Акции</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>Белгород, Россия</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="mt-1 flex-shrink-0" />
                <span>+7 (920) 558-30-53</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Send" size={16} className="mt-1 flex-shrink-0" />
                <span>@PROJerki</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} PRO Jerki by Илья. Все права защищены.</p>
            <p className="flex items-center gap-2">
              <span>Сделано с</span>
              <Icon name="Heart" size={16} className="text-red-500" />
              <span>в Белгороде</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
