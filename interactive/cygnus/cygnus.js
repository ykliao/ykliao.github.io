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
	        "maxpan": 119.94108777220602,
	        "maxtilt": 25.078167463513708,
	        "minpan": 0,
	        "mintilt": -13.96904877813837
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":46553,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":728,"width":142996},{"height":23277,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":728,"width":71498},{"height":11639,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":728,"width":35749},{"height":5820,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":728,"width":17875},{"height":2910,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":728,"width":8938},{"height":1455,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":728,"width":4469},{"height":728,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":728,"width":2235}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}