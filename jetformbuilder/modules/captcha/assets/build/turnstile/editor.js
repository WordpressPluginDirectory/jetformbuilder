(()=>{"use strict";const C=window.React,{__:e}=wp.i18n,{ToggleControl:t,BaseHelp:l}=JetFBComponents,{useCaptchaProvider:r}=JetFBHooks;let{TextControl:n,NumberControl:a,__experimentalNumberControl:i,ExternalLink:o}=wp.components;a=a||i;const c=JetFBActions.globalTab({slug:"captcha-tab",element:"turnstile",empty:{}}),H=function(){const[a,i]=r(),H=a.use_global?c:a;return(0,C.createElement)(C.Fragment,null,(0,C.createElement)(t,{checked:a.use_global,onChange:C=>i({use_global:C})},e("Use","jet-form-builder")+" ",(0,C.createElement)("a",{href:JetFormEditorData.global_settings_url+"#captcha-tab__turnstile"},e("Global Settings","jet-form-builder"))),(0,C.createElement)(n,{label:e("Site Key:","jet-form-builder"),value:H.key,help:e("Read the hint to the Secret Key field","jet-form-builder"),disabled:a.use_global,onChange:C=>i({key:C})}),(0,C.createElement)(n,{label:e("Secret Key:","jet-form-builder"),value:H.secret,help:e("You can find both keys on your Turnstile Site settings page","jet-form-builder"),disabled:a.use_global,onChange:C=>i({secret:C})}),(0,C.createElement)(l,null,e("Didn't find it? Here is","jet-form-builder")+" ",(0,C.createElement)(o,{href:"https://developers.cloudflare.com/turnstile/get-started/#get-a-sitekey-and-secret-key"},e("a more detailed description","jet-form-builder"))))},s=(0,C.createElement)("svg",{width:"268",height:"92",viewBox:"0 0 268 92",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,C.createElement)("rect",{width:"268",height:"92",rx:"4",fill:"white"}),(0,C.createElement)("path",{d:"M36 28.5C26.34 28.5 18.5 36.34 18.5 46C18.5 55.66 26.34 63.5 36 63.5C45.66 63.5 53.5 55.66 53.5 46C53.5 36.34 45.66 28.5 36 28.5ZM32.5 54.75L23.75 46L26.2175 43.5325L32.5 49.7975L45.7825 36.515L48.25 39L32.5 54.75Z",fill:"#0DC167"}),(0,C.createElement)("path",{d:"M70.6826 49.2656C70.6826 48.9668 70.6357 48.7031 70.542 48.4746C70.4541 48.2402 70.2959 48.0293 70.0674 47.8418C69.8447 47.6543 69.5342 47.4756 69.1357 47.3057C68.7432 47.1357 68.2451 46.9629 67.6416 46.7871C67.0088 46.5996 66.4375 46.3916 65.9277 46.1631C65.418 45.9287 64.9814 45.6621 64.6182 45.3633C64.2549 45.0645 63.9766 44.7217 63.7832 44.335C63.5898 43.9482 63.4932 43.5059 63.4932 43.0078C63.4932 42.5098 63.5957 42.0498 63.8008 41.6279C64.0059 41.2061 64.2988 40.8398 64.6797 40.5293C65.0664 40.2129 65.5264 39.9668 66.0596 39.791C66.5928 39.6152 67.1875 39.5273 67.8438 39.5273C68.8047 39.5273 69.6191 39.7119 70.2871 40.0811C70.9609 40.4443 71.4736 40.9219 71.8252 41.5137C72.1768 42.0996 72.3525 42.7266 72.3525 43.3945H70.665C70.665 42.9141 70.5625 42.4893 70.3574 42.1201C70.1523 41.7451 69.8418 41.4521 69.4258 41.2412C69.0098 41.0244 68.4824 40.916 67.8438 40.916C67.2402 40.916 66.7422 41.0068 66.3496 41.1885C65.957 41.3701 65.6641 41.6162 65.4707 41.9268C65.2832 42.2373 65.1895 42.5918 65.1895 42.9902C65.1895 43.2598 65.2451 43.5059 65.3564 43.7285C65.4736 43.9453 65.6523 44.1475 65.8926 44.335C66.1387 44.5225 66.4492 44.6953 66.8242 44.8535C67.2051 45.0117 67.6592 45.1641 68.1865 45.3105C68.9131 45.5156 69.54 45.7441 70.0674 45.9961C70.5947 46.248 71.0283 46.5322 71.3682 46.8486C71.7139 47.1592 71.9688 47.5137 72.1328 47.9121C72.3027 48.3047 72.3877 48.75 72.3877 49.248C72.3877 49.7695 72.2822 50.2412 72.0713 50.6631C71.8604 51.085 71.5586 51.4453 71.166 51.7441C70.7734 52.043 70.3018 52.2744 69.751 52.4385C69.2061 52.5967 68.5967 52.6758 67.9229 52.6758C67.3311 52.6758 66.748 52.5938 66.1738 52.4297C65.6055 52.2656 65.0869 52.0195 64.6182 51.6914C64.1553 51.3633 63.7832 50.959 63.502 50.4785C63.2266 49.9922 63.0889 49.4297 63.0889 48.791H64.7764C64.7764 49.2305 64.8613 49.6084 65.0312 49.9248C65.2012 50.2354 65.4326 50.4932 65.7256 50.6982C66.0244 50.9033 66.3613 51.0557 66.7363 51.1553C67.1172 51.249 67.5127 51.2959 67.9229 51.2959C68.5146 51.2959 69.0156 51.2139 69.4258 51.0498C69.8359 50.8857 70.1465 50.6514 70.3574 50.3467C70.5742 50.042 70.6826 49.6816 70.6826 49.2656ZM80.1221 50.3027V42.9902H81.7568V52.5H80.2012L80.1221 50.3027ZM80.4297 48.2988L81.1064 48.2812C81.1064 48.9141 81.0391 49.5 80.9043 50.0391C80.7754 50.5723 80.5645 51.0352 80.2715 51.4277C79.9785 51.8203 79.5947 52.1279 79.1201 52.3506C78.6455 52.5674 78.0684 52.6758 77.3887 52.6758C76.9258 52.6758 76.501 52.6084 76.1143 52.4736C75.7334 52.3389 75.4053 52.1309 75.1299 51.8496C74.8545 51.5684 74.6406 51.2021 74.4883 50.751C74.3418 50.2998 74.2686 49.7578 74.2686 49.125V42.9902H75.8945V49.1426C75.8945 49.5703 75.9414 49.9248 76.0352 50.2061C76.1348 50.4814 76.2666 50.7012 76.4307 50.8652C76.6006 51.0234 76.7881 51.1348 76.9932 51.1992C77.2041 51.2637 77.4209 51.2959 77.6436 51.2959C78.335 51.2959 78.8828 51.1641 79.2871 50.9004C79.6914 50.6309 79.9814 50.2705 80.1572 49.8193C80.3389 49.3623 80.4297 48.8555 80.4297 48.2988ZM88.041 51.3398C88.4277 51.3398 88.7852 51.2607 89.1133 51.1025C89.4414 50.9443 89.7109 50.7275 89.9219 50.4521C90.1328 50.1709 90.2529 49.8516 90.2822 49.4941H91.8291C91.7998 50.0566 91.6094 50.5811 91.2578 51.0674C90.9121 51.5479 90.458 51.9375 89.8955 52.2363C89.333 52.5293 88.7148 52.6758 88.041 52.6758C87.3262 52.6758 86.7021 52.5498 86.1689 52.2979C85.6416 52.0459 85.2021 51.7002 84.8506 51.2607C84.5049 50.8213 84.2441 50.3174 84.0684 49.749C83.8984 49.1748 83.8135 48.5684 83.8135 47.9297V47.5605C83.8135 46.9219 83.8984 46.3184 84.0684 45.75C84.2441 45.1758 84.5049 44.6689 84.8506 44.2295C85.2021 43.79 85.6416 43.4443 86.1689 43.1924C86.7021 42.9404 87.3262 42.8145 88.041 42.8145C88.7852 42.8145 89.4355 42.9668 89.9922 43.2715C90.5488 43.5703 90.9854 43.9805 91.3018 44.502C91.624 45.0176 91.7998 45.6035 91.8291 46.2598H90.2822C90.2529 45.8672 90.1416 45.5127 89.9482 45.1963C89.7607 44.8799 89.5029 44.6279 89.1748 44.4404C88.8525 44.2471 88.4746 44.1504 88.041 44.1504C87.543 44.1504 87.124 44.25 86.7842 44.4492C86.4502 44.6426 86.1836 44.9062 85.9844 45.2402C85.791 45.5684 85.6504 45.9346 85.5625 46.3389C85.4805 46.7373 85.4395 47.1445 85.4395 47.5605V47.9297C85.4395 48.3457 85.4805 48.7559 85.5625 49.1602C85.6445 49.5645 85.7822 49.9307 85.9756 50.2588C86.1748 50.5869 86.4414 50.8506 86.7754 51.0498C87.1152 51.2432 87.5371 51.3398 88.041 51.3398ZM97.4629 51.3398C97.8496 51.3398 98.207 51.2607 98.5352 51.1025C98.8633 50.9443 99.1328 50.7275 99.3438 50.4521C99.5547 50.1709 99.6748 49.8516 99.7041 49.4941H101.251C101.222 50.0566 101.031 50.5811 100.68 51.0674C100.334 51.5479 99.8799 51.9375 99.3174 52.2363C98.7549 52.5293 98.1367 52.6758 97.4629 52.6758C96.748 52.6758 96.124 52.5498 95.5908 52.2979C95.0635 52.0459 94.624 51.7002 94.2725 51.2607C93.9268 50.8213 93.666 50.3174 93.4902 49.749C93.3203 49.1748 93.2354 48.5684 93.2354 47.9297V47.5605C93.2354 46.9219 93.3203 46.3184 93.4902 45.75C93.666 45.1758 93.9268 44.6689 94.2725 44.2295C94.624 43.79 95.0635 43.4443 95.5908 43.1924C96.124 42.9404 96.748 42.8145 97.4629 42.8145C98.207 42.8145 98.8574 42.9668 99.4141 43.2715C99.9707 43.5703 100.407 43.9805 100.724 44.502C101.046 45.0176 101.222 45.6035 101.251 46.2598H99.7041C99.6748 45.8672 99.5635 45.5127 99.3701 45.1963C99.1826 44.8799 98.9248 44.6279 98.5967 44.4404C98.2744 44.2471 97.8965 44.1504 97.4629 44.1504C96.9648 44.1504 96.5459 44.25 96.2061 44.4492C95.8721 44.6426 95.6055 44.9062 95.4062 45.2402C95.2129 45.5684 95.0723 45.9346 94.9844 46.3389C94.9023 46.7373 94.8613 47.1445 94.8613 47.5605V47.9297C94.8613 48.3457 94.9023 48.7559 94.9844 49.1602C95.0664 49.5645 95.2041 49.9307 95.3975 50.2588C95.5967 50.5869 95.8633 50.8506 96.1973 51.0498C96.5371 51.2432 96.959 51.3398 97.4629 51.3398ZM107.025 52.6758C106.363 52.6758 105.763 52.5645 105.224 52.3418C104.69 52.1133 104.23 51.7939 103.844 51.3838C103.463 50.9736 103.17 50.4873 102.965 49.9248C102.76 49.3623 102.657 48.7471 102.657 48.0791V47.71C102.657 46.9365 102.771 46.248 103 45.6445C103.229 45.0352 103.539 44.5195 103.932 44.0977C104.324 43.6758 104.77 43.3564 105.268 43.1396C105.766 42.9229 106.281 42.8145 106.814 42.8145C107.494 42.8145 108.08 42.9316 108.572 43.166C109.07 43.4004 109.478 43.7285 109.794 44.1504C110.11 44.5664 110.345 45.0586 110.497 45.627C110.649 46.1895 110.726 46.8047 110.726 47.4727V48.2021H103.624V46.875H109.1V46.752C109.076 46.3301 108.988 45.9199 108.836 45.5215C108.689 45.123 108.455 44.7949 108.133 44.5371C107.811 44.2793 107.371 44.1504 106.814 44.1504C106.445 44.1504 106.105 44.2295 105.795 44.3877C105.484 44.54 105.218 44.7686 104.995 45.0732C104.772 45.3779 104.6 45.75 104.477 46.1895C104.354 46.6289 104.292 47.1357 104.292 47.71V48.0791C104.292 48.5303 104.354 48.9551 104.477 49.3535C104.605 49.7461 104.79 50.0918 105.03 50.3906C105.276 50.6895 105.572 50.9238 105.918 51.0938C106.27 51.2637 106.668 51.3486 107.113 51.3486C107.688 51.3486 108.174 51.2314 108.572 50.9971C108.971 50.7627 109.319 50.4492 109.618 50.0566L110.603 50.8389C110.397 51.1494 110.137 51.4453 109.82 51.7266C109.504 52.0078 109.114 52.2363 108.651 52.4121C108.194 52.5879 107.652 52.6758 107.025 52.6758ZM118.161 49.9775C118.161 49.7432 118.108 49.5264 118.003 49.3271C117.903 49.1221 117.695 48.9375 117.379 48.7734C117.068 48.6035 116.6 48.457 115.973 48.334C115.445 48.2227 114.968 48.0908 114.54 47.9385C114.118 47.7861 113.758 47.6016 113.459 47.3848C113.166 47.168 112.94 46.9131 112.782 46.6201C112.624 46.3271 112.545 45.9844 112.545 45.5918C112.545 45.2168 112.627 44.8623 112.791 44.5283C112.961 44.1943 113.198 43.8984 113.503 43.6406C113.813 43.3828 114.186 43.1807 114.619 43.0342C115.053 42.8877 115.536 42.8145 116.069 42.8145C116.831 42.8145 117.481 42.9492 118.021 43.2188C118.56 43.4883 118.973 43.8486 119.26 44.2998C119.547 44.7451 119.69 45.2402 119.69 45.7852H118.064C118.064 45.5215 117.985 45.2666 117.827 45.0205C117.675 44.7686 117.449 44.5605 117.15 44.3965C116.857 44.2324 116.497 44.1504 116.069 44.1504C115.618 44.1504 115.252 44.2207 114.971 44.3613C114.695 44.4961 114.493 44.6689 114.364 44.8799C114.241 45.0908 114.18 45.3135 114.18 45.5479C114.18 45.7236 114.209 45.8818 114.268 46.0225C114.332 46.1572 114.443 46.2832 114.602 46.4004C114.76 46.5117 114.982 46.6172 115.27 46.7168C115.557 46.8164 115.923 46.916 116.368 47.0156C117.147 47.1914 117.789 47.4023 118.293 47.6484C118.797 47.8945 119.172 48.1963 119.418 48.5537C119.664 48.9111 119.787 49.3447 119.787 49.8545C119.787 50.2705 119.699 50.6514 119.523 50.9971C119.354 51.3428 119.104 51.6416 118.776 51.8936C118.454 52.1396 118.067 52.333 117.616 52.4736C117.171 52.6084 116.67 52.6758 116.113 52.6758C115.275 52.6758 114.566 52.5264 113.986 52.2275C113.406 51.9287 112.967 51.542 112.668 51.0674C112.369 50.5928 112.22 50.0918 112.22 49.5645H113.854C113.878 50.0098 114.007 50.3643 114.241 50.6279C114.476 50.8857 114.763 51.0703 115.103 51.1816C115.442 51.2871 115.779 51.3398 116.113 51.3398C116.559 51.3398 116.931 51.2812 117.229 51.1641C117.534 51.0469 117.766 50.8857 117.924 50.6807C118.082 50.4756 118.161 50.2412 118.161 49.9775ZM127.46 49.9775C127.46 49.7432 127.407 49.5264 127.302 49.3271C127.202 49.1221 126.994 48.9375 126.678 48.7734C126.367 48.6035 125.898 48.457 125.271 48.334C124.744 48.2227 124.267 48.0908 123.839 47.9385C123.417 47.7861 123.057 47.6016 122.758 47.3848C122.465 47.168 122.239 46.9131 122.081 46.6201C121.923 46.3271 121.844 45.9844 121.844 45.5918C121.844 45.2168 121.926 44.8623 122.09 44.5283C122.26 44.1943 122.497 43.8984 122.802 43.6406C123.112 43.3828 123.484 43.1807 123.918 43.0342C124.352 42.8877 124.835 42.8145 125.368 42.8145C126.13 42.8145 126.78 42.9492 127.319 43.2188C127.858 43.4883 128.271 43.8486 128.559 44.2998C128.846 44.7451 128.989 45.2402 128.989 45.7852H127.363C127.363 45.5215 127.284 45.2666 127.126 45.0205C126.974 44.7686 126.748 44.5605 126.449 44.3965C126.156 44.2324 125.796 44.1504 125.368 44.1504C124.917 44.1504 124.551 44.2207 124.27 44.3613C123.994 44.4961 123.792 44.6689 123.663 44.8799C123.54 45.0908 123.479 45.3135 123.479 45.5479C123.479 45.7236 123.508 45.8818 123.566 46.0225C123.631 46.1572 123.742 46.2832 123.9 46.4004C124.059 46.5117 124.281 46.6172 124.568 46.7168C124.855 46.8164 125.222 46.916 125.667 47.0156C126.446 47.1914 127.088 47.4023 127.592 47.6484C128.096 47.8945 128.471 48.1963 128.717 48.5537C128.963 48.9111 129.086 49.3447 129.086 49.8545C129.086 50.2705 128.998 50.6514 128.822 50.9971C128.652 51.3428 128.403 51.6416 128.075 51.8936C127.753 52.1396 127.366 52.333 126.915 52.4736C126.47 52.6084 125.969 52.6758 125.412 52.6758C124.574 52.6758 123.865 52.5264 123.285 52.2275C122.705 51.9287 122.266 51.542 121.967 51.0674C121.668 50.5928 121.519 50.0918 121.519 49.5645H123.153C123.177 50.0098 123.306 50.3643 123.54 50.6279C123.774 50.8857 124.062 51.0703 124.401 51.1816C124.741 51.2871 125.078 51.3398 125.412 51.3398C125.857 51.3398 126.229 51.2812 126.528 51.1641C126.833 51.0469 127.064 50.8857 127.223 50.6807C127.381 50.4756 127.46 50.2412 127.46 49.9775ZM133.155 39.7031L133.041 48.8877H131.573L131.45 39.7031H133.155ZM131.397 51.6826C131.397 51.4189 131.477 51.1963 131.635 51.0146C131.799 50.833 132.039 50.7422 132.355 50.7422C132.666 50.7422 132.903 50.833 133.067 51.0146C133.237 51.1963 133.322 51.4189 133.322 51.6826C133.322 51.9346 133.237 52.1514 133.067 52.333C132.903 52.5146 132.666 52.6055 132.355 52.6055C132.039 52.6055 131.799 52.5146 131.635 52.333C131.477 52.1514 131.397 51.9346 131.397 51.6826Z",fill:"#0F172A"}),(0,C.createElement)("path",{d:"M187.67 65.8589H185.771V65.0923H187.67C188.038 65.0923 188.336 65.0338 188.563 64.9166C188.791 64.7994 188.957 64.6366 189.062 64.4283C189.169 64.22 189.223 63.9823 189.223 63.7154C189.223 63.4713 189.169 63.2418 189.062 63.0269C188.957 62.8121 188.791 62.6395 188.563 62.5093C188.336 62.3759 188.038 62.3091 187.67 62.3091H185.99V68.647H185.048V61.5377H187.67C188.207 61.5377 188.661 61.6304 189.032 61.816C189.403 62.0015 189.685 62.2587 189.877 62.5875C190.069 62.913 190.165 63.2857 190.165 63.7056C190.165 64.1614 190.069 64.5504 189.877 64.8726C189.685 65.1949 189.403 65.4407 189.032 65.6099C188.661 65.7759 188.207 65.8589 187.67 65.8589ZM192.123 64.1939V68.647H191.22V63.3638H192.099L192.123 64.1939ZM193.773 63.3345L193.769 64.1744C193.694 64.1581 193.622 64.1483 193.554 64.1451C193.489 64.1386 193.414 64.1353 193.329 64.1353C193.121 64.1353 192.937 64.1679 192.777 64.233C192.618 64.2981 192.483 64.3892 192.372 64.5064C192.261 64.6236 192.174 64.7636 192.108 64.9263C192.047 65.0858 192.006 65.2616 191.986 65.4537L191.732 65.6002C191.732 65.2811 191.763 64.9817 191.825 64.7017C191.89 64.4218 191.99 64.1744 192.123 63.9595C192.257 63.7414 192.426 63.5722 192.631 63.4517C192.839 63.328 193.087 63.2662 193.373 63.2662C193.438 63.2662 193.513 63.2743 193.598 63.2906C193.682 63.3036 193.741 63.3183 193.773 63.3345ZM195.59 63.3638V68.647H194.682V63.3638H195.59ZM194.613 61.9625C194.613 61.816 194.657 61.6923 194.745 61.5914C194.836 61.4905 194.97 61.44 195.146 61.44C195.318 61.44 195.45 61.4905 195.541 61.5914C195.635 61.6923 195.683 61.816 195.683 61.9625C195.683 62.1024 195.635 62.2229 195.541 62.3238C195.45 62.4214 195.318 62.4703 195.146 62.4703C194.97 62.4703 194.836 62.4214 194.745 62.3238C194.657 62.2229 194.613 62.1024 194.613 61.9625ZM198.646 67.8316L200.092 63.3638H201.015L199.115 68.647H198.51L198.646 67.8316ZM197.44 63.3638L198.93 67.856L199.032 68.647H198.427L196.513 63.3638H197.44ZM204.921 67.7437V65.024C204.921 64.8157 204.879 64.635 204.794 64.482C204.713 64.3257 204.589 64.2053 204.423 64.1207C204.257 64.036 204.052 63.9937 203.808 63.9937C203.58 63.9937 203.38 64.0328 203.207 64.1109C203.038 64.189 202.904 64.2916 202.807 64.4185C202.712 64.5455 202.665 64.6822 202.665 64.8287H201.762C201.762 64.6399 201.811 64.4527 201.908 64.2672C202.006 64.0816 202.146 63.914 202.328 63.7642C202.514 63.6112 202.735 63.4908 202.992 63.4029C203.253 63.3117 203.542 63.2662 203.861 63.2662C204.245 63.2662 204.584 63.3313 204.877 63.4615C205.173 63.5917 205.404 63.7886 205.57 64.0523C205.74 64.3127 205.824 64.6399 205.824 65.0338V67.4947C205.824 67.6705 205.839 67.8576 205.868 68.0562C205.901 68.2548 205.948 68.4257 206.01 68.5689V68.647H205.067C205.022 68.5429 204.986 68.4045 204.96 68.232C204.934 68.0562 204.921 67.8935 204.921 67.7437ZM205.077 65.4439L205.087 66.0787H204.174C203.917 66.0787 203.687 66.0998 203.485 66.1422C203.284 66.1812 203.114 66.2414 202.978 66.3228C202.841 66.4042 202.737 66.5067 202.665 66.6304C202.593 66.7509 202.558 66.8925 202.558 67.0552C202.558 67.2213 202.595 67.3726 202.67 67.5093C202.745 67.6461 202.857 67.7551 203.007 67.8365C203.16 67.9146 203.347 67.9537 203.568 67.9537C203.845 67.9537 204.089 67.8951 204.301 67.7779C204.512 67.6607 204.68 67.5175 204.804 67.3482C204.931 67.1789 204.999 67.0145 205.009 66.855L205.395 67.2896C205.372 67.4263 205.31 67.5777 205.209 67.7437C205.108 67.9097 204.973 68.0692 204.804 68.2222C204.638 68.372 204.439 68.4973 204.208 68.5982C203.98 68.6959 203.723 68.7447 203.437 68.7447C203.078 68.7447 202.764 68.6747 202.494 68.5347C202.227 68.3948 202.019 68.2076 201.869 67.9732C201.723 67.7356 201.649 67.4703 201.649 67.1773C201.649 66.8941 201.705 66.6451 201.815 66.4302C201.926 66.2121 202.086 66.0315 202.294 65.8882C202.502 65.7418 202.753 65.6311 203.046 65.5562C203.339 65.4813 203.666 65.4439 204.027 65.4439H205.077ZM209.359 68.0025C209.574 68.0025 209.773 67.9586 209.955 67.8707C210.137 67.7828 210.287 67.6623 210.404 67.5093C210.521 67.3531 210.588 67.1757 210.604 66.9771H211.464C211.448 67.2896 211.342 67.581 211.146 67.8511C210.954 68.1181 210.702 68.3345 210.39 68.5005C210.077 68.6633 209.734 68.7447 209.359 68.7447C208.962 68.7447 208.616 68.6747 208.319 68.5347C208.026 68.3948 207.782 68.2027 207.587 67.9586C207.395 67.7144 207.25 67.4345 207.152 67.1187C207.058 66.7997 207.011 66.4628 207.011 66.108V65.9029C207.011 65.5481 207.058 65.2128 207.152 64.897C207.25 64.578 207.395 64.2964 207.587 64.0523C207.782 63.8082 208.026 63.6161 208.319 63.4761C208.616 63.3362 208.962 63.2662 209.359 63.2662C209.773 63.2662 210.134 63.3508 210.443 63.5201C210.753 63.6861 210.995 63.914 211.171 64.2037C211.35 64.4901 211.448 64.8157 211.464 65.1802H210.604C210.588 64.9621 210.526 64.7652 210.419 64.5894C210.315 64.4136 210.172 64.2737 209.989 64.1695C209.81 64.0621 209.6 64.0084 209.359 64.0084C209.083 64.0084 208.85 64.0637 208.661 64.1744C208.476 64.2818 208.327 64.4283 208.217 64.6138C208.109 64.7961 208.031 64.9996 207.982 65.2242C207.937 65.4455 207.914 65.6718 207.914 65.9029V66.108C207.914 66.3391 207.937 66.567 207.982 66.7916C208.028 67.0162 208.104 67.2196 208.212 67.4019C208.323 67.5842 208.471 67.7307 208.656 67.8414C208.845 67.9488 209.079 68.0025 209.359 68.0025ZM213.964 68.1002L215.434 63.3638H216.4L214.281 69.4625C214.232 69.5927 214.167 69.7326 214.086 69.8824C214.008 70.0354 213.907 70.1802 213.783 70.317C213.66 70.4537 213.51 70.5644 213.334 70.649C213.161 70.7369 212.955 70.7808 212.714 70.7808C212.642 70.7808 212.551 70.7711 212.44 70.7515C212.33 70.732 212.252 70.7157 212.206 70.7027L212.201 69.9703C212.227 69.9735 212.268 69.9768 212.323 69.98C212.382 69.9866 212.423 69.9898 212.445 69.9898C212.65 69.9898 212.825 69.9621 212.968 69.9068C213.111 69.8547 213.231 69.7652 213.329 69.6382C213.43 69.5145 213.516 69.3436 213.588 69.1255L213.964 68.1002ZM212.885 63.3638L214.257 67.4654L214.491 68.4175L213.842 68.7496L211.898 63.3638H212.885ZM219.687 65.0728V64.8726C219.687 64.5927 219.774 64.3616 219.95 64.1793C220.129 63.997 220.372 63.9058 220.678 63.9058C220.987 63.9058 221.231 63.997 221.41 64.1793C221.589 64.3616 221.679 64.5927 221.679 64.8726V65.0728C221.679 65.3495 221.589 65.579 221.41 65.7613C221.234 65.9403 220.992 66.0298 220.683 66.0298C220.377 66.0298 220.134 65.9403 219.955 65.7613C219.776 65.579 219.687 65.3495 219.687 65.0728ZM228.124 61.5377V68.647H227.196V61.5377H228.124ZM230.409 61.5377V62.3091H224.916V61.5377H230.409ZM233.031 68.7447C232.663 68.7447 232.33 68.6828 232.03 68.5591C231.734 68.4322 231.479 68.2548 231.264 68.0269C231.052 67.7991 230.889 67.5289 230.775 67.2164C230.661 66.9039 230.604 66.5621 230.604 66.191V65.9859C230.604 65.5562 230.668 65.1737 230.795 64.8384C230.922 64.4999 231.094 64.2134 231.312 63.9791C231.531 63.7447 231.778 63.5673 232.055 63.4468C232.331 63.3264 232.618 63.2662 232.914 63.2662C233.292 63.2662 233.617 63.3313 233.891 63.4615C234.167 63.5917 234.394 63.774 234.569 64.0084C234.745 64.2395 234.875 64.5129 234.96 64.8287C235.045 65.1412 235.087 65.483 235.087 65.8541V66.2593H231.142V65.522H234.184V65.4537C234.171 65.2193 234.122 64.9914 234.037 64.7701C233.956 64.5487 233.826 64.3664 233.646 64.2232C233.467 64.08 233.223 64.0084 232.914 64.0084C232.709 64.0084 232.52 64.0523 232.348 64.1402C232.175 64.2248 232.027 64.3518 231.903 64.5211C231.78 64.6903 231.684 64.897 231.615 65.1412C231.547 65.3853 231.513 65.6669 231.513 65.9859V66.191C231.513 66.4416 231.547 66.6776 231.615 66.899C231.687 67.1171 231.789 67.3091 231.923 67.4752C232.06 67.6412 232.224 67.7714 232.416 67.8658C232.611 67.9602 232.833 68.0074 233.08 68.0074C233.399 68.0074 233.669 67.9423 233.891 67.8121C234.112 67.6819 234.306 67.5077 234.472 67.2896L235.019 67.7242C234.905 67.8967 234.76 68.0611 234.584 68.2173C234.408 68.3736 234.192 68.5005 233.935 68.5982C233.681 68.6959 233.38 68.7447 233.031 68.7447ZM237.045 64.1939V68.647H236.142V63.3638H237.021L237.045 64.1939ZM238.695 63.3345L238.69 64.1744C238.616 64.1581 238.544 64.1483 238.476 64.1451C238.41 64.1386 238.336 64.1353 238.251 64.1353C238.043 64.1353 237.859 64.1679 237.699 64.233C237.54 64.2981 237.405 64.3892 237.294 64.5064C237.183 64.6236 237.095 64.7636 237.03 64.9263C236.968 65.0858 236.928 65.2616 236.908 65.4537L236.654 65.6002C236.654 65.2811 236.685 64.9817 236.747 64.7017C236.812 64.4218 236.911 64.1744 237.045 63.9595C237.178 63.7414 237.348 63.5722 237.553 63.4517C237.761 63.328 238.008 63.2662 238.295 63.2662C238.36 63.2662 238.435 63.2743 238.52 63.2906C238.604 63.3036 238.663 63.3183 238.695 63.3345ZM240.429 64.4136V68.647H239.521V63.3638H240.38L240.429 64.4136ZM240.243 65.8052L239.823 65.7906C239.826 65.4293 239.874 65.0956 239.965 64.7896C240.056 64.4804 240.191 64.2118 240.37 63.9839C240.549 63.7561 240.772 63.5803 241.039 63.4566C241.306 63.3297 241.615 63.2662 241.967 63.2662C242.214 63.2662 242.442 63.302 242.65 63.3736C242.859 63.442 243.039 63.551 243.192 63.7007C243.345 63.8505 243.464 64.0425 243.549 64.2769C243.633 64.5113 243.676 64.7945 243.676 65.1265V68.647H242.772V65.1705C242.772 64.8938 242.725 64.6724 242.631 64.5064C242.54 64.3404 242.41 64.22 242.24 64.1451C242.071 64.067 241.872 64.0279 241.645 64.0279C241.378 64.0279 241.155 64.0751 240.976 64.1695C240.797 64.2639 240.653 64.3941 240.546 64.5601C240.438 64.7261 240.36 64.9166 240.312 65.1314C240.266 65.343 240.243 65.5676 240.243 65.8052ZM243.666 65.3072L243.061 65.4927C243.064 65.203 243.111 64.9247 243.202 64.6578C243.297 64.3908 243.432 64.1532 243.607 63.9449C243.786 63.7366 244.006 63.5722 244.267 63.4517C244.527 63.328 244.825 63.2662 245.16 63.2662C245.443 63.2662 245.694 63.3036 245.912 63.3785C246.133 63.4533 246.319 63.5689 246.469 63.7252C246.622 63.8782 246.737 64.0751 246.815 64.316C246.894 64.5569 246.933 64.8433 246.933 65.1754V68.647H246.024V65.1656C246.024 64.8694 245.977 64.6399 245.883 64.4771C245.792 64.3111 245.661 64.1955 245.492 64.1304C245.326 64.0621 245.128 64.0279 244.896 64.0279C244.698 64.0279 244.522 64.0621 244.369 64.1304C244.216 64.1988 244.088 64.2932 243.983 64.4136C243.879 64.5308 243.799 64.6659 243.744 64.8189C243.692 64.9719 243.666 65.1347 243.666 65.3072ZM251.376 67.2457C251.376 67.1155 251.347 66.995 251.288 66.8843C251.233 66.7704 251.117 66.6679 250.941 66.5767C250.769 66.4823 250.508 66.4009 250.16 66.3326C249.867 66.2707 249.602 66.1975 249.364 66.1129C249.13 66.0282 248.93 65.9257 248.764 65.8052C248.601 65.6848 248.476 65.5432 248.388 65.3804C248.3 65.2177 248.256 65.0272 248.256 64.8091C248.256 64.6008 248.301 64.4039 248.393 64.2183C248.487 64.0328 248.619 63.8684 248.788 63.7252C248.961 63.5819 249.167 63.4696 249.408 63.3882C249.649 63.3069 249.918 63.2662 250.214 63.2662C250.637 63.2662 250.998 63.341 251.298 63.4908C251.597 63.6405 251.827 63.8407 251.986 64.0914C252.146 64.3388 252.226 64.6138 252.226 64.9166H251.322C251.322 64.7701 251.278 64.6285 251.19 64.4918C251.106 64.3518 250.98 64.2362 250.814 64.1451C250.652 64.0539 250.451 64.0084 250.214 64.0084C249.963 64.0084 249.76 64.0474 249.604 64.1255C249.451 64.2004 249.338 64.2964 249.267 64.4136C249.198 64.5308 249.164 64.6545 249.164 64.7847C249.164 64.8824 249.18 64.9703 249.213 65.0484C249.249 65.1233 249.311 65.1933 249.398 65.2584C249.486 65.3202 249.61 65.3788 249.77 65.4341C249.929 65.4895 250.132 65.5448 250.38 65.6002C250.813 65.6978 251.169 65.815 251.449 65.9517C251.729 66.0884 251.938 66.2561 252.074 66.4547C252.211 66.6532 252.279 66.8941 252.279 67.1773C252.279 67.4084 252.23 67.62 252.133 67.8121C252.038 68.0041 251.9 68.1701 251.718 68.3101C251.539 68.4468 251.324 68.5543 251.073 68.6324C250.826 68.7073 250.548 68.7447 250.238 68.7447C249.773 68.7447 249.379 68.6617 249.057 68.4957C248.734 68.3297 248.49 68.1148 248.324 67.8511C248.158 67.5875 248.075 67.3091 248.075 67.0162H248.983C248.996 67.2636 249.068 67.4605 249.198 67.607C249.328 67.7502 249.488 67.8528 249.677 67.9146C249.866 67.9732 250.053 68.0025 250.238 68.0025C250.486 68.0025 250.692 67.97 250.858 67.9048C251.028 67.8397 251.156 67.7502 251.244 67.6363C251.332 67.5224 251.376 67.3922 251.376 67.2457Z",fill:"#334155"}),(0,C.createElement)("path",{d:"M174.67 48.1075H176.627V53.4379H180.025V55.1437H174.67V48.1075Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M182.045 51.6444V51.6193C182.045 49.6 183.675 47.957 185.845 47.957C188.015 47.957 189.62 49.5749 189.62 51.5942V51.6193C189.62 53.6386 187.99 55.2816 185.82 55.2816C183.65 55.2816 182.045 53.6637 182.045 51.6444ZM187.638 51.6444V51.6193C187.638 50.6034 186.911 49.7254 185.832 49.7254C184.766 49.7254 184.051 50.5908 184.051 51.6068V51.6318C184.051 52.6478 184.779 53.5257 185.845 53.5257C186.923 53.5257 187.638 52.6603 187.638 51.6444Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M192.016 52.0583V48.1075H193.997V52.0206C193.997 53.0366 194.512 53.5132 195.289 53.5132C196.067 53.5132 196.581 53.0491 196.581 52.0708V48.1075H198.563V52.0081C198.563 54.2782 197.271 55.2691 195.264 55.2691C193.27 55.2691 192.016 54.2657 192.016 52.0583Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M201.548 48.1075H204.257C206.766 48.1075 208.233 49.5498 208.233 51.5817V51.6068C208.233 53.6386 206.753 55.1437 204.22 55.1437H201.548V48.1075ZM204.295 53.4128C205.461 53.4128 206.239 52.7732 206.239 51.6318V51.6068C206.239 50.478 205.461 49.8258 204.295 49.8258H203.505V53.4003H204.295V53.4128Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M211.067 48.1075H216.699V49.8132H213.011V51.0173H216.347V52.6352H213.011V55.1437H211.067V48.1075Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M219.408 48.1075H221.352V53.4379H224.763V55.1437H219.408V48.1075Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M229.856 48.0573H231.737L234.735 55.1437H232.64L232.126 53.8894H229.417L228.915 55.1437H226.871L229.856 48.0573ZM231.574 52.3718L230.796 50.3776L230.006 52.3718H231.574Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M237.243 48.1075H240.567C241.645 48.1075 242.385 48.3834 242.862 48.8726C243.276 49.2739 243.489 49.8132 243.489 50.5156V50.5407C243.489 51.6193 242.912 52.3342 242.047 52.6979L243.727 55.1562H241.47L240.053 53.024H239.2V55.1562H237.243V48.1075ZM240.479 51.4813C241.144 51.4813 241.52 51.1552 241.52 50.6535V50.6285C241.52 50.0766 241.119 49.8007 240.467 49.8007H239.187V51.4813H240.479Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M246.298 48.1075H251.955V49.7631H248.23V50.8291H251.604V52.3718H248.23V53.4881H252.005V55.1437H246.298V48.1075Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M170.406 52.4721C170.13 53.0867 169.553 53.5257 168.8 53.5257C167.734 53.5257 167.007 52.6352 167.007 51.6318V51.6067C167.007 50.5908 167.722 49.7254 168.788 49.7254C169.59 49.7254 170.205 50.2145 170.456 50.8918H172.513C172.187 49.2112 170.707 47.9695 168.8 47.9695C166.63 47.9695 165 49.6125 165 51.6318V51.6569C165 53.6762 166.605 55.2941 168.775 55.2941C170.631 55.2941 172.086 54.0901 172.463 52.4847L170.406 52.4721Z",fill:"#404041"}),(0,C.createElement)("path",{d:"M249.647 36.8822L244.266 33.7968L243.338 33.3954L221.326 33.546V44.7211H249.647V36.8822Z",fill:"white"}),(0,C.createElement)("path",{d:"M239.852 43.6926C240.115 42.7896 240.015 41.9618 239.576 41.3472C239.175 40.7828 238.497 40.4567 237.682 40.4191L222.243 40.2184C222.142 40.2184 222.054 40.1682 222.004 40.093C221.954 40.0177 221.942 39.9174 221.967 39.8171C222.017 39.6666 222.167 39.5537 222.33 39.5411L237.908 39.3405C239.751 39.2527 241.758 37.7601 242.461 35.929L243.351 33.6087C243.389 33.5083 243.401 33.408 243.376 33.3077C242.373 28.7674 238.322 25.381 233.48 25.381C229.015 25.381 225.228 28.2657 223.873 32.2667C222.995 31.6145 221.879 31.2633 220.675 31.3762C218.53 31.5894 216.812 33.3077 216.599 35.4524C216.548 36.0042 216.586 36.5435 216.711 37.0452C213.212 37.1456 210.415 40.0052 210.415 43.5296C210.415 43.8431 210.44 44.1567 210.478 44.4702C210.503 44.6207 210.628 44.7336 210.779 44.7336H239.275C239.438 44.7336 239.588 44.6207 239.639 44.4577L239.852 43.6926Z",fill:"#F38020"}),(0,C.createElement)("path",{d:"M244.768 33.7717C244.63 33.7717 244.48 33.7717 244.342 33.7843C244.241 33.7843 244.154 33.8595 244.116 33.9599L243.514 36.0544C243.251 36.9574 243.351 37.7852 243.79 38.3998C244.191 38.9642 244.868 39.2903 245.684 39.3279L248.97 39.5286C249.07 39.5286 249.158 39.5788 249.208 39.654C249.258 39.7293 249.271 39.8422 249.246 39.9299C249.196 40.0805 249.045 40.1933 248.882 40.2059L245.458 40.4066C243.602 40.4943 241.607 41.9869 240.905 43.818L240.654 44.4577C240.604 44.5831 240.692 44.7085 240.83 44.7085H252.594C252.732 44.7085 252.858 44.6207 252.895 44.4828C253.096 43.7553 253.209 42.9902 253.209 42.2001C253.209 37.5595 249.421 33.7717 244.768 33.7717Z",fill:"#FAAE40"})),{__:V}=wp.i18n,{ToggleControl:m,BaseHelp:d}=JetFBComponents,{useCaptchaProvider:p}=JetFBHooks;let{TextControl:u,NumberControl:L,__experimentalNumberControl:h}=wp.components;const{InspectorControls:M,useBlockProps:Z}=wp.blockEditor;L=L||h;const E=function({isSelected:e,attributes:t}){const l=Z();return t.isPreview?(0,C.createElement)("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},s):(0,C.createElement)(C.Fragment,null,(0,C.createElement)("div",{...l},e?(0,C.createElement)("div",{style:{padding:"20px"}},(0,C.createElement)(H,null)):s),(0,C.createElement)(M,null,(0,C.createElement)("div",{style:{padding:"20px"}},(0,C.createElement)(H,null))))},{CaptchaOptions:f,CaptchaBlockEdit:g,CaptchaBlockTip:b}=JetFBComponents,{__:w}=wp.i18n,v={name:"turnstile",title:w("Turnstile","jet-form-builder"),isActive:(C,e)=>C.provider===e.provider,description:w("Set the Turnstile Captcha settings in the Captcha Container block \nto make user verification via WordPress form possible.","jet-form-builder"),icon:(0,C.createElement)("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,C.createElement)("path",{d:"M40.6149 37.2125C41.0498 37.5529 41.1264 38.1814 40.7861 38.6163L37.2322 43.1573C36.6656 43.8813 35.5869 43.9299 34.9576 43.2597L33.2696 41.4623C32.8915 41.0598 32.9114 40.4269 33.314 40.0488C33.7166 39.6708 34.3494 39.6906 34.7275 40.0932L36.0164 41.4657L39.211 37.3837C39.5514 36.9488 40.1799 36.8721 40.6149 37.2125Z",fill:"currentColor"}),(0,C.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.5407 43H56.6089C58.8874 43 61.1208 41.7827 61.6499 39.5182C63.5363 31.4454 57.0428 22.976 48.5207 23.4547C46.5416 17.3331 40.672 13 33.9134 13C28.0351 13 22.8286 16.2782 20.2704 21.1603C15.1969 19.6577 9.9458 23.5648 9.66997 28.8454C4.89227 29.8298 1.64218 34.4522 2.03161 39.2536C2.22701 41.6627 4.58295 43 6.94884 43H27.4564C28.7306 47.0571 32.5209 50 36.9985 50C41.4762 50 45.2665 47.0571 46.5407 43ZM47.0924 25.5381C45.4986 19.5 40.5887 15 33.9134 15C28.0257 15 23.4986 18.5 21.2789 23.5448C14.9986 21.5 11.9986 24.5 11.5867 30.4925C6.99857 31 3.62854 34.203 4.02507 39.0919C4.13652 40.466 5.78252 41 6.94884 41H27.0479C27.0153 40.6711 26.9985 40.3375 26.9985 40C26.9985 34.4772 31.4757 30 36.9985 30C42.5214 30 46.9985 34.4772 46.9985 40C46.9985 40.3375 46.9818 40.6711 46.9492 41H56.6089C58.3083 41 59.4552 40.1211 59.7024 39.0631C61.4652 31.5192 54.8741 24.2771 47.0924 25.5381ZM36.9985 32C32.5803 32 28.9985 35.5817 28.9985 40C28.9985 44.4183 32.5803 48 36.9985 48C41.4168 48 44.9985 44.4183 44.9985 40C44.9985 35.5817 41.4168 32 36.9985 32Z",fill:"currentColor"})),scope:["block","inserter"],attributes:{provider:"turnstile"}},{registerPlugin:_}=wp.plugins,{registerBlockVariation:k}=wp.blocks;k("jet-forms/captcha-container",v),_("jf-turnstile",{render:function(){return(0,C.createElement)(C.Fragment,null,(0,C.createElement)(f,{provider:"turnstile"},(e=>(0,C.createElement)(C.Fragment,null,(0,C.createElement)(H,{...e}),(0,C.createElement)(b,null)))),(0,C.createElement)(g,{provider:"turnstile"},(e=>(0,C.createElement)(E,{...e}))))}})})();