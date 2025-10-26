import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Классические мясные чипсы',
      description: 'Традиционный рецепт с идеальным балансом вкуса и текстуры',
      price: '2000₽/кг',
      prepTime: '2 дня',
      icon: '🥩',
      features: ['100% натуральное мясо', 'Без консервантов', 'Хрустящая текстура'],
      image: 'https://cdn.poehali.dev/projects/eaeaa43c-3286-4149-9bfa-03be43a0730c/files/42cb1000-0b1a-4830-b2ec-02d8f1490dc3.jpg'
    },
    {
      id: 2,
      name: 'Острые мясные чипсы',
      description: 'Для любителей острого — с добавлением отборных специй',
      price: '2000₽/кг',
      prepTime: '2 дня',
      icon: '🌶️',
      features: ['Насыщенный острый вкус', 'Авторская смесь специй', 'Идеально к пиву'],
      image: 'https://cdn.poehali.dev/projects/eaeaa43c-3286-4149-9bfa-03be43a0730c/files/42cb1000-0b1a-4830-b2ec-02d8f1490dc3.jpg'
    },
    {
      id: 3,
      name: 'Сырные шарики',
      description: 'Хрустящие снаружи, нежные внутри — настоящее сырное удовольствие',
      price: '300₽/шт',
      prepTime: '30 дней',
      icon: '🧀',
      features: ['Выдержанный сыр', 'Уникальная рецептура', 'Ручная работа'],
      image: 'https://cdn.poehali.dev/projects/eaeaa43c-3286-4149-9bfa-03be43a0730c/files/de54d2f8-9028-440d-a17b-756deab314de.jpg'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Наши продукты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Что я готовлю для вас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждый продукт создается с любовью и вниманием к деталям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 text-5xl">{product.icon}</div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-primary">{product.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Icon name="Clock" size={14} />
                      Готовится {product.prepTime}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://t.me/PROJerki" target="_blank" rel="noopener noreferrer">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
