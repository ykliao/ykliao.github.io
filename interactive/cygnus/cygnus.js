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
	        "maxpan": 67.2688383183141,
	        "maxtilt": -4.873107026209001,
	        "minpan": 0,
	        "mintilt": -30.650142496016272
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":58085,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":908,"width":151581},{"height":29043,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":908,"width":75791},{"height":14522,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":908,"width":37896},{"height":7261,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":908,"width":18948},{"height":3631,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":908,"width":9474},{"height":1816,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":908,"width":4737},{"height":908,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":908,"width":2369}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}