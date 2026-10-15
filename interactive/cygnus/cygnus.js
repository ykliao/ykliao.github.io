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
	        "maxpan": 105.59787422497786,
	        "maxtilt": 24.918069087688224,
	        "minpan": 0,
	        "mintilt": -16.348538529672265
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":56276,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":880,"width":144006},{"height":28138,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":880,"width":72003},{"height":14069,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":880,"width":36002},{"height":7035,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":880,"width":18001},{"height":3518,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":880,"width":9001},{"height":1759,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":880,"width":4501},{"height":880,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":880,"width":2251}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}