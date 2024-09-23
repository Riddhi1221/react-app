import React from 'react'
import Card1 from './Components/Card1'

const Main = () => {
  return (
    <div className="w-100">
      <div className="flex just-between align-item">
        <div className="svg">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="black">
            <path d="M22.0852 0.160518C16.4024 0.906765 11.4609 3.26988 7.50769 7.14463C4.09614 10.4836 1.80593 14.5114 0.656075 19.1994C0.161922
             21.2181 -0.00913038 22.768 0.000372558 25.0354C0.0098755 29.1493 0.817625 32.5362 2.6707 36.2674C4.52377 39.9795 7.45068 43.2993
              11.0238 45.7103C15.7943 48.9249 21.8476 50.4748 27.3118 49.8721C33.5838 49.1736 38.5918 46.8105 42.8111 42.534C48.5129 36.7458 
              50.9076 29.2642 49.6912 20.9215C48.988 16.0231 46.1846 10.6271 42.545 7.13506C39.105 3.84392 34.9712 1.60518 30.4478
               0.591045C27.8535 0.0170091 24.518 -0.164769 22.0852 0.160518ZM28.0816 3.31772C34.9332 4.32228 40.9865 8.75193 44.1225 
               15.0568C45.0728 16.9702 45.757 19.1324 46.0991 21.2563C46.3367 22.7297 46.3367 26.681 46.0991 28.0491C45.4624 31.6655 44.17 
               34.7271 42.0034 37.6642C41.6422 38.1617 40.7015 39.2141 39.9222 39.9986L38.5063 41.4146L38.5633 42.1513L38.6203 42.8784L38.3447 
               41.826C38.0216 40.5727 37.7365 39.8743 37.3184 39.3194C37.1474 39.0897 37.0048 38.8506 37.0048 38.7836C37.0143 38.7262 37.2519 
               38.4966 37.5465 38.2861C38.0786 37.9034 38.8104 37.1284 39.2095 36.5161C39.352 36.3152 39.5516 36.1526 39.7512 36.0952C40.2263
                35.9612 40.768 35.3968 40.8915 34.9088C41.0246 34.44 40.977 34.22 40.6539 33.7321L40.4164 33.3876L40.6254 32.4405C40.8345 31.5029 
                40.8345 31.4838 40.6729 30.0104C40.5874 29.1972 40.5209 28.4127 40.5209 28.2787C40.5209 27.9439 39.7892 26.4705 39.2095
                 25.6573C38.2402 24.2796 37.8791 23.9543 36.4726 23.2655C34.8381 22.4523 34.2395 22.3183 32.5859 22.3853C31.1415 22.4427 29.9251 
                 22.7201 28.8133 23.2559C27.6919 23.7917 26.4185 25.0641 25.1927 26.8915C24.7745 27.5038 24.746 27.5803 24.746 28.1735C24.746 
                 28.6327 24.651 29.0824 24.4039 29.8573C23.9858 31.168 24.0048 31.4742 24.6035 32.4979C24.8411 32.8997 25.0311 33.2824 25.0311 
                 33.3302C25.0311 33.3876 24.9076 33.5694 24.746 33.7416C24.2424 34.287 24.2519 35.1289 24.7745 35.6934C25.0691 36.0091 25.7913 
                 36.3057 25.9719 36.1813C26.0194 36.1526 25.9814 35.9134 25.8769 35.6551C25.5918 34.8993 25.6678 34.8706 26.0194 35.6073C26.7131 
                 37.0806 27.6539 38.0278 29.1649 38.774C30.3052 39.3289 31.284 39.5777 32.681 39.6446C33.3082 39.6733 33.7358 39.7307 33.6313 
                 39.769C33.0611 39.9699 30.4383 39.5968 29.2314 39.1376L28.6042 38.8984L28.4427 39.1184C28.0911 39.5777 27.3973 41.0989 27.2263 
                 41.7781C27.1313 42.1704 26.9982 42.9645 26.9317 43.5385C26.7416 45.3276 26.6656 45.4902 26.4661 44.4378C26.1335 42.6966 23.9003 
                 34.4496 23.6247 33.9521C23.5867 33.8756 22.988 33.6747 22.2943 33.5025C21.6006 33.3207 20.8403 33.1102 20.6027 33.0145C20.3747
                  32.9284 20.1561 32.8806 20.1276 32.9093C20.0991 32.938 20.2606 33.2154 20.4887 33.5216C20.7168 33.8277 21.0399 34.2965 21.2109 
                  34.5549C21.6576 35.2724 22.6934 37.5111 22.9975 38.4009C23.3301 39.3481 23.3016 39.415 22.3038 40.2665C21.9237 40.5918 21.6101
                   40.9267 21.6101 41.0128C21.6101 41.0893 22.0472 41.5677 22.5794 42.0652C23.5011 42.9358 23.5392 42.9932 23.4631 43.2611L23.3776
                    43.5481L23.3396 43.2515C23.3206 43.0219 23.0925 42.7636 22.3228 42.0269C21.7716 41.5198 21.325 41.0415 21.325 40.9649C21.325
                     40.898 21.6671 40.544 22.0757 40.1804C23.121 39.2811 23.1305 39.2237 22.7029 38.1234C21.9807 36.277 20.4317 33.4259 19.8615
                      32.8901C19.681 32.7179 19.6144 32.5553 19.6144 32.297C19.6144 31.9047 19.7 31.809 20.1846 31.6464C20.6788 31.4838 21.1634 
                      31.1106 21.496 30.6418C21.7621 30.2687 21.8761 30.2017 22.6079 29.9721C23.0545 29.8286 23.4156 29.6755 23.4156 
                      29.6373C23.4156 29.5894 23.2446 29.3407 23.0355 29.0919C22.6269 28.5944 22.5508 28.2405 22.8264 28.1544C22.912 28.1257
                       23.2446 28.0778 23.5582 28.0395C23.8718 28.0108 24.1568 27.963 24.1949 27.9343C24.2329 27.9152 24.1378 27.5516 23.9858
                        27.1307C23.8242 26.7097 23.7007 26.3079 23.7007 26.2505C23.7007 26.1835 23.9478 26.0591 24.2519 25.9539C24.9266 25.7338
                         26.0764 25.1598 26.0764 25.045C26.0764 24.9972 25.7248 24.7675 25.3067 24.5379C24.4799 24.0978 23.6437 23.4281 23.7672
                          23.3133C23.8052 23.275 24.1473 23.1411 24.5084 23.0263C25.4207 22.7201 26.39 22.2705 27.1503 21.7825C27.5019 21.5625 
                          27.787 21.3616 27.768 21.352C27.7299 21.3233 25.1547 20.2135 24.9076 20.1274C24.7935 20.0796 24.765 20.0222 24.8125 
                          19.9361C24.8506 19.8595 25.4778 19.2472 26.2 18.5775C26.9127 17.8982 27.5019 17.3146 27.5019 17.2764C27.5019 17.1998 
                          26.9127 17.0946 25.1737 16.8458C24.5465 16.7502 23.9953 16.6545 23.9573 16.6162C23.9098 16.578 24.3469 15.736 24.9266 
                          14.7506C25.8674 13.1337 26.0479 12.7893 25.9529 12.7893C25.9339 12.7893 25.1546 13.0668 24.2234 13.4112C22.8644 13.9087
                           22.4938 14.0044 22.3988 13.9087C22.1897 13.6982 21.9902 12.1196 21.9902 10.7036V9.33553L21.2204 9.74692C20.3177 10.2349
                            19.1108 11.182 18.5501 11.8422C18.341 12.1005 18.1225 12.311 18.0845 12.311C18.0369 12.311 17.6758 11.8709 17.2672 
                            11.3255C16.564 10.3879 15.3761 9.05808 15.2431 9.05808C15.2051 9.05808 15.129 9.47904 15.072 9.9861C14.901 11.4212 
                            14.3973 13.172 14.1502 13.172C14.0837 13.172 13.6276 12.9807 13.1429 12.751C12.3637 12.3875 11.1758 12.0239 10.7387 
                            12.0239C10.6247 12.0239 10.6817 12.1961 10.9573 12.7606C11.3754 13.6121 11.7555 14.942 11.708 15.4012L11.6795 
                            15.7073L10.8242 15.7743C8.33445 15.9657 7.16559 16.0805 7.16559 16.1283C7.16559 16.1666 7.58372 16.6162 8.09688 
                            17.1424C9.05667 18.1183 9.75989 19.1611 9.71237 19.5247C9.69337 19.6586 9.20872 20.0604 8.21091 20.7589C7.40316
                             21.3233 6.72845 21.8304 6.70945 21.8782C6.69044 21.9261 6.79497 21.993 6.94702 22.0313C7.96383 22.2513 8.40097
                              22.3949 8.76208 22.6053C9.25623 22.9019 9.76939 23.342 10.026 23.7056L10.216 23.9735L9.1517 25.0354C8.25842 25.9347 
                              8.10638 26.1165 8.22041 26.2218C8.29644 26.2887 8.86661 26.5088 9.49381 26.7001C10.121 26.8915 10.6722 27.0924 
                              10.7197 27.1402C10.7672 27.1881 10.6912 27.676 10.5106 28.3457C10.3491 28.9676 10.2445 29.5129 10.273
                               29.5607C10.3206 29.6468 11.8885 29.5703 12.1451 29.4746C12.3827 29.3885 12.4777 29.6181 12.5443 30.374C12.5823
                                30.8141 12.6393 31.1872 12.6773 31.2063C12.7533 31.2541 13.8176 30.7949 13.8176 30.7184C13.8176 30.6897 13.6941 
                                30.4888 13.5421 30.2687C12.9054 29.3311 12.4682 28.1544 12.1261 26.4227C11.8981 25.3224 11.7935 24.27 11.9076
                                 24.27C11.9456 24.27 12.0121 24.5762 12.0501 24.9493C12.2402 27.0828 13.219 29.7904 14.1122 30.6897C14.3403 
                                 30.9193 14.8345 31.2446 15.3096 31.4646L16.1079 31.8377L16.0793 32.1917L16.0508 32.5457L13.9412 33.2537L11.8315 
                                 33.9617L11.6415 34.5453C11.5369 34.8706 11.0998 36.3535 10.6817 37.8556C9.90243 40.5822 9.66486 41.2711 9.7789 
                                 40.4579C9.82641 40.056 9.8074 40.0178 9.32275 39.482C6.29132 36.1909 4.41924 32.3352 3.68751 27.8578C3.41193
                                  26.2218 3.44044 22.7201 3.73503 21.1128C4.56178 16.5971 6.38635 12.9137 9.37027 9.76606C14.2358 4.64757 21.0494
                                   2.29402 28.0816 3.31772ZM15.2241 34.2391C14.5399 35.6647 13.3235 39.0802 13.428 39.262C13.4755 39.3481 13.8842 
                                   39.7403 14.3403 40.1421C14.8059 40.544 15.1956 40.9171 15.2146 40.9841C15.2431 41.051 15.1005 41.2615 14.901 
                                   41.4624C14.6919 41.6825 14.6159 41.7303 14.7109 41.5868C15.0815 41.0032 15.11 41.0797 14.1502 40.19C13.504
                                    39.5872 13.2475 39.2907 13.2475 39.128C13.2475 38.6305 15.129 33.8373 15.3286 33.8373C15.3761 33.8373 15.3286 
                                    34.0191 15.2241 34.2391Z"></path></svg>
        </div>
        <div className="header">
        <ul className="flex">
          <li><a href="">Docs</a></li>
          <li><a href="">About</a></li>
          <li><a href=""><span>support us</span></a></li>
        </ul>
      </div>
      </div>
      <div className="main-header">
      <h1>The Rick and Morty API</h1>
      </div>
      <div className="full">
        <div className="w-1140">
          <div className="flex">
            <Card1 img="https://rickandmortyapi.com/api/character/avatar/148.jpeg" title="Goddess Beth" subtitle="unknown - Mythological Creature" head="Last known location:" hedtitle="Nuptia 4" head1="First seen in:" hedtitle1="Big Trouble in Little Sanchez"/>
            <Card1 img="https://rickandmortyapi.com/api/character/avatar/354.jpeg" title="Toby Matthews" subtitle="Alive - Human" head="Last known location:" hedtitle="Earth (Replacement Dimension)" head1="First seen in:" hedtitle1="Big Trouble in Little Sanchez"/>
            <Card1 img="https://rickandmortyapi.com/api/character/avatar/421.jpeg" title="Snake Resistance Robot" subtitle="Alive - Alien" head="Last known location:" hedtitle="Pluto" head1="First seen in:" hedtitle1="Something Ricked This Way Comes"/>
            <Card1 img="https://rickandmortyapi.com/api/character/avatar/575.jpeg" title="Rich Plutonian" subtitle="Dead - Robot" head="Last known location:" hedtitle="Earth (Replacement Dimension)" head1="First seen in:" hedtitle1="Rattlestar Ricklactica"/>
            <Card1 img="https://rickandmortyapi.com/api/character/avatar/770.jpeg" title="Hothead Rick" subtitle="Dead - Human" head="Last known location:" hedtitle="Earth (Replacement Dimension)" head1="First seen in:" hedtitle1="Gotron Jerrysis Rickvangelion"/>
            <Card1 img="https://rickandmortyapi.com/api/character/avatar/787.jpeg" title="Two Crows" subtitle="Alive - Animal" head="Last known location:" hedtitle="Rick and Two Crows Planet" head1="First seen in:" hedtitle1="Forgetting Sarick Mortshall"/>
          </div>
        </div>
      </div>
      <div className="full1  ">
        <div className="footer text-center">
         <div className="nums">
         <ul className="flex just-center" >
            <li><span>characters:826</span></li>
            <li><span>locations:126</span></li>
            <li><span>episodes:51</span></li>
          </ul>
         </div>
        <div className="server">
        <a href=""><span>server status</span></a>
        </div>
        <div className="logo">
          <a href=""><svg width="93" height="34" viewBox="0 0 93 34" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.6162 12.0244C23.7871 12.1102 23.9295 12.2246 24.0435 12.3532C24.0577 12.3675 24.0577 12.3675 24.072 12.3675H24.0862L27.3623 10.9521C27.3765 10.9378 27.3908 10.9235 27.3908 10.9092C27.3908 10.8949 27.3908 10.8806 27.3765 10.8663L24.3141 7.79226C24.2999 7.77796 24.2856 7.77796 24.2856 7.77796H24.2714C24.2572 7.77796 24.2429 7.79226 24.2429 7.82086L23.5735 11.9815C23.5877 11.9958 23.6019 12.0244 23.6162 12.0244ZM16.8219 9.23633C16.9786 9.47939 17.0783 9.76535 17.1068 10.0513C17.1068 10.0656 17.121 10.0799 17.1353 10.0942L22.0066 12.196H22.0209C22.0351 12.196 22.0494 12.196 22.0494 12.1817C22.1918 12.0673 22.3627 11.9815 22.5479 11.9243C22.5621 11.9243 22.5764 11.91 22.5764 11.8814L23.374 6.86291C23.374 6.84861 23.374 6.83431 23.3598 6.82002L20.3116 3.74601C20.2974 3.73171 20.2974 3.73171 20.2831 3.73171C20.2689 3.73171 20.2547 3.74601 20.2547 3.7603L16.8219 9.16484C16.8077 9.19344 16.8077 9.22204 16.8219 9.23633ZM33.4586 16.9714L28.2312 11.7098C28.2169 11.6955 28.2027 11.6955 28.2027 11.6955H28.1884L24.6417 13.2254C24.6275 13.2397 24.6132 13.254 24.6132 13.2683C24.6132 13.2826 24.6275 13.3112 24.6417 13.3112L33.3874 17.0715H33.4017C33.4159 17.0715 33.4301 17.0715 33.4301 17.0572L33.4586 17.0286C33.4871 17.0286 33.4871 16.9857 33.4586 16.9714ZM32.5898 17.8293L24.2002 14.2262H24.1859C24.1717 14.2262 24.1574 14.2262 24.1432 14.2405C23.9153 14.5551 23.5735 14.7553 23.1746 14.8124C23.1604 14.8124 23.1319 14.8267 23.1319 14.8553L22.2345 20.4458C22.2345 20.4601 22.2345 20.4743 22.2488 20.4886C22.5621 20.7317 22.7473 21.0892 22.79 21.4895C22.79 21.5181 22.8043 21.5324 22.8328 21.5324L27.9036 22.6047H27.9178C27.932 22.6047 27.9463 22.6047 27.9463 22.5904L32.5898 17.9151C32.604 17.9008 32.604 17.8865 32.604 17.8722C32.604 17.8579 32.604 17.8436 32.5898 17.8293ZM21.4796 13.0538L16.8931 11.0807H16.8789C16.8646 11.0807 16.8504 11.095 16.8361 11.1093C16.5228 11.5955 15.9958 11.8814 15.426 11.8814C15.3405 11.8814 15.2551 11.8671 15.1554 11.8528H15.1411C15.1269 11.8528 15.1126 11.8671 15.0984 11.8814L11.3238 17.815C11.3096 17.8293 11.3096 17.8579 11.3238 17.8722C11.338 17.8865 11.3523 17.8865 11.3665 17.8865H11.3808L21.4511 13.5257C21.4654 13.5114 21.4796 13.4971 21.4796 13.4828V13.4256V13.3541C21.4796 13.2683 21.4939 13.1825 21.5081 13.111C21.5081 13.0824 21.4939 13.0681 21.4796 13.0538ZM27.0062 23.434L22.5479 22.5046H22.5337C22.5194 22.5046 22.5052 22.5189 22.4909 22.5189C22.32 22.7334 22.1063 22.905 21.85 23.005C21.8357 23.005 21.8215 23.0336 21.8215 23.0479L20.7532 29.7107C20.7532 29.7393 20.7674 29.7536 20.7817 29.7679H20.8102C20.8244 29.7679 20.8386 29.7679 20.8386 29.7536L27.0204 23.5341C27.0347 23.5198 27.0347 23.5055 27.0347 23.4912C27.0347 23.4483 27.0204 23.434 27.0062 23.434ZM20.7817 22.9764C20.3544 22.8049 20.041 22.4188 19.927 21.9756C19.927 21.9613 19.9128 21.947 19.8843 21.9327L11.6229 20.2027C11.6229 20.2027 11.6229 20.2027 11.6087 20.2027C11.5944 20.2027 11.5802 20.217 11.5659 20.2313C11.5232 20.3028 11.4947 20.36 11.452 20.4172C11.4378 20.4315 11.4378 20.4601 11.452 20.4743L18.9727 31.5122C18.987 31.5265 18.987 31.5265 19.0012 31.5265C19.0154 31.5265 19.0297 31.5265 19.0297 31.5122L19.4855 31.0547C19.4855 31.0404 19.4997 31.0404 19.4997 31.0261L20.7817 23.0193C20.8102 23.0193 20.8102 22.9907 20.7817 22.9764ZM11.7938 19.1876C11.7938 19.2161 11.8081 19.2304 11.8366 19.2304L20.0268 20.9462H20.041C20.0552 20.9462 20.0695 20.9319 20.0837 20.9176C20.3259 20.4886 20.7532 20.2027 21.2375 20.1741C21.266 20.1741 21.2802 20.1598 21.2802 20.1312L22.1633 14.6266C22.1633 14.6123 22.1633 14.5837 22.1348 14.5837C22.0779 14.5408 22.0209 14.4979 21.9497 14.4264C21.9354 14.4121 21.9212 14.4121 21.9212 14.4121H21.9069L11.7796 18.8015C11.7511 18.8158 11.7511 18.8301 11.7511 18.8587C11.7654 18.9731 11.7938 19.0732 11.7938 19.1876ZM8.3611 20.5744C8.31837 20.5172 8.27563 20.46 8.2329 20.3886C8.21866 20.3743 8.20442 20.36 8.19017 20.36H8.17593L4.64347 21.8898C4.62923 21.8898 4.61498 21.9041 4.61498 21.9184C4.61498 21.9327 4.61498 21.947 4.62923 21.9613L6.35273 23.6913C6.36697 23.7056 6.38121 23.7056 6.38121 23.7056C6.39546 23.7056 6.4097 23.6913 6.42394 23.677L8.37534 20.603C8.37534 20.603 8.37534 20.5887 8.3611 20.5744ZM10.6971 21.132C10.6828 21.1177 10.6686 21.1034 10.6543 21.1034H10.6401C10.3837 21.2178 10.1273 21.275 9.85669 21.275C9.64304 21.275 9.44362 21.2464 9.22997 21.1749H9.21572C9.20148 21.1749 9.18724 21.1892 9.17299 21.2035L7.12189 24.4348L7.10765 24.4491C7.0934 24.4634 7.0934 24.492 7.10765 24.5063L16.537 33.9857C16.5513 34 16.5655 34 16.5655 34C16.5798 34 16.594 34 16.594 33.9857L18.2463 32.3129C18.2605 32.2986 18.2605 32.27 18.2463 32.2557L10.6971 21.132ZM9.37241 17.4003C9.38665 17.4146 9.40089 17.4289 9.41514 17.4289H9.42938C9.57182 17.4003 9.7285 17.3717 9.87094 17.3717C10.0276 17.3717 10.1985 17.4003 10.3552 17.4432H10.3695C10.3837 17.4432 10.398 17.4289 10.4122 17.4146L14.2295 11.4096C14.2438 11.3953 14.2438 11.3667 14.2295 11.3524C13.9304 11.0378 13.7595 10.6232 13.7595 10.18C13.7595 10.0513 13.7737 9.92262 13.8022 9.79394C13.8022 9.76535 13.788 9.75105 13.7737 9.73675C13.2894 9.52229 9.00207 7.69218 9.00207 7.67788H8.98782C8.97358 7.67788 8.95934 7.67788 8.95934 7.69218L5.32717 11.3524C5.31293 11.3667 5.31293 11.3953 5.32717 11.4096L9.37241 17.4003ZM9.78548 6.9344C9.78548 6.9344 14.1156 8.7931 14.3008 8.87889H14.315C14.3292 8.87889 14.3292 8.87889 14.3435 8.86459C14.6426 8.62153 15.0272 8.47855 15.4118 8.47855C15.5969 8.47855 15.7821 8.50715 15.9673 8.56434H15.9815C15.9958 8.56434 16.01 8.55004 16.0243 8.53574L19.5425 3.00252C19.5567 2.98823 19.5567 2.95963 19.5425 2.94533L16.6225 0.0142977C16.6082 0 16.6082 0 16.594 0C16.5798 0 16.5655 0 16.5655 0.0142977L9.78548 6.84861C9.77123 6.86291 9.77123 6.87721 9.77123 6.89151C9.75699 6.9201 9.77123 6.9201 9.78548 6.9344ZM8.10471 18.4441C8.11895 18.4441 8.1332 18.4298 8.14744 18.4155C8.2329 18.2439 8.3611 18.0866 8.48929 17.9436C8.50353 17.9294 8.50353 17.9008 8.48929 17.8865C8.44656 17.8293 4.5865 12.1674 4.5865 12.1531C4.57225 12.1388 4.57225 12.1388 4.54377 12.1245C4.52952 12.1245 4.51528 12.1245 4.51528 12.1388L0.0142438 16.6569C0 16.6712 0 16.6854 0 16.6997C0 16.714 0.0142438 16.7283 0.0427313 16.7283L8.10471 18.4441C8.09047 18.4441 8.09047 18.4441 8.10471 18.4441ZM7.73437 19.4306C7.73437 19.402 7.72013 19.3877 7.69164 19.3877L0.697945 17.9151C0.697945 17.9151 0.697945 17.9151 0.683701 17.9151C0.669458 17.9151 0.655214 17.9294 0.64097 17.9436C0.626726 17.9579 0.64097 17.9865 0.655214 18.0008L3.7746 21.1463C3.78885 21.1606 3.80309 21.1606 3.80309 21.1606H3.81733L7.69164 19.4878C7.72013 19.4592 7.73437 19.4449 7.73437 19.4306Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M67.5019 14.765H69.7772V29.3121H67.5019V14.765ZM44.2222 18.8694C42.9992 18.8694 42.0179 19.3301 41.2642 20.2376L41.1931 19.0509H39.06V29.2981H41.3353V22.0106C41.7904 21.173 42.473 20.7541 43.3832 20.7541C44.0089 20.7541 44.464 20.9077 44.7484 21.2288C45.0328 21.5359 45.1608 22.0246 45.1608 22.6667V29.2981H47.4361V22.5271C47.4077 20.098 46.3411 18.8694 44.2222 18.8694ZM54.0489 18.8694C53.1814 18.8694 52.3992 19.0928 51.6882 19.5395C50.9771 19.9863 50.4367 20.6145 50.0386 21.4242C49.6546 22.234 49.4555 23.1414 49.4555 24.1606V24.4398C49.4555 25.9615 49.9106 27.19 50.8065 28.1114C51.7024 29.0328 52.8685 29.4936 54.3191 29.4936C55.1581 29.4936 55.926 29.326 56.6086 28.991C57.2912 28.6559 57.8316 28.1812 58.2298 27.567L57.0068 26.3803C56.3527 27.2319 55.4994 27.6647 54.4613 27.6647C53.7218 27.6647 53.0961 27.4134 52.6125 26.9248C52.1148 26.4362 51.8446 25.766 51.7735 24.9144H58.4005V23.993C58.4005 22.3596 58.0165 21.1031 57.277 20.2097C56.4949 19.3162 55.4283 18.8694 54.0489 18.8694ZM56.1251 23.2252H51.7877C51.8873 22.4294 52.1433 21.8151 52.5272 21.3824C52.9112 20.9356 53.4231 20.7262 54.0489 20.7262C54.6746 20.7262 55.1723 20.9217 55.5278 21.3126C55.8834 21.7035 56.0825 22.2898 56.1393 23.0577V23.2252H56.1251ZM63.52 27.3296C63.3636 27.1621 63.2925 26.8689 63.2925 26.478V20.7541H65.0843V19.0509H63.2925V16.5659H61.0171V19.0509H59.3533V20.7541H61.0171V26.5618C61.0171 28.5163 61.8988 29.4936 63.648 29.4936C64.1315 29.4936 64.6292 29.4238 65.1554 29.2702V27.4832C64.8852 27.553 64.615 27.5809 64.359 27.5809C63.9466 27.5949 63.6764 27.5111 63.52 27.3296ZM73.304 19.0649H75.5793V29.3121H73.304V19.0649ZM88.492 26.0173L86.3446 19.0649H83.8844L87.4538 29.2562L87.1268 30.1357C86.9561 30.6383 86.7286 30.9874 86.4299 31.1968C86.1455 31.4062 85.7047 31.5179 85.1358 31.5179L84.7092 31.4899V33.2769C85.1074 33.3886 85.4771 33.4444 85.8042 33.4444C87.2832 33.4444 88.3355 32.5789 88.9613 30.8617L93 19.0649H90.5682L88.492 26.0173ZM80.0447 15.4909C79.419 16.1052 79.1061 16.9847 79.1061 18.1295V19.0649H77.5561V20.7681H79.1061V29.3121H81.3815V20.7681H83.4435V19.0649H81.3815V18.1574C81.3815 17.0266 81.9219 16.4682 83.0169 16.4682C83.344 16.4682 83.6426 16.4961 83.8844 16.538L83.9413 14.737C83.4862 14.6254 83.0738 14.5695 82.6614 14.5695C81.5521 14.5556 80.6704 14.8767 80.0447 15.4909ZM75.5793 14.5556V16.5659H73.304V14.5556H75.5793Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39 10.7088V5.08117H40.9326C41.6206 5.08117 42.1875 5.30084 42.6332 5.74018C43.079 6.17952 43.3019 6.74318 43.3019 7.43118V8.36268C43.3019 9.05326 43.079 9.61692 42.6332 10.0537C42.1875 10.4905 41.6206 10.7088 40.9326 10.7088H39ZM40.1286 5.95083V9.84304H40.8746C41.2792 9.84304 41.5961 9.70647 41.8254 9.43333C42.0548 9.16019 42.1694 8.80331 42.1694 8.36268V7.42345C42.1694 6.98798 42.0548 6.63367 41.8254 6.36053C41.5961 6.08739 41.2792 5.95083 40.8746 5.95083H40.1286ZM48.6358 8.23513H46.3051V9.84304H49.0301V10.7088H45.1765V5.08117H49.0223V5.95083H46.3051V7.36547H48.6358V8.23513ZM51.84 8.66803V10.7088H50.7114V5.08117H52.9532C53.6 5.08117 54.1089 5.24608 54.4799 5.57591C54.851 5.90574 55.0365 6.33992 55.0365 6.87846C55.0365 7.41701 54.851 7.84991 54.4799 8.17716C54.1089 8.50441 53.6 8.66803 52.9532 8.66803H51.84ZM51.84 7.79837H52.9532C53.2676 7.79837 53.5059 7.71269 53.6683 7.54134C53.8306 7.36998 53.9118 7.1516 53.9118 6.8862C53.9118 6.61563 53.8312 6.3921 53.6702 6.21559C53.5091 6.03908 53.2701 5.95083 52.9532 5.95083H51.84V7.79837ZM57.9856 9.84304H60.4903V10.7088H56.857V5.08117H57.9856V9.84304ZM66.4271 8.40133C66.4271 9.09191 66.2088 9.66266 65.772 10.1136C65.3352 10.5645 64.7677 10.79 64.0694 10.79C63.3762 10.79 62.8132 10.5645 62.3803 10.1136C61.9474 9.66266 61.731 9.09191 61.731 8.40133V7.38867C61.731 6.70066 61.9468 6.13056 62.3784 5.67833C62.81 5.22611 63.3724 5 64.0655 5C64.7638 5 65.332 5.22611 65.7701 5.67833C66.2081 6.13056 66.4271 6.70066 66.4271 7.38867V8.40133ZM65.2985 7.38093C65.2985 6.94288 65.189 6.58343 64.97 6.30256C64.7509 6.02169 64.4495 5.88126 64.0655 5.88126C63.6816 5.88126 63.384 6.02104 63.1727 6.30062C62.9614 6.5802 62.8557 6.94031 62.8557 7.38093V8.40133C62.8557 8.84712 62.9627 9.21044 63.1765 9.49131C63.3904 9.77218 63.688 9.91261 64.0694 9.91261C64.4559 9.91261 64.7574 9.77218 64.9738 9.49131C65.1903 9.21044 65.2985 8.84712 65.2985 8.40133V7.38093ZM70.0642 7.67469H70.0874L71.3166 5.08117H72.5534L70.6208 8.72987V10.7088H69.4961V8.6719L67.5983 5.08117H68.8351L70.0642 7.67469ZM77.0524 9.24007C77.0524 9.02362 76.9758 8.84969 76.8225 8.71828C76.6691 8.58686 76.4005 8.46318 76.0166 8.34722C75.3466 8.15396 74.8403 7.92463 74.4976 7.65923C74.1549 7.39382 73.9835 7.0305 73.9835 6.56925C73.9835 6.10801 74.18 5.73116 74.5729 5.43869C74.9659 5.14623 75.4677 5 76.0784 5C76.6968 5 77.2006 5.16427 77.5897 5.49281C77.9788 5.82135 78.1669 6.22654 78.154 6.7084L78.1463 6.73159H77.0524C77.0524 6.47133 76.9655 6.26068 76.7915 6.09964C76.6176 5.93859 76.3735 5.85806 76.0591 5.85806C75.7576 5.85806 75.5244 5.92506 75.3595 6.05905C75.1946 6.19305 75.1121 6.3644 75.1121 6.57312C75.1121 6.7638 75.2004 6.92034 75.3769 7.04273C75.5534 7.16513 75.8581 7.29461 76.291 7.43118C76.912 7.60383 77.3823 7.83187 77.7018 8.11531C78.0213 8.39876 78.1811 8.7711 78.1811 9.23234C78.1811 9.7142 77.991 10.0943 77.611 10.3726C77.2309 10.6509 76.7291 10.79 76.1055 10.79C75.4922 10.79 74.9575 10.6322 74.5014 10.3165C74.0453 10.0009 73.8237 9.55831 73.8366 8.98884L73.8444 8.96565H74.9421C74.9421 9.30063 75.0445 9.54606 75.2493 9.70196C75.4542 9.85786 75.7396 9.9358 76.1055 9.9358C76.4121 9.9358 76.6466 9.87267 76.8089 9.74641C76.9713 9.62015 77.0524 9.45137 77.0524 9.24007ZM82.9855 10.7088V5.08117H84.8871C85.5493 5.08117 86.066 5.21001 86.437 5.46768C86.8081 5.72536 86.9936 6.11058 86.9936 6.62336C86.9936 6.88362 86.9247 7.11617 86.7868 7.32102C86.649 7.52588 86.4486 7.67984 86.1858 7.78291C86.5233 7.85506 86.7765 8.00966 86.9453 8.24673C87.1141 8.48379 87.1985 8.75822 87.1985 9.07001C87.1985 9.60855 87.0207 10.0163 86.6651 10.2933C86.3095 10.5703 85.8057 10.7088 85.1538 10.7088H82.9855ZM84.1141 8.21967V9.84304H85.1538C85.4527 9.84304 85.6807 9.77797 85.8379 9.64785C85.9951 9.51772 86.0737 9.32511 86.0737 9.07001C86.0737 8.79429 86.0067 8.58364 85.8727 8.43805C85.7387 8.29247 85.5274 8.21967 85.2388 8.21967H84.1141ZM84.1141 7.43891H84.9258C85.2272 7.43891 85.4591 7.37707 85.6215 7.25338C85.7838 7.1297 85.865 6.94933 85.865 6.71226C85.865 6.45201 85.7832 6.26004 85.6196 6.13636C85.4559 6.01267 85.2118 5.95083 84.8871 5.95083H84.1141V7.43891ZM90.5109 7.67469H90.5341L91.7632 5.08117H93.0001L91.0675 8.72987V10.7088H89.9427V8.6719L88.0449 5.08117H89.2818L90.5109 7.67469Z" fill="#BCBCBC"></path></svg></a>
          <a href=""><svg width="109" height="36" viewBox="0 0 109 36" fill="none"><g opacity="0.6"><path d="M46 3.6C46.5045 3.59388 47.0016 3.72229 47.44 3.972C47.872 4.212 48.212 4.54 48.46 4.956C48.716 5.372 48.844 5.836 48.844 6.348C48.844 6.86 48.72 7.328 48.472 7.752C48.2223 8.16959 47.8662 8.51332 47.44 8.748C47.008 8.988 46.528 9.108 46 9.108H44.392V12H43V3.6H46ZM45.976 7.776C46.1685 7.78124 46.36 7.74783 46.5393 7.67775C46.7186 7.60767 46.8821 7.50235 47.02 7.368C47.308 7.096 47.452 6.756 47.452 6.348C47.452 5.94 47.308 5.604 47.02 5.34C46.8821 5.20566 46.7186 5.10033 46.5393 5.03025C46.36 4.96017 46.1685 4.92676 45.976 4.932H44.392V7.776H45.976ZM52.492 12.144C51.948 12.144 51.444 12.004 50.98 11.724C50.5231 11.435 50.1472 11.0344 49.888 10.56C49.6161 10.0723 49.4755 9.52236 49.48 8.964C49.48 8.38 49.616 7.848 49.888 7.368C50.1454 6.89538 50.5218 6.49825 50.98 6.216C51.4327 5.93124 51.9572 5.78139 52.492 5.784C53.036 5.784 53.536 5.928 53.992 6.216C54.456 6.496 54.824 6.88 55.096 7.368C55.3698 7.85493 55.5105 8.4054 55.504 8.964C55.504 9.54 55.368 10.072 55.096 10.56C54.8346 11.0368 54.4543 11.4378 53.992 11.724C53.536 12.004 53.036 12.144 52.492 12.144ZM52.492 10.92C52.804 10.92 53.088 10.836 53.344 10.668C53.608 10.5 53.816 10.268 53.968 9.972C54.12 9.676 54.196 9.34 54.196 8.964C54.196 8.588 54.12 8.252 53.968 7.956C53.8267 7.67188 53.6111 7.43136 53.344 7.26C53.0914 7.09302 52.7948 7.00527 52.492 7.008C52.18 7.008 51.892 7.092 51.628 7.26C51.372 7.428 51.168 7.66 51.016 7.956C50.8601 8.2688 50.7819 8.61456 50.788 8.964C50.788 9.34 50.864 9.676 51.016 9.972C51.168 10.268 51.372 10.5 51.628 10.668C51.892 10.836 52.18 10.92 52.492 10.92ZM62.024 10.056L63.296 5.928H64.604L62.6 12H61.508L60.272 8.148L59.06 12H57.968L55.964 5.928H57.32L58.58 10.032L59.888 5.928H60.716L62.024 10.056V10.056ZM70.935 8.832C70.935 9.088 70.911 9.304 70.863 9.48H66.363C66.443 9.936 66.635 10.296 66.939 10.56C67.243 10.824 67.611 10.956 68.043 10.956C68.355 10.956 68.619 10.896 68.835 10.776C69.051 10.656 69.223 10.504 69.351 10.32H70.719C70.599 10.624 70.411 10.916 70.155 11.196C69.8963 11.484 69.582 11.7167 69.231 11.88C68.871 12.056 68.479 12.144 68.055 12.144C67.503 12.144 66.995 12.004 66.531 11.724C66.075 11.444 65.711 11.064 65.439 10.584C65.1726 10.086 65.0363 9.52875 65.043 8.964C65.043 8.38 65.179 7.848 65.451 7.368C65.7084 6.89538 66.0848 6.49825 66.543 6.216C66.9918 5.93237 67.5121 5.78251 68.043 5.784C68.579 5.784 69.067 5.92 69.507 6.192C69.947 6.456 70.295 6.82 70.551 7.284C70.807 7.748 70.935 8.264 70.935 8.832V8.832ZM68.043 6.972C67.627 6.972 67.263 7.112 66.951 7.392C66.639 7.664 66.443 8.028 66.363 8.484H69.651C69.579 8.036 69.395 7.672 69.099 7.392C68.9592 7.25605 68.794 7.14898 68.6128 7.07691C68.4316 7.00484 68.238 6.96919 68.043 6.972V6.972ZM72.106 12V5.928H73.09L73.33 6.6H73.39C73.518 6.416 73.714 6.236 73.978 6.06C74.242 5.876 74.546 5.784 74.89 5.784C75.09 5.784 75.258 5.8 75.394 5.832V7.152C75.2161 7.1176 75.0352 7.10152 74.854 7.104C74.43 7.104 74.086 7.24 73.822 7.512C73.558 7.784 73.426 8.16 73.426 8.64V12H72.106ZM81.599 8.832C81.599 9.088 81.575 9.304 81.527 9.48H77.027C77.107 9.936 77.299 10.296 77.603 10.56C77.907 10.824 78.275 10.956 78.707 10.956C79.019 10.956 79.283 10.896 79.499 10.776C79.715 10.656 79.887 10.504 80.015 10.32H81.383C81.263 10.624 81.075 10.916 80.819 11.196C80.5603 11.484 80.246 11.7167 79.895 11.88C79.535 12.056 79.143 12.144 78.719 12.144C78.167 12.144 77.659 12.004 77.195 11.724C76.739 11.444 76.375 11.064 76.103 10.584C75.8365 10.086 75.7003 9.52875 75.707 8.964C75.707 8.38 75.843 7.848 76.115 7.368C76.3724 6.89538 76.7488 6.49825 77.207 6.216C77.6558 5.93237 78.1761 5.78251 78.707 5.784C79.243 5.784 79.731 5.92 80.171 6.192C80.611 6.456 80.959 6.82 81.215 7.284C81.471 7.748 81.599 8.264 81.599 8.832V8.832ZM78.707 6.972C78.291 6.972 77.927 7.112 77.615 7.392C77.303 7.664 77.107 8.028 77.027 8.484H80.315C80.243 8.036 80.059 7.672 79.763 7.392C79.6232 7.25605 79.458 7.14898 79.2768 7.07691C79.0956 7.00484 78.902 6.96919 78.707 6.972V6.972ZM85.218 12.144C84.722 12.144 84.258 12.008 83.826 11.736C83.3951 11.4484 83.0441 11.0561 82.806 10.596C82.5461 10.0917 82.4142 9.53126 82.422 8.964C82.422 8.364 82.55 7.824 82.806 7.344C83.0397 6.88082 83.3915 6.48756 83.826 6.204C84.258 5.924 84.722 5.784 85.218 5.784C85.498 5.784 85.758 5.832 85.998 5.928C86.246 6.016 86.45 6.124 86.61 6.252C86.77 6.372 86.878 6.476 86.934 6.564H86.994V3.6H88.314V12H87.33L87.09 11.316H87.03C86.902 11.492 86.674 11.676 86.346 11.868C86.0004 12.0564 85.6116 12.1515 85.218 12.144V12.144ZM85.362 10.92C85.658 10.92 85.93 10.84 86.178 10.68C86.426 10.512 86.622 10.28 86.766 9.984C86.918 9.68 86.994 9.34 86.994 8.964C86.994 8.588 86.918 8.252 86.766 7.956C86.6399 7.673 86.436 7.43164 86.178 7.26C85.9382 7.09455 85.6534 7.0066 85.362 7.008C85.066 7.008 84.794 7.092 84.546 7.26C84.298 7.42 84.098 7.652 83.946 7.956C83.7978 8.27105 83.7239 8.6159 83.73 8.964C83.73 9.34 83.802 9.68 83.946 9.984C84.098 10.28 84.298 10.512 84.546 10.68C84.794 10.84 85.066 10.92 85.362 10.92ZM96.027 12.144C95.6295 12.1525 95.2366 12.0574 94.887 11.868C94.567 11.676 94.343 11.492 94.215 11.316H94.155L93.915 12H92.931V3.6H94.251V6.564H94.311C94.367 6.476 94.475 6.372 94.635 6.252C94.795 6.124 94.995 6.016 95.235 5.928C95.483 5.832 95.747 5.784 96.027 5.784C96.523 5.784 96.983 5.924 97.407 6.204C97.839 6.476 98.183 6.856 98.439 7.344C98.695 7.824 98.823 8.364 98.823 8.964C98.823 9.564 98.695 10.108 98.439 10.596C98.183 11.076 97.839 11.456 97.407 11.736C96.9968 12.0039 96.517 12.1458 96.027 12.144V12.144ZM95.883 10.92C96.179 10.92 96.451 10.84 96.699 10.68C96.947 10.512 97.143 10.28 97.287 9.984C97.439 9.68 97.515 9.34 97.515 8.964C97.515 8.588 97.439 8.252 97.287 7.956C97.1609 7.673 96.9569 7.43164 96.699 7.26C96.4592 7.09455 96.1744 7.0066 95.883 7.008C95.587 7.008 95.315 7.092 95.067 7.26C94.819 7.42 94.619 7.652 94.467 7.956C94.3188 8.27105 94.2449 8.6159 94.251 8.964C94.251 9.34 94.323 9.68 94.467 9.984C94.619 10.28 94.819 10.512 95.067 10.68C95.315 10.84 95.587 10.92 95.883 10.92ZM103.755 5.928H105.111L102.591 12.336C102.311 13.032 102.019 13.52 101.715 13.8C101.577 13.9351 101.414 14.0418 101.235 14.1139C101.056 14.1859 100.864 14.222 100.671 14.22C100.431 14.22 100.215 14.18 100.023 14.1V12.9C100.151 12.9593 100.29 12.9881 100.431 12.984C100.663 12.984 100.855 12.924 101.007 12.804C101.167 12.692 101.299 12.5 101.403 12.228L101.547 11.844L99.159 5.928H100.575L102.195 10.236L103.755 5.928Z" fill="white"></path></g><path d="M48.12 32.24C51.24 32.24 52.96 30.52 52.96 28.24C52.96 23.2 45.64 24.76 45.64 21.72C45.64 20.66 46.46 19.86 47.96 19.86C49.44 19.86 50.36 20.82 50.44 22.18H52.76C52.64 19.7 50.82 17.76 47.96 17.76C45.04 17.76 43.32 19.46 43.32 21.68C43.32 26.66 50.64 25.2 50.64 28.3C50.64 29.32 49.82 30.14 48.14 30.14C46.42 30.14 45.46 29.14 45.32 27.7H43C43.12 30.32 45.02 32.24 48.12 32.24ZM58.729 32.24C59.269 32.24 59.669 32.14 59.929 32.04V30.04C59.729 30.14 59.489 30.18 59.229 30.18C58.329 30.18 57.729 29.66 57.729 28.54V23.86H59.929V21.88H57.729V19.28H55.829V20.8C55.829 21.58 55.409 22 54.609 22H53.889V23.86H55.549V28.72C55.549 30.94 56.889 32.24 58.729 32.24V32.24ZM70.945 26.72C70.945 23.84 68.825 21.64 66.125 21.64C63.405 21.64 61.125 23.98 61.125 26.94C61.125 29.94 63.345 32.24 66.145 32.24C68.365 32.24 70.025 30.66 70.585 29.2H68.305C67.945 29.72 67.265 30.26 66.125 30.26C64.685 30.26 63.605 29.34 63.325 27.8H70.825C70.885 27.58 70.945 27.2 70.945 26.72ZM66.125 23.62C67.485 23.62 68.565 24.64 68.805 26.14H63.325C63.605 24.6 64.745 23.62 66.125 23.62ZM75.196 32V18H72.996V32H75.196ZM80.137 32V18H77.937V32H80.137ZM86.579 21.64C84.139 21.64 82.759 23.26 82.579 24.96H84.779C84.899 24.3 85.459 23.62 86.559 23.62C87.699 23.62 88.439 24.36 88.439 25.58V25.92H86.819C84.039 25.92 82.119 27.2 82.119 29.22C82.119 30.88 83.539 32.24 85.519 32.24C87.139 32.24 88.079 31.38 88.479 30.86H88.579L88.979 32H90.619V25.76C90.619 23.3 89.059 21.64 86.579 21.64V21.64ZM85.979 30.38C84.879 30.38 84.319 29.82 84.319 29.04C84.319 28.12 85.119 27.5 86.839 27.5H88.439V28.14C88.439 29.34 87.479 30.38 85.979 30.38ZM96.736 32.24C97.276 32.24 97.676 32.14 97.936 32.04V30.04C97.736 30.14 97.496 30.18 97.236 30.18C96.336 30.18 95.736 29.66 95.736 28.54V23.86H97.936V21.88H95.736V19.28H93.836V20.8C93.836 21.58 93.416 22 92.616 22H91.896V23.86H93.556V28.72C93.556 30.94 94.896 32.24 96.736 32.24V32.24ZM108.952 26.72C108.952 23.84 106.832 21.64 104.132 21.64C101.412 21.64 99.132 23.98 99.132 26.94C99.132 29.94 101.352 32.24 104.152 32.24C106.372 32.24 108.032 30.66 108.592 29.2H106.312C105.952 29.72 105.272 30.26 104.132 30.26C102.692 30.26 101.612 29.34 101.332 27.8H108.832C108.892 27.58 108.952 27.2 108.952 26.72ZM104.132 23.62C105.492 23.62 106.572 24.64 106.812 26.14H101.332C101.612 24.6 102.752 23.62 104.132 23.62Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.208 28.318L30.233 28.303C30.79 27.9659 31.1969 27.4285 31.3704 26.801C31.5438 26.1734 31.4707 25.5033 31.166 24.928L28.26 19.392L6.382 30.98L14.208 35.519C14.7524 35.8347 15.3706 36.001 16 36.001C16.6294 36.001 17.2476 35.8347 17.792 35.519L30.208 28.319V28.318ZM3.94 22.347L21.494 2.628L17.792 0.481996C17.2475 0.166353 16.6293 0.00012207 16 0.00012207C15.3707 0.00012207 14.7525 0.166353 14.208 0.481996L1.792 7.68199C1.247 7.99799 0.795 8.452 0.48 9C0.165408 9.54772 -9.32025e-05 10.1684 3.93769e-08 10.8V13.5C3.93769e-08 15.17 0.35 16.821 1.03 18.345C1.70813 19.868 2.69968 21.231 3.94 22.345V22.347V22.347Z" fill="white" fill-opacity="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.208 7.682L29.789 7.439L19.773 16.689L28.173 24.002C29.498 25.154 29.989 26.835 29.476 28.745L30.208 28.322C30.7537 28.0036 31.2064 27.5477 31.5209 26.9997C31.8353 26.4517 32.0005 25.8308 32 25.199V10.799C31.9996 10.1682 31.8339 9.54849 31.5195 9.00161C31.2051 8.45474 30.7529 7.99976 30.208 7.682V7.682ZM15.57 20.638L3.996 11.668C2.692 10.653 2.103 9.133 2.371 7.347L1.792 7.682C1.247 7.998 0.795 8.452 0.48 9C0.165408 9.54773 -9.32025e-05 10.1684 3.93769e-08 10.8V25.2C3.93769e-08 25.833 0.164 26.455 0.479 27.003C0.793009 27.5508 1.2459 28.0061 1.792 28.323L5.107 30.245L15.57 20.638Z" fill="white"></path></svg></a>        
        </div>
        <div className="logo2">
          <ul className="flex just-center">
            <li><a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="footer-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
            <li><a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="footer-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li>
            <li><a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" class="footer-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"></path></svg></a></li>
          </ul>
        </div>
        <div className="footer-end">
          <span>by <a href="">Axel Fuhrmann</a></span>
          <span>2024</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main