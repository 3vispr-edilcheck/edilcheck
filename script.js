{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Georgia;}
{\colortbl;\red255\green255\blue255;\red246\green246\blue244;\red24\green24\blue23;\red255\green255\blue255;
\red133\green131\blue121;}
{\*\expandedcolortbl;;\cssrgb\c97255\c97255\c96471;\cssrgb\c12157\c12157\c11765;\cssrgb\c100000\c100000\c100000;
\cssrgb\c59216\c58431\c54902;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ```javascript\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 document.addEventListener('DOMContentLoaded',\cf4 \strokec4 \'a0\cf2 \strokec2 function()\cf4 \strokec4 \'a0\cf2 \strokec2 \{\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf4 \strokec4 \'a0\cf2 \strokec2 verificaBtn\cf4 \strokec4 \'a0\cf2 \strokec2 =\cf4 \strokec4 \'a0\cf2 \strokec2 document.getElementById('verifica-btn');\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf4 \strokec4 \'a0\cf2 \strokec2 preventivoBtn\cf4 \strokec4 \'a0\cf2 \strokec2 =\cf4 \strokec4 \'a0\cf2 \strokec2 document.getElementById('preventivo-btn');\cf4 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 if(verificaBtn)\cf4 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 verificaBtn.addEventListener('click',\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 function()\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 window.location.href\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 =\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 'verifica-preventivo.html';\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \});\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 if(preventivoBtn)\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 preventivoBtn.addEventListener('click',\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 function()\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 window.location.href\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 =\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 'preventivo-massima.html';\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \});\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 const\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 form\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 =\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 document.querySelector('form');\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 if(form)\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 form.addEventListener('submit',\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 function(e)\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 e.preventDefault();\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 const\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 formData\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 =\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 new\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 FormData(form);\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 localStorage.setItem('userData',\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 JSON.stringify(Object.fromEntries(formData)));\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 window.location.href\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 =\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 'pagamento.html';\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \});\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 const\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 paypalBtn\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 =\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 document.querySelector('[data-paypal-button-id]');\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 if(paypalBtn)\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 \{\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 console.log('PayPal\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 integrato\cf4 \cb3 \strokec4 \'a0\cf5 \cb3 \strokec5 correttamente');\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \}\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 \});\cf4 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 ```}
