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
	        "maxpan": 258.81522561129316,
	        "maxtilt": 64.86520221479249,
	        "minpan": 0,
	        "mintilt": -73.07278618954331
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":30644,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":480,"width":57498},{"height":15322,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":480,"width":28749},{"height":7661,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":480,"width":14375},{"height":3831,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":480,"width":7188},{"height":1916,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":480,"width":3594},{"height":958,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":480,"width":1797},{"height":479,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":480,"width":899}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}