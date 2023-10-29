//instagram

const instagram= document.getElementById('instagram')

instagram.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.instagram.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//linkedin

const linkedin= document.getElementById('linkedin')

linkedin.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.linkedin.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//pinterest

const pinterest= document.getElementById('pinterest')

pinterest.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.pinterest.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//youtube

const youtube= document.getElementById('youtube')

youtube.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.youtube.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//tittok

const tiktok= document.getElementById('tiktok')

tiktok.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.tiktok.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//snapchat

const snapchat= document.getElementById('snapchat')

snapchat.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.snapchat.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//whatsapp

const whatsapp= document.getElementById('whatsapp')

whatsapp.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.whatsapp.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//twitter

const twitter= document.getElementById('twitter')

twitter.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.twitter.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//fb

const facebook= document.getElementById('facebook')

facebook.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.facebook.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//amazonmusic

const amazonmusic= document.getElementById('amazonmusic')

amazonmusic.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.amazonmusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//gaana

const gaana= document.getElementById('gaana')

gaana.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.gaana.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//github

const github= document.getElementById('github')

github.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.github.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//line

const line= document.getElementById('line')

line.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.line.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//zomato

const zomato= document.getElementById('zomato')

zomato.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.zomato.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//mesenger

const mesenger= document.getElementById('mesenger')

mesenger.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.mesenger.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//mimus

const mimus= document.getElementById('mimus')

mimus.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.mimusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//skype

const skype= document.getElementById('skype')

skype.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.skype.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//spotify

const spotify= document.getElementById('spotify')

spotify.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.spotify.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//telegram

const telegram= document.getElementById('telegram')

telegram.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.telegram.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//threads

const threads= document.getElementById('threads')

threads.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.threads.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//viber

const viber= document.getElementById('viber')

viber.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.viber.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//wechat

const wechat= document.getElementById('wechat')

wechat.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.wechat.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//wynk

const wynk= document.getElementById('wynk')

wynk.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.wynk.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ytmusic

const ytmusic= document.getElementById('ytmusic')

ytmusic.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ytmusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//hungama

const hungama= document.getElementById('hungama')
hungama.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.hungama.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//musicappstream

const musicappstream= document.getElementById('musicappstream')
musicappstream.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.musicappstream.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//musicplayer

const musicplayer= document.getElementById('musicplayer')
musicplayer.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.musicplayer.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//jiosaavn

const jiosaavn= document.getElementById('jiosaavn')
jiosaavn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.jiosaavn.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ressomusic

const ressomusic= document.getElementById('ressomusic')
ressomusic.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ressomusic.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//sound

const soundcloud= document.getElementById('soundcloud')
soundcloud.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.soundcloud.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//amazon

const amazon= document.getElementById('amazon')
amazon.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.amazon.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//flipkart

const flipkart= document.getElementById('flipkart')
flipkart.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.flipkart.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//meesho

const meesho= document.getElementById('meesho')
meesho.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.meesho.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//myntra

const myntra= document.getElementById('myntra')
myntra.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.myntra.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ajio

const ajio= document.getElementById('ajio')
ajio.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ajio.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//snapdeal

const snapdeal= document.getElementById('snapdeal')
snapdeal.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.snapdeal.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//swiggy

const swiggy= document.getElementById('swiggy')
swiggy.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.swiggy.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//bigbasket

const bigbasket= document.getElementById('bigbasket')
bigbasket.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.bigbasket.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//bigbazzar

const bigbazzar= document.getElementById('bigbazzar')
bigbazzar.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.bigbazzar.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//ebay

const ebay= document.getElementById('ebay')
ebay.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ebay.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//tira

const tira= document.getElementById('tira')
tira.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.tira.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//lenskart

const lenskart= document.getElementById('lenskart')
lenskart.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.lenskart.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//olx

const olx= document.getElementById('olx')
olx.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.olx.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//tatacliq

const oltatacliqx= document.getElementById('tatacliq')
tatacliq.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.tatacliq.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//shopify

const shopify= document.getElementById('shopify')
shopify.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.shopify.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//shoppingzone

const shoppingzone= document.getElementById('shoppingzone')
shoppingzone.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.shoppingzone.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//naaptol

const naaptol= document.getElementById('naaptol')
naaptol.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.naaptol.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//shopsy

const shopsy= document.getElementById('shopsy')
shopsy.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.shopsy.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//max

const max= document.getElementById('max')
max.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.max.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//lazada

const lazada= document.getElementById('lazada')
lazada.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.lazada.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//google

const google= document.getElementById('google')
google.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.google.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//opera

const opera= document.getElementById('opera')
opera.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.opera.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//chromee

const chromee= document.getElementById('chromee')
chromee.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.chromee.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//firefox

const firefox= document.getElementById('firefox')
firefox.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.firefox.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//uc

const uc= document.getElementById('uc')
uc.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.ucbrowser.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//vidmate
const vidmate= document.getElementById('vidmate')
vidmate.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.vidmate.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//microsoft
const microsoft= document.getElementById('microsoft')
microsoft.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.microsoft.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//safari
const safari= document.getElementById('safari')
safari.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.safari.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//internet
const internet= document.getElementById('internet')
internet.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.internet.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//brave
const brave= document.getElementById('brave')
brave.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.brave.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//vivaldi
const vivaldi= document.getElementById('vivaldi')
vivaldi.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.vivaldi.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//duck
const duck= document.getElementById('duck')
duck.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.duck.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//chro
const chro= document.getElementById('chro')
chro.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.chro.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//byju
const byju= document.getElementById('byju')
byju.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.byju.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//unacade
const unacade= document.getElementById('unacade')
unacade.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.unacade.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//vedantu
const vedantu= document.getElementById('vedantu')
vedantu.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.vedantu.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//toppr
const toppr= document.getElementById('toppr')
toppr.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.toppr.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Diksha
const Diksha= document.getElementById('Diksha')
Diksha.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Diksha.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Greatlearing
const Greatlearing= document.getElementById('Greatlearing')
Greatlearing.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Greatlearing.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Udemy
const Udemy= document.getElementById('Udemy')
Udemy.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Udemy.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Masterclass
const Masterclass= document.getElementById('Masterclass')
Masterclass.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Masterclass.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//couresra
const couresra= document.getElementById('couresra')
couresra.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.couresra.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Upgrad
const Upgrad= document.getElementById('Upgrad')
Upgrad.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Upgrad.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Skillshare
const Skillshare= document.getElementById('Skillshare')
Skillshare.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Skillshare.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//lectera
const lectera= document.getElementById('lectera')
lectera.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Skillshare.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//openlearn
const openlearn= document.getElementById('openlearn')
openlearn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.openlearn.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Edx
const Edx= document.getElementById('Edx')
Edx.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Edx.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Futurelearn
const Futurelearn= document.getElementById('Futurelearn')
Futurelearn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Futurelearn.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//codacademey
const codacademey= document.getElementById('codacademey')
codacademey.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.codacademey.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//w3school
const w3school= document.getElementById('w3school')
w3school.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.w3school.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Guvi
const Guvi= document.getElementById('Guvi')
Guvi.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Guvi.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//udacity
const udacity= document.getElementById('udacity')
udacity.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.udacity.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Khancademey
const Khancademey= document.getElementById('Khancademey')
Khancademey.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Khancademey.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Alison
const Alison= document.getElementById('Alison')
Alison.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Alison.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Pluralsight
const Pluralsight= document.getElementById('Pluralsight')
Pluralsight.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Pluralsight.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Datacamp
const Datacamp= document.getElementById('Datacamp')
Datacamp.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Datacamp.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//designn
//Photoshop
const Photoshop= document.getElementById('Photoshop')
Photoshop.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Photoshop.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Adobeillustrator
const Adobeillustrator= document.getElementById('Adobeillustrator')
Adobeillustrator.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Adobeillustrator.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Adobeindesign
const Adobeindesign= document.getElementById('Adobeindesign')
Adobeindesign.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Adobeindesign.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Canva
const Canva= document.getElementById('Canva')
Canva.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Canva.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Xara
const Xara= document.getElementById('Xara')
Xara.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Xara.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Vectr
const Vectr= document.getElementById('Vectr')
Vectr.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Vectr.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Sketch
const Sketch= document.getElementById('Sketch')
Sketch.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Sketch.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Figma
const Figma= document.getElementById('Figma')
Figma.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Figma.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Inkscape
const Inkscape= document.getElementById('Inkscape')
Inkscape.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Inkscape.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Wix
const Wix= document.getElementById('Wix')
Wix.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Wix.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Adobeexpress
const Adobeexpress= document.getElementById('Adobeexpress')
Adobeexpress.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Adobeexpress.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Snappa
const Snappa= document.getElementById('Snappa')
Snappa.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Snappa.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});

//fonts icons
//Flaticoin
const Flaticoin= document.getElementById('Flaticoin')
Flaticoin.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Flaticoin.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Freepik
const Freepik= document.getElementById('Freepik')
Freepik.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Freepik.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Storyset
const Storyset= document.getElementById('Storyset')
Storyset.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Storyset.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Storyset
const Feather= document.getElementById('Feather')
Feather.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Feather.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Tablericon
const Tablericon= document.getElementById('Tablericon')
Tablericon.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Feather.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Iconscout
const Iconscout= document.getElementById('Iconscout')
Iconscout.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Iconscout.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Undraw
const Undraw= document.getElementById('Undraw')
Undraw.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Undraw.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Pixabay
const Pixabay= document.getElementById('Pixabay')
Pixabay.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Pixabay.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Uplash
const Uplash= document.getElementById('Uplash')
Uplash.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Uplash.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Behance
const Behance= document.getElementById('Behance')
Behance.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Behance.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Icon8
const Icon8= document.getElementById('Icon8')
Icon8.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Icon8.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Remini
const Remini= document.getElementById('Remini')
Remini.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Remini.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Skecthbook
const Skecthbook= document.getElementById('Skecthbook')
Skecthbook.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Remini.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Picsart
const Picsart= document.getElementById('Picsart')
Picsart.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Picsart.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//B612
const B612= document.getElementById('B612')
B612 .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Picsart.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Lightroom
const Lightroom= document.getElementById('Lightroom')
Lightroom .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Lightroom.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Snapseed
const Snapseed= document.getElementById('Snapseed')
Snapseed .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Snapseed.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Motionleap
const Motionleap= document.getElementById('Motionleap')
Motionleap .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Motionleap.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Youcamperfect
const Youcamperfect= document.getElementById('Youcamperfect')
Youcamperfect .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Youcamperfect.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//LightX
const LightX= document.getElementById('LightX')
LightX .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.LightX.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Photoeditorpro
const Photoeditorpro= document.getElementById('Photoeditorpro')
Photoeditorpro .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.LightX.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Faceapp
const Faceapp= document.getElementById('Faceapp')
Faceapp .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.LightX.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Photoroom
const Photoroom= document.getElementById('Photoroom')
Photoroom .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Photoroom.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Epik
const Epik= document.getElementById('Epik')
Epik .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Epik.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Prequel
const Prequel= document.getElementById('Prequel')
Prequel .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Prequel.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Snowai
const Snowai= document.getElementById('Snowai')
Snowai .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Prequel.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Instasize
const Instasize= document.getElementById('Instasize')
Instasize .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Instasize.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Cymera
const Cymera= document.getElementById('Cymera')
Cymera .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Cymera.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Pixler
const Pixler= document.getElementById('Pixler')
Pixler .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Pixler.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
//Backgroundremove
const Backgroundremove= document.getElementById('Backgroundremove')
Backgroundremove .addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.Backgroundremove.com/'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
