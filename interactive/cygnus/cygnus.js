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
	        "maxpan": 95.32454787606903,
	        "maxtilt": 17.746390018225146,
	        "minpan": 0,
	        "mintilt": -17.052432356652186
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":51860,"src":"cygnus_tiles/cygnus_t_1_%000y_%000x.jpg","tilesize":811,"width":142060},{"height":25930,"src":"cygnus_tiles/cygnus_t_2_%000y_%000x.jpg","tilesize":811,"width":71030},{"height":12965,"src":"cygnus_tiles/cygnus_t_3_%000y_%000x.jpg","tilesize":811,"width":35515},{"height":6483,"src":"cygnus_tiles/cygnus_t_4_%000y_%000x.jpg","tilesize":811,"width":17758},{"height":3242,"src":"cygnus_tiles/cygnus_t_5_%000y_%000x.jpg","tilesize":811,"width":8879},{"height":1621,"src":"cygnus_tiles/cygnus_t_6_%000y_%000x.jpg","tilesize":811,"width":4440},{"height":811,"src":"cygnus_tiles/cygnus_t_7_%000y_%000x.jpg","tilesize":811,"width":2220}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}