nodspot.factory('GenresServices', [function ()
{
    var GenresServices = {};

    GenresServices.stylesVisibility = true;
    GenresServices.imagesPath = 'images/tag images/';


    GenresServices.randomAccent = function ()
    {
        return Math.floor(Math.random() * 8);
    };

    GenresServices.setAccent = function ()
    {
        angular.forEach(GenresServices.styles, function (style, i)
        {
            style.accent = GenresServices.randomAccent();
        });
    };

    GenresServices.styles = [
        {
            name: "downtempo"
        }
        ,
        {
            name: "dubstep"
        },
        {
            name: "deep-house"
        },
        {
            name: "trance"
        },
        {
            name: "techno"
        },
        {
            name: "hardcore"
        },
        {
            name: "drum-n-bass"
        },
        {
            name: "jungle"
        },
        {
            name: "euro-dance"
        },
        {
            name: "tech-house"
        },
        {
            name: "electro"
        },
        {
            name: "rock & roll"
        },
        {
            name: "soul"
        },
        {
            name: "jazz"
        },
        {
            name: "hip-hop"
        },
        {
            name: "pop-rock"
        },
        {
            name: "synth-pop"
        },
        {
            name: "disco"
        },
        {
            name: "rap"
        },
        {
            name: "funk"
        },
        {
            name: "new-wave"
        },
        {
            name: "trip-hop"
        },
        {
            name: "broken-beat"
        },
        {
            name: "uk-garage"
        },
        {
            name: "idm"
        },
        {
            name: "dub-techno"
        },
        {
            name: "ambient"
        },
        {
            name: "dub"
        },
        {
            name: "gabber"
        },
        {
            name: "leftfield"
        },
        {
            name: "minimal"
        },
        {
            name: "hardstyle"
        },
        {
            name: "grime"
        },
        {
            name: "breakcore"
        },
        {
            name: "reggae"
        },
        {
            name: "bossanova"
        },
        {
            name: "swing"
        }
    ];

    GenresServices.setAccent();

    GenresServices.tags = [
        {
            name: 'lounge',
            src: GenresServices.imagesPath + 'lounge1.jpg',
            source: 'http://www.trendir.com/interiors/contemporary-living-room-design-ideas-inspiration-in-bright-contrast-colors.html'
        },
        {
            name: 'autumn',
            src: GenresServices.imagesPath + 'autumn1.jpg',
            source: 'http://web.stagram.com/p/301329562910091684_2906305'
        },
        {
            name: 'summer',
            src: GenresServices.imagesPath + 'summer1.jpg',
            source: 'http://dreamdoterra.hubpages.com/hub/Alternative-Antidepressant-Natural-Safer-and-No-Side-Effects'
        },
        {
            name: 'winter',
            src: GenresServices.imagesPath + 'winter1.jpg',
            source: 'http://websta.me/p/626075998912539155_2906305#jaQUlKDLCx7WJJtV.32'
        },
        {
            name: 'ibiza',
            src: GenresServices.imagesPath + 'ibiza2.jpg',
            source: 'http://www.buzzfeed.com/perpetua/totally-chill-songs-for-the-summer?s=mobile'
        },
        {
            name: 'walking',
            src: GenresServices.imagesPath + 'walking1.jpg',
            source: 'https://www.guarantorloansonline.co.uk/Blog/15-Ways-To-Save-Money'
        },
        {
            name: 'night',
            src: GenresServices.imagesPath + 'night1.jpg',
            source: 'http://www.flickr.com/photos/kailashnadh/5921656351/'
        },
        {
            name: 'confusion',
            src: GenresServices.imagesPath + 'confusion1.jpg',
            source: 'http://www.pinterest.com/jasonmpeterson/'
        },
        {
            name: 'night driving',
            src: GenresServices.imagesPath + 'night-driving1.jpg',
            source: 'http://limeflavored.tumblr.com/post/52771398276'
        },
        {
            name: 'sunday morning',
            src: GenresServices.imagesPath + 'sunday-morning1.jpg',
            source: 'http://theaccidentalexecutive.tumblr.com/post/50821316276'
        },
        {
            name: 'city',
            src: GenresServices.imagesPath + 'city1.jpg',
            source: 'http://web.stagram.com/p/466484148783314198_3281308#J06bKlbyBSGOxSKt.32'
        },
        {
            name: 'new york',
            src: GenresServices.imagesPath + 'new-york1.jpg',
            source: 'http://estilo-tendances.com/sunday-photo-york-city/?crlt.pid=camp.bPKN8vt7AKsk'
        },
        {
            name: 'london',
            src: GenresServices.imagesPath + 'london1.jpg',
            source: 'http://media-cache-ec0.pinimg.com/736x/04/8d/c0/048dc0d9cc86d33b2f9ab251433b4d5c.jpg'
        },
        {
            name: 'paris',
            src: GenresServices.imagesPath + 'paris1.jpg',
            source: 'http://www.pinterest.com/jhelkim/'
        },
        {
            name: 'romantic',
            src: GenresServices.imagesPath + 'romantic1.jpg',
            source: 'http://www.pinterest.com/pin/360921357609600838/'
        },
        {
            name: 'happy',
            src: GenresServices.imagesPath + 'happy2.jpg',
            source: 'http://favimages.com/image/164901/'
        },
        {
            name: 'sad',
            src: GenresServices.imagesPath + 'sad1.jpg',
            source: 'http://2ndbook.tumblr.com/post/22707280772'
        },
        {
            name: 'lonely',
            src: GenresServices.imagesPath + 'lonely1.jpg',
            source: 'http://weheartit.com/entry/49356465/via/l0vefashion'
        },
        {
            name: 'erotic lounge',
            src: GenresServices.imagesPath + 'erotic-lounge1.jpg',
            source: 'http://krane-inner-sanctum.tumblr.com/page/5'
        },
        {
            name: 'soothing',
            src: GenresServices.imagesPath + 'soothing1.jpg',
            source: 'http://weheartit.com/entry/5087416/via/melinwonderland'
        },
        {
            name: 'on the road',
            src: GenresServices.imagesPath + 'on-the-road1.jpg',
            source: 'http://www.brightboldbeautiful.com/2013/07/13/weekend-roundup-18/'
        },
        {
            name: 'spacious',
            src: GenresServices.imagesPath + 'spacious1.jpg',
            source: 'http://www.bt-images.net/incredible-universe/'
        },
        {
            name: 'rain',
            src: GenresServices.imagesPath + 'rain1.jpg',
            source: 'http://www.pinterest.com/averybeaudrot/'
        },
        {
            name: 'sunset',
            src: GenresServices.imagesPath + 'sunset2.jpg',
            source: 'http://www.pinterest.com/pin/396316835931866089/'
        },
        {
            name: 'chill',
            src: GenresServices.imagesPath + 'chill1.jpg',
            source: 'http://www.pinterest.com/60sthrowback/'
        },
        {
            name: 'atmospheric',
            src: GenresServices.imagesPath + 'atmospheric1.jpg',
            source: 'http://www.pinterest.com/pin/540924605216978036/'
        },
        {
            name: 'acoustic',
            src: GenresServices.imagesPath + 'acoustic1.jpg',
            source: 'http://www.pinterest.com/pin/394698354813685100/'
        },
        {
            name: 'sunny',
            src: GenresServices.imagesPath + 'sunny1.jpg',
            source: 'http://girls-4-god.blogspot.com/2012/08/faith-friday-10-encouraging-bible.html'
        },
        {
            name: 'ambient',
            src: GenresServices.imagesPath + 'ambient1.jpg',
            source: 'http://commons.wikimedia.org/wiki/File:Mellieha-red_skies.jpg'
        },
        {
            name: '80s',
            src: GenresServices.imagesPath + '80s1.jpg',
            source: 'http://www.pinterest.com/pin/304344887290563996/'
        },
    ];

    GenresServices.getTags = function ()
    {
        return GenresServices.tags;
    };

    GenresServices.getStyles = function ()
    {
        return GenresServices.styles;
    };

    GenresServices.isVisible = function ()
    {
        return GenresServices.stylesVisibility;
    };

    return GenresServices;
}]);