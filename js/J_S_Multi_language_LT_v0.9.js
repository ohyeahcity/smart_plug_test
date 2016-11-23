//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======
function chg_lang(lang_index){

        forceChangeLangSetCookie();
        auto_chg_lang(lang_index);
}
// 切換語系
function auto_chg_lang(lang_index){
      //寫入Cookie
      setCookie('lang_code',lang_index,'365');
      var xck= getCookie('lang_code');
			//更改標題文字
      changeWebTitle(lang_index);
      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      changeImageByLang(lang_index);

      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
          console.log("wording changed! done.");
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
		}

    // 設定cookie 並將 forceChangeLang_index 值填上1,cookie一小時後失效
    function   forceChangeLangSetCookie(){
      //寫入Cookie
      setCookie('forceChangeLang_index',1,'0.1');
      var xcka= getCookie('forceChangeLang_index');
    }

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;
}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){
  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];
  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';
  return;
}

//控制圖片中的語系
function changeImageByLang(lang_index){
    if(lang_index==0){
          // document.getElementById('slideshowImage1').src = "images/slider_example_1.jpg" ;
          // document.getElementById('slideshowImage2').src = "images/slider_example_2.jpg" ;
          // document.getElementById('lang_pic_cause').src = "images/come_img01.jpg" ;
          // document.getElementById('lang_comeright').src = "images/PM_info.png" ;
          document.getElementById('lang_timeswitch_img').src = "images/timeswitch.jpg" ;
          document.getElementById('lang_blue_img').src = "images/group_bg.jpg" ;
          // document.getElementById('lang_blue_img_min').src = "images/bluetooth_bg_min.jpg" ;
          console.log("image is cht");
        } else {
          // document.getElementById('slideshowImage1').src = "images/slider_example_1_eng.jpg" ;
          // document.getElementById('slideshowImage2').src = "images/slider_example_2_eng.jpg" ;
          // document.getElementById('lang_pic_cause').src = "images/come_img01_eng.jpg" ;
          // document.getElementById('lang_comeright').src = "images/PM_info_eng.png" ;
          document.getElementById('lang_timeswitch_img').src = "images/timeswitch_eng.jpg" ;
          document.getElementById('lang_blue_img').src = "images/group_bg_eng.jpg" ;
          // document.getElementById('lang_blue_img_min').src = "images/bluetooth_bg_min_eng.jpg" ;
          console.log("english image now");
        }
  return;
}

// 根據語系更改所有文字
function changeAllNavBarUIWording(arr,lang_index){
  document.getElementById('lang_navproduct').innerHTML = arr[lang_index].lang_navproduct;
  document.getElementById('lang_navscenario').innerHTML = arr[lang_index].lang_navscenario;
  document.getElementById('lang_navspec').innerHTML = arr[lang_index].lang_navspec;
  document.getElementById('lang_navload').innerHTML = arr[lang_index].lang_navload;
  document.getElementById('lang_navch').innerHTML = arr[lang_index].lang_navch;
  document.getElementById('lang_naven').innerHTML = arr[lang_index].lang_naven;
  document.getElementById('lang_navshop').innerHTML = arr[lang_index].lang_navshop;
  document.getElementById('lang_comeright_cont').innerHTML = arr[lang_index].lang_comeright_cont;
  document.getElementById('lang_cause_cont01').innerHTML = arr[lang_index].lang_cause_cont01;
  document.getElementById('lang_cause_cont02').innerHTML = arr[lang_index].lang_cause_cont02;
  document.getElementById('lang_deep_title').innerHTML = arr[lang_index].lang_deep_title;
  document.getElementById('lang_deep_cont01').innerHTML = arr[lang_index].lang_deep_cont01;
  document.getElementById('lang_deep_cont02').innerHTML = arr[lang_index].lang_deep_cont02;
  document.getElementById('lang_deep_cont03').innerHTML = arr[lang_index].lang_deep_cont03;
  document.getElementById('lang_feature_title').innerHTML = arr[lang_index].lang_feature_title;
  document.getElementById('lang_feature_cont01').innerHTML = arr[lang_index].lang_feature_cont01;
  document.getElementById('lang_feature_cont02').innerHTML = arr[lang_index].lang_feature_cont02;
  document.getElementById('lang_feature_cont03').innerHTML = arr[lang_index].lang_feature_cont03;
  document.getElementById('lang_feature_cont04').innerHTML = arr[lang_index].lang_feature_cont04;
  document.getElementById('lang_feature_cont04_1').innerHTML = arr[lang_index].lang_feature_cont04_1;
  document.getElementById('lang_feature_cont05').innerHTML = arr[lang_index].lang_feature_cont05;
  document.getElementById('lang_feature_cont06').innerHTML = arr[lang_index].lang_feature_cont06;
  // document.getElementById('lang_vent_title').innerHTML = arr[lang_index].lang_vent_title;
  // document.getElementById('lang_light_title').innerHTML = arr[lang_index].lang_light_title;
  // document.getElementById('lang_download_title').innerHTML = arr[lang_index].lang_download_title;
  // document.getElementById('lang_bl_title').innerHTML = arr[lang_index].lang_bl_title;
  // document.getElementById('lang_bl_text').innerHTML = arr[lang_index].lang_bl_text;
  document.getElementById('lang_download_text01').innerHTML = arr[lang_index].lang_download_text01;
  document.getElementById('lang_iphone_title').innerHTML = arr[lang_index].lang_iphone_title;
  document.getElementById('lang_iphone_text').innerHTML = arr[lang_index].lang_iphone_text;
  document.getElementById('lang_download_text02').innerHTML = arr[lang_index].lang_download_text02;
  document.getElementById('lang_win_title').innerHTML = arr[lang_index].lang_win_title;
  document.getElementById('lang_win_text01').innerHTML = arr[lang_index].lang_win_text01;
  document.getElementById('lang_win_text02').innerHTML = arr[lang_index].lang_win_text02;
  document.getElementById('lang_download_text03').innerHTML = arr[lang_index].lang_download_text03;
  document.getElementById('lang_spec_title').innerHTML = arr[lang_index].lang_spec_title;
  document.getElementById('lang_spec_title01').innerHTML = arr[lang_index].lang_spec_title01;
  document.getElementById('lang_spec_text01').innerHTML = arr[lang_index].lang_spec_text01;
  document.getElementById('lang_spec_title02').innerHTML = arr[lang_index].lang_spec_title02;
  document.getElementById('lang_spec_text02').innerHTML = arr[lang_index].lang_spec_text02;
  document.getElementById('lang_spec_title03a').innerHTML = arr[lang_index].lang_spec_title03a;
  document.getElementById('lang_spec_text03').innerHTML = arr[lang_index].lang_spec_text03;
  document.getElementById('lang_spec_text03_1').innerHTML = arr[lang_index].lang_spec_text03_1;
  document.getElementById('lang_spec_title04').innerHTML = arr[lang_index].lang_spec_title04;
  document.getElementById('lang_spec_text04').innerHTML = arr[lang_index].lang_spec_text04;
  document.getElementById('lang_spec_title05').innerHTML = arr[lang_index].lang_spec_title05;
  document.getElementById('lang_spec_text05').innerHTML = arr[lang_index].lang_spec_text05;
  document.getElementById('lang_spec_title06').innerHTML = arr[lang_index].lang_spec_title06;
  document.getElementById('lang_spec_text06').innerHTML = arr[lang_index].lang_spec_text06;
  return;
}
function detectUserLang(){
    var IsforceChangeLang_index= getCookie('forceChangeLang_index');
    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();

  if (IsforceChangeLang_index!=1){
    switch (currentBrowserLang) {
      case "zh-tw":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-cn":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-hk":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "ja":
            auto_chg_lang(1);
            autolang_index=1;
        break;

      default:
            auto_chg_lang(1);
            autolang_index=1;
        break;
    }
    setCookie('lang_code',autolang_index,'365');
  } else {
    var Previous_Lang_index= getCookie('lang_code');
    auto_chg_lang(Previous_Lang_index);
  }
}


//設定cookie的function
function setCookie(cookieName, cookieValue, exdays) {
  if (document.cookie.indexOf(cookieName) >= 0) {
    var expD = new Date();
    expD.setTime(expD.getTime() + (-1*24*60*60*1000));
    var uexpires = "expires="+expD.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + uexpires+"; "+ 'path=/';
  }
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires+"; "+ 'path=/';
}

// 讀取cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}



//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - Smart Led Light網站";
Multi_Lang_Title[1]="Welcome to EQL - Smart Led Light";
Multi_Lang_Title[2]="EQLへようこそ - Smart Led Light";


//=====文字儲存區 END======
