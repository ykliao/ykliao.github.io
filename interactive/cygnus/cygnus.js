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
	        "maxpan": 116.05288073780552,
	        "maxtilt": 35.60692211101482,
	        "minpan": 0,
	        "mintilt": -3.0867486036843554
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":46132,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":721,"width":138361},{"height":23066,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":721,"width":69181},{"height":11533,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":721,"width":34591},{"height":5767,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":721,"width":17296},{"height":2884,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":721,"width":8648},{"height":1442,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":721,"width":4324},{"height":721,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":721,"width":2162}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}