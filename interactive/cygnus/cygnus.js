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
	        "maxpan": 125.51443505104012,
	        "maxtilt": 36.964617589005016,
	        "minpan": 0,
	        "mintilt": -8.878211769350033
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":54637,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":854,"width":149593},{"height":27319,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":854,"width":74797},{"height":13660,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":854,"width":37399},{"height":6830,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":854,"width":18700},{"height":3415,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":854,"width":9350},{"height":1708,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":854,"width":4675},{"height":854,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":854,"width":2338}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}