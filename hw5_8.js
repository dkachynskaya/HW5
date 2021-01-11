const str = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  <h1> <h1>
  <script type="text/javascript">
    console.log('gtm')
    </script>
  <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the \public\ folder during the build.
      Only files inside the \public\ folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running \npm run build\.
    -->
  <title>React App</title>
  <style>
    @font-face {
      font-family: 'Antic Slab';
      font-style: normal;
      font-weight: 400;
      src: local('Antic Slab Regular'), local('AnticSlab-Regular'), url(/antic-slab.woff2) format('woff2');
      unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    *, *:before, *:after { box-sizing: border-box; }
    html, body { height: 100vh; }
    body { font-family: 'Antic Slab', serif; margin: 0 }
    hr { width: 100%; }
    .friends .header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #eee;
    }
    .friends .header > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .friends .header > nav {
      flex: 1;
    }
    .friends .header > nav ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding-left: 0;
    }
  </style>
</head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="⚛️" style="height: 100%">
    <h1>Contacts page <h1>
    <h1>Feeel free to contact<h1>
    <h1>Support <h1>        
    <h2>H2 tag</h2>

    <span>
        If you have any questions, please contact:
        <p><a href="mailto:support@gmail.com">Mail</a></p>
        <p><a href="tel:067-777-77-77">+ (380)-067 777 77 77 </a></p>
        <p><a href="tel:097-777-77-77">+ (380) 097 777 77 77 </a></p>
    </span>
  </div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.
    -->
</body>
</html>`

/* Найти все значения цветов #HEX в  HTML */

let regex1 = /#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/g;
console.log(str.match(regex1));

/* Найти все вхождения номера телефона в стандартном виде  
+ (380) 066 666 66 66 с операторами 067, 068, 096, 097, 098, 050, 066, 095, 099, 063, 073, 093. */

let regex2 = /\+ \(380\) (067|068|096|097|098|050|066|095|099|063|073|093) [0-9]{3} [0-9]{2} [0-9]{2}/gim;
console.log(str.match(regex2));

/* Написать логику которая находила бы все теги <h1> и заменила их на <h2/> */

let regex3 = /<h1>/ig;
console.log(str.replace(regex3, `<h2/>`));

/* Найти все теги <script></script> */

let regex4 = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
console.log(str.match(regex4));
	

