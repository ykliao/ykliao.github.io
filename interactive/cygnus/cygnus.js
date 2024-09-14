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
	        "maxpan": 124.1486603284356,
	        "maxtilt": 58.91218718787282,
	        "minpan": 0,
	        "mintilt": -50.84414875996004
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":24384,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":480,"width":27581},{"height":12192,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":480,"width":13791},{"height":6096,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":480,"width":6896},{"height":3048,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":480,"width":3448},{"height":1524,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":480,"width":1724},{"height":762,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":480,"width":862},{"height":381,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":480,"width":431}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}