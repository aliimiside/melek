document.addEventListener('DOMContentLoaded', () => {

    // 1. Resim Listesi - Klasörünüzdeki fotoğrafların tam isimleri
    let imageFiles = [
        "IMG-20260308-WA0018.jpg", "IMG-20260308-WA0020.jpg", "IMG-20260308-WA0049.jpg",
        "IMG-20260308-WA0052.jpg", "IMG-20260308-WA0053.jpg", "IMG-20260308-WA0054.jpg",
        "IMG-20260308-WA0055.jpg", "IMG-20260308-WA0056.jpg", "IMG-20260308-WA0057.jpg",
        "IMG-20260308-WA0058.jpg", "IMG-20260308-WA0059.jpg", "IMG-20260308-WA0060.jpg",
        "IMG-20260308-WA0061.jpg", "IMG-20260308-WA0062.jpg", "IMG-20260308-WA0063.jpg",
        "IMG-20260308-WA0064.jpg", "IMG-20260308-WA0065.jpg", "IMG-20260308-WA0066.jpg",
        "IMG-20260308-WA0067.jpg", "IMG-20260308-WA0068.jpg", "IMG-20260308-WA0069.jpg",
        "IMG-20260308-WA0070.jpg", "IMG-20260308-WA0071.jpg", "IMG-20260308-WA0072.jpg",
        "IMG-20260308-WA0073.jpg", "IMG-20260308-WA0074.jpg", "IMG-20260308-WA0075.jpg",
        "IMG-20260308-WA0076.jpg", "IMG-20260308-WA0077.jpg", "IMG-20260308-WA0079.jpg",
        "IMG-20260308-WA0080.jpg", "IMG-20260314-WA0012.jpg"
    ];

    // Melek için derin, duygusal ve anlamlı şiirler
    const poemsForMelek = [
        "Göğsüme yaslandığında susar bütün dünya,<br>Gözlerin, içimde uyanan en masum rüya,<br>Seni sevmek Meleğim, içimdeki en tutkulu ateş.",
        "Bütün yollarım sana, bütün şarkılarım sesine çıkıyor,<br>Gülüşün karanlık bir odaya doğan güneş gibi sızıyor,<br>Ruhumun en kuytu köşesinde, hep güvende kalsın sol yanın.",
        "Kırık dökük bir hikayenin en anlamlı satırısın sen,<br>Bana yaşamanın ne kadar değerli olduğunu öğreten,<br>Kalbimdeki tek gerçeğim, kanatsız Meleğim.",
        "Ömrümün kıyılarına vuran en berrak dalgasın sen,<br>Bir gülüşün yetiyor, dağıtıyor içimdeki siyahları,<br>Melek yüzlüm, sana adamışım ben ahir zamanımı.",
        "Dokunduğun her yer bahar, baktığın her yer çiçek açıyor,<br>O kadar güzelsin ki, bütün şiirler yetersiz kalıyor,<br>Seninle geçen her saniye kalbim, bir mucizeyi yaşıyor.",
        "Gökyüzünden ödünç aldığım en parlak yıldızımsın,<br>Kalabalıklar içinde sığındığım tek ıssızımsın.<br>Sen benim alnıma yazılmış en güzel yazgımsın Melek.",
        "Bir tesadüf gibi geldin değiştirdin bütün dünyamı,<br>Avuçlarında buldum yitirdiğim sıcaklığı, umudumu.<br>Sen, ruhumun öteki yarısı, canım Meleğim.",
        "İçimde büyüyen bu koca sevda sarmış her bir zerremi.<br>Senden öncesi yok gibi, senden sonrası sadece sen,<br>Yüzünde parlayan masumiyet, adeta gökten inmişçesine...",
        "Derin bir nefes gibi çektim seni içime bir gece vakti,<br>O günden beri gözlerin, kalbimin en huzurlu saati.<br>Dünyanın bütün çiçekleri solsun, yeter ki sen yanımda kal.",
        "Göğsümde atan bu kalbin tek sahibi sensin artık,<br>Seninle aydınlandı o korktuğum, o en zifiri karanlık.<br>Bana nefes ol, hiç eksilmesin kalbimden sevdanın adı..."
    ];

    // 2. Rastgele Karıştırma Fonksiyonu (Fisher-Yates Shuffle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Fotoğrafları karıştır
    shuffleArray(imageFiles);

    // 3. HTML'e Kartları Ekle
    const timelineContainer = document.getElementById('timeline-container');

    imageFiles.forEach((fileName, index) => {
        // Rastgele bir şiir seç... 
        const randomPoem = poemsForMelek[Math.floor(Math.random() * poemsForMelek.length)];
        
        // Sağda mı solda mı gözükecek (bir sol, bir sağ)
        const position = (index % 2 === 0) ? 'left' : 'right';
        
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${position}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <img src="images/${fileName}" alt="Meleğim" loading="lazy">
                <h3 style="font-family: cursive; font-size: 1.5rem; margin-bottom: 15px; color: #ffcccc;">👼 Meleğim...</h3>
                <p style="font-style: italic; line-height: 1.8;">✨ ${randomPoem} ✨</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });

    // 4. Scroll Reveal (Aşağı kaydırdıkça belirme animasyonları)
    const observerOptions = {
        threshold: 0.1, // Elementin %10'u ekrana girdiğinde tetiklen
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Görünür olduğunda 'visible' class'ı ekle
                entry.target.classList.add('visible');
                // Tekrar tekrar çalışmasın istiyorsanız alttaki yorumu açabilirsiniz
                // observer.unobserve(entry.target);
            } else {
                // Ekranda yokken dışarı kaysın (sürekli tekrar eden efekt için)
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        observer.observe(item);
    });

    // 5. Arka Plandaki Kalp Animasyonları
    function createHeart() {
        const heartsBg = document.getElementById('hearts-bg');
        if (!heartsBg) return;

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        // Rastgele yatay konum
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Rastgele animasyon süresi (5 saniye ile 15 saniye arası)
        heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
        
        // Rastgele boyut
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        heartsBg.appendChild(heart);

        // Animasyon bitince kalbi sil ki sayfada çok fazla nesne birikmesin
        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }

    // Her 400 milisaniyede bir kalp yolla
    setInterval(createHeart, 400);

});
