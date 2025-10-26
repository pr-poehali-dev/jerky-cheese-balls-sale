import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactMethods = [
    {
      icon: 'Send',
      title: 'Telegram',
      value: '@PROJerki',
      link: 'https://t.me/PROJerki',
      preferred: true,
      color: 'bg-blue-500'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (920) 558-30-53',
      link: 'tel:+79205583053',
      preferred: false,
      color: 'bg-green-500'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'maxximuss_2011@mail.ru',
      link: 'mailto:maxximuss_2011@mail.ru',
      preferred: false,
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Связаться со мной
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выбирайте удобный способ связи — отвечу быстро!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all ${method.preferred ? 'border-2 border-primary shadow-lg' : ''}`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  {method.preferred && (
                    <Badge className="bg-primary text-white">Предпочтительно</Badge>
                  )}
                  
                  <div className={`w-16 h-16 mx-auto rounded-full ${method.color} flex items-center justify-center`}>
                    <Icon name={method.icon as any} size={28} className="text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                  </div>

                  <Button 
                    variant={method.preferred ? 'default' : 'outline'} 
                    className={method.preferred ? 'bg-primary hover:bg-primary/90 w-full' : 'w-full'}
                    asChild
                  >
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      Написать
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Где я нахожусь</h3>
                  <p className="text-lg text-muted-foreground">
                    📍 Белгород, Россия
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Бесплатная доставка по городу при любом заказе
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6 p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Режим работы</div>
                    <div className="text-xs text-muted-foreground">Ежедневно, онлайн</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Ответ</div>
                    <div className="text-xs text-muted-foreground">В течение часа</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="bg-gradient-to-br from-primary to-accent text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Готов оформить заказ?</h3>
                <p className="mb-6 text-white/90">
                  Напиши мне в Telegram — обсудим детали и я начну готовить для тебя!
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <a href="https://t.me/PROJerki" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
