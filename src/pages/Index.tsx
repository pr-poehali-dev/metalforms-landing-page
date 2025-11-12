import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в течение 30 минут",
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  const products = [
    {
      id: 1,
      name: "ПДН 6.0",
      description: "Металлоформа для плиты дорожной 6 метров",
      price: "385 000",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "ПДН 3.0",
      description: "Металлоформа для плиты дорожной 3 метра",
      price: "245 000",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "ПАГ 14",
      description: "Форма для плиты аэродромной 14 тонн",
      price: "520 000",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "ПАГ 18",
      description: "Форма для плиты аэродромной 18 тонн",
      price: "595 000",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "2П30.18-30",
      description: "Металлоформа плита перекрытия",
      price: "425 000",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "ФБС 24.4.6",
      description: "Форма для блоков стеновых",
      price: "310 000",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Кольцо КС 10.9",
      description: "Металлоформа для колодезных колец",
      price: "185 000",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Лоток Л2",
      description: "Форма для бетонных лотков",
      price: "265 000",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    }
  ];

  const trustFeatures = [
    { icon: "Award", title: "17 лет", description: "на рынке ЖБИ оборудования" },
    { icon: "Shield", title: "Гарантия 5 лет", description: "на всю продукцию" },
    { icon: "Users", title: "1200+ клиентов", description: "по всей России" },
    { icon: "CheckCircle", title: "ISO 9001", description: "сертифицированное производство" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
                Производство под заказ
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Металлоформы для дорожных плит ЖБИ
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Прочные металлоформы российского производства. Сталь 3 мм, точная геометрия, быстрая окупаемость.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400">99.8%</div>
                  <div className="text-sm text-slate-300">точность форм</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400">15</div>
                  <div className="text-sm text-slate-300">дней изготовление</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400">5000+</div>
                  <div className="text-sm text-slate-300">циклов работы</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
                  alt="Металлоформа для ЖБИ"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <Icon name="CheckCircle" className="text-green-400" size={24} />
                    <span className="text-white font-semibold">В наличии на складе</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="shadow-2xl border-2 border-orange-500/20">
                <CardHeader className="bg-gradient-to-br from-orange-50 to-white">
                  <CardTitle className="text-2xl text-slate-900">Получить коммерческое предложение</CardTitle>
                  <CardDescription className="text-base">
                    Оставьте заявку и получите расчет стоимости в течение 30 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600">
                      Получить расчет
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                    <p className="text-xs text-slate-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Icon name="Phone" size={18} className="text-orange-500" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Icon name="Clock" size={18} className="text-orange-500" />
                      <span>Пн-Пт: 9:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover-scale cursor-pointer border-none shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-blue-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Быстрое производство</h3>
                <p className="text-slate-600 text-sm">Изготовление за 15 рабочих дней</p>
              </CardContent>
            </Card>
            <Card className="hover-scale cursor-pointer border-none shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" className="text-green-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Доставка по РФ</h3>
                <p className="text-slate-600 text-sm">Собственная логистика и транспорт</p>
              </CardContent>
            </Card>
            <Card className="hover-scale cursor-pointer border-none shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="text-orange-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Под ваши задачи</h3>
                <p className="text-slate-600 text-sm">Любые нестандартные размеры</p>
              </CardContent>
            </Card>
            <Card className="hover-scale cursor-pointer border-none shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" className="text-purple-600" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Рассрочка 0%</h3>
                <p className="text-slate-600 text-sm">Оплата частями без переплат</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Каталог продукции
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Металлоформы в наличии</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Широкий ассортимент форм для производства дорожных плит, блоков и других изделий из ЖБИ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="hover-scale overflow-hidden group border-2 hover:border-orange-500 transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500 text-white">В наличии</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-orange-600">{product.price}</span>
                      <span className="text-slate-500 ml-1">₽</span>
                    </div>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">
                    Заказать
                    <Icon name="ShoppingCart" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-orange-500 text-white">
                О компании
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Надежный партнер в производстве ЖБИ
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Мы специализируемся на производстве металлоформ с 2007 года. За это время наше оборудование установлено на более чем 1200 предприятиях по всей России.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Собственное производство</h4>
                    <p className="text-slate-400">Полный цикл от проектирования до испытаний</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Контроль качества</h4>
                    <p className="text-slate-400">Каждая форма проходит многоступенчатую проверку</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Техподдержка 24/7</h4>
                    <p className="text-slate-400">Консультации и помощь в любое время</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {trustFeatures.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-scale">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={feature.icon as any} className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-white text-orange-600 hover:bg-slate-100">
              🔥 Акция месяца
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Скидка 15% при заказе<br />от 3-х форм
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              + Бесплатная доставка по России при заказе от 5 форм
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 inline-block">
              <div className="flex gap-4 justify-center items-center text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">23</div>
                  <div className="text-sm uppercase tracking-wide">Дня</div>
                </div>
                <div className="text-4xl">:</div>
                <div>
                  <div className="text-5xl font-bold mb-2">14</div>
                  <div className="text-sm uppercase tracking-wide">Часа</div>
                </div>
                <div className="text-4xl">:</div>
                <div>
                  <div className="text-5xl font-bold mb-2">35</div>
                  <div className="text-sm uppercase tracking-wide">Минут</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 h-14 px-8 text-lg">
                Получить скидку
                <Icon name="Gift" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 h-14 px-8 text-lg">
                Условия акции
                <Icon name="FileText" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-2 border-orange-500/20 animate-scale-in">
              <CardHeader className="text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-t-lg">
                <CardTitle className="text-3xl md:text-4xl mb-4">Готовы начать производство?</CardTitle>
                <CardDescription className="text-lg text-slate-300">
                  Оставьте заявку прямо сейчас и получите персональное КП с расчетом под ваши задачи
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-14 text-lg"
                    />
                    <Input 
                      type="tel"
                      placeholder="Телефон *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-14 text-lg"
                    />
                  </div>
                  <Input 
                    type="email"
                    placeholder="Email для отправки КП"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-14 text-lg"
                  />
                  <Button type="submit" size="lg" className="w-full h-16 text-xl bg-orange-500 hover:bg-orange-600">
                    Получить коммерческое предложение
                    <Icon name="Send" className="ml-2" size={24} />
                  </Button>
                  <p className="text-sm text-slate-500 text-center">
                    Отправляя заявку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>

                <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t">
                  <div className="text-center">
                    <Icon name="Phone" className="mx-auto mb-3 text-orange-500" size={32} />
                    <h4 className="font-bold mb-2">Позвоните нам</h4>
                    <p className="text-slate-600">+7 (495) 123-45-67</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Mail" className="mx-auto mb-3 text-orange-500" size={32} />
                    <h4 className="font-bold mb-2">Напишите письмо</h4>
                    <p className="text-slate-600">info@metalforms.ru</p>
                  </div>
                  <div className="text-center">
                    <Icon name="MapPin" className="mx-auto mb-3 text-orange-500" size={32} />
                    <h4 className="font-bold mb-2">Приезжайте к нам</h4>
                    <p className="text-slate-600">г. Москва, ул. Заводская, 12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2024 МеталлФормы. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
