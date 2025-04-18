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
	        "maxpan": 196.82333873581854,
	        "maxtilt": 79.25445705024313,
	        "minpan": 0,
	        "mintilt": -71.57212317666125
	    },
	"id": "cygnus",
	"image":{"baseindex":1,"bitmap":[{"height":33507,"src":"cygnus_tiles/cygnus_t_1_%0y_%0x.jpg","tilesize":524,"width":43726},{"height":16754,"src":"cygnus_tiles/cygnus_t_2_%0y_%0x.jpg","tilesize":524,"width":21863},{"height":8377,"src":"cygnus_tiles/cygnus_t_3_%0y_%0x.jpg","tilesize":524,"width":10932},{"height":4189,"src":"cygnus_tiles/cygnus_t_4_%0y_%0x.jpg","tilesize":524,"width":5466},{"height":2095,"src":"cygnus_tiles/cygnus_t_5_%0y_%0x.jpg","tilesize":524,"width":2733},{"height":1048,"src":"cygnus_tiles/cygnus_t_6_%0y_%0x.jpg","tilesize":524,"width":1367},{"height":524,"src":"cygnus_tiles/cygnus_t_7_%0y_%0x.jpg","tilesize":524,"width":684}],"multilevel":true,"preview":{"src":"cygnus_tiles/cygnus_preview.jpg"},"projection":"planar"},
	"view": {
	        "mode": "fitInWindow"
	    }
},
"version": "4.2"
}
}