# PatikaJSSecondWorkshop

# Yapılacaklar Listesi (To-Do List)

Bu proje, basit bir yapılacaklar listesi uygulamasıdır. Kullanıcılar yapılacak görevleri ekleyebilir, görevleri tamamlandığında işaretleyebilir ve tamamlanan görevlerin arka planı yeşil renge dönüşür. Ayrıca görevler tarayıcı kapatılsa bile yerel depolama (localStorage) kullanılarak saklanır ve sayfa yenilendiğinde geri yüklenir.

## Özellikler

- **Görev Ekleme:** Yapılacak görevler kolayca eklenebilir.
- **Görev Tamamlama:** Görevler üzerine tıklandığında check işareti eklenir ve arka planı yeşil olur.
- **Görev Silme:** Görevlerin yanındaki "X" butonuna basarak görevler silinebilir.
- **Yerel Depolama:** Görevler tarayıcıda saklanır, sayfa yenilendiğinde veya tarayıcı kapatılıp açıldığında görevler korunur.
- **Responsive Tasarım:** Uygulama farklı cihazlarda kullanılmak üzere uyarlanmıştır.

## Kullanım

1. Projeyi bilgisayarınıza klonlayın:
```bash
git clone https://github.com/kullaniciadi/todo-list.git
```
2. Proje dizinine gidin:
```
cd PatikaJSSecondWorkshop
```

3. Proje dosyalarını tarayıcınızda açın:
- **`index.html`** dosyasını tarayıcıda açın.
4. Yeni bir görev eklemek için, üst kısımdaki giriş alanına görevi yazın ve "Ekle" butonuna basın.
5. Görev tamamlandığında, görevin üzerine tıklayarak check işareti ekleyin. Arka plan rengi yeşil olacaktır.
6. Görevi silmek için, görevin sağ tarafındaki "X" butonuna basın.

## Dosya Yapısı

- **index.html:** Uygulamanın arayüzünü içeren HTML dosyası.
- **script.js:** Uygulamanın işlevselliğini sağlayan JavaScript dosyası.
- **README.md:** Proje hakkında bilgi içeren dosya.

## Geliştirme

Projeye katkıda bulunmak isterseniz, aşağıdaki adımları izleyebilirsiniz:
1. Bu projeyi forklayın.

2. Yeni bir dal (branch) oluşturun: `git checkout -b yeni-ozellik`

3. Değişikliklerinizi commitleyin: `git commit -m 'Yeni özellik ekle'`

4. Dalınıza push edin: `git push origin yeni-ozellik`

5. Bir Pull Request açın.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.