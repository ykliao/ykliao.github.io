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
	        "maxpan": 207.70028818443802,
	        "maxtilt": 59.34293948126801,
	        "minpan": 0,
	        "mintilt": -71.27377521613835
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":29008,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":480,"width":46127},{"height":14504,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":480,"width":23064},{"height":7252,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":480,"width":11532},{"height":3626,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":480,"width":5766},{"height":1813,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":480,"width":2883},{"height":907,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":480,"width":1442},{"height":454,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":480,"width":721}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}