import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🚀 Белгород · Доставка по России</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Самые вкусные
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                мясные чипсы
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Я — Илья, создаю джерки и сырные шарики по авторским рецептам. 
              Настоящий вкус без компромиссов!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <a href="https://t.me/PROJerki" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Icon name="Send" size={20} className="mr-2" />
                  Заказать в Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <a href="#products" className="flex items-center">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть продукты
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2000₽</div>
                <div className="text-sm text-muted-foreground">за килограмм</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2 дня</div>
                <div className="text-sm text-muted-foreground">приготовление</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0₽</div>
                <div className="text-sm text-muted-foreground">доставка БГД</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/eaeaa43c-3286-4149-9bfa-03be43a0730c/files/42cb1000-0b1a-4830-b2ec-02d8f1490dc3.jpg"
              alt="Мясные чипсы"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
