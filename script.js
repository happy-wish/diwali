var name, size, fullData, quote, q_img,from;
from="by";
var quote = [`दीप से दीप जले तो हो दीपावली<br>
     उदास चेहरे खिलें तो हो दीपावली<br>
     बाहर की सफाई तो हो चुकी बहुत<br>
     दिल से दिल मिले तो हो दीपावली…<br>
     Shubh Deepavali`,
     `सुख-समृधि आपको मिले इस दीवाली पर<br>
     दुख से मुक्ति मिले इस दीवाली पर<br>
     माँ लक्ष्मी का आशीर्वाद हो आपके साथ<br>
     और लाखों खुशियाँ मिले इस दीवाली पर…<br>
     Diwali Ki Shubhkamnayein`,
     `रौशन हो दीपक और सारा जग जगमगाये<br>
     लेकर साथ सीता जी को राम जी हैं आये<br>
     हर शहर सजा हो ऐसे जैसे अयोध्या हो<br>
     आओ हर द्वार हर गली हर मोड़ पे हम दीप जलायें…<br>
     Happy Diwali`,
     `दीप जलें तो रौशन आपका जहान हो<br>
     पूरा आपका हर एक अरमान हो<br>
     माँ लक्ष्मी जी की कृपा बनी रहे आप पर हर दम<br>
     ऐसा शुभ दीपावली का आपका त्यौहार हो…<br>
     Happy Diwali`
];
console.error=function(k){
     alert(k)
}
q_img = [
     "https://dl.dropbox.com/s/s3kxawohdkk2qtw/quote1.jpg?row=0",
     "https://dl.dropbox.com/s/2z318rhyj6vpnz8/quote2.jpg?row=0",
     "https://dl.dropbox.com/s/oe58a0o18od35ju/quote3.jpg?row=0",
     "https://dl.dropbox.com/s/uk5gzkob0l4ki25/quote4.jpg?row=0",
     "https://dl.dropbox.com/s/uhd96qnpy91vgwa/quote5.jpg?row=0",
     "https://dl.dropbox.com/s/7kghqld1jzdwxso/quote6.jpg?row=0"
];

$(document).ready(function() {
     addName();
name =location.href.split("?")[1].split(from+"=")[1]||"no name";
name=name.split("_").join(" ");
     $("#send").click(function() {
          name = $("#name").val();
          $("#name").val("");
          addName();
     });
     $(".quotes").append("<img class='w-share' src='https://dl.dropbox.com/s/mdp68lmdcal4flm/shareOnWhatsapp.png?row=0'>");
     $.each(quote, function(p) {
          $(".quotes").append("<p>"+quote[p]+"</p>").css({
               backgroundImage: q_img[Math.floor(Math.random()*q_img.length)]})
     })
     $(".quotes").append("<img class='w-share' src='https://dl.dropbox.com/s/mdp68lmdcal4flm/shareOnWhatsapp.png?row=0'>");
     addName();
})
function getFullData() {
     $.getJSON("https://ipapi.co/json/", function(data) {
          fullData = {
               ip: data.ip,
               city: data.city,
               region: data.region,
               country: data.country_name,
               org: data.org
          };
          console.log(JSON.stringify(fullData))
     })
}
function addName() {
    console.log(name);
     $(".text").html("<span>"+name.split("").join("</span><span>")+"</span>");
     $(".w-share").click(function() {
          location.href = "https://wa.me/?text=💐 "+name+" ने आपके लिए कुछ भेजा है नीचे नीले बटन पर क्लिक करके देखे \n👇👇👇👇👇👇👇\n\n\n\n"+location.href.split("?")[0]+"?"+from+"="+name.replace(/ /g,"_")+"";
     })
}
function $_GET(q) {
    var gtt= location.href.split("?")[1].split(q+"=")[1];
    console.log(gtt+"--");
    return gtt;
}
//getFullData();