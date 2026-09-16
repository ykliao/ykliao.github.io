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
	        "maxpan": 116.06633243347476,
	        "maxtilt": 9.390305302499316,
	        "minpan": 0,
	        "mintilt": -28.588466661425162
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":45265,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":708,"width":138333},{"height":22633,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":708,"width":69167},{"height":11317,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":708,"width":34584},{"height":5659,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":708,"width":17292},{"height":2830,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":708,"width":8646},{"height":1415,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":708,"width":4323},{"height":708,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":708,"width":2162}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}