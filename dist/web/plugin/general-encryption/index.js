(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).GeneralEncryption=function(){"use strict";function n(n,i,t){var e=n.init;return i&&(n.name=i),n.init=function(i,r){function a(){e.call(n,i,r)}return i.readyState&&i.readyState.state>=3||!i.on?a():void i.on(t,a)},n}var i,t,e={init:function(n,e){i=n,t=i._;var r=e&&e.encrypt_utils,a=window.console&&window.console.log||function(){};a=i&&i.log||a;var c=i.kit.encodeTrackData;return i&&i.kit&&c?t.isObject(r)&&t.isFunction(r.encryptEvent)&&t.isFunction(r.encryptSymmetricKeyWithPublicKey)&&t.isString(e.pub_key)&&t.isNumber(e.pkv)?(i.kit.encodeTrackData=function(n){try{var o=r.encryptEvent,u=r.encryptSymmetricKeyWithPublicKey,l=e.pkv,y=e.pub_key;if(t.isFunction(r.encryptEvent)){var d=o(n),s=i._.base64Encode(d),p={pkv:l,ekey:u(y),payloads:[s]},v=JSON.stringify(p),k=encodeURIComponent(v);return"data="+k}return c.call(i.kit,n)}catch(S){return a("Encrypted data exception."),c.call(i.kit,n)}},void a("GeneralEncryption Plugin initialized successfully.")):void a("GeneralEncryption Plugin initialization failed. parameter error."):void a("Web SDK initialization failed.")}};return n(e,"GeneralEncryption","sdkReady"),e}();