(self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[]).push([[851],{1223:function(e,t,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,y=n(7976),v=n(9518),w=n(7674),I=n(5112),b=n(9711),_=n(9909),T=_.enforce,E=_.get,S=c.Int8Array,k=S&&S.prototype,A=c.Uint8ClampedArray,C=A&&A.prototype,N=S&&v(S),D=k&&v(k),R=Object.prototype,x=c.TypeError,O=I("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},q=function(e){var t=v(e);if(l(t)){var n=E(t);return n&&h(n,L)?n[L]:q(t)}},j=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},G=function(e){if(j(e))return e;throw x("Target is not a typed array")},K=function(e){if(u(e)&&(!w||y(N,e)))return e;throw x(f(e)+" is not a typed array constructor")},$=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}D[e]&&!n||m(D,e,n?t:M&&k[e]||t,r)}},z=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(N[e]&&!n)return;try{return m(N,e,n?t:M&&N[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(N)||N===Function.prototype)&&(N=function(){throw x("Incorrect invocation")},M))for(r in V)c[r]&&w(c[r],N);if((!M||!D||D===R)&&(D=N.prototype,M))for(r in V)c[r]&&w(c[r].prototype,D);if(M&&v(C)!==D&&w(C,D),a&&!h(D,O))for(r in F=!0,g(D,O,{get:function(){return l(this)?this[P]:void 0}}),V)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:G,aTypedArrayConstructor:K,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:q,isView:B,isTypedArray:j,TypedArray:N,TypedArrayPrototype:D}},9671:function(e,t,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=s(n),d=i(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},9974:function(e,t,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},30:function(e,t,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},y=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},I=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}I="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var e=o.length;while(e--)delete I[f][o[e]];return I()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=I(),void 0===t?n:s.f(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)s.f(e,n=i[l++],r[n]);return e}},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},4590:function(e,t,n){var r=n(3002),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},2262:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(e){var t=i(this),n=s(t),r=o(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}}),a("at")},4506:function(e,t,n){"use strict";var r=n(2109),i=n(1702),s=n(4488),o=n(9303),a=n(1340),c=n(7293),u=i("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(e){var t=a(s(this)),n=t.length,r=o(e),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(t,i)}})},8675:function(e,t,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},2958:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),y=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(g)return i(f,this,n,t);var r=this.length,s=o(n),u=0;if(s+t>r)throw l("Wrong length");while(u<s)this[t+u]=n[u++]}),!g||y)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(7741),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,I);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},I=w.prototype=v.prototype,b="stack"in y(g),_="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,g),E=!!T&&!(T.writable&&T.configurable),S=b&&!E&&!_;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var k=s(g),A=k.prototype;if(A.constructor!==k)for(var C in m||a(A,"constructor",o(1,k)),d)if(c(d,C)){var N=d[C],D=N.s;c(k,D)||a(k,D,o(6,N.c))}},851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Uk}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return K},SDK_VERSION:function(){return Ot},_DEFAULT_ENTRY_NAME:function(){return It},_addComponent:function(){return Et},_addOrOverwriteComponent:function(){return St},_apps:function(){return _t},_clearComponents:function(){return Nt},_components:function(){return Tt},_getProvider:function(){return At},_registerComponent:function(){return kt},_removeServiceInstance:function(){return Ct},deleteApp:function(){return Ft},getApp:function(){return Lt},getApps:function(){return Mt},initializeApp:function(){return Pt},onLog:function(){return Ut},registerVersion:function(){return Vt},setLogLevel:function(){return Bt}});var i=n(3396),s=n(9242),o=n(7139);const a={class:"contact"},c={class:"header"},u={key:0},l={key:1},h={class:"block"},d=["disabled"],f={class:"block"},p=["disabled"],m=["disabled"],g={key:0,id:"submit",type:"submit"},y={key:1,disabled:""};function v(e,t,n,r,v,w){const I=(0,i.up)("ClickableText");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",c,[v.submitStatus?((0,i.wg)(),(0,i.iD)("h1",l,[(0,i.Wm)(I,{text:"Message sent",startSelection:5})])):((0,i.wg)(),(0,i.iD)("h1",u,[(0,i.Wm)(I,{text:"Send me a message",startSelection:9})]))]),(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>w.submitForm&&w.submitForm(...e)),["prevent"])),class:"contactForm",onReset:t[4]||(t[4]=(...t)=>e.resetForm&&e.resetForm(...t))},[(0,i._)("div",h,[(0,i.wy)((0,i._)("input",{class:(0,o.C_)(["input",""===v.name?"empty":""]),"onUpdate:modelValue":t[0]||(t[0]=e=>v.name=e),id:"name",placeholder:"What's your name?",disabled:!!v.submitStatus},null,10,d),[[s.nr,v.name]])]),(0,i._)("div",f,[(0,i.wy)((0,i._)("input",{class:(0,o.C_)(["input",""===v.email?"empty":""]),"onUpdate:modelValue":t[1]||(t[1]=e=>v.email=e),type:"email",id:"email",placeholder:"And what's your Email address?",disabled:!!v.submitStatus},null,10,p),[[s.nr,v.email]])]),(0,i._)("div",null,[(0,i.wy)((0,i._)("textarea",{class:(0,o.C_)(["input",""===v.message?"empty":""]),"onUpdate:modelValue":t[2]||(t[2]=e=>v.message=e),id:"message",placeholder:"Please enter your message",disabled:!!v.submitStatus},null,10,m),[[s.nr,v.message]])]),v.submitStatus?((0,i.wg)(),(0,i.iD)("button",y,"Message sent")):((0,i.wg)(),(0,i.iD)("button",g,"Submit"))],32)])}var w=n(4239),I=n(3210);n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},_=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},E=function(e){const t=b(e);return T.encodeByteArray(t,!0)},S=function(e){return E(e).replace(/\./g,"")},k=function(e){try{return T.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&C(n)&&(e[n]=A(e[n],t[n]));return e}function C(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[S(JSON.stringify(n)),S(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function x(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(R())}function O(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function P(){return"object"===typeof self&&self.self===self}function L(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function M(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function F(){return R().indexOf("Electron/")>=0}function V(){const e=R();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function U(){return R().indexOf("MSAppHost/")>=0}function B(){return!O()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function q(){return"object"===typeof indexedDB}function j(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G="FirebaseError";class K extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=G,Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?z(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new K(r,o,n);return a}}function z(e,t){return e.replace(W,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const W=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function J(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Y(n)&&Y(s)){if(!J(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Z(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ee(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){const n=new ne(e,t);return n.subscribe.bind(n)}class ne{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=re(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ie),void 0===r.error&&(r.error=ie),void 0===r.complete&&(r.complete=ie);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function re(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function ie(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){return e&&e._delegate?e._delegate:e}class oe{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new N;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(le(e))try{this.getOrInitializeService({instanceIdentifier:ae})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ae){return this.instances.has(e)}getOptions(e=ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(MT){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ue(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(MT){}return n||null}normalizeInstanceIdentifier(e=ae){return this.component?this.component.multipleInstances?e:ae:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ue(e){return e===ae?void 0:e}function le(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ce(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=[];var fe;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(fe||(fe={}));const pe={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},me=fe.INFO,ge={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ye=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ge[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ve{constructor(e){this.name=e,this._logLevel=me,this._logHandler=ye,this._userLogHandler=null,de.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?pe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}function we(e){de.forEach((t=>{t.setLogLevel(e)}))}function Ie(e,t){for(const n of de){let r=null;t&&t.level&&(r=pe[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:fe[n].toLowerCase(),message:s,args:i,type:t.name})}}}const be=(e,t)=>t.some((t=>e instanceof t));let _e,Te;function Ee(){return _e||(_e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Se(){return Te||(Te=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ke=new WeakMap,Ae=new WeakMap,Ce=new WeakMap,Ne=new WeakMap,De=new WeakMap;function Re(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Fe(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ke.set(t,e)})).catch((()=>{})),De.set(t,e),t}function xe(e){if(Ae.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ae.set(e,t)}let Oe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ae.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ce.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Pe(e){Oe=e(Oe)}function Le(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Se().includes(e)?function(...t){return e.apply(Ve(this),t),Fe(ke.get(this))}:function(...t){return Fe(e.apply(Ve(this),t))}:function(t,...n){const r=e.call(Ve(this),t,...n);return Ce.set(r,t.sort?t.sort():[t]),Fe(r)}}function Me(e){return"function"===typeof e?Le(e):(e instanceof IDBTransaction&&xe(e),be(e,Ee())?new Proxy(e,Oe):e)}function Fe(e){if(e instanceof IDBRequest)return Re(e);if(Ne.has(e))return Ne.get(e);const t=Me(e);return t!==e&&(Ne.set(e,t),De.set(t,e)),t}const Ve=e=>De.get(e);function Ue(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Fe(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Fe(o.result),e.oldVersion,e.newVersion,Fe(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Be=["get","getKey","getAll","getAllKeys","count"],qe=["put","add","delete","clear"],je=new Map;function Ge(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(je.get(t))return je.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Be.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return je.set(t,s),s}Pe((e=>({...e,get:(t,n,r)=>Ge(t,n)||e.get(t,n,r),has:(t,n)=>!!Ge(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if($e(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function $e(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const ze="@firebase/app",We="0.7.30",He=new ve("@firebase/app"),Qe="@firebase/app-compat",Je="@firebase/analytics-compat",Ye="@firebase/analytics",Xe="@firebase/app-check-compat",Ze="@firebase/app-check",et="@firebase/auth",tt="@firebase/auth-compat",nt="@firebase/database",rt="@firebase/database-compat",it="@firebase/functions",st="@firebase/functions-compat",ot="@firebase/installations",at="@firebase/installations-compat",ct="@firebase/messaging",ut="@firebase/messaging-compat",lt="@firebase/performance",ht="@firebase/performance-compat",dt="@firebase/remote-config",ft="@firebase/remote-config-compat",pt="@firebase/storage",mt="@firebase/storage-compat",gt="@firebase/firestore",yt="@firebase/firestore-compat",vt="firebase",wt="9.9.2",It="[DEFAULT]",bt={[ze]:"fire-core",[Qe]:"fire-core-compat",[Ye]:"fire-analytics",[Je]:"fire-analytics-compat",[Ze]:"fire-app-check",[Xe]:"fire-app-check-compat",[et]:"fire-auth",[tt]:"fire-auth-compat",[nt]:"fire-rtdb",[rt]:"fire-rtdb-compat",[it]:"fire-fn",[st]:"fire-fn-compat",[ot]:"fire-iid",[at]:"fire-iid-compat",[ct]:"fire-fcm",[ut]:"fire-fcm-compat",[lt]:"fire-perf",[ht]:"fire-perf-compat",[dt]:"fire-rc",[ft]:"fire-rc-compat",[pt]:"fire-gcs",[mt]:"fire-gcs-compat",[gt]:"fire-fst",[yt]:"fire-fst-compat","fire-js":"fire-js",[vt]:"fire-js-all"},_t=new Map,Tt=new Map;function Et(e,t){try{e.container.addComponent(t)}catch(n){He.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e,t){e.container.addOrOverwriteComponent(t)}function kt(e){const t=e.name;if(Tt.has(t))return He.debug(`There were multiple attempts to register component ${t}.`),!1;Tt.set(t,e);for(const n of _t.values())Et(n,e);return!0}function At(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ct(e,t,n=It){At(e,t).clearInstance(n)}function Nt(){Tt.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new $("app","Firebase",Dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new oe("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=wt;function Pt(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:It,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw Rt.create("bad-app-name",{appName:String(r)});const i=_t.get(r);if(i){if(J(e,i.options)&&J(n,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const s=new he(r);for(const a of Tt.values())s.addComponent(a);const o=new xt(e,n,s);return _t.set(r,o),o}function Lt(e=It){const t=_t.get(e);if(!t)throw Rt.create("no-app",{appName:e});return t}function Mt(){return Array.from(_t.values())}async function Ft(e){const t=e.name;_t.has(t)&&(_t.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Vt(e,t,n){var r;let i=null!==(r=bt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void He.warn(e.join(" "))}kt(new oe(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function Ut(e,t){if(null!==e&&"function"!==typeof e)throw Rt.create("invalid-log-argument");Ie(e,t)}function Bt(e){we(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="firebase-heartbeat-database",jt=1,Gt="firebase-heartbeat-store";let Kt=null;function $t(){return Kt||(Kt=Ue(qt,jt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gt)}}}).catch((e=>{throw Rt.create("idb-open",{originalErrorMessage:e.message})}))),Kt}async function zt(e){var t;try{const t=await $t();return t.transaction(Gt).objectStore(Gt).get(Ht(e))}catch(n){if(n instanceof K)He.warn(n.message);else{const e=Rt.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});He.warn(e.message)}}}async function Wt(e,t){var n;try{const n=await $t(),r=n.transaction(Gt,"readwrite"),i=r.objectStore(Gt);return await i.put(t,Ht(e)),r.done}catch(r){if(r instanceof K)He.warn(r.message);else{const e=Rt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});He.warn(e.message)}}}function Ht(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=1024,Jt=2592e6;class Yt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new en(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Xt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Jt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Xt(),{heartbeatsToSend:t,unsentEntries:n}=Zt(this._heartbeatsCache.heartbeats),r=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xt(){const e=new Date;return e.toISOString().substring(0,10)}function Zt(e,t=Qt){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),tn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class en{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!q()&&j().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await zt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tn(e){return S(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e){kt(new oe("platform-logger",(e=>new Ke(e)),"PRIVATE")),kt(new oe("heartbeat",(e=>new Yt(e)),"PRIVATE")),Vt(ze,We,e),Vt(ze,We,"esm2017"),Vt("fire-js","")}nn("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e,t){this._delegate=e,this.firebase=t,Et(e,new oe("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Ft(this._delegate))))}_getService(e,t=It){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=It){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Et(this._delegate,e)}_addOrOverwriteComponent(e){St(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},on=new $("app-compat","Firebase",sn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:Vt,setLogLevel:Bt,onLog:Ut,apps:null,SDK_VERSION:Ot,INTERNAL:{registerComponent:c,removeApp:i,useAsService:u,modularAPIs:r}};function i(e){delete t[e]}function s(e){if(e=e||It,!H(t,e))throw on.create("no-app",{appName:e});return t[e]}function o(r,i={}){const s=Pt(r,i);if(H(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,i=r.replace("-compat","");if(kt(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[i])throw on.create("invalid-app-argument",{appName:r});return e[i]()};void 0!==t.serviceProps&&A(o,t.serviceProps),n[i]=o,e.prototype[i]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[i]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){const e=an(rn);function t(t){A(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:cn,extendNamespace:t,createSubscribe:te,ErrorFactory:$,deepExtend:A}),e}const un=cn(),ln=new ve("@firebase/app-compat"),hn="@firebase/app-compat",dn="0.1.31";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e){Vt(hn,dn,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(P()&&void 0!==self.firebase){ln.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ln.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const pn=un;fn();var mn="firebase",gn="9.9.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pn.registerVersion(mn,gn,"app-compat");n(8675),n(3462),n(7380),n(1118);function yn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},wn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function bn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _n=In,Tn=bn,En=new $("auth","Firebase",bn()),Sn=new ve("@firebase/auth");function kn(e,...t){Sn.logLevel<=fe.ERROR&&Sn.error(`Auth (${Ot}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,...t){throw Rn(e,...t)}function Cn(e,...t){return Rn(e,...t)}function Nn(e,t,n){const r=Object.assign(Object.assign({},Tn()),{[t]:n}),i=new $("auth","Firebase",r);return i.create(t,{appName:e.name})}function Dn(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&An(e,"argument-error"),Nn(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rn(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return En.create(e,...t)}function xn(e,t,...n){if(!e)throw Rn(t,...n)}function On(e){const t="INTERNAL ASSERTION FAILED: "+e;throw kn(t),new Error(t)}function Pn(e,t){e||On(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Map;function Mn(e){Pn(e instanceof Function,"Expected a class definition");let t=Ln.get(e);return t?(Pn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ln.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Un(){return"http:"===Bn()||"https:"===Bn()}function Bn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Un()||L()||"connection"in navigator))||navigator.onLine}function jn(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pn(t>e,"Short delay should be less than long delay!"),this.isMobile=x()||M()}get(){return qn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e,t){Pn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},Wn=new Gn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qn(e,t,n,r,i={}){return Jn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=X(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$n.fetch()(Xn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Jn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},zn),t);try{const t=new Zn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw er(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw er(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw er(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw er(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Nn(e,a,o);An(e,a)}}catch(i){if(i instanceof K)throw i;An(e,"network-request-failed")}}async function Yn(e,t,n,r,i={}){const s=await Qn(e,t,n,r,i);return"mfaPendingCredential"in s&&An(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Kn(e.config,i):`${e.config.apiScheme}://${i}`}class Zn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Cn(this.auth,"network-request-failed"))),Wn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function er(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e,t){return Qn(e,"POST","/v1/accounts:delete",t)}async function nr(e,t){return Qn(e,"POST","/v1/accounts:update",t)}async function rr(e,t){return Qn(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t=!1){const n=se(e),r=await n.getIdToken(t),i=ar(r);xn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:ir(or(i.auth_time)),issuedAtTime:ir(or(i.iat)),expirationTime:ir(or(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function or(e){return 1e3*Number(e)}function ar(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return kn("JWT malformed, contained fewer than 3 sections"),null;try{const e=k(r);return e?JSON.parse(e):(kn("Failed to decode base64 JWT payload"),null)}catch(s){return kn("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function cr(e){const t=ar(e);return xn(t,"internal-error"),xn("undefined"!==typeof t.exp,"internal-error"),xn("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof K&&lr(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function lr({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ur(e,rr(n,{idToken:r}));xn(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?gr(s.providerUserInfo):[],a=mr(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dr(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function pr(e){const t=se(e);await fr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mr(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function gr(e){return e.map((e=>{var{providerId:t}=e,n=yn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(e,t){const n=await Jn(e,{},(async()=>{const n=X({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Xn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$n.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xn(e.idToken,"internal-error"),xn("undefined"!==typeof e.idToken,"internal-error"),xn("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):cr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return xn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await yr(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new vr;return n&&(xn("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(xn("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(xn("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return On("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e,t){xn("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Ir{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return xn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sr(this,e)}reload(){return pr(this)}_assign(e){this!==e&&(xn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){xn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await fr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,tr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:b,stsTokenManager:_}=t;xn(v&&_,e,"internal-error");const T=vr.fromJSON(this.name,_);xn("string"===typeof v,e,"internal-error"),wr(l,e.name),wr(h,e.name),xn("boolean"===typeof w,e,"internal-error"),xn("boolean"===typeof I,e,"internal-error"),wr(d,e.name),wr(f,e.name),wr(p,e.name),wr(m,e.name),wr(g,e.name),wr(y,e.name);const E=new Ir({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new vr;r.updateFromServerResponse(t);const i=new Ir({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await fr(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}br.type="NONE";const _r=br;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t,n){return`firebase:${e}:${t}:${n}`}class Er{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Tr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Tr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Er(Mn(_r),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Mn(_r);const s=Tr(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=Ir._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(MT){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(MT){}}))),new Er(i,e,n)):new Er(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Nr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rr(t))return"Blackberry";if(xr(t))return"Webos";if(Ar(t))return"Safari";if((t.includes("chrome/")||Cr(t))&&!t.includes("edge/"))return"Chrome";if(Dr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function kr(e=R()){return/firefox\//i.test(e)}function Ar(e=R()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cr(e=R()){return/crios\//i.test(e)}function Nr(e=R()){return/iemobile/i.test(e)}function Dr(e=R()){return/android/i.test(e)}function Rr(e=R()){return/blackberry/i.test(e)}function xr(e=R()){return/webos/i.test(e)}function Or(e=R()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pr(e=R()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Lr(e=R()){var t;return Or(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Mr(){return V()&&10===document.documentMode}function Fr(e=R()){return Or(e)||Dr(e)||xr(e)||Rr(e)||/windows phone/i.test(e)||Nr(e)}function Vr(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e,t=[]){let n;switch(e){case"Browser":n=Sr(R());break;case"Worker":n=`${Sr(R())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ot}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new Br(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=En,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mn(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return xn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await fr(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?se(e):null;return t&&xn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Mn(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mn(e)||this._popupRedirectResolver;xn(t,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return xn(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ur(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function jr(e){return se(e)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=te((e=>this.observer=e))}get next(){return xn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Kr(e,t,n){const r=jr(e);xn(r._canInitEmulator,r,"emulator-config-failed"),xn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=$r(t),{host:o,port:a}=zr(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Hr()}function $r(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zr(e){const t=$r(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Wr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Wr(t)}}}function Wr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Hr(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,t){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e,t){return Qn(e,"POST","/v1/accounts:resetPassword",Hn(e,t))}async function Yr(e,t){return Qn(e,"POST","/v1/accounts:update",t)}async function Xr(e,t){return Qn(e,"POST","/v1/accounts:update",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t){return Yn(e,"POST","/v1/accounts:signInWithPassword",Hn(e,t))}async function ei(e,t){return Qn(e,"POST","/v1/accounts:sendOobCode",Hn(e,t))}async function ti(e,t){return ei(e,t)}async function ni(e,t){return ei(e,t)}async function ri(e,t){return ei(e,t)}async function ii(e,t){return ei(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(e,t){return Yn(e,"POST","/v1/accounts:signInWithEmailLink",Hn(e,t))}async function oi(e,t){return Yn(e,"POST","/v1/accounts:signInWithEmailLink",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Qr{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ai(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ai(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Zr(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return si(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Yr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oi(e,{idToken:t,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(e,t){return Yn(e,"POST","/v1/accounts:signInWithIdp",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="http://localhost";class li extends Qr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):An("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=yn(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new li(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ci(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ci(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ci(e,t)}buildRequest(){const e={requestUri:ui,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=X(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(e,t){return Qn(e,"POST","/v1/accounts:sendVerificationCode",Hn(e,t))}async function di(e,t){return Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Hn(e,t))}async function fi(e,t){const n=await Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Hn(e,t));if(n.temporaryProof)throw er(e,"account-exists-with-different-credential",n);return n}const pi={["USER_NOT_FOUND"]:"user-not-found"};async function mi(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Yn(e,"POST","/v1/accounts:signInWithPhoneNumber",Hn(e,n),pi)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Qr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new gi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return di(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return fi(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mi(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new gi({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vi(e){const t=Z(ee(e))["link"],n=t?Z(ee(t))["deep_link_id"]:null,r=Z(ee(e))["deep_link_id"],i=r?Z(ee(r))["link"]:null;return i||r||n||t||e}class wi{constructor(e){var t,n,r,i,s,o;const a=Z(ee(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=yi(null!==(r=a["mode"])&&void 0!==r?r:null);xn(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=vi(e);try{return new wi(t)}catch(MT){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,t){return ai._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wi.parseLink(t);return xn(n,"argument-error"),ai._fromEmailAndCode(e,n.code,n.tenantId)}}Ii.PROVIDER_ID="password",Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ti extends _i{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return xn("providerId"in t&&"signInMethod"in t,"argument-error"),li._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return xn(e.idToken||e.accessToken,"argument-error"),li._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ti.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ti.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new Ti(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends _i{constructor(){super("facebook.com")}static credential(e){return li._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch(MT){return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ei.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return li._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Si.credential(t,n)}catch(MT){return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com",Si.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki extends _i{constructor(){super("github.com")}static credential(e){return li._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch(MT){return null}}}ki.GITHUB_SIGN_IN_METHOD="github.com",ki.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ai="http://localhost";class Ci extends Qr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ci(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ci(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ci(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Ci(n,i):null}static _create(e,t){return new Ci(e,t)}buildRequest(){return{requestUri:Ai,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="saml.";class Di extends bi{constructor(e){xn(e.startsWith(Ni),"argument-error"),super(e)}static credentialFromResult(e){return Di.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Di.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ci.fromJSON(e);return xn(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ci._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends _i{constructor(){super("twitter.com")}static credential(e,t){return li._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ri.credential(t,n)}catch(MT){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xi(e,t){return Yn(e,"POST","/v1/accounts:signUp",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri.TWITTER_SIGN_IN_METHOD="twitter.com",Ri.PROVIDER_ID="twitter.com";class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ir._fromIdTokenResponse(e,n,r),s=Pi(n),o=new Oi({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Pi(n);return new Oi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Pi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e){var t;const n=jr(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Oi({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await xi(n,{returnSecureToken:!0}),i=await Oi._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends K{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Mi(e,t,n,r)}}function Fi(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Mi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(e,t){const n=se(e);await qi(!0,n,t);const{providerUserInfo:r}=await nr(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=Vi(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Bi(e,t,n=!1){const r=await ur(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Oi._forOperation(e,"link",r)}async function qi(e,t,n){await fr(t);const r=Vi(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";xn(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await ur(e,Fi(i,s,t,e),n);xn(r.idToken,i,"internal-error");const o=ar(r.idToken);xn(o,i,"internal-error");const{sub:a}=o;return xn(e.uid===a,i,"user-mismatch"),Oi._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&An(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(e,t,n=!1){const r="signIn",i=await Fi(e,r,t),s=await Oi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ki(e,t){return Gi(jr(e),t)}async function $i(e,t){const n=se(e);return await qi(!1,n,t.providerId),Bi(n,t)}async function zi(e,t){return ji(se(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(e,t){return Yn(e,"POST","/v1/accounts:signInWithCustomToken",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(e,t){const n=jr(e),r=await Wi(n,{token:t,returnSecureToken:!0}),i=await Oi._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ji._fromServerResponse(e,t):An(e,"internal-error")}}class Ji extends Qi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ji(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t,n){var r;xn((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),xn("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(xn(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(xn(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(e,t,n){const r=se(e),i={requestType:"PASSWORD_RESET",email:t};n&&Yi(r,i,n),await ni(r,i)}async function Zi(e,t,n){await Jr(se(e),{oobCode:t,newPassword:n})}async function es(e,t){await Xr(se(e),{oobCode:t})}async function ts(e,t){const n=se(e),r=await Jr(n,{oobCode:t}),i=r.requestType;switch(xn(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":xn(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":xn(r.mfaInfo,n,"internal-error");default:xn(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Qi._fromServerResponse(jr(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ns(e,t){const{data:n}=await ts(se(e),t);return n.email}async function rs(e,t,n){const r=jr(e),i=await xi(r,{returnSecureToken:!0,email:t,password:n}),s=await Oi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function is(e,t,n){return Ki(se(e),Ii.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(e,t,n){const r=se(e),i={requestType:"EMAIL_SIGNIN",email:t};xn(n.handleCodeInApp,r,"argument-error"),n&&Yi(r,i,n),await ri(r,i)}function os(e,t){const n=wi.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function as(e,t,n){const r=se(e),i=Ii.credentialWithLink(t,n||Vn());return xn(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ki(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(e,t){return Qn(e,"POST","/v1/accounts:createAuthUri",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(e,t){const n=Un()?Vn():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await cs(se(e),r);return i||[]}async function ls(e,t){const n=se(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&Yi(n.auth,i,t);const{email:s}=await ti(n.auth,i);s!==e.email&&await e.reload()}async function hs(e,t,n){const r=se(e),i=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&Yi(r.auth,s,n);const{email:o}=await ii(r.auth,s);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(e,t){return Qn(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=se(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},o=await ur(r,ds(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ps(e,t){return gs(se(e),t,null)}function ms(e,t){return gs(se(e),null,t)}async function gs(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ur(e,Yr(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=ar(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new vs(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new Is(s,i);case"github.com":return new bs(s,i);case"google.com":return new _s(s,i);case"twitter.com":return new Ts(s,i,e.screenName||null);case"custom":case"anonymous":return new vs(s,null);default:return new vs(s,r,i)}}class vs{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ws extends vs{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Is extends vs{constructor(e,t){super(e,"facebook.com",t)}}class bs extends ws{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class _s extends vs{constructor(e,t){super(e,"google.com",t)}}class Ts extends ws{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Es(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ys(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Ss("enroll",e)}static _fromMfaPendingCredential(e){return new Ss("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Ss._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Ss._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=jr(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Qi._fromServerResponse(n,e)));xn(r.mfaPendingCredential,n,"internal-error");const s=Ss._fromMfaPendingCredential(r.mfaPendingCredential);return new ks(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Oi._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return xn(t.user,n,"internal-error"),Oi._forOperation(t.user,t.operationType,o);default:An(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function As(e,t){var n;const r=se(e),i=t;return xn(t.customData.operationType,r,"argument-error"),xn(null===(n=i.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),ks._fromError(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){return Qn(e,"POST","/v2/accounts/mfaEnrollment:start",Hn(e,t))}function Ns(e,t){return Qn(e,"POST","/v2/accounts/mfaEnrollment:finalize",Hn(e,t))}function Ds(e,t){return Qn(e,"POST","/v2/accounts/mfaEnrollment:withdraw",Hn(e,t))}class Rs{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Qi._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Rs(e)}async getSession(){return Ss._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ur(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const n="string"===typeof e?e:e.uid,r=await this.user.getIdToken(),i=await ur(this.user,Ds(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==(null===(t=s)||void 0===t?void 0:t.code))throw s}}}const xs=new WeakMap;function Os(e){const t=se(e);return xs.has(t)||xs.set(t,Rs._fromUser(t)),xs.get(t)}const Ps="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch(MT){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){const e=R();return Ar(e)||Or(e)}const Fs=1e3,Vs=10;class Us extends Ls{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ms()&&Vr(),this.fallbackToPolling=Fr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Mr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vs):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Fs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Us.type="LOCAL";const Bs=Us;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Ls{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qs.type="SESSION";const js=qs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ks(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Gs(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $s(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ks.receivers=[];class zs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=$s("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){return window}function Hs(e){Ws().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){return"undefined"!==typeof Ws()["WorkerGlobalScope"]&&"function"===typeof Ws()["importScripts"]}async function Js(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(MT){return null}}function Ys(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Xs(){return Qs()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="firebaseLocalStorageDb",eo=1,to="firebaseLocalStorage",no="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function io(e,t){return e.transaction([to],t?"readwrite":"readonly").objectStore(to)}function so(){const e=indexedDB.deleteDatabase(Zs);return new ro(e).toPromise()}function oo(){const e=indexedDB.open(Zs,eo);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(to,{keyPath:no})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(to)?t(n):(n.close(),await so(),t(await oo()))}))}))}async function ao(e,t,n){const r=io(e,!0).put({[no]:t,value:n});return new ro(r).toPromise()}async function co(e,t){const n=io(e,!1).get(t),r=await new ro(n).toPromise();return void 0===r?null:r.value}function uo(e,t){const n=io(e,!0).delete(t);return new ro(n).toPromise()}const lo=800,ho=3;class fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await oo()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ho)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ks._getInstance(Xs()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Js(),!this.activeServiceWorker)return;this.sender=new zs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ys()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(MT){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await ao(e,Ps,"1"),await uo(e,Ps),!0}catch(MT){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ao(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>co(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>uo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=io(e,!1).getAll();return new ro(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),lo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}fo.type="LOCAL";const po=fo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t){return Qn(e,"POST","/v2/accounts/mfaSignIn:start",Hn(e,t))}function go(e,t){return Qn(e,"POST","/v2/accounts/mfaSignIn:finalize",Hn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(e){return(await Qn(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function wo(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Cn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",vo().appendChild(r)}))}function Io(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=500,_o=6e4,To=1e12;class Eo{constructor(e){this.auth=e,this.counter=To,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new So(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||To;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||To;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||To;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class So{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;xn(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=ko(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),_o)}),bo))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ko(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=Io("rcb"),Co=new Gn(3e4,6e4),No="https://www.google.com/recaptcha/api.js?";class Do{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Ws().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return xn(Ro(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Ws().grecaptcha):new Promise(((n,r)=>{const i=Ws().setTimeout((()=>{r(Cn(e,"network-request-failed"))}),Co.get());Ws()[Ao]=()=>{Ws().clearTimeout(i),delete Ws()[Ao];const s=Ws().grecaptcha;if(!s)return void r(Cn(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};const s=`${No}?${X({onload:Ao,render:"explicit",hl:t})}`;wo(s).catch((()=>{clearTimeout(i),r(Cn(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Ws().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ro(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class xo{async load(e){return new Eo(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="recaptcha",Po={theme:"light",type:"image"};class Lo{constructor(e,t=Object.assign({},Po),n){this.parameters=t,this.type=Oo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=jr(n),this.isInvisible="invisible"===this.parameters.size,xn("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;xn(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new xo:new Do,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){xn(!this.parameters.sitekey,this.auth,"argument-error"),xn(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),xn("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Ws()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){xn(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){xn(Un()&&!Qs(),this.auth,"internal-error"),await Mo(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await yo(this.auth);xn(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return xn(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Mo(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=gi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Vo(e,t,n){const r=jr(e),i=await qo(r,t,se(n));return new Fo(i,(e=>Ki(r,e)))}async function Uo(e,t,n){const r=se(e);await qi(!1,r,"phone");const i=await qo(r.auth,t,se(n));return new Fo(i,(e=>$i(r,e)))}async function Bo(e,t,n){const r=se(e),i=await qo(r.auth,t,se(n));return new Fo(i,(e=>zi(r,e)))}async function qo(e,t,n){var r;const i=await n.verify();try{let s;if(xn("string"===typeof i,e,"argument-error"),xn(n.type===Oo,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){xn("enroll"===t.type,e,"internal-error");const n=await Cs(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{xn("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;xn(n,e,"missing-multi-factor-info");const o=await mo(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await hi(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function jo(e,t){await Bi(se(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.providerId=Go.PROVIDER_ID,this.auth=jr(e)}verifyPhoneNumber(e,t){return qo(this.auth,e,se(t))}static credential(e,t){return gi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Go.credentialFromTaggedObject(t)}static credentialFromError(e){return Go.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gi._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ko(e,t){return t?Mn(t):(xn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Go.PROVIDER_ID="phone",Go.PHONE_SIGN_IN_METHOD="phone";class $o extends Qr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ci(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zo(e){return Gi(e.auth,new $o(e),e.bypassAuthState)}function Wo(e){const{auth:t,user:n}=e;return xn(n,t,"internal-error"),ji(n,new $o(e),e.bypassAuthState)}async function Ho(e){const{auth:t,user:n}=e;return xn(n,t,"internal-error"),Bi(n,new $o(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zo;case"linkViaPopup":case"linkViaRedirect":return Ho;case"reauthViaPopup":case"reauthViaRedirect":return Wo;default:An(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Gn(2e3,1e4);async function Yo(e,t,n){const r=jr(e);Dn(e,t,bi);const i=Ko(r,n),s=new ea(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Xo(e,t,n){const r=se(e);Dn(r.auth,t,bi);const i=Ko(r.auth,n),s=new ea(r.auth,"reauthViaPopup",t,i,r);return s.executeNotNull()}async function Zo(e,t,n){const r=se(e);Dn(r.auth,t,bi);const i=Ko(r.auth,n),s=new ea(r.auth,"linkViaPopup",t,i,r);return s.executeNotNull()}class ea extends Qo{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ea.currentPopupAction&&ea.currentPopupAction.cancel(),ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xn(e,this.auth,"internal-error"),e}async onExecution(){Pn(1===this.filter.length,"Popup operations only handle one event");const e=$s();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Cn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Jo.get())};e()}}ea.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ta="pendingRedirect",na=new Map;class ra extends Qo{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const t=await ia(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ia(e,t){const n=ua(t),r=ca(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function sa(e,t){return ca(e)._set(ua(t),"true")}function oa(){na.clear()}function aa(e,t){na.set(e._key(),t)}function ca(e){return Mn(e._redirectPersistence)}function ua(e){return Tr(ta,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e,t,n){return ha(e,t,n)}async function ha(e,t,n){const r=jr(e);Dn(e,t,bi);const i=Ko(r,n);return await sa(i,r),i._openRedirect(r,t,"signInViaRedirect")}function da(e,t,n){return fa(e,t,n)}async function fa(e,t,n){const r=se(e);Dn(r.auth,t,bi);const i=Ko(r.auth,n);await sa(i,r.auth);const s=await va(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}function pa(e,t,n){return ma(e,t,n)}async function ma(e,t,n){const r=se(e);Dn(r.auth,t,bi);const i=Ko(r.auth,n);await qi(!1,r,t.providerId),await sa(i,r.auth);const s=await va(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function ga(e,t){return await jr(e)._initializationPromise,ya(e,t,!1)}async function ya(e,t,n=!1){const r=jr(e),i=Ko(r,t),s=new ra(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function va(e){const t=$s(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=6e5;class Ia{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ta(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!_a(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Cn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wa&&this.cachedEventUids.clear(),this.cachedEventUids.has(ba(e))}saveEventToCache(e){this.cachedEventUids.add(ba(e)),this.lastProcessedEventTime=Date.now()}}function ba(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function _a({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ta(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _a(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(e,t={}){return Qn(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ka=/^https?/;async function Aa(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ea(e);for(const n of t)try{if(Ca(n))return}catch(MT){}An(e,"unauthorized-domain")}function Ca(e){const t=Vn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ka.test(n))return!1;if(Sa.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Gn(3e4,6e4);function Da(){const e=Ws().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ra(e){return new Promise(((t,n)=>{var r,i,s;function o(){Da(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Da(),n(Cn(e,"network-request-failed"))},timeout:Na.get()})}if(null===(i=null===(r=Ws().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ws().gapi)||void 0===s?void 0:s.load)){const t=Io("iframefcb");return Ws()[t]=()=>{gapi.load?o():n(Cn(e,"network-request-failed"))},wo(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw xa=null,e}))}let xa=null;function Oa(e){return xa=xa||Ra(e),xa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Gn(5e3,15e3),La="__/auth/iframe",Ma="emulator/auth/iframe",Fa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Va=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ua(e){const t=e.config;xn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Kn(t,Ma):`https://${e.config.authDomain}/${La}`,r={apiKey:t.apiKey,appName:e.name,v:Ot},i=Va.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${X(r).slice(1)}`}async function Ba(e){const t=await Oa(e),n=Ws().gapi;return xn(n,e,"internal-error"),t.open({where:document.body,url:Ua(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fa,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Cn(e,"network-request-failed"),s=Ws().setTimeout((()=>{r(i)}),Pa.get());function o(){Ws().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ja=500,Ga=600,Ka="_blank",$a="http://localhost";class za{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Wa(e,t,n,r=ja,i=Ga){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qa),{width:r.toString(),height:i.toString(),top:s,left:o}),u=R().toLowerCase();n&&(a=Cr(u)?Ka:n),kr(u)&&(t=t||$a,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Lr(u)&&"_self"!==a)return Ha(t||"",a),new za(null);const h=window.open(t||"",a,l);xn(h,e,"popup-blocked");try{h.focus()}catch(d){}return new za(h)}function Ha(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="__/auth/handler",Ja="emulator/auth/handler";function Ya(e,t,n,r,i,s){xn(e.config.authDomain,e,"auth-domain-config-required"),xn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ot,eventId:i};if(t instanceof bi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Q(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof _i){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${Xa(e)}?${X(a).slice(1)}`}function Xa({config:e}){return e.emulator?Kn(e,Ja):`https://${e.authDomain}/${Qa}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="webStorageSupport";class ec{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=js,this._completeRedirectFn=ya,this._overrideRedirectResult=aa}async _openPopup(e,t,n,r){var i;Pn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Ya(e,t,n,Vn(),r);return Wa(e,s,$s())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Hs(Ya(e,t,n,Vn(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Pn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ba(e),n=new Ia(e);return t.register("authEvent",(t=>{xn(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Za,{type:Za},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Za];void 0!==i&&t(!!i),An(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Aa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fr()||Ar()||Or()}}const tc=ec;class nc{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return On("unexpected MultiFactorSessionType")}}}class rc extends nc{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rc(e)}_finalizeEnroll(e,t,n){return Ns(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return go(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ic{constructor(){}static assertion(e){return rc._fromCredential(e)}}ic.FACTOR_ID="phone";var sc="@firebase/auth",oc="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uc(e){kt(new oe("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{xn(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),xn(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ur(e)},a=new qr(t,r,i);return Fn(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),kt(new oe("auth-internal",(e=>{const t=jr(e.getProvider("auth").getImmediate());return(e=>new ac(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(sc,oc,cc(e)),Vt(sc,oc,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lc(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uc("Browser");const hc=2e3;async function dc(e,t,n){var r;const{BuildInfo:i}=lc();Pn(t.sessionId,"AuthEvent did not contain a session ID");const s=await yc(t.sessionId),o={};return Or()?o["ibi"]=i.packageName:Dr()?o["apn"]=i.packageName:An(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Ya(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function fc(e){const{BuildInfo:t}=lc(),n={};Or()?n.iosBundleId=t.packageName:Dr()?n.androidPackageName=t.packageName:An(e,"operation-not-supported-in-this-environment"),await Ea(e,n)}function pc(e){const{cordova:t}=lc();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Pr()?"_blank":"_system","location=yes"),n(i)}))}))}async function mc(e,t,n){const{cordova:r}=lc();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(Cn(e,"redirect-cancelled-by-user"))}),hc))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Dr()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function gc(e){var t,n,r,i,s,o,a,c,u,l;const h=lc();xn("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),xn("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),xn("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),xn("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),xn("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function yc(e){const t=vc(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function vc(e){if(Pn(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=20;class Ic extends Ia{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function bc(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Sc(),postBody:null,tenantId:e.tenantId,error:Cn(e,"no-auth-event")}}function _c(e,t){return kc()._set(Ac(e),t)}async function Tc(e){const t=await kc()._get(Ac(e));return t&&await kc()._remove(Ac(e)),t}function Ec(e,t){var n,r;const i=Nc(t);if(i.includes("/__/auth/callback")){const t=Dc(i),s=t["firebaseError"]?Cc(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?Cn(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Sc(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<wc;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function kc(){return Mn(Bs)}function Ac(e){return Tr("authEvent",e.config.apiKey,e.name)}function Cc(e){try{return JSON.parse(e)}catch(t){return null}}function Nc(e){const t=Dc(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Dc(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Dc(i)["link"];return s||i||r||n||e}function Dc(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Z(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=500;class xc{constructor(){this._redirectPersistence=js,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ya,this._overrideRedirectResult=aa}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Ic(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){An(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){gc(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),oa(),await this._originValidation(e);const s=bc(e,n,r);await _c(e,s);const o=await dc(e,s,t),a=await pc(o);return mc(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fc(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=lc(),s=setTimeout((async()=>{await Tc(e),t.onEvent(Pc())}),Rc),o=async n=>{clearTimeout(s);const r=await Tc(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Ec(r,n["url"])),t.onEvent(i||Pc())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;lc().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Oc=xc;function Pc(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Cn("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e,t){jr(e)._logFramework(t)}var Mc="@firebase/auth-compat",Fc="0.2.18";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vc=1e3;function Uc(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Bc(){return"http:"===Uc()||"https:"===Uc()}function qc(e=R()){return!("file:"!==Uc()&&"ionic:"!==Uc()&&"capacitor:"!==Uc()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function jc(){return M()||O()}function Gc(){return V()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Kc(e=R()){return/Edge\/\d+/.test(e)}function $c(e=R()){return Gc()||Kc(e)}function zc(){try{const e=self.localStorage,t=$s();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!$c()||q()}catch(e){return Wc()&&q()}return!1}function Wc(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Hc(){return(Bc()||L()||qc())&&!jc()&&zc()&&!Wc()}function Qc(){return qc()&&"undefined"!==typeof document}async function Jc(){return!!Qc()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Vc);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Yc(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={LOCAL:"local",NONE:"none",SESSION:"session"},Zc=xn,eu="persistence";function tu(e,t){Zc(Object.values(Xc).includes(t),e,"invalid-persistence-type"),M()?Zc(t!==Xc.SESSION,e,"unsupported-persistence-type"):O()?Zc(t===Xc.NONE,e,"unsupported-persistence-type"):Wc()?Zc(t===Xc.NONE||t===Xc.LOCAL&&q(),e,"unsupported-persistence-type"):Zc(t===Xc.NONE||zc(),e,"unsupported-persistence-type")}async function nu(e){await e._initializationPromise;const t=iu(),n=Tr(eu,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function ru(e,t){const n=iu();if(!n)return[];const r=Tr(eu,e,t),i=n.getItem(r);switch(i){case Xc.NONE:return[_r];case Xc.LOCAL:return[po,js];case Xc.SESSION:return[js];default:return[]}}function iu(){var e;try{return(null===(e=Yc())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=xn;class ou{constructor(){this.browserResolver=Mn(tc),this.cordovaResolver=Mn(Oc),this.underlyingResolver=null,this._redirectPersistence=js,this._completeRedirectFn=ya,this._overrideRedirectResult=aa}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Qc()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return su(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Jc();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){return e.unwrap()}function cu(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(e){return hu(e)}function lu(e,t){var n,r;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){const n=t;n.resolver=new pu(e,As(e,t))}else if(i){const e=hu(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function hu(e){const{_tokenResponse:t}=e instanceof K?e.customData:e;if(!t)return null;if(!(e instanceof K)&&"temporaryProof"in t&&"phoneNumber"in t)return Go.credentialFromResult(e);const n=t.providerId;if(!n||n===vn.PASSWORD)return null;let r;switch(n){case vn.GOOGLE:r=Si;break;case vn.FACEBOOK:r=Ei;break;case vn.GITHUB:r=ki;break;case vn.TWITTER:r=Ri;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?Ci._create(n,o):li._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new Ti(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof K?r.credentialFromError(e):r.credentialFromResult(e)}function du(e,t){return t.catch((t=>{throw t instanceof K&&lu(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:uu(e),additionalUserInfo:Es(e),user:mu.getOrCreate(n)}}))}async function fu(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>du(e,n.confirm(t))}}class pu{constructor(e,t){this.resolver=t,this.auth=cu(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return du(au(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this._delegate=e,this.multiFactor=Os(e)}static getOrCreate(e){return mu.USER_MAP.has(e)||mu.USER_MAP.set(e,new mu(e)),mu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return du(this.auth,$i(this._delegate,e))}async linkWithPhoneNumber(e,t){return fu(this.auth,Uo(this._delegate,e,t))}async linkWithPopup(e){return du(this.auth,Zo(this._delegate,e,ou))}async linkWithRedirect(e){return await nu(jr(this.auth)),pa(this._delegate,e,ou)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return du(this.auth,zi(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return fu(this.auth,Bo(this._delegate,e,t))}reauthenticateWithPopup(e){return du(this.auth,Xo(this._delegate,e,ou))}async reauthenticateWithRedirect(e){return await nu(jr(this.auth)),da(this._delegate,e,ou)}sendEmailVerification(e){return ls(this._delegate,e)}async unlink(e){return await Ui(this._delegate,e),this}updateEmail(e){return ps(this._delegate,e)}updatePassword(e){return ms(this._delegate,e)}updatePhoneNumber(e){return jo(this._delegate,e)}updateProfile(e){return fs(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return hs(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}mu.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gu=xn;class yu{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;gu(n,"invalid-api-key",{appName:e.name}),gu(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?ou:void 0;this._delegate=t.initialize({options:{persistence:wu(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(_n),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?mu.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Kr(this._delegate,e,t)}applyActionCode(e){return es(this._delegate,e)}checkActionCode(e){return ts(this._delegate,e)}confirmPasswordReset(e,t){return Zi(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return du(this._delegate,rs(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return us(this._delegate,e)}isSignInWithEmailLink(e){return os(this._delegate,e)}async getRedirectResult(){gu(Hc(),this._delegate,"operation-not-supported-in-this-environment");const e=await ga(this._delegate,ou);return e?du(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Lc(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=vu(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=vu(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return ss(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Xi(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(tu(this._delegate,e),e){case Xc.SESSION:t=js;break;case Xc.LOCAL:const e=await Mn(po)._isAvailable();t=e?po:Bs;break;case Xc.NONE:t=_r;break;default:return An("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return du(this._delegate,Li(this._delegate))}signInWithCredential(e){return du(this._delegate,Ki(this._delegate,e))}signInWithCustomToken(e){return du(this._delegate,Hi(this._delegate,e))}signInWithEmailAndPassword(e,t){return du(this._delegate,is(this._delegate,e,t))}signInWithEmailLink(e,t){return du(this._delegate,as(this._delegate,e,t))}signInWithPhoneNumber(e,t){return fu(this._delegate,Vo(this._delegate,e,t))}async signInWithPopup(e){return gu(Hc(),this._delegate,"operation-not-supported-in-this-environment"),du(this._delegate,Yo(this._delegate,e,ou))}async signInWithRedirect(e){return gu(Hc(),this._delegate,"operation-not-supported-in-this-environment"),await nu(this._delegate),la(this._delegate,e,ou)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ns(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function vu(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&mu.getOrCreate(e));return{next:s,error:t,complete:n}}function wu(e,t){const n=ru(e,t);if("undefined"===typeof self||n.includes(po)||n.push(po),"undefined"!==typeof window)for(const r of[Bs,js])n.includes(r)||n.push(r);return n.includes(_r)||n.push(_r),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yu.Persistence=Xc;class Iu{constructor(){this.providerId="phone",this._delegate=new Go(au(pn.auth()))}static credential(e,t){return Go.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Iu.PHONE_SIGN_IN_METHOD=Go.PHONE_SIGN_IN_METHOD,Iu.PROVIDER_ID=Go.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bu=xn;class _u{constructor(e,t,n=pn.app()){var r;bu(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Lo(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="auth-compat";function Eu(e){e.INTERNAL.registerComponent(new oe(Tu,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new yu(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:wn.EMAIL_SIGNIN,PASSWORD_RESET:wn.PASSWORD_RESET,RECOVER_EMAIL:wn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:wn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:wn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:wn.VERIFY_EMAIL}},EmailAuthProvider:Ii,FacebookAuthProvider:Ei,GithubAuthProvider:ki,GoogleAuthProvider:Si,OAuthProvider:Ti,SAMLAuthProvider:Di,PhoneAuthProvider:Iu,PhoneMultiFactorGenerator:ic,RecaptchaVerifier:_u,TwitterAuthProvider:Ri,Auth:yu,AuthCredential:Qr,Error:K}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Mc,Fc)}Eu(pn);n(2262),n(4506);var Su,ku="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Au={},Cu=Cu||{},Nu=ku||self;function Du(){}function Ru(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function xu(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function Ou(e){return Object.prototype.hasOwnProperty.call(e,Pu)&&e[Pu]||(e[Pu]=++Lu)}var Pu="closure_uid_"+(1e9*Math.random()>>>0),Lu=0;function Mu(e,t,n){return e.call.apply(e.bind,arguments)}function Fu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Vu(e,t,n){return Vu=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Mu:Fu,Vu.apply(null,arguments)}function Uu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Bu(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function qu(){this.s=this.s,this.o=this.o}var ju=0,Gu={};qu.prototype.s=!1,qu.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=ju)){var e=Ou(this);delete Gu[e]}},qu.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ku=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},$u=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function zu(e){e:{var t=lf;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function Wu(e){return Array.prototype.concat.apply([],arguments)}function Hu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Qu(e){return/^[\s\xa0]*$/.test(e)}var Ju,Yu=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Xu(e,t){return-1!=e.indexOf(t)}function Zu(e,t){return e<t?-1:e>t?1:0}e:{var el=Nu.navigator;if(el){var tl=el.userAgent;if(tl){Ju=tl;break e}}Ju=""}function nl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function rl(e){const t={};for(const n in e)t[n]=e[n];return t}var il="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sl(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<il.length;t++)n=il[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ol(e){return ol[" "](e),e}function al(e){var t=Il;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}ol[" "]=Du;var cl,ul=Xu(Ju,"Opera"),ll=Xu(Ju,"Trident")||Xu(Ju,"MSIE"),hl=Xu(Ju,"Edge"),dl=hl||ll,fl=Xu(Ju,"Gecko")&&!(Xu(Ju.toLowerCase(),"webkit")&&!Xu(Ju,"Edge"))&&!(Xu(Ju,"Trident")||Xu(Ju,"MSIE"))&&!Xu(Ju,"Edge"),pl=Xu(Ju.toLowerCase(),"webkit")&&!Xu(Ju,"Edge");function ml(){var e=Nu.document;return e?e.documentMode:void 0}e:{var gl="",yl=function(){var e=Ju;return fl?/rv:([^\);]+)(\)|;)/.exec(e):hl?/Edge\/([\d\.]+)/.exec(e):ll?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):pl?/WebKit\/(\S+)/.exec(e):ul?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(yl&&(gl=yl?yl[1]:""),ll){var vl=ml();if(null!=vl&&vl>parseFloat(gl)){cl=String(vl);break e}}cl=gl}var wl,Il={};function bl(){return al((function(){let e=0;const t=Yu(String(cl)).split("."),n=Yu("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Zu(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Zu(0==i[2].length,0==s[2].length)||Zu(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Nu.document&&ll){var _l=ml();wl=_l||(parseInt(cl,10)||void 0)}else wl=void 0;var Tl=wl,El=function(){if(!Nu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Nu.addEventListener("test",Du,t),Nu.removeEventListener("test",Du,t)}catch(n){}return e}();function Sl(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function kl(e,t){if(Sl.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fl){e:{try{ol(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Al[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&kl.Z.h.call(this)}}Sl.prototype.h=function(){this.defaultPrevented=!0},Bu(kl,Sl);var Al={2:"touch",3:"pen",4:"mouse"};kl.prototype.h=function(){kl.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Cl="closure_listenable_"+(1e6*Math.random()|0),Nl=0;function Dl(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Nl,this.ca=this.fa=!1}function Rl(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function xl(e){this.src=e,this.g={},this.h=0}function Ol(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Ku(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Rl(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Pl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}xl.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Pl(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Dl(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var Ll="closure_lm_"+(1e6*Math.random()|0),Ml={};function Fl(e,t,n,r,i){if(r&&r.once)return Bl(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fl(e,t[s],n,r,i);return null}return n=Wl(n),e&&e[Cl]?e.N(t,n,xu(r)?!!r.capture:!!r,i):Vl(e,t,n,!1,r,i)}function Vl(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=xu(i)?!!i.capture:!!i,a=$l(e);if(a||(e[Ll]=a=new xl(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ul(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)El||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Gl(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ul(){function e(n){return t.call(e.src,e.listener,n)}var t=Kl;return e}function Bl(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Bl(e,t[s],n,r,i);return null}return n=Wl(n),e&&e[Cl]?e.O(t,n,xu(r)?!!r.capture:!!r,i):Vl(e,t,n,!0,r,i)}function ql(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ql(e,t[s],n,r,i);else r=xu(r)?!!r.capture:!!r,n=Wl(n),e&&e[Cl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Pl(s,n,r,i),-1<n&&(Rl(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=$l(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Pl(t,n,r,i)),(n=-1<e?t[e]:null)&&jl(n))}function jl(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Cl])Ol(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Gl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=$l(t))?(Ol(n,e),0==n.h&&(n.src=null,t[Ll]=null)):Rl(e)}}}function Gl(e){return e in Ml?Ml[e]:Ml[e]="on"+e}function Kl(e,t){if(e.ca)e=!0;else{t=new kl(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&jl(e),e=n.call(r,t)}return e}function $l(e){return e=e[Ll],e instanceof xl?e:null}var zl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wl(e){return"function"===typeof e?e:(e[zl]||(e[zl]=function(t){return e.handleEvent(t)}),e[zl])}function Hl(){qu.call(this),this.i=new xl(this),this.P=this,this.I=null}function Ql(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new Sl(t,e);else if(t instanceof Sl)t.target=t.target||e;else{var i=t;t=new Sl(r,e),sl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Jl(o,r,!0,t)&&i}if(o=t.g=e,i=Jl(o,r,!0,t)&&i,i=Jl(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Jl(o,r,!1,t)&&i}function Jl(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ol(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Bu(Hl,qu),Hl.prototype[Cl]=!0,Hl.prototype.removeEventListener=function(e,t,n,r){ql(this,e,t,n,r)},Hl.prototype.M=function(){if(Hl.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rl(n[r]);delete t.g[e],t.h--}}this.I=null},Hl.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Hl.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Yl=Nu.JSON.stringify;function Xl(){var e=ah;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Zl{constructor(){this.h=this.g=null}add(e,t){const n=th.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var eh,th=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new nh),(e=>e.reset()));class nh{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function rh(e){Nu.setTimeout((()=>{throw e}),0)}function ih(e,t){eh||sh(),oh||(eh(),oh=!0),ah.add(e,t)}function sh(){var e=Nu.Promise.resolve(void 0);eh=function(){e.then(ch)}}var oh=!1,ah=new Zl;function ch(){for(var e;e=Xl();){try{e.h.call(e.g)}catch(n){rh(n)}var t=th;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}oh=!1}function uh(e,t){Hl.call(this),this.h=e||1,this.g=t||Nu,this.j=Vu(this.kb,this),this.l=Date.now()}function lh(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function hh(e,t,n){if("function"===typeof e)n&&(e=Vu(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Vu(e.handleEvent,e)}return 2147483647<Number(t)?-1:Nu.setTimeout(e,t||0)}function dh(e){e.g=hh((()=>{e.g=null,e.i&&(e.i=!1,dh(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Bu(uh,Hl),Su=uh.prototype,Su.da=!1,Su.S=null,Su.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ql(this,"tick"),this.da&&(lh(this),this.start()))}},Su.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Su.M=function(){uh.Z.M.call(this),lh(this),delete this.g};class fh extends qu{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dh(this)}M(){super.M(),this.g&&(Nu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ph(e){qu.call(this),this.h=e,this.g={}}Bu(ph,qu);var mh=[];function gh(e,t,n,r){Array.isArray(n)||(n&&(mh[0]=n.toString()),n=mh);for(var i=0;i<n.length;i++){var s=Fl(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function yh(e){nl(e.g,(function(e,t){this.g.hasOwnProperty(t)&&jl(e)}),e),e.g={}}function vh(){this.g=!0}function wh(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ih(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function bh(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Th(e,n)+(r?" "+r:"")}))}function _h(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Th(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Yl(n)}catch(a){return t}}ph.prototype.M=function(){ph.Z.M.call(this),yh(this)},ph.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},vh.prototype.Aa=function(){this.g=!1},vh.prototype.info=function(){};var Eh={},Sh=null;function kh(){return Sh=Sh||new Hl}function Ah(e){Sl.call(this,Eh.Ma,e)}function Ch(e){const t=kh();Ql(t,new Ah(t,e))}function Nh(e,t){Sl.call(this,Eh.STAT_EVENT,e),this.stat=t}function Dh(e){const t=kh();Ql(t,new Nh(t,e))}function Rh(e,t){Sl.call(this,Eh.Na,e),this.size=t}function xh(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Nu.setTimeout((function(){e()}),t)}Eh.Ma="serverreachability",Bu(Ah,Sl),Eh.STAT_EVENT="statevent",Bu(Nh,Sl),Eh.Na="timingevent",Bu(Rh,Sl);var Oh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ph={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Lh(){}function Mh(e){return e.h||(e.h=e.i())}function Fh(){}Lh.prototype.h=null;var Vh,Uh={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Bh(){Sl.call(this,"d")}function qh(){Sl.call(this,"c")}function jh(){}function Gh(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ph(this),this.P=$h,e=dl?125:void 0,this.W=new uh(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Kh}function Kh(){this.i=null,this.g="",this.h=!1}Bu(Bh,Sl),Bu(qh,Sl),Bu(jh,Lh),jh.prototype.g=function(){return new XMLHttpRequest},jh.prototype.i=function(){return{}},Vh=new jh;var $h=45e3,zh={},Wh={};function Hh(e,t,n){e.K=1,e.v=wd(fd(t)),e.s=n,e.U=!0,Qh(e,null)}function Qh(e,t){e.F=Date.now(),Zh(e),e.A=fd(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Pd(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Kh,e.g=qf(e.l,n?t:null,!e.s),0<e.O&&(e.L=new fh(Vu(e.Ia,e,e.g),e.O)),gh(e.V,e.g,"readystatechange",e.gb),t=e.H?rl(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ch(1),wh(e.j,e.u,e.A,e.m,e.X,e.s)}function Jh(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Yh(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Xh(e,n),r==Wh){4==t&&(e.o=4,Dh(14),i=!1),bh(e.j,e.m,null,"[Incomplete Response]");break}if(r==zh){e.o=4,Dh(15),bh(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}bh(e.j,e.m,r,null),id(e,r)}Jh(e)&&r!=Wh&&r!=zh&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Dh(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Of(t),t.L=!0,Dh(11))):(bh(e.j,e.m,n,"[Invalid Chunked Response]"),rd(e),nd(e))}function Xh(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Wh:(n=Number(t.substring(n,r)),isNaN(n)?zh:(r+=1,r+n>t.length?Wh:(t=t.substr(r,n),e.C=r+n,t)))}function Zh(e){e.Y=Date.now()+e.P,ed(e,e.P)}function ed(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=xh(Vu(e.eb,e),t)}function td(e){e.B&&(Nu.clearTimeout(e.B),e.B=null)}function nd(e){0==e.l.G||e.I||Mf(e.l,e)}function rd(e){td(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,lh(e.W),yh(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function id(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||jd(n.i,e)))if(n.I=e.N,!e.J&&jd(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Lf(n),Tf(n)}xf(n),Dh(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=xh(Vu(n.ab,n),6e3));if(1>=qd(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Vf(n,11)}else if((e.J||n.g==e)&&Lf(n),!Qu(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Xu(e,"spdy")||Xu(e,"quic")||Xu(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Gd(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,vd(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Bf(r,r.H?r.la:null,r.W),o.J){Kd(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(td(a),Zh(a)),r.g=o}else Rf(r);0<n.l.length&&kf(n)}else"stop"!=u[0]&&"close"!=u[0]||Vf(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Vf(n,7):_f(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Ch(4)}catch(u){}}function sd(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(Ru(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function od(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ru(e)||"string"===typeof e)$u(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Ru(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=sd(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function ad(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof ad)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function cd(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];ud(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],ud(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function ud(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Su=Gh.prototype,Su.setTimeout=function(e){this.P=e},Su.gb=function(e){e=e.target;const t=this.L;t&&3==gf(e)?t.l():this.Ia(e)},Su.Ia=function(e){try{if(e==this.g)e:{const l=gf(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||dl||this.g&&(this.h.h||this.g.ga()||yf(this.g)))){this.I||4!=l||7==t||Ch(8==t||0>=h?3:2),td(this);var n=this.g.ba();this.N=n;t:if(Jh(this)){var r=yf(this.g);e="";var i=r.length,s=4==gf(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){rd(this),nd(this);var o="";break t}this.h.i=new Nu.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ih(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qu(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Dh(12),rd(this),nd(this);break e}bh(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,id(this,n)}this.U?(Yh(this,l,o),dl&&this.i&&3==l&&(gh(this.V,this.W,"tick",this.fb),this.W.start())):(bh(this.j,this.m,o,null),id(this,o)),4==l&&rd(this),this.i&&!this.I&&(4==l?Mf(this.l,this):(this.i=!1,Zh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Dh(12)):(this.o=0,Dh(13)),rd(this),nd(this)}}}catch(l){}},Su.fb=function(){if(this.g){var e=gf(this.g),t=this.g.ga();this.C<t.length&&(td(this),Yh(this,e,t),this.i&&4!=e&&Zh(this))}},Su.cancel=function(){this.I=!0,rd(this)},Su.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(_h(this.j,this.A),2!=this.K&&(Ch(3),Dh(17)),rd(this),this.o=2,nd(this)):ed(this,this.Y-e)},Su=ad.prototype,Su.R=function(){cd(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Su.T=function(){return cd(this),this.g.concat()},Su.get=function(e,t){return ud(this.h,e)?this.h[e]:t},Su.set=function(e,t){ud(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Su.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var ld=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function dd(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof dd){this.g=void 0!==t?t:e.g,pd(this,e.j),this.s=e.s,md(this,e.i),gd(this,e.m),this.l=e.l,t=e.h;var n=new Dd;n.i=t.i,t.g&&(n.g=new ad(t.g),n.h=t.h),yd(this,n),this.o=e.o}else e&&(n=String(e).match(ld))?(this.g=!!t,pd(this,n[1]||"",!0),this.s=_d(n[2]||""),md(this,n[3]||"",!0),gd(this,n[4]),this.l=_d(n[5]||"",!0),yd(this,n[6]||"",!0),this.o=_d(n[7]||"")):(this.g=!!t,this.h=new Dd(null,this.g))}function fd(e){return new dd(e)}function pd(e,t,n){e.j=n?_d(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function md(e,t,n){e.i=n?_d(t,!0):t}function gd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yd(e,t,n){t instanceof Dd?(e.h=t,Md(e.h,e.g)):(n||(t=Td(t,Cd)),e.h=new Dd(t,e.g))}function vd(e,t,n){e.h.set(t,n)}function wd(e){return vd(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Id(e){return e instanceof dd?fd(e):new dd(e,void 0)}function bd(e,t,n,r){var i=new dd(null,void 0);return e&&pd(i,e),t&&md(i,t),n&&gd(i,n),r&&(i.l=r),i}function _d(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Td(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Ed),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ed(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}dd.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Td(t,Sd,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Td(t,Sd,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Td(n,"/"==n.charAt(0)?Ad:kd,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Td(n,Nd)),e.join("")};var Sd=/[#\/\?@]/g,kd=/[#\?:]/g,Ad=/[#\?]/g,Cd=/[#\?@]/g,Nd=/#/g;function Dd(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rd(e){e.g||(e.g=new ad,e.h=0,e.i&&hd(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function xd(e,t){Rd(e),t=Ld(e,t),ud(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,ud(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&cd(e)))}function Od(e,t){return Rd(e),t=Ld(e,t),ud(e.g.h,t)}function Pd(e,t,n){xd(e,t),0<n.length&&(e.i=null,e.g.set(Ld(e,t),Hu(n)),e.h+=n.length)}function Ld(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Md(e,t){t&&!e.j&&(Rd(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(xd(this,t),Pd(this,n,e))}),e)),e.j=t}Su=Dd.prototype,Su.add=function(e,t){Rd(this),this.i=null,e=Ld(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Su.forEach=function(e,t){Rd(this),this.g.forEach((function(n,r){$u(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Su.T=function(){Rd(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Su.R=function(e){Rd(this);var t=[];if("string"===typeof e)Od(this,e)&&(t=Wu(t,this.g.get(Ld(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Wu(t,e[n])}return t},Su.set=function(e,t){return Rd(this),this.i=null,e=Ld(this,e),Od(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Su.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},Su.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var Fd=class{constructor(e,t){this.h=e,this.g=t}};function Vd(e){this.l=e||Ud,Nu.PerformanceNavigationTiming?(e=Nu.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Nu.g&&Nu.g.Ea&&Nu.g.Ea()&&Nu.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ud=10;function Bd(e){return!!e.h||!!e.g&&e.g.size>=e.j}function qd(e){return e.h?1:e.g?e.g.size:0}function jd(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gd(e,t){e.g?e.g.add(t):e.h=t}function Kd(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function $d(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Hu(e.i)}function zd(){}function Wd(){this.g=new zd}function Hd(e,t,n){const r=n||"";try{od(e,(function(e,n){let i=e;xu(e)&&(i=Yl(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Qd(e,t){const n=new vh;if(Nu.Image){const r=new Image;r.onload=Uu(Jd,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Uu(Jd,n,r,"TestLoadImage: error",!1,t),r.onabort=Uu(Jd,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Uu(Jd,n,r,"TestLoadImage: timeout",!1,t),Nu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Jd(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Yd(e){this.l=e.$b||null,this.j=e.ib||!1}function Xd(e,t){Hl.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Zd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vd.prototype.cancel=function(){if(this.i=$d(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},zd.prototype.stringify=function(e){return Nu.JSON.stringify(e,void 0)},zd.prototype.parse=function(e){return Nu.JSON.parse(e,void 0)},Bu(Yd,Lh),Yd.prototype.g=function(){return new Xd(this.l,this.j)},Yd.prototype.i=function(e){return function(){return e}}({}),Bu(Xd,Hl);var Zd=0;function ef(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function tf(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nf(e)}function nf(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Su=Xd.prototype,Su.open=function(e,t){if(this.readyState!=Zd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nf(this)},Su.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Nu).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Su.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tf(this)),this.readyState=Zd},Su.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nf(this)),this.g&&(this.readyState=3,nf(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Nu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ef(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Su.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tf(this):nf(this),3==this.readyState&&ef(this)}},Su.Ua=function(e){this.g&&(this.response=this.responseText=e,tf(this))},Su.Ta=function(e){this.g&&(this.response=e,tf(this))},Su.ha=function(){this.g&&tf(this)},Su.setRequestHeader=function(e,t){this.v.append(e,t)},Su.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Su.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Xd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var rf=Nu.JSON.parse;function sf(e){Hl.call(this),this.headers=new ad,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=of,this.K=this.L=!1}Bu(sf,Hl);var of="",af=/^https?$/i,cf=["POST","PUT"];function uf(e){return ll&&bl()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function lf(e){return"content-type"==e.toLowerCase()}function hf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,df(e),pf(e)}function df(e){e.D||(e.D=!0,Ql(e,"complete"),Ql(e,"error"))}function ff(e){if(e.h&&"undefined"!=typeof Cu&&(!e.C[1]||4!=gf(e)||2!=e.ba()))if(e.v&&4==gf(e))hh(e.Fa,0,e);else if(Ql(e,"readystatechange"),4==gf(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(ld)[1]||null;if(!i&&Nu.self&&Nu.self.location){var s=Nu.self.location.protocol;i=s.substr(0,s.length-1)}r=!af.test(i?i.toLowerCase():"")}n=r}if(n)Ql(e,"complete"),Ql(e,"success");else{e.m=6;try{var o=2<gf(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",df(e)}}finally{pf(e)}}}function pf(e,t){if(e.g){mf(e);const r=e.g,i=e.C[0]?Du:null;e.g=null,e.C=null,t||Ql(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function mf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Nu.clearTimeout(e.A),e.A=null)}function gf(e){return e.g?e.g.readyState:0}function yf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case of:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function vf(e){let t="";return nl(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function wf(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vf(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):vd(e,t,n))}function If(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function bf(e){this.za=0,this.l=[],this.h=new vh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=If("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=If("baseRetryDelayMs",5e3,e),this.$a=If("retryDelaySeedMs",1e4,e),this.Ya=If("forwardChannelMaxRetries",2,e),this.ra=If("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Vd(e&&e.concurrentRequestLimit),this.Ca=new Wd,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function _f(e){if(Ef(e),3==e.G){var t=e.V++,n=fd(e.F);vd(n,"SID",e.J),vd(n,"RID",t),vd(n,"TYPE","terminate"),Nf(e,n),t=new Gh(e,e.h,t,void 0),t.K=2,t.v=wd(fd(n)),n=!1,Nu.navigator&&Nu.navigator.sendBeacon&&(n=Nu.navigator.sendBeacon(t.v.toString(),"")),!n&&Nu.Image&&((new Image).src=t.v,n=!0),n||(t.g=qf(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Zh(t)}Uf(e)}function Tf(e){e.g&&(Of(e),e.g.cancel(),e.g=null)}function Ef(e){Tf(e),e.u&&(Nu.clearTimeout(e.u),e.u=null),Lf(e),e.i.cancel(),e.m&&("number"===typeof e.m&&Nu.clearTimeout(e.m),e.m=null)}function Sf(e,t){e.l.push(new Fd(e.Za++,t)),3==e.G&&kf(e)}function kf(e){Bd(e.i)||e.m||(e.m=!0,ih(e.Ha,e),e.C=0)}function Af(e,t){return!(qd(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=xh(Vu(e.Ha,e,t),Ff(e,e.C)),e.C++,!0))}function Cf(e,t){var n;n=t?t.m:e.V++;const r=fd(e.F);vd(r,"SID",e.J),vd(r,"RID",n),vd(r,"AID",e.U),Nf(e,r),e.o&&e.s&&wf(r,e.o,e.s),n=new Gh(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Df(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Gd(e.i,n),Hh(n,r,t)}function Nf(e,t){e.j&&od({},(function(e,n){vd(t,n,e)}))}function Df(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Vu(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Hd(a,e,"req"+n+"_")}catch(yp){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Rf(e){e.g||e.u||(e.Y=1,ih(e.Ga,e),e.A=0)}function xf(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=xh(Vu(e.Ga,e),Ff(e,e.A)),e.A++,!0)}function Of(e){null!=e.B&&(Nu.clearTimeout(e.B),e.B=null)}function Pf(e){e.g=new Gh(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=fd(e.oa);vd(t,"RID","rpc"),vd(t,"SID",e.J),vd(t,"CI",e.N?"0":"1"),vd(t,"AID",e.U),Nf(e,t),vd(t,"TYPE","xmlhttp"),e.o&&e.s&&wf(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=wd(fd(t)),n.s=null,n.U=!0,Qh(n,e)}function Lf(e){null!=e.v&&(Nu.clearTimeout(e.v),e.v=null)}function Mf(e,t){var n=null;if(e.g==t){Lf(e),Of(e),e.g=null;var r=2}else{if(!jd(e.i,t))return;n=t.D,Kd(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=kh(),Ql(r,new Rh(r,n,t,i)),kf(e)}else Rf(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&Af(e,t)||2==r&&xf(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Vf(e,5);break;case 4:Vf(e,10);break;case 3:Vf(e,6);break;default:Vf(e,2)}}function Ff(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Vf(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Vu(e.jb,e);n||(n=new dd("//www.google.com/images/cleardot.gif"),Nu.location&&"http"==Nu.location.protocol||pd(n,"https"),wd(n)),Qd(n.toString(),r)}else Dh(2);e.G=0,e.j&&e.j.va(t),Uf(e),Ef(e)}function Uf(e){e.G=0,e.I=-1,e.j&&(0==$d(e.i).length&&0==e.l.length||(e.i.i.length=0,Hu(e.l),e.l.length=0),e.j.ua())}function Bf(e,t,n){let r=Id(n);if(""!=r.i)t&&md(r,t+"."+r.i),gd(r,r.m);else{const e=Nu.location;r=bd(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&nl(e.aa,(function(e,t){vd(r,t,e)})),t=e.D,n=e.sa,t&&n&&vd(r,t,n),vd(r,"VER",e.ma),Nf(e,r),r}function qf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new sf(new Yd({ib:!0})):new sf(e.qa),t.L=e.H,t}function jf(){}function Gf(){if(ll&&!(10<=Number(Tl)))throw Error("Environmental error: no available transport.")}function Kf(e,t){Hl.call(this),this.g=new bf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Qu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Qu(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Wf(this)}function $f(e){Bh.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function zf(){qh.call(this),this.status=1}function Wf(e){this.g=e}Su=sf.prototype,Su.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vh.g(),this.C=this.u?Mh(this.u):Mh(Vh),this.g.onreadystatechange=Vu(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void hf(this,s)}e=n||"";const i=new ad(this.headers);r&&od(r,(function(e,t){i.set(t,e)})),r=zu(i.T()),n=Nu.FormData&&e instanceof Nu.FormData,!(0<=Ku(cf,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mf(this),0<this.B&&((this.K=uf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Vu(this.pa,this)):this.A=hh(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){hf(this,s)}},Su.pa=function(){"undefined"!=typeof Cu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ql(this,"timeout"),this.abort(8))},Su.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ql(this,"complete"),Ql(this,"abort"),pf(this))},Su.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pf(this,!0)),sf.Z.M.call(this)},Su.Fa=function(){this.s||(this.F||this.v||this.l?ff(this):this.cb())},Su.cb=function(){ff(this)},Su.ba=function(){try{return 2<gf(this)?this.g.status:-1}catch(e){return-1}},Su.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Su.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),rf(t)}},Su.Da=function(){return this.m},Su.La=function(){return"string"===typeof this.j?this.j:String(this.j)},Su=bf.prototype,Su.ma=8,Su.G=1,Su.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Su.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Gh(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=rl(s),sl(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Df(this,i,t),n=fd(this.F),vd(n,"RID",e),vd(n,"CVER",22),this.D&&vd(n,"X-HTTP-Session-Id",this.D),Nf(this,n),this.o&&s&&wf(n,this.o,s),Gd(this.i,i),this.Ra&&vd(n,"TYPE","init"),this.ja?(vd(n,"$req",t),vd(n,"SID","null"),i.$=!0,Hh(i,n,null)):Hh(i,n,t),this.G=2}}else 3==this.G&&(e?Cf(this,e):0==this.l.length||Bd(this.i)||Cf(this))},Su.Ga=function(){if(this.u=null,Pf(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=xh(Vu(this.bb,this),e)}},Su.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Dh(10),Tf(this),Pf(this))},Su.ab=function(){null!=this.v&&(this.v=null,Tf(this),xf(this),Dh(19))},Su.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Dh(2)):(this.h.info("Failed to ping google.com"),Dh(1))},Su=jf.prototype,Su.xa=function(){},Su.wa=function(){},Su.va=function(){},Su.ua=function(){},Su.Oa=function(){},Gf.prototype.g=function(e,t){return new Kf(e,t)},Bu(Kf,Hl),Kf.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ih(Vu(e.hb,e,t))),Dh(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Bf(e,null,e.W),kf(e)},Kf.prototype.close=function(){_f(this.g)},Kf.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,Sf(this.g,t)}else this.v?(t={},t.__data__=Yl(e),Sf(this.g,t)):Sf(this.g,e)},Kf.prototype.M=function(){this.g.j=null,delete this.j,_f(this.g),delete this.g,Kf.Z.M.call(this)},Bu($f,Bh),Bu(zf,qh),Bu(Wf,jf),Wf.prototype.xa=function(){Ql(this.g,"a")},Wf.prototype.wa=function(e){Ql(this.g,new $f(e))},Wf.prototype.va=function(e){Ql(this.g,new zf(e))},Wf.prototype.ua=function(){Ql(this.g,"b")},Gf.prototype.createWebChannel=Gf.prototype.g,Kf.prototype.send=Kf.prototype.u,Kf.prototype.open=Kf.prototype.m,Kf.prototype.close=Kf.prototype.close,Oh.NO_ERROR=0,Oh.TIMEOUT=8,Oh.HTTP_ERROR=6,Ph.COMPLETE="complete",Fh.EventType=Uh,Uh.OPEN="a",Uh.CLOSE="b",Uh.ERROR="c",Uh.MESSAGE="d",Hl.prototype.listen=Hl.prototype.N,sf.prototype.listenOnce=sf.prototype.O,sf.prototype.getLastError=sf.prototype.La,sf.prototype.getLastErrorCode=sf.prototype.Da,sf.prototype.getStatus=sf.prototype.ba,sf.prototype.getResponseJson=sf.prototype.Qa,sf.prototype.getResponseText=sf.prototype.ga,sf.prototype.send=sf.prototype.ea;var Hf=Au.createWebChannelTransport=function(){return new Gf},Qf=Au.getStatEventTarget=function(){return kh()},Jf=Au.ErrorCode=Oh,Yf=Au.EventType=Ph,Xf=Au.Event=Eh,Zf=Au.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ep=Au.FetchXmlHttpFactory=Yd,tp=Au.WebChannel=Fh,np=Au.XhrIo=sf;const rp="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ip.UNAUTHENTICATED=new ip(null),ip.GOOGLE_CREDENTIALS=new ip("google-credentials-uid"),ip.FIRST_PARTY=new ip("first-party-uid"),ip.MOCK_USER=new ip("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let sp="9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new ve("@firebase/firestore");function ap(){return op.logLevel}function cp(e){op.setLogLevel(e)}function up(e,...t){if(op.logLevel<=fe.DEBUG){const n=t.map(dp);op.debug(`Firestore (${sp}): ${e}`,...n)}}function lp(e,...t){if(op.logLevel<=fe.ERROR){const n=t.map(dp);op.error(`Firestore (${sp}): ${e}`,...n)}}function hp(e,...t){if(op.logLevel<=fe.WARN){const n=t.map(dp);op.warn(`Firestore (${sp}): ${e}`,...n)}}function dp(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e="Unexpected state"){const t=`FIRESTORE (${sp}) INTERNAL ASSERTION FAILED: `+e;throw lp(t),new Error(t)}function pp(e,t){e||fp()}function mp(e,t){e||fp()}function gp(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vp extends K{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ip.UNAUTHENTICATED)))}shutdown(){}}class _p{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Tp{constructor(e){this.t=e,this.currentUser=ip.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new wp;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wp,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{up("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(up("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wp)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(up("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(pp("string"==typeof t.accessToken),new Ip(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pp(null===e||"string"==typeof e),new ip(e)}}class Ep{constructor(e,t,n){this.type="FirstParty",this.user=ip.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Sp{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ep(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ip.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ap{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&up("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,up("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{up("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):up("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(pp("string"==typeof e.token),this.p=e.token,new kp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cp(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Cp(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Dp(e,t){return e<t?-1:e>t?1:0}function Rp(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function xp(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new vp(yp.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new vp(yp.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new vp(yp.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new vp(yp.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Op.fromMillis(Date.now())}static fromDate(e){return Op.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Op(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Dp(this.nanoseconds,e.nanoseconds):Dp(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pp(e)}static min(){return new Pp(new Op(0,0))}static max(){return new Pp(new Op(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,n){void 0===t?t=0:t>e.length&&fp(),void 0===n?n=e.length-t:n>e.length-t&&fp(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Lp.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Lp?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Mp extends Lp{construct(e,t,n){return new Mp(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new vp(yp.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Mp(t)}static emptyPath(){return new Mp([])}}const Fp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vp extends Lp{construct(e,t,n){return new Vp(e,t,n)}static isValidIdentifier(e){return Fp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vp.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Vp(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new vp(yp.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new vp(yp.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new vp(yp.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new vp(yp.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vp(t)}static emptyPath(){return new Vp([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.path=e}static fromPath(e){return new Up(Mp.fromString(e))}static fromName(e){return new Up(Mp.fromString(e).popFirst(5))}static empty(){return new Up(Mp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Mp.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Mp.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Up(new Mp(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function qp(e){return e.fields.find((e=>2===e.kind))}function jp(e){return e.fields.filter((e=>2!==e.kind))}Bp.UNKNOWN_ID=-1;class Gp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Kp{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Kp(0,Wp.min())}}function $p(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Pp.fromTimestamp(1e9===r?new Op(n+1,0):new Op(n,r));return new Wp(i,Up.empty(),t)}function zp(e){return new Wp(e.readTime,e.key,-1)}class Wp{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Wp(Pp.min(),Up.empty(),-1)}static max(){return new Wp(Pp.max(),Up.empty(),-1)}}function Hp(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Up.comparator(e.documentKey,t.documentKey),0!==n?n:Dp(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(e){if(e.code!==yp.FAILED_PRECONDITION||e.message!==Qp)throw e;up("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fp(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Xp(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Xp?t:Xp.resolve(t)}catch(e){return Xp.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Xp.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Xp.reject(t)}static resolve(e){return new Xp(((t,n)=>{t(e)}))}static reject(e){return new Xp(((t,n)=>{n(e)}))}static waitFor(e){return new Xp(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Xp.resolve(!1);for(const n of e)t=t.next((e=>e?Xp.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Xp(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Xp(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new wp,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new nm(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=am(t.target.error);this.T.reject(new nm(e,n))}}static open(e,t,n,r){try{return new Zp(t,e.transaction(r,n))}catch(e){throw new nm(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(up("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new im(t)}}class em{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===em.v(R())&&lp("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return up("SimpleDb","Removing database:",e),sm(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!q())return!1;if(em.S())return!0;const e=R(),t=em.v(e),n=0<t&&t<10,r=em.D(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(up("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new nm(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new vp(yp.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new vp(yp.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new nm(e,r))},r.onupgradeneeded=e=>{up("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.M(t,r.transaction,e.oldVersion,this.version).next((()=>{up("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.O&&(this.db.onversionchange=e=>this.O(e)),this.db}F(e){this.O=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.k(e);const t=Zp.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),Xp.reject(e)))).toPromise();return s.catch((()=>{})),await t.A,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(up("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class tm{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return sm(this.$.delete())}}class nm extends vp{constructor(e,t){super(yp.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rm(e){return"IndexedDbTransactionError"===e.name}class im{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(up("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(up("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),sm(n)}add(e){return up("SimpleDb","ADD",this.store.name,e,e),sm(this.store.add(e))}get(e){return sm(this.store.get(e)).next((t=>(void 0===t&&(t=null),up("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return up("SimpleDb","DELETE",this.store.name,e),sm(this.store.delete(e))}count(){return up("SimpleDb","COUNT",this.store.name),sm(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Xp(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Xp(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){up("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new Xp(((n,r)=>{t.onerror=e=>{const t=am(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new Xp(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new tm(i),o=t(i.primaryKey,i.value,s);if(o instanceof Xp){const e=o.catch((e=>(s.done(),Xp.reject(e))));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}})).next((()=>Xp.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function sm(e){return new Xp(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=am(e.target.error);n(t)}}))}let om=!1;function am(e){const t=em.v(R());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new vp("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return om||(om=!0,setTimeout((()=>{throw e}),0)),e}}return e}class cm{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){up("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{up("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){rm(e)?up("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Yp(e)}await this.Z(1)}))}}class um{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,i=!0;return Xp.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return up("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.st(r,n))).next((n=>(up("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=zp(t);Hp(r,n)>0&&(n=r)})),new Wp(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function dm(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lm.ot=-1;class pm{constructor(e,t){this.comparator=e,this.root=t||gm.EMPTY}insert(e,t){return new pm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gm.BLACK,null,null))}remove(e){return new pm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gm.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mm(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mm(this.root,e,this.comparator,!1)}getReverseIterator(){return new mm(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mm(this.root,e,this.comparator,!0)}}class mm{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gm{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:gm.RED,this.left=null!=r?r:gm.EMPTY,this.right=null!=i?i:gm.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new gm(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gm.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return gm.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gm.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gm.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fp();if(this.right.isRed())throw fp();const e=this.left.check();if(e!==this.right.check())throw fp();return e+(this.isRed()?0:1)}}gm.EMPTY=null,gm.RED=!0,gm.BLACK=!1,gm.EMPTY=new class{constructor(){this.size=0}get key(){throw fp()}get value(){throw fp()}get color(){throw fp()}get left(){throw fp()}get right(){throw fp()}copy(e,t,n,r,i){return this}insert(e,t,n){return new gm(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ym{constructor(e){this.comparator=e,this.data=new pm(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vm(this.data.getIterator())}getIteratorFrom(e){return new vm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ym))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ym(this.comparator);return t.data=e,t}}class vm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function wm(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.fields=e,e.sort(Vp.comparator)}static empty(){return new Im([])}unionWith(e){let t=new ym(Vp.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Im(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rp(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new _m(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new _m(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Dp(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_m.EMPTY_BYTE_STRING=new _m("");const Tm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Em(e){if(pp(!!e),"string"==typeof e){let t=0;const n=Tm.exec(e);if(pp(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Sm(e.seconds),nanos:Sm(e.nanos)}}function Sm(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function km(e){return"string"==typeof e?_m.fromBase64String(e):_m.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cm(e){const t=e.mapValue.fields.__previous_value__;return Am(t)?Cm(t):t}function Nm(e){const t=Em(e.mapValue.fields.__local_write_time__.timestampValue);return new Op(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Rm{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Rm("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Rm&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(e){return null==e}function Om(e){return 0===e&&1/e==-1/0}function Pm(e){return"number"==typeof e&&Number.isInteger(e)&&!Om(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Mm={nullValue:"NULL_VALUE"};function Fm(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Am(e)?4:Ym(e)?9007199254740991:10:fp()}function Vm(e,t){if(e===t)return!0;const n=Fm(e);if(n!==Fm(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Nm(e).isEqual(Nm(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Em(e.timestampValue),r=Em(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return km(e.bytesValue).isEqual(km(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Sm(e.geoPointValue.latitude)===Sm(t.geoPointValue.latitude)&&Sm(e.geoPointValue.longitude)===Sm(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Sm(e.integerValue)===Sm(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Sm(e.doubleValue),r=Sm(t.doubleValue);return n===r?Om(n)===Om(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Rp(e.arrayValue.values||[],t.arrayValue.values||[],Vm);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(hm(n)!==hm(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Vm(n[i],r[i])))return!1;return!0}(e,t);default:return fp()}}function Um(e,t){return void 0!==(e.values||[]).find((e=>Vm(e,t)))}function Bm(e,t){if(e===t)return 0;const n=Fm(e),r=Fm(t);if(n!==r)return Dp(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dp(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Sm(e.integerValue||e.doubleValue),r=Sm(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qm(e.timestampValue,t.timestampValue);case 4:return qm(Nm(e),Nm(t));case 5:return Dp(e.stringValue,t.stringValue);case 6:return function(e,t){const n=km(e),r=km(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Dp(n[i],r[i]);if(0!==e)return e}return Dp(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Dp(Sm(e.latitude),Sm(t.latitude));return 0!==n?n:Dp(Sm(e.longitude),Sm(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Bm(n[i],r[i]);if(e)return e}return Dp(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Lm.mapValue&&t===Lm.mapValue)return 0;if(e===Lm.mapValue)return 1;if(t===Lm.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Dp(r[o],s[o]);if(0!==e)return e;const t=Bm(n[r[o]],i[s[o]]);if(0!==t)return t}return Dp(r.length,s.length)}(e.mapValue,t.mapValue);default:throw fp()}}function qm(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Dp(e,t);const n=Em(e),r=Em(t),i=Dp(n.seconds,r.seconds);return 0!==i?i:Dp(n.nanos,r.nanos)}function jm(e){return Gm(e)}function Gm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Em(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?km(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Up.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Gm(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Gm(e.fields[i])}`;return n+"}"}(e.mapValue):fp();var t,n}function Km(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function $m(e){return!!e&&"integerValue"in e}function zm(e){return!!e&&"arrayValue"in e}function Wm(e){return!!e&&"nullValue"in e}function Hm(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qm(e){return!!e&&"mapValue"in e}function Jm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return dm(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Jm(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Jm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ym(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Xm(e){return"nullValue"in e?Mm:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Km(Rm.empty(),Up.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:fp()}function Zm(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Km(Rm.empty(),Up.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Lm:fp()}function eg(e,t){const n=Bm(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function tg(e,t){const n=Bm(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.value=e}static empty(){return new ng({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jm(t)}setAll(e){let t=Vp.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Jm(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Qm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vm(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Qm(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){dm(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ng(Jm(this.value))}}function rg(e){const t=[];return dm(e.fields,((e,n)=>{const r=new Vp([e]);if(Qm(n)){const e=rg(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Im(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ig{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ig(e,0,Pp.min(),Pp.min(),ng.empty(),0)}static newFoundDocument(e,t,n){return new ig(e,1,t,Pp.min(),n,0)}static newNoDocument(e,t){return new ig(e,2,t,Pp.min(),ng.empty(),0)}static newUnknownDocument(e,t){return new ig(e,3,t,Pp.min(),ng.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ng.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ng.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pp.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ig&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ig(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function og(e,t=null,n=[],r=[],i=null,s=null,o=null){return new sg(e,t,n,r,i,s,o)}function ag(e){const t=gp(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+jm(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),xm(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>jm(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>jm(e))).join(",")),t.ut=e}return t.ut}function cg(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${jm(t.value)}`;var t})).join(", ")}]`),xm(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>jm(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>jm(e))).join(",")),`Target(${t})`}function ug(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Sg(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Vm(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ag(e.startAt,t.startAt)&&Ag(e.endAt,t.endAt)}function lg(e){return Up.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function hg(e,t){return e.filters.filter((e=>e instanceof pg&&e.field.isEqual(t)))}function dg(e,t,n){let r=Mm,i=!0;for(const s of hg(e,t)){let e=Mm,t=!0;switch(s.op){case"<":case"<=":e=Xm(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=Mm}eg({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];eg({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function fg(e,t,n){let r=Lm,i=!0;for(const s of hg(e,t)){let e=Lm,t=!0;switch(s.op){case">=":case">":e=Zm(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=Lm}tg({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];tg({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class pg extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new mg(e,t,n):"array-contains"===t?new wg(e,n):"in"===t?new Ig(e,n):"not-in"===t?new bg(e,n):"array-contains-any"===t?new _g(e,n):new pg(e,t,n)}static ct(e,t,n){return"in"===t?new gg(e,n):new yg(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(Bm(t,this.value)):null!==t&&Fm(this.value)===Fm(t)&&this.at(Bm(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fp()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class mg extends pg{constructor(e,t,n){super(e,t,n),this.key=Up.fromName(n.referenceValue)}matches(e){const t=Up.comparator(e.key,this.key);return this.at(t)}}class gg extends pg{constructor(e,t){super(e,"in",t),this.keys=vg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yg extends pg{constructor(e,t){super(e,"not-in",t),this.keys=vg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vg(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Up.fromName(e.referenceValue)))}class wg extends pg{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zm(t)&&Um(t.arrayValue,this.value)}}class Ig extends pg{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Um(this.value.arrayValue,t)}}class bg extends pg{constructor(e,t){super(e,"not-in",t)}matches(e){if(Um(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Um(this.value.arrayValue,t)}}class _g extends pg{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zm(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Um(this.value.arrayValue,e)))}}class Tg{constructor(e,t){this.position=e,this.inclusive=t}}class Eg{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sg(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function kg(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Up.comparator(Up.fromName(o.referenceValue),n.key):Bm(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ag(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Vm(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Ng(e,t,n,r,i,s,o,a){return new Cg(e,t,n,r,i,s,o,a)}function Dg(e){return new Cg(e)}function Rg(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function xg(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Og(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Pg(e){return null!==e.collectionGroup}function Lg(e){const t=gp(e);if(null===t.lt){t.lt=[];const e=Og(t),n=xg(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Eg(e)),t.lt.push(new Eg(Vp.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Eg(Vp.keyField(),e))}}}return t.lt}function Mg(e){const t=gp(e);if(!t.ft)if("F"===t.limitType)t.ft=og(t.path,t.collectionGroup,Lg(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Lg(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Eg(i.field,t))}const n=t.endAt?new Tg(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tg(t.startAt.position,t.startAt.inclusive):null;t.ft=og(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function Fg(e,t,n){return new Cg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Vg(e,t){return ug(Mg(e),Mg(t))&&e.limitType===t.limitType}function Ug(e){return`${ag(Mg(e))}|lt:${e.limitType}`}function Bg(e){return`Query(target=${cg(Mg(e))}; limitType=${e.limitType})`}function qg(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Up.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=kg(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Lg(e),t))&&!(e.endAt&&!function(e,t,n){const r=kg(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Lg(e),t))}(e,t)}function jg(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Gg(e){return(t,n)=>{let r=!1;for(const i of Lg(e)){const e=Kg(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Kg(e,t,n){const r=e.field.isKeyField()?Up.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Bm(r,i):fp()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return fp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Om(t)?"-0":t}}function zg(e){return{integerValue:""+e}}function Wg(e,t){return Pm(t)?zg(t):$g(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this._=void 0}}function Qg(e,t,n){return e instanceof Xg?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Zg?ey(e,t):e instanceof ty?ny(e,t):function(e,t){const n=Yg(e,t),r=iy(n)+iy(e._t);return $m(n)&&$m(e._t)?zg(r):$g(e.wt,r)}(e,t)}function Jg(e,t,n){return e instanceof Zg?ey(e,t):e instanceof ty?ny(e,t):n}function Yg(e,t){return e instanceof ry?$m(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Xg extends Hg{}class Zg extends Hg{constructor(e){super(),this.elements=e}}function ey(e,t){const n=sy(t);for(const r of e.elements)n.some((e=>Vm(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ty extends Hg{constructor(e){super(),this.elements=e}}function ny(e,t){let n=sy(t);for(const r of e.elements)n=n.filter((e=>!Vm(e,r)));return{arrayValue:{values:n}}}class ry extends Hg{constructor(e,t){super(),this.wt=e,this._t=t}}function iy(e){return Sm(e.integerValue||e.doubleValue)}function sy(e){return zm(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t){this.field=e,this.transform=t}}function ay(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Zg&&t instanceof Zg||e instanceof ty&&t instanceof ty?Rp(e.elements,t.elements,Vm):e instanceof ry&&t instanceof ry?Vm(e._t,t._t):e instanceof Xg&&t instanceof Xg}(e.transform,t.transform)}class cy{constructor(e,t){this.version=e,this.transformResults=t}}class uy{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new uy}static exists(e){return new uy(void 0,e)}static updateTime(e){return new uy(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ly(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class hy{}function dy(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new _y(e.key,uy.none()):new yy(e.key,e.data,uy.none());{const n=e.data,r=ng.empty();let i=new ym(Vp.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new vy(e.key,r,new Im(i.toArray()),uy.none())}}function fy(e,t,n){e instanceof yy?function(e,t,n){const r=e.value.clone(),i=Iy(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof vy?function(e,t,n){if(!ly(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Iy(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(wy(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function py(e,t,n,r){return e instanceof yy?function(e,t,n,r){if(!ly(e.precondition,t))return n;const i=e.value.clone(),s=by(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof vy?function(e,t,n,r){if(!ly(e.precondition,t))return n;const i=by(e.fieldTransforms,r,t),s=t.data;return s.setAll(wy(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ly(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function my(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Yg(r.transform,e||null);null!=i&&(null===n&&(n=ng.empty()),n.set(r.field,i))}return n||null}function gy(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Rp(e,t,((e,t)=>ay(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yy extends hy{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vy extends hy{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wy(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Iy(e,t,n){const r=new Map;pp(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Jg(o,a,n[i]))}return r}function by(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Qg(e,s,t))}return r}class _y extends hy{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ty extends hy{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sy,ky;function Ay(e){switch(e){default:return fp();case yp.CANCELLED:case yp.UNKNOWN:case yp.DEADLINE_EXCEEDED:case yp.RESOURCE_EXHAUSTED:case yp.INTERNAL:case yp.UNAVAILABLE:case yp.UNAUTHENTICATED:return!1;case yp.INVALID_ARGUMENT:case yp.NOT_FOUND:case yp.ALREADY_EXISTS:case yp.PERMISSION_DENIED:case yp.FAILED_PRECONDITION:case yp.ABORTED:case yp.OUT_OF_RANGE:case yp.UNIMPLEMENTED:case yp.DATA_LOSS:return!0}}function Cy(e){if(void 0===e)return lp("GRPC error has no .code"),yp.UNKNOWN;switch(e){case Sy.OK:return yp.OK;case Sy.CANCELLED:return yp.CANCELLED;case Sy.UNKNOWN:return yp.UNKNOWN;case Sy.DEADLINE_EXCEEDED:return yp.DEADLINE_EXCEEDED;case Sy.RESOURCE_EXHAUSTED:return yp.RESOURCE_EXHAUSTED;case Sy.INTERNAL:return yp.INTERNAL;case Sy.UNAVAILABLE:return yp.UNAVAILABLE;case Sy.UNAUTHENTICATED:return yp.UNAUTHENTICATED;case Sy.INVALID_ARGUMENT:return yp.INVALID_ARGUMENT;case Sy.NOT_FOUND:return yp.NOT_FOUND;case Sy.ALREADY_EXISTS:return yp.ALREADY_EXISTS;case Sy.PERMISSION_DENIED:return yp.PERMISSION_DENIED;case Sy.FAILED_PRECONDITION:return yp.FAILED_PRECONDITION;case Sy.ABORTED:return yp.ABORTED;case Sy.OUT_OF_RANGE:return yp.OUT_OF_RANGE;case Sy.UNIMPLEMENTED:return yp.UNIMPLEMENTED;case Sy.DATA_LOSS:return yp.DATA_LOSS;default:return fp()}}(ky=Sy||(Sy={}))[ky.OK=0]="OK",ky[ky.CANCELLED=1]="CANCELLED",ky[ky.UNKNOWN=2]="UNKNOWN",ky[ky.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ky[ky.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ky[ky.NOT_FOUND=5]="NOT_FOUND",ky[ky.ALREADY_EXISTS=6]="ALREADY_EXISTS",ky[ky.PERMISSION_DENIED=7]="PERMISSION_DENIED",ky[ky.UNAUTHENTICATED=16]="UNAUTHENTICATED",ky[ky.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ky[ky.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ky[ky.ABORTED=10]="ABORTED",ky[ky.OUT_OF_RANGE=11]="OUT_OF_RANGE",ky[ky.UNIMPLEMENTED=12]="UNIMPLEMENTED",ky[ky.INTERNAL=13]="INTERNAL",ky[ky.UNAVAILABLE=14]="UNAVAILABLE",ky[ky.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ny{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){dm(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new pm(Up.comparator);function Ry(){return Dy}const xy=new pm(Up.comparator);function Oy(...e){let t=xy;for(const n of e)t=t.insert(n.key,n);return t}function Py(e){let t=xy;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ly(){return Fy()}function My(){return Fy()}function Fy(){return new Ny((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Vy=new pm(Up.comparator),Uy=new ym(Up.comparator);function By(...e){let t=Uy;for(const n of e)t=t.add(n);return t}const qy=new ym(Dp);function jy(){return qy}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Ky.createSynthesizedTargetChangeForCurrentChange(e,t)),new Gy(Pp.min(),n,jy(),Ry(),By())}}class Ky{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ky(_m.EMPTY_BYTE_STRING,t,By(),By(),By())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class zy{constructor(e,t){this.targetId=e,this.It=t}}class Wy{constructor(e,t,n=_m.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Hy{constructor(){this.Tt=0,this.Et=Yy(),this.At=_m.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=By(),t=By(),n=By();return this.Et.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:fp()}})),new Ky(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=Yy()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Qy{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Ry(),this.Bt=Jy(),this.Lt=new ym(Dp)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Mt(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:fp()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(lg(e))if(0===n){const n=new Up(e.path);this.Kt(t,n,ig.newNoDocument(n,Pp.min()))}else pp(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&lg(i.target)){const t=new Up(i.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,ig.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=By();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new Gy(e,t,this.Lt,this.$t,n);return this.$t=Ry(),this.Bt=Jy(),this.Lt=new ym(Dp),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new Hy,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new ym(Dp),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||up("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Hy),this.Ot.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}}function Jy(){return new pm(Up.comparator)}function Yy(){return new pm(Up.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Zy=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class ev{constructor(e,t){this.databaseId=e,this.dt=t}}function tv(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nv(e,t){return e.dt?t.toBase64():t.toUint8Array()}function rv(e,t){return tv(e,t.toTimestamp())}function iv(e){return pp(!!e),Pp.fromTimestamp(function(e){const t=Em(e);return new Op(t.seconds,t.nanos)}(e))}function sv(e,t){return function(e){return new Mp(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ov(e){const t=Mp.fromString(e);return pp(xv(t)),t}function av(e,t){return sv(e.databaseId,t.path)}function cv(e,t){const n=ov(t);if(n.get(1)!==e.databaseId.projectId)throw new vp(yp.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new vp(yp.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Up(dv(n))}function uv(e,t){return sv(e.databaseId,t)}function lv(e){const t=ov(e);return 4===t.length?Mp.emptyPath():dv(t)}function hv(e){return new Mp(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dv(e){return pp(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function fv(e,t,n){return{name:av(e,t),fields:n.value.mapValue.fields}}function pv(e,t,n){const r=cv(e,t.name),i=iv(t.updateTime),s=new ng({mapValue:{fields:t.fields}}),o=ig.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function mv(e,t){return"found"in t?function(e,t){pp(!!t.found),t.found.name,t.found.updateTime;const n=cv(e,t.found.name),r=iv(t.found.updateTime),i=new ng({mapValue:{fields:t.found.fields}});return ig.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){pp(!!t.missing),pp(!!t.readTime);const n=cv(e,t.missing),r=iv(t.readTime);return ig.newNoDocument(n,r)}(e,t):fp()}function gv(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:fp()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.dt?(pp(void 0===t||"string"==typeof t),_m.fromBase64String(t||"")):(pp(void 0===t||t instanceof Uint8Array),_m.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?yp.UNKNOWN:Cy(e.code);return new vp(t,e.message||"")}(o);n=new Wy(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=cv(e,r.document.name),s=iv(r.document.updateTime),o=new ng({mapValue:{fields:r.document.fields}}),a=ig.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new $y(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=cv(e,r.document),s=r.readTime?iv(r.readTime):Pp.min(),o=ig.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $y([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=cv(e,r.document),s=r.removedTargetIds||[];n=new $y([],s,i,null)}else{if(!("filter"in t))return fp();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Ey(r),s=e.targetId;n=new zy(s,i)}}return n}function yv(e,t){let n;if(t instanceof yy)n={update:fv(e,t.key,t.value)};else if(t instanceof _y)n={delete:av(e,t.key)};else if(t instanceof vy)n={update:fv(e,t.key,t.data),updateMask:Rv(t.fieldMask)};else{if(!(t instanceof Ty))return fp();n={verify:av(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Xg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ty)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ry)return{fieldPath:t.field.canonicalString(),increment:n._t};throw fp()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:rv(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:fp()}(e,t.precondition)),n}function vv(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?uy.updateTime(iv(e.updateTime)):void 0!==e.exists?uy.exists(e.exists):uy.none()}(t.currentDocument):uy.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)pp("REQUEST_TIME"===t.setToServerValue),n=new Xg;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Zg(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ty(e)}else"increment"in t?n=new ry(e,t.increment):fp();const r=Vp.fromServerFormat(t.fieldPath);return new oy(r,n)}(e,t))):[];if(t.update){t.update.name;const i=cv(e,t.update.name),s=new ng({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Im(t.map((e=>Vp.fromServerFormat(e))))}(t.updateMask);return new vy(i,s,e,n,r)}return new yy(i,s,n,r)}if(t.delete){const r=cv(e,t.delete);return new _y(r,n)}if(t.verify){const r=cv(e,t.verify);return new Ty(r,n)}return fp()}function wv(e,t){return e&&e.length>0?(pp(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?iv(e.updateTime):iv(t);return n.isEqual(Pp.min())&&(n=iv(t)),new cy(n,e.transformResults||[])}(e,t)))):[]}function Iv(e,t){return{documents:[uv(e,t.path)]}}function bv(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=uv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=uv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Hm(e.value))return{unaryFilter:{field:Av(e.field),op:"IS_NAN"}};if(Wm(e.value))return{unaryFilter:{field:Av(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Hm(e.value))return{unaryFilter:{field:Av(e.field),op:"IS_NOT_NAN"}};if(Wm(e.value))return{unaryFilter:{field:Av(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Av(e.field),op:kv(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Av(e.field),direction:Sv(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.dt||xm(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function _v(e){let t=lv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pp(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Ev(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Eg(Cv(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,xm(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Tg(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Tg(n,t)}(n.endAt)),Ng(t,i,o,s,a,"F",c,u)}function Tv(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fp()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ev(e){return e?void 0!==e.unaryFilter?[Dv(e)]:void 0!==e.fieldFilter?[Nv(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ev(e))).reduce(((e,t)=>e.concat(t))):fp():[]}function Sv(e){return Xy[e]}function kv(e){return Zy[e]}function Av(e){return{fieldPath:e.canonicalString()}}function Cv(e){return Vp.fromServerFormat(e.fieldPath)}function Nv(e){return pg.create(Cv(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fp()}}(e.fieldFilter.op),e.fieldFilter.value)}function Dv(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Cv(e.unaryFilter.field);return pg.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Cv(e.unaryFilter.field);return pg.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cv(e.unaryFilter.field);return pg.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cv(e.unaryFilter.field);return pg.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fp()}}function Rv(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function xv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Lv(t)),t=Pv(e.get(n),t);return Lv(t)}function Pv(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Lv(e){return e+""}function Mv(e){const t=e.length;if(pp(t>=2),2===t)return pp(""===e.charAt(0)&&""===e.charAt(1)),Mp.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&fp(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:fp()}s=t+2}return new Mp(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(e,t){return[e,Ov(t)]}function Uv(e,t,n){return[e,Ov(t),n]}const Bv={},qv=["prefixPath","collectionGroup","readTime","documentId"],jv=["prefixPath","collectionGroup","documentId"],Gv=["collectionGroup","readTime","prefixPath","documentId"],Kv=["canonicalId","targetId"],$v=["targetId","path"],zv=["path","targetId"],Wv=["collectionId","parent"],Hv=["indexId","uid"],Qv=["uid","sequenceNumber"],Jv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Yv=["indexId","uid","orderedDocumentKey"],Xv=["userId","collectionPath","documentId"],Zv=["userId","collectionPath","largestBatchId"],ew=["userId","collectionGroup","largestBatchId"],tw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nw=[...tw,"documentOverlays"],rw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],iw=rw,sw=[...iw,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow extends Jp{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function aw(e,t){const n=gp(e);return em.N(n.ee,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&fy(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=py(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=py(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=My();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=dy(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Pp.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),By())}isEqual(e){return this.batchId===e.batchId&&Rp(this.mutations,e.mutations,((e,t)=>gy(e,t)))&&Rp(this.baseMutations,e.baseMutations,((e,t)=>gy(e,t)))}}class uw{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){pp(e.mutations.length===n.length);let r=Vy;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new uw(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,n,r,i=Pp.min(),s=Pp.min(),o=_m.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new hw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new hw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.ne=e}}function fw(e,t){let n;if(t.document)n=pv(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Up.fromSegments(t.noDocument.path),r=yw(t.noDocument.readTime);n=ig.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return fp();{const e=Up.fromSegments(t.unknownDocument.path),r=yw(t.unknownDocument.version);n=ig.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Op(e[0],e[1]);return Pp.fromTimestamp(t)}(t.readTime)),n}function pw(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:mw(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:av(e,t.key),fields:t.data.value.mapValue.fields,updateTime:tv(e,t.version.toTimestamp())}}(e.ne,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gw(t.version)};else{if(!t.isUnknownDocument())return fp();r.unknownDocument={path:n.path.toArray(),version:gw(t.version)}}return r}function mw(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function gw(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function yw(e){const t=new Op(e.seconds,e.nanoseconds);return Pp.fromTimestamp(t)}function vw(e,t){const n=(t.baseMutations||[]).map((t=>vv(e.ne,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>vv(e.ne,t))),i=Op.fromMillis(t.localWriteTimeMs);return new cw(t.batchId,i,n,r)}function ww(e){const t=yw(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?yw(e.lastLimboFreeSnapshotVersion):Pp.min();let r;var i;return void 0!==e.query.documents?(pp(1===(i=e.query).documents.length),r=Mg(Dg(lv(i.documents[0])))):r=function(e){return Mg(_v(e))}(e.query),new hw(r,e.targetId,0,e.lastListenSequenceNumber,t,n,_m.fromBase64String(e.resumeToken))}function Iw(e,t){const n=gw(t.snapshotVersion),r=gw(t.lastLimboFreeSnapshotVersion);let i;i=lg(t.target)?Iv(e.ne,t.target):bv(e.ne,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ag(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function bw(e){const t=_v({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Fg(t,t.limit,"L"):t}function _w(e,t){return new lw(t.largestBatchId,vv(e.ne,t.overlayMutation))}function Tw(e,t){const n=t.path.lastSegment();return[e,Ov(t.path.popLast()),n]}function Ew(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:gw(r.readTime),documentKey:Ov(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{getBundleMetadata(e,t){return kw(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:yw(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return kw(e).put({bundleId:(n=t).id,createTime:gw(iv(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Aw(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:bw(t.bundledQuery),readTime:yw(t.readTime)};var t}))}saveNamedQuery(e,t){return Aw(e).put(function(e){return{name:e.name,readTime:gw(iv(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function kw(e){return aw(e,"bundles")}function Aw(e){return aw(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new Cw(e,n)}getOverlay(e,t){return Nw(e).get(Tw(this.userId,t)).next((e=>e?_w(this.wt,e):null))}getOverlays(e,t){const n=Ly();return Xp.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new lw(t,i);r.push(this.ie(e,s))})),Xp.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Ov(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Nw(e).W("collectionPathOverlayIndex",r))})),Xp.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Ly(),i=Ov(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Nw(e).K("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=_w(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Ly();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nw(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=_w(this.wt,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ie(e,t){return Nw(e).put(function(e,t,n){const[r,i,s]=Tw(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:yv(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function Nw(e){return aw(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(Sm(e.integerValue));else if("doubleValue"in e){const n=Sm(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Om(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(km(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?Ym(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):fp()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),Up.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function Rw(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function xw(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Rw(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Dw.ye=new Dw;class Ow{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=xw(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),n=xw(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Me(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Pw{constructor(e){this.Oe=e}de(e){this.Oe.pe(e)}he(e){this.Oe.be(e)}ae(e){this.Oe.ve(e)}ue(){this.Oe.Ce()}}class Lw{constructor(e){this.Oe=e}de(e){this.Oe.Ee(e)}he(e){this.Oe.Pe(e)}ae(e){this.Oe.De(e)}ue(){this.Oe.Ne()}}class Mw{constructor(){this.Oe=new Ow,this.Fe=new Pw(this.Oe),this.$e=new Lw(this.Oe)}seed(e){this.Oe.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Fw(this.indexId,this.documentKey,this.arrayValue,n)}}function Vw(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Uw(e.arrayValue,t.arrayValue),0!==n?n:(n=Uw(e.directionalValue,t.directionalValue),0!==n?n:Up.comparator(e.documentKey,t.documentKey)))}function Uw(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=qp(e);if(void 0!==t&&!this.Qe(t))return!1;const n=jp(e);let r=0,i=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.ze=new jw}addToCollectionParentIndex(e,t){return this.ze.add(t),Xp.resolve()}getCollectionParents(e,t){return Xp.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return Xp.resolve()}deleteFieldIndex(e,t){return Xp.resolve()}getDocumentsMatchingTarget(e,t){return Xp.resolve(null)}getIndexType(e,t){return Xp.resolve(0)}getFieldIndexes(e,t){return Xp.resolve([])}getNextCollectionGroupToUpdate(e){return Xp.resolve(null)}getMinOffset(e,t){return Xp.resolve(Wp.min())}getMinOffsetFromCollectionGroup(e,t){return Xp.resolve(Wp.min())}updateCollectionGroup(e,t,n){return Xp.resolve()}updateIndexEntries(e,t){return Xp.resolve()}}class jw{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ym(Mp.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ym(Mp.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new Uint8Array(0);class Kw{constructor(e,t){this.user=e,this.databaseId=t,this.He=new jw,this.Je=new Ny((e=>ag(e)),((e,t)=>ug(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const i={collectionId:n,parent:Ov(r)};return $w(e).put(i)}return Xp.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[xp(t),""],!1,!0);return $w(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Mv(r.parent))}return n}))}addFieldIndex(e,t){const n=Ww(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=Hw(e);return i.next((e=>{n.put(Ew(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Ww(e),r=Hw(e),i=zw(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=zw(e);let r=!0;const i=new Map;return Xp.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=By();const r=[];return Xp.forEach(i,((i,s)=>{var o;up("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${ag(t)}`);const a=function(e,t){const n=qp(t);if(void 0===n)return null;for(const r of hg(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of jp(t))for(const t of hg(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of jp(t)){const t=0===i.kind?dg(e,i.fieldPath,e.startAt):fg(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Tg(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of jp(t)){const t=0===i.kind?fg(e,i.fieldPath,e.endAt):dg(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Tg(n,r)}(s,i),h=this.Ze(i,s,u),d=this.Ze(i,s,l),f=this.tn(i,s,c),p=this.en(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Xp.forEach(p,(i=>n.j(i,t.limit).next((t=>{t.forEach((t=>{const n=Up.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Xp.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.nn(t[l/c]):Gw,h=this.sn(e,a,n[l%c],r),d=this.rn(e,a,i[l%c],s),f=o.map((t=>this.sn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}sn(e,t,n,r){const i=new Fw(e,Up.empty(),t,n);return r?i:i.Le()}rn(e,t,n,r){const i=new Fw(e,Up.empty(),t,n);return r?i.Le():i}Xe(e,t){const n=new Bw(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return Xp.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new ym(Vp.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new Mw;for(const r of jp(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Be(r.kind);Dw.ye.re(e,i)}return n.Me()}nn(e){const t=new Mw;return Dw.ye.re(e,t.Be(0)),t.Me()}un(e,t){const n=new Mw;return Dw.ye.re(Km(this.databaseId,t),n.Be(function(e){const t=jp(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Me()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new Mw);let i=0;for(const s of jp(e)){const e=n[i++];for(const n of r)if(this.cn(t,s.fieldPath)&&zm(e))r=this.an(r,s,e);else{const t=n.Be(s.kind);Dw.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Me();return t}an(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Mw;n.seed(e.Me()),Dw.ye.re(s,n.Be(t.kind)),i.push(n)}return i}cn(e,t){return!!e.filters.find((e=>e instanceof pg&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Ww(e),r=Hw(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return Xp.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Kp(t.sequenceNumber,new Wp(yw(t.readTime),new Up(Mv(t.documentKey)),t.largestBatchId)):Kp.empty(),r=e.fields.map((([e,t])=>new Gp(Vp.fromServerFormat(e),t)));return new Bp(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Dp(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Ww(e),i=Hw(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Xp.forEach(t,(t=>i.put(Ew(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Xp.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Xp.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Xp.forEach(i,(n=>this.fn(e,t,n).next((t=>{const i=this.dn(r,n);return t.isEqual(i)?Xp.resolve():this._n(e,r,n,t,i)})))))))}))}wn(e,t,n,r){return zw(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return zw(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=zw(e);let i=new ym(Vw);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{i=i.add(new Fw(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}dn(e,t){let n=new ym(Vw);const r=this.on(t,e);if(null==r)return n;const i=qp(t);if(null!=i){const s=e.data.field(i.fieldPath);if(zm(s))for(const i of s.arrayValue.values||[])n=n.add(new Fw(t.indexId,e.key,this.nn(i),r))}else n=n.add(new Fw(t.indexId,e.key,Gw,r));return n}_n(e,t,n,r,i){up("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=wm(s),c=wm(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=wm(o)):t?(i(a),a=wm(s)):(a=wm(s),c=wm(o))}}(r,i,Vw,(r=>{s.push(this.wn(e,t,n,r))}),(r=>{s.push(this.mn(e,t,n,r))})),Xp.waitFor(s)}ln(e){let t=1;return Hw(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Vw(e,t))).filter(((e,t,n)=>!t||0!==Vw(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Vw(s,e),i=Vw(s,t);if(0===n)r[0]=e.Le();else if(n>0&&i<0)r.push(s),r.push(s.Le());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Gw,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Gw,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Qw)}getMinOffset(e,t){return Xp.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||fp())))).next(Qw)}}function $w(e){return aw(e,"collectionParents")}function zw(e){return aw(e,"indexEntries")}function Ww(e){return aw(e,"indexConfiguration")}function Hw(e){return aw(e,"indexState")}function Qw(e){pp(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Hp(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Wp(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yw{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Yw(e,Yw.DEFAULT_COLLECTION_PERCENTILE,Yw.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{pp(1===a)})));const u=[];for(const l of n.mutations){const e=Uv(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Xp.waitFor(s).next((()=>u))}function Zw(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw fp();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yw.DEFAULT_COLLECTION_PERCENTILE=10,Yw.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yw.DEFAULT=new Yw(41943040,Yw.DEFAULT_COLLECTION_PERCENTILE,Yw.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yw.DISABLED=new Yw(-1,0,0);class eI{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){pp(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new eI(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return nI(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=rI(e),s=nI(e);return s.add({}).next((o=>{pp("number"==typeof o);const a=new cw(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>yv(e.ne,t))),i=n.mutations.map((t=>yv(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.wt,this.userId,a),u=[];let l=new ym(((e,t)=>Dp(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Uv(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Bv))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),Xp.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return nI(e).get(t).next((e=>e?(pp(e.userId===this.userId),vw(this.wt,e)):null))}yn(e,t){return this.gn[t]?Xp.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return nI(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(pp(t.batchId>=n),i=vw(this.wt,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return nI(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return nI(e).K("userMutationsIndex",t).next((e=>e.map((e=>vw(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Vv(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return rI(e).J({range:r},((n,r,s)=>{const[o,a,c]=n,u=Mv(a);if(o===this.userId&&t.path.isEqual(u))return nI(e).get(c).next((e=>{if(!e)throw fp();pp(e.userId===this.userId),i.push(vw(this.wt,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ym(Dp);const r=[];return t.forEach((t=>{const i=Vv(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=rI(e).J({range:s},((e,r,i)=>{const[s,o,a]=e,c=Mv(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Xp.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Vv(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new ym(Dp);return rI(e).J({range:s},((e,t,i)=>{const[s,a,c]=e,u=Mv(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(nI(e).get(t).next((e=>{if(null===e)throw fp();pp(e.userId===this.userId),n.push(vw(this.wt,e))})))})),Xp.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Xw(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),Xp.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Xp.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return rI(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Mv(e[1]);r.push(t)}else n.done()})).next((()=>{pp(0===r.length)}))}))}containsKey(e,t){return tI(e,this.userId,t)}Tn(e){return iI(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function tI(e,t,n){const r=Vv(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return rI(e).J({range:s,H:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function nI(e){return aw(e,"mutations")}function rI(e){return aw(e,"documentMutations")}function iI(e){return aw(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new sI(0)}static Rn(){return new sI(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new sI(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>Pp.fromTimestamp(new Op(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>aI(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(pp(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return aI(e).J(((s,o)=>{const a=ww(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Xp.waitFor(i))).next((()=>r))}forEachTarget(e,t){return aI(e).J(((e,n)=>{const r=ww(n);t(r)}))}bn(e){return cI(e).get("targetGlobalKey").next((e=>(pp(null!==e),e)))}Pn(e,t){return cI(e).put("targetGlobalKey",t)}vn(e,t){return aI(e).put(Iw(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ag(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return aI(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=ww(n);ug(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=uI(e);return t.forEach((t=>{const s=Ov(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Xp.waitFor(r)}removeMatchingKeys(e,t,n){const r=uI(e);return Xp.forEach(t,(t=>{const i=Ov(t.path);return Xp.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=uI(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=uI(e);let i=By();return r.J({range:n,H:!0},((e,t,n)=>{const r=Mv(e[1]),s=new Up(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Ov(t.path),r=IDBKeyRange.bound([n],[xp(n)],!1,!0);let i=0;return uI(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}te(e,t){return aI(e).get(t).next((e=>e?ww(e):null))}}function aI(e){return aw(e,"targets")}function cI(e){return aw(e,"targetGlobal")}function uI(e){return aw(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI([e,t],[n,r]){const i=Dp(e,n);return 0===i?Dp(t,r):i}class hI{constructor(e){this.Sn=e,this.buffer=new ym(lI),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();lI(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){up("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){rm(e)?up("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Yp(e)}await this.kn(3e5)}))}}class fI{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.On(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Xp.resolve(lm.ot);const n=new hI(t);return this.Mn.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.Mn.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(up("LruGarbageCollector","Garbage collection skipped; disabled"),Xp.resolve(Jw)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(up("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jw):this.$n(e,t)))}getCacheSize(e){return this.Mn.getCacheSize(e)}$n(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(up("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),ap()<=fe.DEBUG&&up("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Xp.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new fI(e,t)}(this,t)}On(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return mI(e,n)}removeReference(e,t,n){return mI(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return mI(e,t)}Un(e,t){return function(e,t){let n=!1;return iI(e).Y((r=>tI(e,r,t).next((e=>(e&&(n=!0),Xp.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ln(e,((s,o)=>{if(o<=t){const t=this.Un(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Pp.min()),uI(e).delete([0,Ov(s.path)]))))}));r.push(t)}})).next((()=>Xp.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return mI(e,t)}Ln(e,t){const n=uI(e);let r,i=lm.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==lm.ot&&t(new Up(Mv(r)),i),i=o,r=s):i=lm.ot})).next((()=>{i!==lm.ot&&t(new Up(Mv(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function mI(e,t){return uI(e).put(function(e,t){return{targetId:0,path:Ov(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.changes=new Ny((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ig.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Xp.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return bI(e).put(n)}removeEntry(e,t,n){return bI(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],mw(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=ig.newInvalidDocument(t);return bI(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(_I(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:ig.newInvalidDocument(t)};return bI(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(_I(t))},((e,r)=>{n={document:this.Kn(t,r),size:Zw(r)}})).next((()=>n))}getEntries(e,t){let n=Ry();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=Ry(),r=new pm(Up.comparator);return this.Qn(e,t,((e,t)=>{const i=this.Kn(e,t);n=n.insert(e,i),r=r.insert(e,Zw(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return Xp.resolve();let r=new ym(EI);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(_I(r.first()),_I(r.last())),s=r.getIterator();let o=s.getNext();return bI(e).J({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Up.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&EI(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.q(_I(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),mw(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bI(e).K(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=Ry();for(const n of e){const e=this.Kn(Up.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=Ry();const s=TI(t,n),o=TI(t,Wp.max());return bI(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Kn(Up.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new wI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return II(e).get("remoteDocumentGlobalKey").next((e=>(pp(!!e),e)))}qn(e,t){return II(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=fw(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(Pp.min()))return e}return ig.newInvalidDocument(e)}}function vI(e){return new yI(e)}class wI extends gI{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new Ny((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new ym(((e,t)=>Dp(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Hn.get(i);if(t.push(this.zn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=pw(this.zn.wt,s);r=r.add(i.path.popLast());const c=Zw(a);n+=c-o.size,t.push(this.zn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=pw(this.zn.wt,s.convertToNoDocument(Pp.min()));t.push(this.zn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),Xp.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function II(e){return aw(e,"remoteDocumentGlobal")}function bI(e){return aw(e,"remoteDocumentsV14")}function _I(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function TI(e,t){const n=t.documentKey.path.toArray();return[e,mw(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function EI(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Dp(n[s],r[s]),i)return i;return i=Dp(n.length,r.length),i||(i=Dp(n[n.length-2],r[r.length-2]),i||Dp(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class SI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&py(n.mutation,e,Im.empty(),Op.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,By()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=By()){const r=Ly();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Oy();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ly();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,By())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ry();const s=Fy(),o=Fy();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof vy)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),py(o.mutation,t,o.mutation.getFieldMask(),Op.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new SI(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Fy();let r=new pm(((e,t)=>e-t)),i=By();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Im.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||By()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=My();c.forEach((e=>{if(!i.has(e)){const r=dy(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Xp.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Up.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Xp.resolve(Ly());let o=-1,a=i;return s.next((t=>Xp.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Xp.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,By()))).next((e=>({batchId:o,changes:Py(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Up(t)).next((e=>{let t=Oy();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Oy();return this.indexManager.getCollectionParents(e,r).next((s=>Xp.forEach(s,(s=>{const o=function(e,t){return new Cg(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,ig.newInvalidDocument(n)))}));let n=Oy();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&py(s.mutation,i,Im.empty(),Op.now()),qg(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Xp.resolve(ig.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return Xp.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:iv(n.createTime)}),Xp.resolve()}getNamedQuery(e,t){return Xp.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:bw(e.bundledQuery),readTime:iv(e.readTime)}}(t)),Xp.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.overlays=new pm(Up.comparator),this.Xn=new Map}getOverlay(e,t){return Xp.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ly();return Xp.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),Xp.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),Xp.resolve()}getOverlaysForCollection(e,t,n){const r=Ly(),i=t.length+1,s=new Up(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Xp.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new pm(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ly(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ly(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Xp.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new lw(t,n));let i=this.Xn.get(t);void 0===i&&(i=By(),this.Xn.set(t,i)),this.Xn.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.Zn=new ym(DI.ts),this.es=new ym(DI.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new DI(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new DI(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Up(new Mp([])),n=new DI(t,e),r=new DI(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Up(new Mp([])),n=new DI(t,e),r=new DI(t,e+1);let i=By();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new DI(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class DI{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Up.comparator(e.key,t.key)||Dp(e.ls,t.ls)}static ns(e,t){return Dp(e.ls,t.ls)||Up.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new ym(DI.ts)}checkEmpty(e){return Xp.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new cw(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new DI(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Xp.resolve(s)}lookupMutationBatch(e,t){return Xp.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),i=r<0?0:r;return Xp.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Xp.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return Xp.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new DI(t,0),r=new DI(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);i.push(t)})),Xp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ym(Dp);return t.forEach((e=>{const t=new DI(e,0),r=new DI(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),Xp.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Up.isDocumentKey(i)||(i=i.child(""));const s=new DI(new Up(i),0);let o=new ym(Dp);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),Xp.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){pp(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Xp.forEach(t.mutations,(r=>{const i=new DI(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new DI(t,0),r=this.ds.firstAfterOrEqual(n);return Xp.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Xp.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.ps=e,this.docs=new pm(Up.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Xp.resolve(n?n.document.mutableCopy():ig.newInvalidDocument(t))}getEntries(e,t){let n=Ry();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ig.newInvalidDocument(e))})),Xp.resolve(n)}getAllFromCollection(e,t,n){let r=Ry();const i=new Up(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Hp(zp(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Xp.resolve(r)}getAllFromCollectionGroup(e,t,n,r){fp()}Is(e,t){return Xp.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new OI(this)}getSize(e){return Xp.resolve(this.size)}}class OI extends gI{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),Xp.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.persistence=e,this.Ts=new Ny((e=>ag(e)),ug),this.lastRemoteSnapshotVersion=Pp.min(),this.highestTargetId=0,this.Es=0,this.As=new NI,this.targetCount=0,this.Rs=sI.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Xp.resolve()}getLastRemoteSnapshotVersion(e){return Xp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Xp.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Xp.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),Xp.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new sI(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,Xp.resolve()}updateTargetData(e,t){return this.vn(t),Xp.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,Xp.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Xp.waitFor(i).next((()=>r))}getTargetCount(e){return Xp.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Xp.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Xp.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Xp.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),Xp.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Xp.resolve(n)}containsKey(e,t){return Xp.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t){this.bs={},this.overlays={},this.Ps=new lm(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new PI(this),this.indexManager=new qw,this.remoteDocumentCache=function(e){return new xI(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new dw(t),this.Ds=new AI(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new CI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new RI(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){up("MemoryPersistence","Starting transaction:",e);const r=new MI(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return Xp.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class MI extends Jp{constructor(e){super(),this.currentSequenceNumber=e}}class FI{constructor(e){this.persistence=e,this.ks=new NI,this.Ms=null}static Os(e){return new FI(e)}get Fs(){if(this.Ms)return this.Ms;throw fp()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),Xp.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),Xp.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),Xp.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Xp.forEach(this.Fs,(n=>{const r=Up.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,Pp.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return Xp.or([()=>Xp.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.wt=e}M(e,t,n,r){const i=new Zp("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fv,{unique:!0}),e.createObjectStore("documentMutations")}(e),UI(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Xp.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),UI(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Pp.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fv,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Xp.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Bs(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(i))))),n<7&&r>=7&&(s=s.next((()=>this.Us(i)))),n<8&&r>=8&&(s=s.next((()=>this.qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.Ks(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Xv});t.createIndex("collectionPathOverlayIndex",Zv,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ew,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:qv});t.createIndex("documentKeyIndex",jv),t.createIndex("collectionGroupIndex",Gv)}(e))).next((()=>this.Gs(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.Qs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Hv}).createIndex("sequenceNumberIndex",Qv,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Jv}).createIndex("documentKeyIndex",Yv,{unique:!1})}(e)))),s}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=Zw(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>Xp.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>Xp.forEach(n,(n=>{pp(n.userId===t.userId);const r=vw(this.wt,n);return Xw(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,i)=>{const s=new Mp(n),o=function(e){return[0,Ov(e)]}(s);r.push(t.get(o).next((n=>n?Xp.resolve():(n=>t.put({targetId:0,path:Ov(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Xp.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:Wv});const n=t.store("collectionParents"),r=new jw,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Ov(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new Mp(e);return i(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const s=Mv(t);return i(s.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=ww(n),i=Iw(this.wt,r);return t.put(i)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Up(Mp.fromString(o.document.name).popFirst(5)):o.noDocument?Up.fromSegments(o.noDocument.path):o.unknownDocument?Up.fromSegments(o.unknownDocument.path):fp()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Xp.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=vI(this.wt),i=new LI(FI.Os,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:By();vw(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Xp.forEach(n,((e,n)=>{const s=new ip(n),o=Cw.se(this.wt,s),a=i.getIndexManager(s),c=eI.se(s,this.wt,a,i.referenceDelegate);return new kI(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new ow(t,lm.ot),e).next()}))}))}}function UI(e){e.createObjectStore("targetDocuments",{keyPath:$v}).createIndex("documentTargetsIndex",zv,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Kv,{unique:!0}),e.createObjectStore("targetGlobal")}const BI="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class qI{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=i,this.window=s,this.document=o,this.Ws=c,this.zs=u,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!qI.V())throw new vp(yp.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new pI(this,r),this.ei=t+"main",this.wt=new dw(a),this.ni=new em(this.ei,this.Hs,new VI(this.wt)),this.Vs=new oI(this.referenceDelegate,this.wt),this.remoteDocumentCache=vI(this.wt),this.Ds=new Sw,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&lp("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new vp(yp.FAILED_PRECONDITION,BI);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new lm(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>GI(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(rm(e))return up("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return up("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return jI(e).get("owner").next((e=>Xp.resolve(this.di(e))))}_i(e){return GI(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=aw(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Xp.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?Xp.resolve(!0):jI(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new vp(yp.FAILED_PRECONDITION,BI);return!1}}return!(!this.networkEnabled||!this.inForeground)||GI(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&up("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new ow(e,lm.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>GI(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return eI.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Kw(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Cw.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){up("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Hs)?sw:14===s?iw:13===s?rw:12===s?nw:11===s?tw:void fp();var s;let o;return this.ni.runTransaction(e,r,i,(r=>(o=new ow(r,this.Ps?this.Ps.next():lm.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw lp(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new vp(yp.FAILED_PRECONDITION,Qp);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return jI(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new vp(yp.FAILED_PRECONDITION,BI)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return jI(e).put("owner",t)}static V(){return em.V()}li(e){const t=jI(e);return t.get("owner").next((e=>this.di(e)?(up("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Xp.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(lp(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),B()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return up("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return lp("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(Bu){lp("Failed to set zombie client id.",Bu)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(Bu){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function jI(e){return aw(e,"owner")}function GI(e){return aw(e,"clientMetadata")}function KI(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $I{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=By(),r=By();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new $I(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((i=>i||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){if(Rg(t))return Xp.resolve(null);let n=Mg(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Fg(t,null,"F"),n=Mg(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=By(...r);return this.Di.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ki(t,r);return this.Mi(t,s,i,n.readTime)?this.Ci(e,Fg(t,null,"F")):this.Oi(e,s,t,n)}))))})))))}xi(e,t,n,r){return Rg(t)||r.isEqual(Pp.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((i=>{const s=this.ki(t,i);return this.Mi(t,s,n,r)?this.Ni(e,t):(ap()<=fe.DEBUG&&up("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Bg(t)),this.Oi(e,s,t,$p(r,-1)))}))}ki(e,t){let n=new ym(Gg(e));return t.forEach(((t,r)=>{qg(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,t){return ap()<=fe.DEBUG&&up("QueryEngine","Using full collection scan to execute query:",Bg(t)),this.Di.getDocumentsMatchingQuery(e,t,Wp.min())}Oi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new pm(Dp),this.Bi=new Ny((e=>ag(e)),ug),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kI(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function HI(e,t,n,r){return new WI(e,t,n,r)}async function QI(e,t){const n=gp(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=By();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function JI(e,t){const n=gp(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Xp.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);pp(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=By();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function YI(e){const t=gp(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function XI(e,t){const n=gp(e),r=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(_m.EMPTY_BYTE_STRING,Pp.min()).withLastLimboFreeSnapshotVersion(Pp.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Vs.updateTargetData(e,u))}));let a=Ry(),c=By();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(ZI(e,s,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(Pp.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Xp.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=i,e)))}function ZI(e,t,n){let r=By(),i=By();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ry();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Pp.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):up("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function eb(e,t){const n=gp(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function tb(e,t){const n=gp(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((i=>i?(r=i,Xp.resolve(r)):n.Vs.allocateTargetId(e).next((i=>(r=new hw(t,i,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function nb(e,t,n){const r=gp(e),i=r.$i.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!rm(e))throw e;up("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(i.target)}function rb(e,t,n){const r=gp(e);let i=Pp.min(),s=By();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=gp(e),i=r.Bi.get(n);return void 0!==i?Xp.resolve(r.$i.get(i)):r.Vs.getTargetData(t,n)}(r,e,Mg(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?i:Pp.min(),n?s:By()))).next((e=>(ob(r,jg(t),e),{documents:e,ji:s})))))}function ib(e,t){const n=gp(e),r=gp(n.Vs),i=n.$i.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function sb(e,t){const n=gp(e),r=n.Li.get(t)||Pp.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,$p(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(ob(n,t,e),e)))}function ob(e,t,n){let r=Pp.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function ab(e,t,n,r){const i=gp(e);let s=By(),o=Ry();for(const u of n){const e=t.Wi(u.metadata.name);u.document&&(s=s.add(e));const n=t.zi(u);n.setReadTime(t.Hi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Ui.newChangeBuffer({trackRemovals:!0}),c=await tb(i,function(e){return Mg(Dg(Mp.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>ZI(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Vs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}async function cb(e,t,n=By()){const r=await tb(e,Mg(bw(t.bundledQuery))),i=gp(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=iv(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(_m.EMPTY_BYTE_STRING,s);return i.$i=i.$i.insert(o.targetId,o),i.Vs.updateTargetData(e,o).next((()=>i.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ds.saveNamedQuery(e,t)))}))}function ub(e,t){return`firestore_clients_${e}_${t}`}function lb(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function hb(e,t){return`firestore_targets_${e}_${t}`}class db{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new vp(r.error.code,r.error.message))),s?new db(e,t,r.state,i):(lp("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fb{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new vp(n.error.code,n.error.message))),i?new fb(e,n.state,r):(lp("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pb{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=jy();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=Pm(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new pb(e,i):(lp("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class mb{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new mb(t.clientId,t.onlineState):(lp("SharedClientState",`Failed to parse online state: ${e}`),null)}}class gb{constructor(){this.activeTargetIds=jy()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yb{constructor(e,t,n,r,i){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new pm(Dp),this.started=!1,this.ir=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=ub(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new gb),this.cr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const n of e){if(n===this.tr)continue;const e=this.getItem(ub(this.persistenceKey,n));if(e){const t=pb.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(hb(this.persistenceKey,e));if(n){const r=fb.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(hb(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return up("SharedClientState","READ",e,t),t}setItem(e,t){up("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){up("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(up("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void lp("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=lm.ot;if(null!=e)try{const n=JSON.parse(e);pp("number"==typeof n),t=n}catch(e){lp("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==lm.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new db(this.currentUser,e,t,n),i=lb(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Yi())}pr(e){const t=lb(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=hb(this.persistenceKey,e),i=new fb(e,t,n);this.setItem(r,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return pb.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return db.Ji(new ip(i),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return fb.Ji(r,t)}wr(e){return mb.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);up("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),i=this.gr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Or(s,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=jy();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class vb{constructor(){this.Fr=new gb,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new gb,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){up("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){up("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,i){const s=this.oo(e,t);up("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(e,s,o,n).then((e=>(up("RestConnection","Received: ",e),e)),(t=>{throw hp("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ao(e,t,n,r,i,s){return this.ro(e,t,n,r,i)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+sp,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=bb[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((i,s)=>{const o=new np;o.listenOnce(Yf.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Jf.NO_ERROR:const t=o.getResponseJson();up("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Jf.TIMEOUT:up("Connection",'RPC "'+e+'" timed out'),s(new vp(yp.DEADLINE_EXCEEDED,"Request time out"));break;case Jf.HTTP_ERROR:const n=o.getStatus();if(up("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(yp).indexOf(t)>=0?t:yp.UNKNOWN}(e.status);s(new vp(t,e.message))}else s(new vp(yp.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new vp(yp.UNAVAILABLE,"Connection failed."));break;default:fp()}}finally{up("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Hf(),s=Qf(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ep({})),this.uo(o.initMessageHeaders,t,n),x()||M()||F()||V()||U()||L()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");up("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new _b({jr:e=>{l?up("Connection","Not sending because WebChannel is closed:",e):(u||(up("Connection","Opening WebChannel transport."),c.open(),u=!0),up("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,tp.EventType.OPEN,(()=>{l||up("Connection","WebChannel transport opened.")})),d(c,tp.EventType.CLOSE,(()=>{l||(l=!0,up("Connection","WebChannel transport closed"),h.eo())})),d(c,tp.EventType.ERROR,(e=>{l||(l=!0,hp("Connection","WebChannel transport errored:",e),h.eo(new vp(yp.UNAVAILABLE,"The operation could not be completed")))})),d(c,tp.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];pp(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){up("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Sy[e];if(void 0!==t)return Cy(t)}(e),n=i.message;void 0===t&&(t=yp.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.eo(new vp(t,n)),c.close()}else up("Connection","WebChannel received:",n),h.no(n)}})),d(s,Xf.STAT_EVENT,(e=>{e.stat===Zf.PROXY?up("Connection","Detected buffering proxy"):e.stat===Zf.NOPROXY&&up("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(){return"undefined"!=typeof window?window:null}function Sb(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(e){return new ev(e,!0)}class Ab{constructor(e,t,n=1e3,r=1.5,i=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&up("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t,n,r,i,s,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ab(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===yp.RESOURCE_EXHAUSTED?(lp(t.toString()),lp("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===yp.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new vp(yp.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return up("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(up("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Nb extends Cb{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.wt=i}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=gv(this.wt,e),n=function(e){if(!("targetChange"in e))return Pp.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Pp.min():t.readTime?iv(t.readTime):Pp.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=hv(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=lg(r)?{documents:Iv(e,r)}:{query:bv(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=nv(e,t.resumeToken):t.snapshotVersion.compareTo(Pp.min())>0&&(n.readTime=tv(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=Tv(this.wt,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=hv(this.wt),t.removeTarget=e,this.Oo(t)}}class Db extends Cb{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(pp(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=wv(e.writeResults,e.commitTime),n=iv(e.commitTime);return this.listener.Jo(n,t)}return pp(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=hv(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>yv(this.wt,e)))};this.Oo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new vp(yp.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===yp.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new vp(yp.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===yp.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new vp(yp.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class xb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(lp(t),this.su=!1):up("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((e=>{n.enqueueAndForget((async()=>{jb(this)&&(up("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=gp(e);t.lu.add(4),await Lb(t),t._u.set("Unknown"),t.lu.delete(4),await Pb(t)}(this))}))})),this._u=new xb(n,r)}}async function Pb(e){if(jb(e))for(const t of e.fu)await t(!0)}async function Lb(e){for(const t of e.fu)await t(!1)}function Mb(e,t){const n=gp(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),qb(n)?Bb(n):o_(n).Co()&&Vb(n,t))}function Fb(e,t){const n=gp(e),r=o_(n);n.hu.delete(t),r.Co()&&Ub(n,t),0===n.hu.size&&(r.Co()?r.ko():jb(n)&&n._u.set("Unknown"))}function Vb(e,t){e.wu.Nt(t.targetId),o_(e).Qo(t)}function Ub(e,t){e.wu.Nt(t),o_(e).jo(t)}function Bb(e){e.wu=new Qy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),o_(e).start(),e._u.iu()}function qb(e){return jb(e)&&!o_(e).Do()&&e.hu.size>0}function jb(e){return 0===gp(e).lu.size}function Gb(e){e.wu=void 0}async function Kb(e){e.hu.forEach(((t,n)=>{Vb(e,t)}))}async function $b(e,t){Gb(e),qb(e)?(e._u.uu(t),Bb(e)):e._u.set("Unknown")}async function zb(e,t,n){if(e._u.set("Online"),t instanceof Wy&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){up("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Wb(e,n)}else if(t instanceof $y?e.wu.Ut(t):t instanceof zy?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(Pp.min()))try{const t=await YI(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.hu.get(r);i&&e.hu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(_m.EMPTY_BYTE_STRING,n.snapshotVersion)),Ub(e,t);const r=new hw(n.target,t,1,n.sequenceNumber);Vb(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){up("RemoteStore","Failed to raise snapshot:",t),await Wb(e,t)}}async function Wb(e,t,n){if(!rm(t))throw t;e.lu.add(1),await Lb(e),e._u.set("Offline"),n||(n=()=>YI(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{up("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Pb(e)}))}function Hb(e,t){return t().catch((n=>Wb(e,n,t)))}async function Qb(e){const t=gp(e),n=a_(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Jb(t);)try{const e=await eb(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,Yb(t,e)}catch(e){await Wb(t,e)}Xb(t)&&Zb(t)}function Jb(e){return jb(e)&&e.au.length<10}function Yb(e,t){e.au.push(t);const n=a_(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Xb(e){return jb(e)&&!a_(e).Do()&&e.au.length>0}function Zb(e){a_(e).start()}async function e_(e){a_(e).Xo()}async function t_(e){const t=a_(e);for(const n of e.au)t.Ho(n.mutations)}async function n_(e,t,n){const r=e.au.shift(),i=uw.from(r,t,n);await Hb(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Qb(e)}async function r_(e,t){t&&a_(e).zo&&await async function(e,t){if(n=t.code,Ay(n)&&n!==yp.ABORTED){const n=e.au.shift();a_(e).No(),await Hb(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Qb(e)}var n}(e,t),Xb(e)&&Zb(e)}async function i_(e,t){const n=gp(e);n.asyncQueue.verifyOperationInProgress(),up("RemoteStore","RemoteStore received new credentials");const r=jb(n);n.lu.add(3),await Lb(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Pb(n)}async function s_(e,t){const n=gp(e);t?(n.lu.delete(2),await Pb(n)):t||(n.lu.add(2),await Lb(n),n._u.set("Unknown"))}function o_(e){return e.mu||(e.mu=function(e,t,n){const r=gp(e);return r.tu(),new Nb(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:Kb.bind(null,e),Jr:$b.bind(null,e),Go:zb.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),qb(e)?Bb(e):e._u.set("Unknown")):(await e.mu.stop(),Gb(e))}))),e.mu}function a_(e){return e.gu||(e.gu=function(e,t,n){const r=gp(e);return r.tu(),new Db(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:e_.bind(null,e),Jr:r_.bind(null,e),Yo:t_.bind(null,e),Jo:n_.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await Qb(e)):(await e.gu.stop(),e.au.length>0&&(up("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class c_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new wp,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new c_(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new vp(yp.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function u_(e,t){if(lp("AsyncQueue",`${t}: ${e}`),rm(e))return new vp(yp.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Up.comparator(t.key,n.key):(e,t)=>Up.comparator(e.key,t.key),this.keyedMap=Oy(),this.sortedSet=new pm(this.comparator)}static emptySet(e){return new l_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof l_))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new l_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.yu=new pm(Up.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):fp():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class d_{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new d_(e,t,l_.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vg(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.Iu=void 0,this.listeners=[]}}class p_{constructor(){this.queries=new Ny((e=>Ug(e)),Vg),this.onlineState="Unknown",this.Tu=new Set}}async function m_(e,t){const n=gp(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new f_),i)try{s.Iu=await n.onListen(r)}catch(e){const n=u_(e,`Initialization of query '${Bg(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&w_(n)}async function g_(e,t){const n=gp(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function y_(e,t){const n=gp(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(i)&&(r=!0);t.Iu=i}}r&&w_(n)}function v_(e,t,n){const r=gp(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function w_(e){e.Tu.forEach((e=>{e.next()}))}class I_{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new d_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=d_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.wt=e}Wi(e){return cv(this.wt,e)}zi(e){return e.metadata.exists?pv(this.wt,e.document,!1):ig.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return iv(e)}}class T_{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=E_(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Mp.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new __(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||By()).add(e);t.set(n,r)}}return t}async complete(){const e=await ab(this.localStore,new __(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await cb(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function E_(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.key=e}}class k_{constructor(e){this.key=e}}class A_{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=By(),this.mutatedKeys=By(),this.Lu=Gg(e),this.Uu=new l_(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new h_,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=qg(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Gu:n,Mi:o,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fp()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new d_(this.query,e.Uu,r,i,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new h_,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=By(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new k_(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new S_(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=By();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return d_.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class C_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class N_{constructor(e){this.key=e,this.Xu=!1}}class D_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new Ny((e=>Ug(e)),Vg),this.ec=new Map,this.nc=new Set,this.sc=new pm(Up.comparator),this.ic=new Map,this.rc=new NI,this.oc={},this.uc=new Map,this.cc=sI.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function R_(e,t){const n=oT(e);let r,i;const s=n.tc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const e=await tb(n.localStore,Mg(t));n.isPrimaryClient&&Mb(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await x_(n,t,r,"current"===s)}return i}async function x_(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ku(n);i.Mi&&(i=await rb(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return $_(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const i=await rb(e.localStore,t,!0),s=new A_(t,i.ji),o=s.Ku(i.documents),a=Ky.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);$_(e,n,c.zu);const u=new C_(t,n,s);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function O_(e,t){const n=gp(e),r=n.tc.get(t),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((e=>!Vg(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await nb(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Fb(n.remoteStore,r.targetId),G_(n,r.targetId)})).catch(Yp)):(G_(n,r.targetId),await nb(n.localStore,r.targetId,!0))}async function P_(e,t,n){const r=aT(e);try{const e=await function(e,t){const n=gp(e),r=Op.now(),i=t.reduce(((e,t)=>e.add(t.key)),By());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ry(),c=By();return n.Ui.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=my(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new vy(e.key,t,rg(t.value.mapValue),uy.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Py(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new pm(Dp)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await H_(r,e.changes),await Qb(r.remoteStore)}catch(e){const t=u_(e,"Failed to persist write");n.reject(t)}}async function L_(e,t){const n=gp(e);try{const e=await XI(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(pp(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?pp(r.Xu):e.removedDocuments.size>0&&(pp(r.Xu),r.Xu=!1))})),await H_(n,e,t)}catch(e){await Yp(e)}}function M_(e,t,n){const r=gp(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=gp(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Eu(t)&&(r=!0)})),r&&w_(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function F_(e,t,n){const r=gp(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ic.get(t),s=i&&i.key;if(s){let e=new pm(Up.comparator);e=e.insert(s,ig.newNoDocument(s,Pp.min()));const n=By().add(s),i=new Gy(Pp.min(),new Map,new ym(Dp),e,n);await L_(r,i),r.sc=r.sc.remove(s),r.ic.delete(t),W_(r)}else await nb(r.localStore,t,!1).then((()=>G_(r,t,n))).catch(Yp)}async function V_(e,t){const n=gp(e),r=t.batch.batchId;try{const e=await JI(n.localStore,t);j_(n,r,null),q_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await H_(n,e)}catch(e){await Yp(e)}}async function U_(e,t,n){const r=gp(e);try{const e=await function(e,t){const n=gp(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(pp(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);j_(r,t,n),q_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await H_(r,e)}catch(n){await Yp(n)}}async function B_(e,t){const n=gp(e);jb(n.remoteStore)||up("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=gp(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=u_(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function q_(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function j_(e,t,n){const r=gp(e);let i=r.oc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.oc[r.currentUser.toKey()]=i}}function G_(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||K_(e,t)}))}function K_(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(Fb(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),W_(e))}function $_(e,t,n){for(const r of n)r instanceof S_?(e.rc.addReference(r.key,t),z_(e,r)):r instanceof k_?(up("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||K_(e,r.key)):fp()}function z_(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(up("SyncEngine","New document in limbo: "+n),e.nc.add(r),W_(e))}function W_(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new Up(Mp.fromString(t)),r=e.cc.next();e.ic.set(r,new N_(n)),e.sc=e.sc.insert(n,r),Mb(e.remoteStore,new hw(Mg(Dg(n.path)),r,2,lm.ot))}}async function H_(e,t,n){const r=gp(e),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=$I.Vi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(e,t){const n=gp(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Xp.forEach(t,(t=>Xp.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Xp.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!rm(e))throw e;up("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,i)}}}(r.localStore,s))}async function Q_(e,t){const n=gp(e);if(!n.currentUser.isEqual(t)){up("SyncEngine","User change. New user:",t.toKey());const e=await QI(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new vp(yp.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await H_(n,e.Ki)}}function J_(e,t){const n=gp(e),r=n.ic.get(t);if(r&&r.Xu)return By().add(r.key);{let e=By();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function Y_(e,t){const n=gp(e),r=await rb(n.localStore,t.query,!0),i=t.view.Ju(r);return n.isPrimaryClient&&$_(n,t.targetId,i.zu),i}async function X_(e,t){const n=gp(e);return sb(n.localStore,t).then((e=>H_(n,e)))}async function Z_(e,t,n,r){const i=gp(e),s=await function(e,t){const n=gp(e),r=gp(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Xp.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Qb(i.remoteStore):"acknowledged"===n||"rejected"===n?(j_(i,t,r||null),q_(i,t),function(e,t){gp(gp(e).mutationQueue).In(t)}(i.localStore,t)):fp(),await H_(i,s)):up("SyncEngine","Cannot apply mutation batch with id: "+t)}async function eT(e,t){const n=gp(e);if(oT(n),aT(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await tT(n,e.toArray());n.ac=!0,await s_(n.remoteStore,!0);for(const r of t)Mb(n.remoteStore,r)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(G_(n,i),nb(n.localStore,i,!0)))),Fb(n.remoteStore,i)})),await t,await tT(n,e),function(e){const t=gp(e);t.ic.forEach(((e,n)=>{Fb(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new pm(Up.comparator)}(n),n.ac=!1,await s_(n.remoteStore,!1)}}async function tT(e,t,n){const r=gp(e),i=[],s=[];for(const o of t){let e;const t=r.ec.get(o);if(t&&0!==t.length){e=await tb(r.localStore,Mg(t[0]));for(const e of t){const t=r.tc.get(e),n=await Y_(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await ib(r.localStore,o);e=await tb(r.localStore,t),await x_(r,nT(t),o,!1)}i.push(e)}return r.Zu.Go(s),i}function nT(e){return Ng(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function rT(e){const t=gp(e);return gp(gp(t.localStore).persistence).Ri()}async function iT(e,t,n,r){const i=gp(e);if(i.ac)return void up("SyncEngine","Ignoring unexpected query state notification.");const s=i.ec.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await sb(i.localStore,jg(s[0])),r=Gy.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await H_(i,e,r);break}case"rejected":await nb(i.localStore,t,!0),G_(i,t,r);break;default:fp()}}async function sT(e,t,n){const r=oT(e);if(r.ac){for(const e of t){if(r.ec.has(e)){up("SyncEngine","Adding an already active target "+e);continue}const t=await ib(r.localStore,e),n=await tb(r.localStore,t);await x_(r,nT(t),n.targetId,!1),Mb(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await nb(r.localStore,e,!1).then((()=>{Fb(r.remoteStore,e),G_(r,e)})).catch(Yp)}}function oT(e){const t=gp(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=L_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=J_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=F_.bind(null,t),t.Zu.Go=y_.bind(null,t.eventManager),t.Zu.lc=v_.bind(null,t.eventManager),t}function aT(e){const t=gp(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=V_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=U_.bind(null,t),t}function cT(e,t,n){const r=gp(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=gp(e),r=iv(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(E_(r));const i=new T_(r,e.localStore,t.wt);let s=await t.fc();for(;s;){const e=await i.Nu(s);e&&n._updateProgress(e),s=await t.fc()}const o=await i.complete();return await H_(e,o.Ou,void 0),await function(e,t){const n=gp(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return hp("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class uT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=kb(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return HI(this.persistence,new zI,e.initialUser,this.wt)}_c(e){return new LI(FI.Os,this.wt)}dc(e){return new vb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lT extends uT{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await aT(this.yc.syncEngine),await Qb(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return HI(this.persistence,new zI,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new dI(n,e.asyncQueue,t)}gc(e,t){const n=new um(t,this.persistence);return new cm(e.asyncQueue,n)}_c(e){const t=KI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Yw.withCacheSize(this.cacheSizeBytes):Yw.DEFAULT;return new qI(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Eb(),Sb(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new vb}}class hT extends lT{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof yb&&(this.sharedClientState.syncEngine={kr:Z_.bind(null,t),Mr:iT.bind(null,t),Or:sT.bind(null,t),Ri:rT.bind(null,t),Nr:X_.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await eT(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=Eb();if(!yb.V(t))throw new vp(yp.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=KI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new yb(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class dT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>M_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q_.bind(null,this.syncEngine),await s_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new p_}createDatastore(e){const t=kb(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Tb(r));var r;return function(e,t,n,r){return new Rb(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>M_(this.syncEngine,e,0),s=Ib.V()?new Ib:new wb,new Ob(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new D_(e,t,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=gp(e);up("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await Lb(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):lp("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new wp,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new b_(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new vp(yp.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=gp(e),r=hv(n.wt)+"/documents",i={documents:t.map((e=>av(n.wt,e)))},s=await n.ao("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=mv(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());pp(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new _y(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Up.fromPath(t);this.mutations.push(new Ty(n,this.precondition(n)))})),await async function(e,t){const n=gp(e),r=hv(n.wt)+"/documents",i={writes:t.map((e=>yv(n.wt,e)))};await n.ro("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw fp();t=Pp.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new vp(yp.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?uy.updateTime(t):uy.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Pp.min()))throw new vp(yp.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return uy.updateTime(t)}return uy.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Dc=n.maxAttempts,this.So=new Ab(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new gT(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!xm(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ay(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ip.UNAUTHENTICATED,this.clientId=Np.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{up("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(up("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new vp(yp.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wp;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=u_(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function wT(e,t){e.asyncQueue.verifyOperationInProgress(),up("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await QI(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function IT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bT(e);up("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>i_(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>i_(t.remoteStore,n))),e.onlineComponents=t}async function bT(e){return e.offlineComponents||(up("FirestoreClient","Using default OfflineComponentProvider"),await wT(e,new uT)),e.offlineComponents}async function _T(e){return e.onlineComponents||(up("FirestoreClient","Using default OnlineComponentProvider"),await IT(e,new dT)),e.onlineComponents}function TT(e){return bT(e).then((e=>e.persistence))}function ET(e){return bT(e).then((e=>e.localStore))}function ST(e){return _T(e).then((e=>e.remoteStore))}function kT(e){return _T(e).then((e=>e.syncEngine))}async function AT(e){const t=await _T(e),n=t.eventManager;return n.onListen=R_.bind(null,t.syncEngine),n.onUnlisten=O_.bind(null,t.syncEngine),n}function CT(e){return e.asyncQueue.enqueue((async()=>{const t=await TT(e),n=await ST(e);return t.setNetworkEnabled(!0),function(e){const t=gp(e);return t.lu.delete(0),Pb(t)}(n)}))}function NT(e){return e.asyncQueue.enqueue((async()=>{const t=await TT(e),n=await ST(e);return t.setNetworkEnabled(!1),async function(e){const t=gp(e);t.lu.add(0),await Lb(t),t._u.set("Offline")}(n)}))}function DT(e,t){const n=new wp;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=gp(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new vp(yp.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=u_(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await ET(e),t,n))),n.promise}function RT(e,t,n={}){const r=new wp;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new pT({next:s=>{t.enqueueAndForget((()=>g_(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new vp(yp.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new vp(yp.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new I_(Dg(n.path),s,{includeMetadataChanges:!0,Du:!0});return m_(e,o)}(await AT(e),e.asyncQueue,t,n,r))),r.promise}function xT(e,t){const n=new wp;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await rb(e,t,!0),i=new A_(t,r.ji),s=i.Ku(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=u_(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await ET(e),t,n))),n.promise}function OT(e,t,n={}){const r=new wp;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new pT({next:n=>{t.enqueueAndForget((()=>g_(e,o))),n.fromCache&&"server"===r.source?i.reject(new vp(yp.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new I_(n,s,{includeMetadataChanges:!0,Du:!0});return m_(e,o)}(await AT(e),e.asyncQueue,t,n,r))),r.promise}function PT(e,t){const n=new pT(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){gp(e).Tu.add(t),t.next()}(await AT(e),n))),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){gp(e).Tu.delete(t)}(await AT(e),n)))}}function LT(e,t,n){const r=new wp;return e.asyncQueue.enqueueAndForget((async()=>{const i=await function(e){return _T(e).then((e=>e.datastore))}(e);new yT(e.asyncQueue,i,n,t,r).run()})),r.promise}function MT(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new mT(e,t)}(function(e,t){if(e instanceof Uint8Array)return fT(e,t);if(e instanceof ArrayBuffer)return fT(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,kb(t));e.asyncQueue.enqueueAndForget((async()=>{cT(await kT(e),i,r)}))}function FT(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=gp(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await ET(e),t)))}const VT=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(e,t,n){if(!n)throw new vp(yp.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function BT(e,t,n,r){if(!0===t&&!0===r)throw new vp(yp.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qT(e){if(!Up.isDocumentKey(e))throw new vp(yp.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function jT(e){if(Up.isDocumentKey(e))throw new vp(yp.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function GT(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":fp()}function KT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new vp(yp.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=GT(e);throw new vp(yp.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function $T(e,t){if(t<=0)throw new vp(yp.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new vp(yp.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new vp(yp.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,BT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zT({}),this._settingsFrozen=!1,e instanceof Rm?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new vp(yp.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rm(e.options.projectId)}(e))}get app(){if(!this._app)throw new vp(yp.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new vp(yp.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new bp;switch(e.type){case"gapi":const t=e.client;return pp(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Sp(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new vp(yp.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=VT.get(e);t&&(up("ComponentProvider","Removing Datastore"),VT.delete(e),t.terminate())}(this),Promise.resolve()}}function HT(e,t,n,r={}){var i;const s=(e=KT(e,WT))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&hp("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=ip.MOCK_USER;else{t=D(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new vp(yp.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ip(s)}e._authCredentials=new _p(new Ip(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new YT(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new QT(this.firestore,e,this._key)}}class JT{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new JT(this.firestore,e,this._query)}}class YT extends JT{constructor(e,t,n){super(e,t,Dg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new QT(this.firestore,null,new Up(e))}withConverter(e){return new YT(this.firestore,e,this._path)}}function XT(e,t,...n){if(e=se(e),UT("collection","path",t),e instanceof WT){const r=Mp.fromString(t,...n);return jT(r),new YT(e,null,r)}{if(!(e instanceof QT||e instanceof YT))throw new vp(yp.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Mp.fromString(t,...n));return jT(r),new YT(e.firestore,null,r)}}function ZT(e,t){if(e=KT(e,WT),UT("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new vp(yp.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new JT(e,null,function(e){return new Cg(Mp.emptyPath(),e)}(t))}function eE(e,t,...n){if(e=se(e),1===arguments.length&&(t=Np.I()),UT("doc","path",t),e instanceof WT){const r=Mp.fromString(t,...n);return qT(r),new QT(e,null,new Up(r))}{if(!(e instanceof QT||e instanceof YT))throw new vp(yp.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Mp.fromString(t,...n));return qT(r),new QT(e.firestore,e instanceof YT?e.converter:null,new Up(r))}}function tE(e,t){return e=se(e),t=se(t),(e instanceof QT||e instanceof YT)&&(t instanceof QT||t instanceof YT)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function nE(e,t){return e=se(e),t=se(t),e instanceof JT&&t instanceof JT&&e.firestore===t.firestore&&Vg(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class rE{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ab(this,"async_queue_retry"),this.Kc=()=>{const e=Sb();e&&up("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Sb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Sb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new wp;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Oc.push(e),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(Bu){if(!rm(Bu))throw Bu;up("AsyncQueue","Operation failed with retryable error: "+Bu)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Mc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw lp("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Mc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=c_.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&fp()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Mc,await e}while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function iE(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class sE{constructor(){this._progressObserver={},this._taskCompletionResolver=new wp,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=-1;class aE extends WT{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new rE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||uE(this),this._firestoreClient.terminate()}}function cE(e){return e._firestoreClient||uE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function uE(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Dm(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vT(e._authCredentials,e._appCheckCredentials,e._queue,r)}function lE(e,t){wE(e=KT(e,aE));const n=cE(e),r=e._freezeSettings(),i=new dT;return dE(n,i,new lT(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function hE(e){wE(e=KT(e,aE));const t=cE(e),n=e._freezeSettings(),r=new dT;return dE(t,r,new hT(r,n.cacheSizeBytes))}function dE(e,t,n){const r=new wp;return e.asyncQueue.enqueue((async()=>{try{await wT(e,n),await IT(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===yp.FAILED_PRECONDITION||e.code===yp.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;hp("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function fE(e){if(e._initialized&&!e._terminated)throw new vp(yp.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new wp;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!em.V())return Promise.resolve();const t=e+"main";await em.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(KI(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function pE(e){return function(e){const t=new wp;return e.asyncQueue.enqueueAndForget((async()=>B_(await kT(e),t))),t.promise}(cE(e=KT(e,aE)))}function mE(e){return CT(cE(e=KT(e,aE)))}function gE(e){return NT(cE(e=KT(e,aE)))}function yE(e,t){const n=cE(e=KT(e,aE)),r=new sE;return MT(n,e._databaseId,t,r),r}function vE(e,t){return FT(cE(e=KT(e,aE)),t).then((t=>t?new JT(e,null,t.query):null))}function wE(e){if(e._initialized||e._terminated)throw new vp(yp.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new vp(yp.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vp(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bE{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bE(_m.fromBase64String(e))}catch(e){throw new vp(yp.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bE(_m.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new vp(yp.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new vp(yp.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Dp(this._lat,e._lat)||Dp(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=/^__.*__$/;class SE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new vy(e,this.data,this.fieldMask,t,this.fieldTransforms):new yy(e,this.data,t,this.fieldTransforms)}}class kE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new vy(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function AE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fp()}}class CE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new CE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return HE(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(AE(this.Zc)&&EE.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class NE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||kb(e)}aa(e,t,n,r=!1){return new CE({Zc:e,methodName:t,ca:n,path:Vp.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function DE(e){const t=e._freezeSettings(),n=kb(e._databaseId);return new NE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function RE(e,t,n,r,i,s={}){const o=e.aa(s.merge||s.mergeFields?2:0,t,n,i);KE("Data must be an object, but it was:",o,r);const a=jE(r,o);let c,u;if(s.merge)c=new Im(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=$E(t,r,n);if(!o.contains(i))throw new vp(yp.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);QE(e,i)||e.push(i)}c=new Im(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new SE(new ng(a),c,u)}class xE extends _E{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xE}}function OE(e,t,n){return new CE({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class PE extends _E{_toFieldTransform(e){return new oy(e.path,new Xg)}isEqual(e){return e instanceof PE}}class LE extends _E{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=OE(this,e,!0),n=this.ha.map((e=>qE(e,t))),r=new Zg(n);return new oy(e.path,r)}isEqual(e){return this===e}}class ME extends _E{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=OE(this,e,!0),n=this.ha.map((e=>qE(e,t))),r=new ty(n);return new oy(e.path,r)}isEqual(e){return this===e}}class FE extends _E{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new ry(e.wt,Wg(e.wt,this.la));return new oy(e.path,t)}isEqual(e){return this===e}}function VE(e,t,n,r){const i=e.aa(1,t,n);KE("Data must be an object, but it was:",i,r);const s=[],o=ng.empty();dm(r,((e,r)=>{const a=WE(t,e,n);r=se(r);const c=i.ia(a);if(r instanceof xE)s.push(a);else{const e=qE(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Im(s);return new kE(o,a,i.fieldTransforms)}function UE(e,t,n,r,i,s){const o=e.aa(1,t,n),a=[$E(t,r,n)],c=[i];if(s.length%2!=0)throw new vp(yp.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push($E(t,s[d])),c.push(s[d+1]);const u=[],l=ng.empty();for(let d=a.length-1;d>=0;--d)if(!QE(u,a[d])){const e=a[d];let t=c[d];t=se(t);const n=o.ia(e);if(t instanceof xE)u.push(e);else{const r=qE(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new Im(u);return new kE(l,h,o.fieldTransforms)}function BE(e,t,n,r=!1){return qE(n,e.aa(r?4:3,t))}function qE(e,t){if(GE(e=se(e)))return KE("Unsupported field value:",t,e),jE(e,t);if(e instanceof _E)return function(e,t){if(!AE(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=qE(i,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=se(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Wg(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Op.fromDate(e);return{timestampValue:tv(t.wt,n)}}if(e instanceof Op){const n=new Op(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tv(t.wt,n)}}if(e instanceof TE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bE)return{bytesValue:nv(t.wt,e._byteString)};if(e instanceof QT){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sv(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${GT(e)}`)}(e,t)}function jE(e,t){const n={};return fm(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dm(e,((e,r)=>{const i=qE(r,t.ea(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function GE(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Op||e instanceof TE||e instanceof bE||e instanceof QT||e instanceof _E)}function KE(e,t,n){if(!GE(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=GT(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function $E(e,t,n){if((t=se(t))instanceof IE)return t._internalPath;if("string"==typeof t)return WE(e,t);throw HE("Field path arguments must be of type string or ",e,!1,void 0,n)}const zE=new RegExp("[~\\*/\\[\\]]");function WE(e,t,n){if(t.search(zE)>=0)throw HE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new IE(...t.split("."))._internalPath}catch(r){throw HE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function HE(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new vp(yp.INVALID_ARGUMENT,a+e+c)}function QE(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new QT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new YE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(XE("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class YE extends JE{data(){return super.data()}}function XE(e,t){return"string"==typeof t?WE(e,t):t instanceof IE?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eS extends JE{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(XE("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class tS extends eS{data(e={}){return super.data(e)}}class nS{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ZE(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new tS(this._firestore,this._userDataWriter,n.key,n,new ZE(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new vp(yp.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new tS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ZE(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new tS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ZE(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:rS(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fp()}}function iS(e,t){return e instanceof eS&&t instanceof eS?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof nS&&t instanceof nS&&e._firestore===t._firestore&&nE(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new vp(yp.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oS{}function aS(e,...t){for(const n of t)e=n._apply(e);return e}class cS extends oS{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=DE(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new vp(yp.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){TS(o,s);const t=[];for(const n of o)t.push(_S(r,e,n));a={arrayValue:{values:t}}}else a=_S(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||TS(o,s),a=BE(n,t,o,"in"===s||"not-in"===s);const c=pg.create(i,s,a);return function(e,t){if(t.ht()){const n=Og(e);if(null!==n&&!n.isEqual(t.field))throw new vp(yp.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=xg(e);null!==r&&ES(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new vp(yp.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new vp(yp.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new JT(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Cg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function uS(e,t,n){const r=t,i=XE("where",e);return new cS(i,r,n)}class lS extends oS{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new vp(yp.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new vp(yp.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Eg(t,n);return function(e,t){if(null===xg(e)){const n=Og(e);null!==n&&ES(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new JT(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Cg(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function hS(e,t="asc"){const n=t,r=XE("orderBy",e);return new lS(r,n)}class dS extends oS{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new JT(e.firestore,e.converter,Fg(e._query,this.ma,this.ga))}}function fS(e){return $T("limit",e),new dS("limit",e,"F")}function pS(e){return $T("limitToLast",e),new dS("limitToLast",e,"L")}class mS extends oS{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=bS(e,this.type,this.ya,this.pa);return new JT(e.firestore,e.converter,function(e,t){return new Cg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function gS(...e){return new mS("startAt",e,!0)}function yS(...e){return new mS("startAfter",e,!1)}class vS extends oS{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=bS(e,this.type,this.ya,this.pa);return new JT(e.firestore,e.converter,function(e,t){return new Cg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function wS(...e){return new vS("endBefore",e,!1)}function IS(...e){return new vS("endAt",e,!0)}function bS(e,t,n,r){if(n[0]=se(n[0]),n[0]instanceof JE)return function(e,t,n,r,i){if(!r)throw new vp(yp.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Lg(e))if(o.field.isKeyField())s.push(Km(t,r.key));else{const e=r.data.field(o.field);if(Am(e))throw new vp(yp.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new vp(yp.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Tg(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=DE(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new vp(yp.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new vp(yp.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Pg(e)&&-1!==s.indexOf("/"))throw new vp(yp.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Mp.fromString(s));if(!Up.isDocumentKey(n))throw new vp(yp.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Up(n);a.push(Km(t,i))}else{const e=BE(n,r,s);a.push(e)}}return new Tg(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function _S(e,t,n){if("string"==typeof(n=se(n))){if(""===n)throw new vp(yp.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pg(t)&&-1!==n.indexOf("/"))throw new vp(yp.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Mp.fromString(n));if(!Up.isDocumentKey(r))throw new vp(yp.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Km(e,new Up(r))}if(n instanceof QT)return Km(e,n._key);throw new vp(yp.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${GT(n)}.`)}function TS(e,t){if(!Array.isArray(e)||0===e.length)throw new vp(yp.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new vp(yp.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function ES(e,t,n){if(!n.isEqual(t))throw new vp(yp.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{convertValue(e,t="none"){switch(Fm(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Sm(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(km(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw fp()}}convertObject(e,t){const n={};return dm(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new TE(Sm(e.latitude),Sm(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cm(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Nm(e));default:return null}}convertTimestamp(e){const t=Em(e);return new Op(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Mp.fromString(e);pp(xv(n));const r=new Rm(n.get(1),n.get(3)),i=new Up(n.popFirst(5));return r.isEqual(t)||lp(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class CS extends kS{constructor(e){super(),this.firestore=e}convertBytes(e){return new bE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new QT(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=DE(e)}set(e,t,n){this._verifyNotCommitted();const r=DS(e,this._firestore),i=AS(r.converter,t,n),s=RE(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,uy.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=DS(e,this._firestore);let s;return s="string"==typeof(t=se(t))||t instanceof IE?UE(this._dataReader,"WriteBatch.update",i._key,t,n,r):VE(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,uy.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=DS(e,this._firestore);return this._mutations=this._mutations.concat(new _y(t._key,uy.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new vp(yp.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function DS(e,t){if((e=se(e)).firestore!==t)throw new vp(yp.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(e){e=KT(e,QT);const t=KT(e.firestore,aE);return RT(cE(t),e._key).then((n=>$S(t,e,n)))}class xS extends kS{constructor(e){super(),this.firestore=e}convertBytes(e){return new bE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new QT(this.firestore,null,t)}}function OS(e){e=KT(e,QT);const t=KT(e.firestore,aE),n=cE(t),r=new xS(t);return DT(n,e._key).then((n=>new eS(t,r,e._key,n,new ZE(null!==n&&n.hasLocalMutations,!0),e.converter)))}function PS(e){e=KT(e,QT);const t=KT(e.firestore,aE);return RT(cE(t),e._key,{source:"server"}).then((n=>$S(t,e,n)))}function LS(e){e=KT(e,JT);const t=KT(e.firestore,aE),n=cE(t),r=new xS(t);return sS(e._query),OT(n,e._query).then((n=>new nS(t,r,e,n)))}function MS(e){e=KT(e,JT);const t=KT(e.firestore,aE),n=cE(t),r=new xS(t);return xT(n,e._query).then((n=>new nS(t,r,e,n)))}function FS(e){e=KT(e,JT);const t=KT(e.firestore,aE),n=cE(t),r=new xS(t);return OT(n,e._query,{source:"server"}).then((n=>new nS(t,r,e,n)))}function VS(e,t,n){e=KT(e,QT);const r=KT(e.firestore,aE),i=AS(e.converter,t,n);return KS(r,[RE(DE(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,uy.none())])}function US(e,t,n,...r){e=KT(e,QT);const i=KT(e.firestore,aE),s=DE(i);let o;return o="string"==typeof(t=se(t))||t instanceof IE?UE(s,"updateDoc",e._key,t,n,r):VE(s,"updateDoc",e._key,t),KS(i,[o.toMutation(e._key,uy.exists(!0))])}function BS(e){return KS(KT(e.firestore,aE),[new _y(e._key,uy.none())])}function qS(e,t){const n=KT(e.firestore,aE),r=eE(e),i=AS(e.converter,t);return KS(n,[RE(DE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,uy.exists(!1))]).then((()=>r))}function jS(e,...t){var n,r,i;e=se(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||iE(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(iE(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof QT)u=KT(e.firestore,aE),l=Dg(e._key.path),c={next:n=>{t[o]&&t[o]($S(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=KT(e,JT);u=KT(n.firestore,aE),l=n._query;const r=new xS(u);c={next:e=>{t[o]&&t[o](new nS(u,r,n,e))},error:t[o+1],complete:t[o+2]},sS(e._query)}return function(e,t,n,r){const i=new pT(r),s=new I_(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>m_(await AT(e),s))),()=>{i.Tc(),e.asyncQueue.enqueueAndForget((async()=>g_(await AT(e),s)))}}(cE(u),l,a,c)}function GS(e,t){return PT(cE(e=KT(e,aE)),iE(t)?t:{next:t})}function KS(e,t){return function(e,t){const n=new wp;return e.asyncQueue.enqueueAndForget((async()=>P_(await kT(e),t,n))),n.promise}(cE(e),t)}function $S(e,t,n){const r=n.docs.get(t._key),i=new xS(e);return new eS(e,i,t._key,r,new ZE(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=DE(e)}get(e){const t=DS(e,this._firestore),n=new CS(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return fp();const r=e[0];if(r.isFoundDocument())return new JE(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new JE(this._firestore,n,t._key,null,t.converter);throw fp()}))}set(e,t,n){const r=DS(e,this._firestore),i=AS(r.converter,t,n),s=RE(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=DS(e,this._firestore);let s;return s="string"==typeof(t=se(t))||t instanceof IE?UE(this._dataReader,"Transaction.update",i._key,t,n,r):VE(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=DS(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=DS(e,this._firestore),n=new xS(this._firestore);return super.get(e).then((e=>new eS(this._firestore,n,t._key,e._document,new ZE(!1,!1),t.converter)))}}function WS(e,t,n){e=KT(e,aE);const r=Object.assign(Object.assign({},SS),n);return function(e){if(e.maxAttempts<1)throw new vp(yp.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),LT(cE(e),(n=>t(new zS(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){return new xE("deleteField")}function QS(){return new PE("serverTimestamp")}function JS(...e){return new LE("arrayUnion",e)}function YS(...e){return new ME("arrayRemove",e)}function XS(e){return new FE("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){sp=e}(Ot),kt(new oe("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new aE(r,new Tp(e.getProvider("auth-internal")),new Ap(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),Vt(rp,"3.4.14",e),Vt(rp,"3.4.14","esm2017")}();const ZS="@firebase/firestore-compat",ek="0.1.23";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tk(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new vp("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(){if("undefined"===typeof Uint8Array)throw new vp("unimplemented","Uint8Arrays are not available in this environment.")}function rk(){if(!bm())throw new vp("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ik{constructor(e){this._delegate=e}static fromBase64String(e){return rk(),new ik(bE.fromBase64String(e))}static fromUint8Array(e){return nk(),new ik(bE.fromUint8Array(e))}toBase64(){return rk(),this._delegate.toBase64()}toUint8Array(){return nk(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(e){return ok(e,["next","error","complete"])}function ok(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{enableIndexedDbPersistence(e,t){return lE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return hE(e._delegate)}clearIndexedDbPersistence(e){return fE(e._delegate)}}class ck{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Rm||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||hp("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){HT(this._delegate,e,t,n)}enableNetwork(){return mE(this._delegate)}disableNetwork(){return gE(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,BT("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return pE(this._delegate)}onSnapshotsInSync(e){return GS(this._delegate,e)}get app(){if(!this._appCompat)throw new vp("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Tk(this,XT(this._delegate,e))}catch(t){throw mk(t,"collection()","Firestore.collection()")}}doc(e){try{return new pk(this,eE(this._delegate,e))}catch(t){throw mk(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ik(this,ZT(this._delegate,e))}catch(t){throw mk(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return WS(this._delegate,(t=>e(new hk(this,t))))}batch(){return cE(this._delegate),new dk(new NS(this._delegate,(e=>KS(this._delegate,e))))}loadBundle(e){return yE(this._delegate,e)}namedQuery(e){return vE(this._delegate,e).then((e=>e?new Ik(this,e):null))}}class uk extends kS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ik(new bE(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return pk.forKey(t,this.firestore,null)}}function lk(e){cp(e)}class hk{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new uk(e)}get(e){const t=Ek(e);return this._delegate.get(t).then((e=>new vk(this._firestore,new eS(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Ek(e);return n?(tk("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Ek(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Ek(e);return this._delegate.delete(t),this}}class dk{constructor(e){this._delegate=e}set(e,t,n){const r=Ek(e);return n?(tk("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Ek(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Ek(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class fk{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new tS(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new wk(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=fk.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new fk(e,new uk(e),t),r.set(t,i)),i}}fk.INSTANCES=new WeakMap;class pk{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new uk(e)}static forPath(e,t,n){if(e.length%2!==0)throw new vp("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new pk(t,new QT(t._delegate,n,new Up(e)))}static forKey(e,t,n){return new pk(t,new QT(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Tk(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Tk(this.firestore,XT(this._delegate,e))}catch(t){throw mk(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=se(e),e instanceof QT&&tE(this._delegate,e)}set(e,t){t=tk("DocumentReference.set",t);try{return t?VS(this._delegate,e,t):VS(this._delegate,e)}catch(n){throw mk(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?US(this._delegate,e):US(this._delegate,e,t,...n)}catch(r){throw mk(r,"updateDoc()","DocumentReference.update()")}}delete(){return BS(this._delegate)}onSnapshot(...e){const t=gk(e),n=yk(e,(e=>new vk(this.firestore,new eS(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return jS(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?OS(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?PS(this._delegate):RS(this._delegate),t.then((e=>new vk(this.firestore,new eS(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new pk(this.firestore,e?this._delegate.withConverter(fk.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mk(e,t,n){return e.message=e.message.replace(t,n),e}function gk(e){for(const t of e)if("object"===typeof t&&!sk(t))return t;return{}}function yk(e,t){var n,r;let i;return i=sk(e[0])?e[0]:sk(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class vk{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new pk(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return iS(this._delegate,e._delegate)}}class wk extends vk{data(e){const t=this._delegate.data(e);return mp(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Ik{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new uk(e)}where(e,t,n){try{return new Ik(this.firestore,aS(this._delegate,uS(e,t,n)))}catch(r){throw mk(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ik(this.firestore,aS(this._delegate,hS(e,t)))}catch(n){throw mk(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ik(this.firestore,aS(this._delegate,fS(e)))}catch(t){throw mk(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ik(this.firestore,aS(this._delegate,pS(e)))}catch(t){throw mk(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ik(this.firestore,aS(this._delegate,gS(...e)))}catch(t){throw mk(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ik(this.firestore,aS(this._delegate,yS(...e)))}catch(t){throw mk(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ik(this.firestore,aS(this._delegate,wS(...e)))}catch(t){throw mk(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ik(this.firestore,aS(this._delegate,IS(...e)))}catch(t){throw mk(t,"endAt()","Query.endAt()")}}isEqual(e){return nE(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?MS(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?FS(this._delegate):LS(this._delegate),t.then((e=>new _k(this.firestore,new nS(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=gk(e),n=yk(e,(e=>new _k(this.firestore,new nS(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return jS(this._delegate,t,n)}withConverter(e){return new Ik(this.firestore,e?this._delegate.withConverter(fk.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class bk{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new wk(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class _k{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ik(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new wk(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new bk(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new wk(this._firestore,n))}))}isEqual(e){return iS(this._delegate,e._delegate)}}class Tk extends Ik{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new pk(this.firestore,e):null}doc(e){try{return new pk(this.firestore,void 0===e?eE(this._delegate):eE(this._delegate,e))}catch(t){throw mk(t,"doc()","CollectionReference.doc()")}}add(e){return qS(this._delegate,e).then((e=>new pk(this.firestore,e)))}isEqual(e){return tE(this._delegate,e._delegate)}withConverter(e){return new Tk(this.firestore,e?this._delegate.withConverter(fk.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ek(e){return KT(e,QT)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(...e){this._delegate=new IE(...e)}static documentId(){return new Sk(Vp.keyField().canonicalString())}isEqual(e){return e=se(e),e instanceof IE&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this._delegate=e}static serverTimestamp(){const e=QS();return e._methodName="FieldValue.serverTimestamp",new kk(e)}static delete(){const e=HS();return e._methodName="FieldValue.delete",new kk(e)}static arrayUnion(...e){const t=JS(...e);return t._methodName="FieldValue.arrayUnion",new kk(t)}static arrayRemove(...e){const t=YS(...e);return t._methodName="FieldValue.arrayRemove",new kk(t)}static increment(e){const t=XS(e);return t._methodName="FieldValue.increment",new kk(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={Firestore:ck,GeoPoint:TE,Timestamp:Op,Blob:ik,Transaction:hk,WriteBatch:dk,DocumentReference:pk,DocumentSnapshot:vk,Query:Ik,QueryDocumentSnapshot:wk,QuerySnapshot:_k,CollectionReference:Tk,FieldPath:Sk,FieldValue:kk,setLogLevel:lk,CACHE_SIZE_UNLIMITED:oE};function Ck(e,t){e.INTERNAL.registerComponent(new oe("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Ak)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(e){Ck(e,((e,t)=>new ck(e,t,new ak))),e.registerVersion(ZS,ek)}Nk(pn);const Dk={apiKey:"AIzaSyCyxTBx95IwF3PwrfkuCV4gl0vt-QOaXkY",authDomain:"portfolio-contact-form-96a67.firebaseapp.com",projectId:"portfolio-contact-form-96a67",storageBucket:"portfolio-contact-form-96a67.appspot.com",messagingSenderId:"851344556751",appId:"1:851344556751:web:47c40387a1a1d41a49adba"},Rk=pn.initializeApp(Dk),xk=Rk.firestore(),Ok=(pn.auth(),{data(){return{name:"",email:"",message:"",submitStatus:w.Si,colors:w.O9}},components:{ClickableText:I.Z},methods:{submitForm(){if(!this.submitStatus){document.getElementById("submit").textContent="Submitting...";const e=new Date;xk.collection("portfolio").add({name:this.name,email:this.email,message:this.message,timePosted:"Message was posted on "+e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear()+" at "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}).then((()=>{this.name="",this.email="",this.message="",this.submitStatus=!1,(0,w.o)()})).catch((e=>{console.log(e)}))}}}}),Pk=()=>{(0,s.sj)((e=>({"114eaa2e":e.colors.colhighlight})))},Lk=Ok.setup;Ok.setup=Lk?(e,t)=>(Pk(),Lk(e,t)):Pk;var Mk=Ok,Fk=n(89);const Vk=(0,Fk.Z)(Mk,[["render",v]]);var Uk=Vk}}]);
//# sourceMappingURL=851.a5645266.js.map