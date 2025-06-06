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
	        "maxpan": 249.23076923076923,
	        "maxtilt": 83.77922132913555,
	        "minpan": 0,
	        "mintilt": -80.92480553154711
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":36590,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":572,"width":55368},{"height":18295,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":572,"width":27684},{"height":9148,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":572,"width":13842},{"height":4574,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":572,"width":6921},{"height":2287,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":572,"width":3461},{"height":1144,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":572,"width":1731},{"height":572,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":572,"width":866}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}