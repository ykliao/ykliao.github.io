PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "cygnus_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 138.77268798617115,
	        "maxtilt": 69.29008491104142,
	        "minpan": 0,
	        "mintilt": -43.47636115463075
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":25052,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":480,"width":30829},{"height":12526,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":480,"width":15415},{"height":6263,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":480,"width":7708},{"height":3132,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":480,"width":3854},{"height":1566,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":480,"width":1927},{"height":783,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":480,"width":964},{"height":392,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":480,"width":482}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}