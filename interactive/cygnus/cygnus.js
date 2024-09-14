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
	        "maxpan": 125.2512155591572,
	        "maxtilt": 46.87196110210695,
	        "minpan": 0,
	        "mintilt": -43.95461912479741
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":20177,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":631,"width":27825},{"height":10089,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":631,"width":13913},{"height":5045,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":631,"width":6957},{"height":2523,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":631,"width":3479},{"height":1262,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":631,"width":1740},{"height":631,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":631,"width":870}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}