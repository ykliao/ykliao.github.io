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
	        "maxpan": 114.28771880590735,
	        "maxtilt": 13.790578653622065,
	        "minpan": 0,
	        "mintilt": -22.55544490038255
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":43319,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":677,"width":136213},{"height":21660,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":677,"width":68107},{"height":10830,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":677,"width":34054},{"height":5415,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":677,"width":17027},{"height":2708,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":677,"width":8514},{"height":1354,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":677,"width":4257},{"height":677,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":677,"width":2129}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}