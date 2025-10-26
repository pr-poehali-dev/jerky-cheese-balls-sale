import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Promo = () => {
  return (
    <section id="promo" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            🎁 Специальное предложение
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Выгодные акции
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Заказывай больше — получай подарки!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-accent/50 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-block">
                    <Badge className="bg-accent text-white text-lg px-4 py-2">
                      Акция месяца
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    2 сырных шарика в подарок!
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    При заказе мясных чипсов на сумму от <span className="font-bold text-primary">4000₽</span> получите 
                    2 сырных шарика совершенно бесплатно!
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Gift" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Экономия 600₽</div>
                        <div className="text-sm text-muted-foreground">Стоимость 2 шариков</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Акция постоянная</div>
                        <div className="text-sm text-muted-foreground">Действует на все заказы</div>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-accent hover:bg-accent/90 w-full md:w-auto" asChild>
                    <a href="https://t.me/PROJerki" target="_blank" rel="noopener noreferrer">
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Воспользоваться акцией
                    </a>
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">🎉</div>
                      <div className="text-2xl font-bold text-foreground">Условия акции</div>
                      
                      <div className="space-y-3 pt-4">
                        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <span className="text-sm font-medium">Минимальный заказ</span>
                          <span className="text-lg font-bold text-primary">4000₽</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <span className="text-sm font-medium">Подарок</span>
                          <span className="text-lg font-bold text-accent">2 шарика 🧀</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <span className="text-sm font-medium">Экономия</span>
                          <span className="text-lg font-bold text-green-600">600₽</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Promo;
