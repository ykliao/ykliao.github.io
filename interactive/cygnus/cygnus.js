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
	        "maxpan": 63.60812090185493,
	        "maxtilt": 1.2114892831290733,
	        "minpan": 0,
	        "mintilt": -19.629956094617718
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":46963,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":734,"width":143332},{"height":23482,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":734,"width":71666},{"height":11741,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":734,"width":35833},{"height":5871,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":734,"width":17917},{"height":2936,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":734,"width":8959},{"height":1468,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":734,"width":4480},{"height":734,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":734,"width":2240}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}