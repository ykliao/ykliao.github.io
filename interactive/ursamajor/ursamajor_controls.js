PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"actions": [
        {
            "func": function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan,0,100,1.0,0,'easeInOutQuad',true); this.tween({'time': 1.0, 'lp': 0.0, 'transition': 'easeInOutQuad', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); },
            "id": "leaveLittlePlanet"
        },
        {
            "func": function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan+90,90,150,1.0,0,'easeInOutQuad',true); this.tween({'time': 1.0, 'lp': 1.0, 'transition': 'easeInOutQuad', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); },
            "id": "enterLittlePlanet"
        },
        {
            "func": function(a){ var id = this.viewer.currentMBId; if (!!id&&(a.id!=id)){this.viewer.action('hideMessage');} if (a.id!=id){ var s=this.viewer.get('globalData'); if (s&&s.messageBoxStyle){ a.style = s.messageBoxStyle; }this.viewer.currentMBId=null; if (!this.viewer.isVRModeEnabled()){ this.viewer.add('textbox',a); this.viewer.currentMBId=a.id; } } },
            "id": "showMessage"
        },
        {
            "func": function(){ if (this.viewer.currentMBId) this.viewer.remove(this.viewer.currentMBId); this.viewer.currentMBId=null; },
            "id": "hideMessage"
        },
        {
            "func": function(a){ var id = this.viewer.currentMBId; if (a.id!=id){ this.viewer.action('showMessage',a); } else { this.viewer.action('hideMessage'); } },
            "id": "toggleMessage"
        }
    ],
"button": [
        {
            "align": "leftbottom",
            "height": 24,
            "id": "showTbButton",
            "onclick": function(){ if (!this.allowClick) return; this.allowClick = false; var tb = this.get('toolbar'); tb.setVisible(true); tb.style = 'transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 0deg ); background: rgba(0,0,0,0.5); transition: transform 500ms;'; tb.updateStyles(); var tt = this; setTimeout(function(){tt.setVisible(false); tt.get('hideTbButton').allowClick=true;},500); this.style = 'transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 90deg ); transition: transform 500ms;'; this.updateStyles(); },
            "oninit": function(){ this.setVisible(false); this.allowClick = false; },
            "skin": "shadow(4,0,0,rgba(0,0,0,1));shadow(3,0,0,rgba(0,0,0,1));comp(1.0);copy(defaultSkin,128,192,64,64,0,0,24,24)",
            "style": "transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective(800px) rotateX(90deg); transition: transform 500ms; ",
            "styleactive": " background-color:rgba(255, 255, 255, 0.25); box-shadow: 0px 0px 9px 8px rgba(255, 255, 255, 0.25); ",
            "stylehover": " background-color:rgba(255, 255, 255, 0.15); box-shadow: 0px 0px 9px 8px rgba(255, 255, 255, 0.15); ",
            "width": 24,
            "xoff": 0,
            "yoff": 0
        }
    ],
"buttonBox": [
        {
            "align": "bottom",
            "button": [
                {
                    "align": "left",
                    "id": "hideTbButton",
                    "index": 1,
                    "onclick": function(){ if (!this.allowClick) return; this.allowClick = false; var tb = this.get('toolbar'); tb.style = 'transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 90deg ); background: rgba(0,0,0,0.5); transition: transform 500ms;', tb.updateStyles(); var tt = this; var tbb = this.get('showTbButton'); setTimeout(function(){tb.setVisible(false); tbb.allowClick=true;},501); var tbb = this.get('showTbButton');  tbb.setVisible(true); tbb.style ='transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 90deg ); transition: transform 500ms;'; tbb.updateStyles();  tbb.tween({'delay': 0.01, 'time': 0.01, 'onComplete': function(a){ a.style ='transform-origin: 50% 100% 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 0deg ); transition: transform 500ms;'; a.updateStyles(); } },true);},
                    "oninit": function(){ this.allowClick = true; },
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,0,0,28,28);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "infobutton",
                    "index": 5,
                    "onclick": function(){ var d=this.viewer.get('localData'); d&&(d=d.infoTextBox); if(!d){ var d=this.viewer.get('globalData'); d&&(d=d.infoTextBox); } if (!!d){this.viewer.action('toggleMessage',d);} },
                    "onscenechanged": function(){ var d=this.viewer.get('localData'); var g=this.viewer.get('globalData'); var o=d&&d.infoTextBox||g&&g.infoTextBox; this.setVisible(!!o); },
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,0,0,28,28);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 7,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,0,0,28,28);",
                    "type": 1,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 8,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,0,0,28,28);",
                    "type": 2,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 9,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,0,0,28,28)",
                    "type": 3,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 10,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,0,0,28,28)",
                    "type": 4,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 11,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,0,0,28,28)",
                    "type": 5,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 12,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,0,0,28,28)",
                    "type": 6,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "playbutton",
                    "index": 13,
                    "onclick": function(){ if (this.viewer.isPlaying()) this.viewer.stopAutoPlay(); else this.viewer.startAutoPlay(); },
                    "priority": 1,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "skinhover": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,0,64,64,0,0,28,28)",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "fullscreenButton",
                    "index": 16,
                    "onclick": function(){ this.viewer.toggleFullscreen();  } ,
                    "oninit": function(){ if (!this.viewer.fullscreenSupported()) this.viewer.remove('fullscreenButton');  } ,
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,0,0,28,28);",
                    "xoff": 8,
                    "yoff": 0
                }
            ],
            "buttonheight": 28,
            "buttonstyle": "border-radius: 50%; background-color: rgba(255,255,255,0.0); transition: background-color 150ms,box-shadow 150ms;",
            "buttonstyleactive": "background-color: rgba(255,255,255,0.25);box-shadow: 0px 0px 9px 8px rgba(255,255,255,0.25);",
            "buttonstylehover": "background-color: rgba(255,255,255,0.15);box-shadow: 0px 0px 9px 8px rgba(255,255,255,0.15);",
            "buttonwidth": 28,
            "height": "48px",
            "hidestyle": "",
            "id": "toolbar",
            "onresize": function() { var cmp = this.viewer.get('compass'); if (!!cmp && ('onresize' in cmp)) cmp.onresize(); },
            "spacing": 8,
            "style": "max-width: 100%;transform-origin: 50                                                                                                   % 0px; transform: translate(0px,0px) translateZ(10000px) perspective( 800px ) rotateX( 0deg ); background: rgba(0,0,0,0.5); transition: transform 500ms;",
            "visible": true,
            "width": "500px",
            "yoff": 0
        }
    ],
"contextmenu": {
        "id": "menu",
        "items": [
            {
                "id": "fullscreenItem",
                "onclick": function(){ this.viewer.toggleFullscreen(); },
                "oninit": function(){ this.caption = this.viewer.tr('Fullscreen'); if (!this.viewer.fullscreenSupported()) this.visible = false;  } 
            },
            {
                "caption": "-"
            },
            {
                "id": "normalView",
                "onclick": function(){  if (this.viewer.fisheyeDistortion()!=0.0){ this.viewer.action('leaveLittlePlanet'); } },
                "oninit": function(){  this.caption = this.viewer.tr('Normal View'); }
            },
            {
                "id": "littlePlanetView",
                "onclick": function(){ if (this.viewer.fisheyeDistortion()!=1.0){ this.viewer.action('enterLittlePlanet'); } },
                "oninit": function(){  this.caption = this.viewer.tr('LittlePlanet View'); }
            },
            {
                "caption": "-"
            },
            {
                "onclick": function(){ window.open('http://www.tshsoft.com','_blank'); },
                "oninit": function(){  this.caption = this.viewer.tr('About PanoramaStudio...'); }
            }
        ],
        "onshow": function(){ var view1 = this.getItem('normalView'); if (view1){ view1.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular()) ? true : false; } var view2 = this.getItem('littlePlanetView'); if (view2){ view2.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular())?true:false; }  this.update(); },
        "style": "background-color: rgba(255,255,255,0.8); box-shadow: 4px 4px 4px rgba(0,0,0,0.5); border-radius: 3px;"
    },
"events": {
        "id": "mainEvents",
        "onexit": function(){ this.viewer.action('hideMessage'); },
        "ongyroscopeavailable": function(available){ this.viewer.gyroAvailable = available; var o = this.get('gyrobutton'); if(!!o){ o.setVisible(available&&this.viewer.panoType()==0); } } ,
        "ongyroscopetoggle": function(enabled){ this.viewer.action('updateGyroButton'); },
        "oninit": function(){ var g = this.viewer.gallery(); this.viewer.hasGallery = ((!!g) && g.length>1);  },
        "onplay": function(){ var o = this.get('playbutton'); if (!!o){ o.sbackup = o.skin; o.shbackup = o.skinhover; o.sabackup = o.skinactive; o.skin = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.skinhover = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.skinactive = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,0,0,28,28)'; o.updateSkins(); } } ,
        "onresize": function(){ this.viewer.action('resizeMap');  },
        "onscenechanged": function(){},
        "onstartaudio": function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.playskin; o.skinhover = o.playskinhover; o.skinactive = o.playskinactive; o.updateSkins(); }} } ,
        "onstop": function(){ var o = this.get('playbutton'); if (!!o){ o.skin = o.sbackup; o.skinhover = o.shbackup; o.skinactive = o.sabackup; o.updateSkins(); } } ,
        "onstopaudio": function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.pauseskin; o.skinhover = o.pauseskinhover; o.skinactive = o.pauseskinactive; o.updateSkins(); }} } ,
        "onuseswebgl": function(available){ this.viewer.webglAvailable = available; if (available){ var vr = this.get('vrButton'); vr&&vr.setVisible(true); } } 
    },
"settings": {
        "safeareamargin": "-8 -8 -8 -8"
    },
"translate": {
        "de": {
            "About PanoramaStudio...": "&Uuml;ber PanoramaStudio...",
            "Fullscreen": "Vollbild",
            "LittlePlanet View": "LittlePlanet-Ansicht",
            "Normal View": "Normale Ansicht"
        }
    }
}
}