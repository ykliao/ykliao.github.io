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
	        "maxpan": 95.27407822795453,
	        "maxtilt": 17.721155194167956,
	        "minpan": 0,
	        "mintilt": -17.039814944623576
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":51804,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":810,"width":141985},{"height":25902,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":810,"width":70993},{"height":12951,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":810,"width":35497},{"height":6476,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":810,"width":17749},{"height":3238,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":810,"width":8875},{"height":1619,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":810,"width":4438},{"height":810,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":810,"width":2219}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}