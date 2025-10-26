import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const deliveryOptions = [
    {
      icon: 'MapPin',
      title: 'Доставка по Белгороду',
      description: 'Бесплатная доставка при любом заказе',
      price: '0₽',
      highlight: true
    },
    {
      icon: 'Truck',
      title: 'Доставка по России',
      description: 'Бесплатная доставка при заказе от 5000₽',
      price: 'от 0₽',
      highlight: false
    },
    {
      icon: 'Package',
      title: 'Самовывоз',
      description: 'Можно забрать заказ самостоятельно',
      price: '0₽',
      highlight: false
    }
  ];

  const preparationTimes = [
    {
      product: 'Мясные чипсы',
      time: '2 дня',
      icon: '🥩',
      color: 'primary'
    },
    {
      product: 'Сырные шарики',
      time: '30 дней',
      icon: '🧀',
      color: 'accent'
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Доставка и сроки
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Как получить заказ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Доставляю по Белгороду и всей России
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {deliveryOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all ${option.highlight ? 'border-2 border-primary shadow-lg' : ''}`}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${option.highlight ? 'bg-primary text-white' : 'bg-secondary'}`}>
                  <Icon name={option.icon as any} size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </div>
                <div className="text-3xl font-bold text-primary">{option.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Сроки приготовления
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {preparationTimes.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-transparent border"
                  >
                    <div className="text-5xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{item.product}</div>
                      <div className={`text-2xl font-bold ${item.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                        {item.time}
                      </div>
                    </div>
                    <Icon name="Clock" size={24} className="text-muted-foreground" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Важно:</strong> Сырные шарики требуют длительной выдержки для достижения идеального вкуса. 
                      Планируйте заказ заранее!
                    </p>
                    <p>
                      Мясные чипсы готовятся быстро — уже через 2 дня вы сможете насладиться вкуснейшим джерки!
                    </p>
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

export default Delivery;
