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
	        "maxpan": 224.54624027657735,
	        "maxtilt": 81.62909143442126,
	        "minpan": 0,
	        "mintilt": -82.0656871218669
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":36366,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":569,"width":49885},{"height":18183,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":569,"width":24943},{"height":9092,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":569,"width":12472},{"height":4546,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":569,"width":6236},{"height":2273,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":569,"width":3118},{"height":1137,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":569,"width":1559},{"height":569,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":569,"width":780}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}