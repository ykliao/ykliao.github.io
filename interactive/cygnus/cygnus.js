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
	        "maxpan": 106.0286947065633,
	        "maxtilt": 20.597371731220637,
	        "minpan": 0,
	        "mintilt": -20.850382957707705
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":52486,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":821,"width":134267},{"height":26243,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":821,"width":67134},{"height":13122,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":821,"width":33567},{"height":6561,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":821,"width":16784},{"height":3281,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":821,"width":8392},{"height":1641,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":821,"width":4196},{"height":821,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":821,"width":2098}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}