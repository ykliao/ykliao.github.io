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
	        "maxpan": 261.9596541786744,
	        "maxtilt": 72.10374639769451,
	        "minpan": 0,
	        "mintilt": -76.87608069164266
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":33087,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":517,"width":58178},{"height":16544,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":517,"width":29089},{"height":8272,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":517,"width":14545},{"height":4136,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":517,"width":7273},{"height":2068,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":517,"width":3637},{"height":1034,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":517,"width":1819},{"height":517,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":517,"width":910}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}