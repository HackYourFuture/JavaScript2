'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'lotr_return_the_king',
    'yeraltindan_notlar',
    'simyaci',
    'insan_ne_ile_yasar',
    'dogunun_limanlari',
    'semerkand',
    'ince_memed',
    'kurk_mantolu_madonna',
    'dava',
    'donusum'
  ];
  console.log(bookTitles);

  const books = [
    {
      id: 0,
      title: 'harry_potter_chamber_secrets',
      language: 'english',
      author: 'j_k_rowling',
      desc:
        'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks. ',
      imgPath:
        'https://vignette.wikia.nocookie.net/harrypotter/images/6/6d/Chamber_of_Secrets_New_UK_Cover.jpg/revision/latest?cb=20170109045927'
    },
    {
      id: 1,
      title: 'lotr_return_the_king',
      language: 'english',
      author: 'j_r_r_tolkien',
      desc:
        "The Return of the King is the third and final volume of J. R. R. Tolkien's The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron. ",
      imgPath: 'http://www.exhibitionsinternational.org/img/9780261102378.jpg'
    },
    {
      id: 2,
      title: 'yeraltindan_notlar',
      language: 'turkish',
      author: 'fyodor_dostoyevski',
      desc:
        'Notes from Underground (pre-reform Russian: Записки изъ подполья; post-reform Russian: Записки из подполья, tr. Zapíski iz podpólʹya), also translated as Notes from the Underground or Letters from the Underworld, is an 1864 novella by Fyodor Dostoevsky. Notes is considered by many to be one of the first existentialist novels.[1] It presents itself as an excerpt from the rambling memoirs of a bitter, isolated, unnamed narrator (generally referred to by critics as the Underground Man), who is a retired civil servant living in St. Petersburg. The first part of the story is told in monologue form, or the underground man\'s diary, and attacks emerging Western philosophy, especially Nikolay Chernyshevsky\'s What Is to Be Done?[2] The second part of the book is called "Apropos of the Wet Snow" and describes certain events that appear to be destroying and sometimes renewing the underground man, who acts as a first person, unreliable narrator and anti-hero.',
      imgPath: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000364168-1.jpg'
    },
    {
      id: 3,
      title: 'simyaci',
      language: 'turkish',
      author: 'paulo_coelho',
      desc:
        'The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.[1][2] An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. ',
      imgPath: 'https://upload.wikimedia.org/wikipedia/tr/d/d4/Simyac%C4%B1.jpg'
    },
    {
      id: 4,
      title: 'insan_ne_ile_yasar',
      language: 'turkish',
      author: 'lev_tolstoy',
      desc:
        '"How Much Land Does a Man Require?" (Russian: Много ли человеку земли нужно?, Mnogo li cheloveku zemli nuzhno?) is an 1886 short story by Leo Tolstoy about a man who, in his lust for land, forfeits everything. ',
      imgPath: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000414799-1.jpg'
    },
    {
      id: 5,
      title: 'dogunun_limanlari',
      language: 'turkish',
      author: 'amin_maalouf',
      desc:
        'Doğunun Limanları (Orijinal Adı: Les Échelles du Levant), Amin Maalouf tarafından yazılmış bir roman. ',
      imgPath: 'https://dilekylmzr.files.wordpress.com/2010/09/doununlimanlari.jpg'
    },
    {
      id: 6,
      title: 'semerkand',
      language: 'turkish',
      author: 'amin_maalouf',
      desc:
        "Semerkant (özgün adı, La Samarcande), \"Afrikalı Leo\" (1986) kitabı ile ünlenen Lübnan asıllı Fransız yazar Amin Maalouf'un yazdığı roman. Yapıt, Ömer Hayyam'ın Rubaiyat adlı elyazması eserinin 1072 yılında Semerkant'ta başlayan ve 1912'de Titanik'te biten hikâyesini ele alıyor. \"Semerkant\"(1988) Ali Berktay tarafından Türkçeye çevrilmiştir. ",
      imgPath: 'https://s3.us-east-2.amazonaws.com/yazarokur-kitap/semerkant.jpg'
    },
    {
      id: 7,
      title: 'ince_memed',
      language: 'turkish',
      author: 'yasar_kemal',
      desc:
        'Memed, My Hawk (Turkish: İnce Memed, meaning "Memed, the Slim") is a 1955 novel by Yaşar Kemal. It was Kemal\'s debut novel and is the first novel in his İnce Memed tetralogy. The novel won the Varlik prize for that year (Turkey\'s highest literary prize) and earned Kemal a national reputation. In 1961, the book was translated into English by Edouard Roditi, thus gaining Kemal his first exposure to English-speaking readers. ',
      imgPath: 'http://images.ykykultur.com.tr/upload/image/delta_yasar_kemal_ince_memed-5875.jpg'
    },
    {
      id: 8,
      title: 'kurk_mantolu_madonna',
      language: 'turkish',
      author: 'sabahattin_ali',
      desc:
        "A shy young man leaves his home in rural Turkey to learn a trade in 1920s Berlin. The city's crowded streets, thriving arts scene, passionate politics and seedy cabarets provide the backdrop for a chance meeting with a woman, which will haunt him for the rest of his life. Emotionally powerful, intensely atmospheric and touchingly profound, Madonna in a Fur Coat is an unforgettable novel about new beginnings and the unfathomable nature of the human soul.",
      imgPath: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000058245-1.jpg'
    },
    {
      id: 9,
      title: 'dava',
      language: 'turkish',
      author: 'franz_kafka',
      desc:
        "Dava, (Der Prozeß), bir sabah uyandığında kendisini sebebini anlamadığı bir suç nedeniyle dava edilmiş bulan Josef K. adlı kahramanın absürt durumunun anlatıldığı bir Franz Kafka romanıdır. Gerçekdışı niteliğiyle Kafka'nın şaşırtıcı yapıtları arasında çok önemli bir yeri olan Dava; tamamlanmamış bölümleriyle birlikte yazarın ölümünden iki yıl sonra, yakın arkadaşı Max Brod'un katkılarıyla, 1925'te yayımlanmıştır. ",
      imgPath: 'https://www.iskultur.com.tr/dosyalar/2015/03/dava_10-255x420.jpg'
    },
    {
      id: 10,
      title: 'donusum',
      language: 'turkish',
      author: 'franz_kafka',
      desc:
        "Dönüşüm, Değişim veya Metamorfoz (Almanca özgün adı: Die Verwandlung), Franz Kafka'nın uzun öyküsü. İlk olarak 1915 yılında yayımlanmıştır.Kafka'nın en popüler eseri sayılabilir. Öykü, Gregor Samsa'nın bir sabah kendini dev bir böceğe dönüşmüş bulmasıyla başlar ve hayatındaki değişiklikleri anlatarak devam eder. ",
      imgPath: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000064022-1.jpg'
    }
  ];

  function toCapitalize(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  // Replace with your own code
  function render(container) {
    // for (const book of bookTitles) {
    //   const li = document.createElement('li');
    //   li.innerText = book;
    //   container.appendChild(li);
    // }

    for (const title of books) {
      console.log(title);
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.innerText = toCapitalize(title.title.split('_').join(' '));
      div.appendChild(h3);

      const img = document.createElement('img');
      img.setAttribute('src', title.imgPath);
      div.appendChild(img);

      const p = document.createElement('p');
      const author = toCapitalize(title.author.split('_').join(' '));
      p.innerText = `${author} - ${toCapitalize(title.language)}`;
      div.appendChild(p);

      const descPara = document.createElement('p');
      descPara.innerText = title.desc;
      descPara.className = 'description';
      div.appendChild(descPara);

      div.className = 'book';
      container.appendChild(div);
    }
  }

  function main() {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.className = 'books';
    root.appendChild(div);

    render(div);
  }

  window.addEventListener('load', main);
}
