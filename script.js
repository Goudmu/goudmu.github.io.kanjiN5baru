// FLIP CARD
const card = document.querySelectorAll(".card__innerasd");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function (e) {
        card[i].classList.toggle('is-flipped');
    });
}

// soal
const start_latihan_essay = document.querySelector('.start_latihan_essay');
const restart_container = document.querySelector('.restart_container');
const submit_container = document.querySelector('.submit_container');
const container_jawaban = document.querySelectorAll('.container_jawaban');
const skor = document.querySelector('.skor');

var soal_essay = ['Tuliskan romaji dari onyomi 一', 'Tuliskan romaji dari onyomi 二', 'Tuliskan romaji dari onyomi 三', 'Tuliskan romaji dari onyomi 四', 'Tuliskan romaji dari onyomi 五',
    'Tuliskan romaji dari onyomi 六',
    'Tuliskan romaji dari onyomi 七',
    'Tuliskan romaji dari onyomi 八',
    'Tuliskan romaji dari onyomi 九',
    'Tuliskan romaji dari onyomi 十',
    'Tuliskan romaji dari kunyomi 一',
    'Tuliskan romaji dari kunyomi 二',
    'Tuliskan romaji dari kunyomi 三',
    'Tuliskan romaji dari kunyomi 四',
    'Tuliskan romaji dari kunyomi 五',
    'Tuliskan romaji dari kunyomi 六',
    'Tuliskan romaji dari kunyomi 七',
    'Tuliskan romaji dari kunyomi 八',
    'Tuliskan romaji dari kunyomi 九',
    'Tuliskan romaji dari kunyomi 十',
    'Tuliskan arti dari 一',
    'Tuliskan arti dari 二',
    'Tuliskan arti dari 三',
    'Tuliskan arti dari 四',
    'Tuliskan arti dari 五',
    'Tuliskan arti dari 六',
    'Tuliskan arti dari 七',
    'Tuliskan arti dari 八',
    'Tuliskan arti dari 九',
    'Tuliskan arti dari 十',
];
var listjawaban_essay = ['ichi', 'ni', 'san', 'yon', 'go', 'roku', 'shichi', 'hachi', 'kyuu', 'jyuu',
    'hitotsu',
    'futatsu',
    'mitsu',
    'yotsu',
    'itsutsu',
    'muttsu',
    'nanatsu',
    'yatsu',
    'kokonotsu',
    'too',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
];

const container_soal_essay = document.querySelectorAll('.container_soal_essay');
const container_essay = document.querySelector('.container_essay');
var soalessay = document.querySelectorAll('.soalessay');
const jawaban_essay = document.querySelectorAll('.jawaban_essay');

start_latihan_essay.addEventListener('click', function () {
    start_latihan_essay.style.display = 'none';
    container_essay.style.display = 'flex';
    restart_container.style.display = 'inline';
    submit_container.style.display = 'inline';
    skor.style.display = 'inline';
    for (let ii = 0; ii < soalessay.length; ii++) {
        container_soal_essay[ii].style.display = 'flex';
    }
    
    for (let isd = 0; isd < jawaban_essay.length; isd++ ){
        jawaban_essay[isd].style.backgroundColor = '#808080';
    }

    var numbers = []; // new empty array
    var min, max, r, n, p;
    min = 0;
    max = listjawaban_essay.length - 1;
    r = 10; // how many numbers you want to extract
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if (!p) {
                numbers.push(n);
            }
        }
        while (p);
    }

    for (let i = 0; i < container_soal_essay.length; i++) {
        const soalacakessay = document.createElement('h4');
        var asdf = numbers[i];
        const isisoalacakessay = document.createTextNode(soal_essay[asdf]);
        soalacakessay.appendChild(isisoalacakessay);
        soalessay[i].appendChild(soalacakessay);
    };

    const submit = document.querySelector('.submit');
    var jumlahskor = 0;
    submit.addEventListener('click', function () {
        for (let i = 0; i < jawaban_essay.length; i++) {
            if (jawaban_essay[i].value == listjawaban_essay[numbers[i]]) {
                jumlahskor = jumlahskor + 1;
                jawaban_essay[i].style.backgroundColor = 'green';
            } else {
                jawaban_essay[i].style.backgroundColor = 'red';
            };
        };
        if (remove_skor.length < 2) {
            var isiskor = document.createElement('h3');
            var isiskortext = document.createTextNode(jumlahskor + ' / ' + jawaban_essay.length);
            isiskor.appendChild(isiskortext);
            skor.appendChild(isiskor);
        } else if (remove_skor.length > 1) {
            var isiskorr = document.createElement('h3');
            var isiskorrtext = document.createTextNode(jumlahskor + ' / ' + jawaban_essay.length);
            isiskorr.appendChild(isiskorrtext);
            skor.replaceChild(isiskorr, skor.childNodes[3]);
        }
    }, {once : true});
});

// restart
const restart = document.querySelector('.restart');
const remove_skor = skor.getElementsByTagName('h3');
restart.addEventListener('click', function () {

    restart_container.style.display = 'none';
    submit_container.style.display = 'none';
    start_latihan_essay.style.display = 'inline';
    const container_soal_essay_h4 = document.querySelectorAll('h4');

    if (remove_skor.length > 1) {
        skor.removeChild(remove_skor[1]);
    };

    for (var k = 0; k < container_soal_essay.length; k++) {
        soalessay[k].removeChild(container_soal_essay_h4[k])
        container_soal_essay[k].style.display = 'none';
        jawaban_essay[k].style.backgroundColor = 'white';
        jawaban_essay[k].value = '';
    }
    skor.style.display = 'none';
});
