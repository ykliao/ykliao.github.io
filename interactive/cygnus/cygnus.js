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
	        "maxpan": 185.1067279113753,
	        "maxtilt": 67.05655593448081,
	        "minpan": 0,
	        "mintilt": -40.6224497396613
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":23914,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":480,"width":41110},{"height":11957,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":480,"width":20555},{"height":5979,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":480,"width":10278},{"height":2990,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":480,"width":5139},{"height":1495,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":480,"width":2570},{"height":748,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":480,"width":1285},{"height":374,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":480,"width":643}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}